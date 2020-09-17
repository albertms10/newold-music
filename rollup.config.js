import alias from "@rollup/plugin-alias";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import path from "path";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import config from "sapper/config/rollup";
import autoPreprocess from "svelte-preprocess";
import pkg from "./package.json";

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  (warning.code === "MISSING_EXPORT" && /'preload'/.test(warning.message)) ||
  (warning.code === "CIRCULAR_DEPENDENCY" &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  warning.code === "THIS_IS_UNDEFINED" ||
  onwarn(warning);

const aliases = alias({
  resolve: [".svelte", ".ts"],
  entries: {
    components: path.resolve(__dirname, "src/components"),
    database: path.resolve(__dirname, "src/database"),
    modules: path.resolve(__dirname, "src/modules"),
    public: path.resolve(__dirname, "src/public"),
    routes: path.resolve(__dirname, "src/routes"),
    services: path.resolve(__dirname, "src/services"),
  },
});

export default {
  client: {
    input: config.client.input().replace(/\.js$/, ".ts"),
    output: config.client.output(),
    plugins: [
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      svelte({
        hydratable: true,
        emitCss: true,
        preprocess: autoPreprocess(),
        dev,
      }),
      aliases,
      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),
      json(),
      typescript({
        objectHashIgnoreUnknownHack: true,
      }),

      legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
          babelHelpers: "runtime",
          exclude: ["node_modules/@babel/**"],
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "> 0.25%, not dead",
              },
            ],
          ],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            [
              "@babel/plugin-transform-runtime",
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev && terser({ module: true }),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: config.server.input().server.replace(/\.js$/, ".ts"),
    output: config.server.output(),
    plugins: [
      replace({
        "process.browser": false,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      svelte({
        generate: "ssr",
        hydratable: true,
        preprocess: autoPreprocess(),
        dev,
      }),
      aliases,
      resolve({
        dedupe: ["svelte"],
      }),
      commonjs(),
      json(),
      typescript({
        objectHashIgnoreUnknownHack: true,
      }),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require("module").builtinModules
    ),

    preserveEntrySignatures: "strict",
    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input().replace(/\.js$/, ".ts"),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      commonjs(),
      typescript({
        objectHashIgnoreUnknownHack: true,
      }),
      !dev && terser(),
      aliases,
    ],

    preserveEntrySignatures: false,
    onwarn,
  },
};

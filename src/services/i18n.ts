import type { ServerResponse } from "http";
import type { Next, Request } from "polka";
import {
  getLocaleFromNavigator,
  init,
  locale as $locale,
  register,
} from "svelte-i18n";
import { getCookie, setCookie } from "../modules/cookie.js";

const INIT_OPTIONS = {
  fallbackLocale: "en",
  initialLocale: null,
  loadingDelay: 200,
  formats: {},
  warnOnMissingMessages: true,
};

let currentLocale: string = null;

register("ca-ES", () => import("../public/lang/ca-ES.json"));
register("en", () => import("../public/lang/en.json"));

$locale.subscribe((value: string) => {
  if (!value) return;

  currentLocale = value;

  if (typeof window !== "undefined") setCookie("locale", value);
});

export const startClient = () => {
  init({
    ...INIT_OPTIONS,
    initialLocale: getCookie("locale") || getLocaleFromNavigator(),
  });
};

export const i18nMiddleware = () => {
  const DOCUMENT_REGEX = /^([^.?#@]+)?([?#](.+)?)?$/;

  init(INIT_OPTIONS);

  return (req: Request, res: ServerResponse, next: Next) => {
    const isDocument = DOCUMENT_REGEX.test(req.originalUrl);

    if (!isDocument) return next();

    let locale = getCookie("locale", req.headers.cookie);

    if (!locale) {
      if (req.headers["accept-language"]) {
        const headerLang = req.headers["accept-language"].split(",")[0].trim();

        if (headerLang.length > 1) locale = headerLang;
      } else {
        locale = INIT_OPTIONS.initialLocale || INIT_OPTIONS.fallbackLocale;
      }
    } else if (locale !== currentLocale) {
      $locale.set(locale);
    }

    next();
  };
};

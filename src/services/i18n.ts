import { getCookie, setCookie } from "modules/cookie";
import type { RequestHandler } from "sirv";
import {
  getLocaleFromNavigator,
  init,
  locale as $locale,
  register,
} from "svelte-i18n";
import type { ConfigureOptions } from "svelte-i18n/types/runtime/types";

const INIT_OPTIONS: ConfigureOptions = {
  fallbackLocale: "en",
  loadingDelay: 200,
  formats: {
    number: {
      EUR: { style: "currency", currency: "EUR" },
      "EUR-int": {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      },
    },
  },
  warnOnMissingMessages: true,
};

let currentLocale: string = null;

register("ca", () => import("../public/lang/ca.json"));
register("de", () => import("../public/lang/de.json"));
register("en", () => import("../public/lang/en.json"));
register("es", () => import("../public/lang/es.json"));
register("fr", () => import("../public/lang/fr.json"));

$locale.subscribe((locale: string) => {
  if (!locale) return;

  currentLocale = locale;

  if (typeof window !== "undefined") setCookie("locale", locale);
});

export const startI18nClient = () => {
  init({
    ...INIT_OPTIONS,
    initialLocale: getCookie("locale") || getLocaleFromNavigator(),
  });
};

export const i18nMiddleware = (): RequestHandler => {
  const DOCUMENT_REGEX = /^([^.?#@]+)?([?#](.+)?)?$/;

  init(INIT_OPTIONS);

  return (req, res, next?) => {
    const isDocument = DOCUMENT_REGEX.test(req.url);

    if (!isDocument) return next();

    let locale = getCookie("locale", req.headers.cookie);

    if (!locale) {
      if (req.headers["accept-language"]) {
        const headerLang = req.headers["accept-language"].split(",")[0].trim();

        if (headerLang.length > 1) locale = headerLang;
      } else {
        locale = INIT_OPTIONS.initialLocale || INIT_OPTIONS.fallbackLocale;
      }
    }

    if (locale !== currentLocale) $locale.set(locale);

    next();
  };
};

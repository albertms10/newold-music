import type { ServerResponse } from "http";
import type { Next, Request } from "polka";
import {
  getLocaleFromNavigator,
  init,
  locale as $locale,
  register,
} from "svelte-i18n";
import type { ConfigureOptions } from "svelte-i18n/types/runtime/types";
import { getCookie, setCookie } from "../modules/cookie.js";

const INIT_OPTIONS: ConfigureOptions = {
  fallbackLocale: "en",
  initialLocale: null,
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
register("it", () => import("../public/lang/it.json"));

$locale.subscribe((locale: string) => {
  if (!locale) return;

  currentLocale = locale;

  if (typeof window !== "undefined") setCookie("locale", locale);
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

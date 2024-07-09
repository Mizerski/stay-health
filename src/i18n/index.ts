import i18n, { TFunction } from "i18next";
import { initReactI18next } from "react-i18next";
import { SupportedLanguage, getLanguageResource } from "./languages";
import { DEFAULT_LANGUAGE_TAG } from "@/constants/default_language";

function getCurrentLanguageTag(): SupportedLanguage {
  return i18n.language as SupportedLanguage;
}

i18n.use(initReactI18next).init({
  resources: getLanguageResource(),
  fallbackLng: DEFAULT_LANGUAGE_TAG,
  lng: getCurrentLanguageTag(),
});

export type TranslateFunction = TFunction<"translation", undefined>;

export { i18n, getCurrentLanguageTag };

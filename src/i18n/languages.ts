import "intl-pluralrules";
import en from "./json/en.json";
import pt from "./json/pt.json";

interface Translation {
  [key: string]: string;
}

export type SupportedLanguage = "en" | "pt";

type LanguageResource = {
  [p in SupportedLanguage]: { translation: Translation };
};

function getLanguageResource(): LanguageResource {
  return {
    en: { translation: en.en },
    pt: { translation: pt.pt },
  };
}

function getLanguageResourceTag(): SupportedLanguage[] {
  return Object.keys(getLanguageResource()) as SupportedLanguage[];
}

export { getLanguageResource, getLanguageResourceTag };

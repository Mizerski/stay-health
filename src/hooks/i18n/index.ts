import "intl-pluralrules";
import { i18n } from "@/i18n/index";

import { useTranslation } from "react-i18next";

import { useEffect, useState } from "react";

import { getLanguageData } from "@/storage/languages/getLanguage";
import { setLanguageData } from "@/storage/languages/setLanguage";

export function useLanguage() {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    getLanguageData().then((storage) => {
      if (storage) {
        setLanguage(storage);
      }
    });
  }, []);

  const handleLaguageChange = async (value: string) => {
    setLanguage(value);
    await i18n.changeLanguage(value);
    setLanguageData(value);
  };

  return { t, language, handleLaguageChange };
}

export async function initializeLanguage() {
  const storage = await getLanguageData();
  if (storage) {
    await i18n.changeLanguage(storage);
  }
}

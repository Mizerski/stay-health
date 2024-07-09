import "intl-pluralrules";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { LANGUAGE_STORAGE } from "@/storage/storage_config";

export async function setLanguageData(value: string) {
  try {
    await AsyncStorage.setItem(LANGUAGE_STORAGE, value);
    console.debug("Language ->", value);
  } catch (error) {
    console.debug(error);
    throw new Error("Error setting language data");
  }
}

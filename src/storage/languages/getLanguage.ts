import "intl-pluralrules";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { LANGUAGE_STORAGE } from "../storage_config";

export async function getLanguageData(): Promise<string | null> {
  try {
    const storage = await AsyncStorage.getItem(LANGUAGE_STORAGE);

    return storage;
  } catch (error) {
    console.debug(error);
    throw new Error("Error getting language data");
  }
}

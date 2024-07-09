import AsyncStorage from "@react-native-async-storage/async-storage";

import { SNACKS } from "../storage_config";
import { SnackData } from "./snackData.dto";

export const deleteSnack = async (snackId: SnackData) => {
  try {
    const storage = await AsyncStorage.getItem(SNACKS);
    const filteredSnacks = JSON.parse(storage || "[]").filter(
      (snack: SnackData) => snack.snackName !== snackId.snackName
    );

    await AsyncStorage.setItem(SNACKS, JSON.stringify(filteredSnacks));
  } catch (error) {
    console.error(error);
    throw new Error("Error deleting snack");
  }
};

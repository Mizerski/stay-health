import AsyncStorage from "@react-native-async-storage/async-storage";

import { getSnack } from "./get_snack";
import { SnackData } from "./snackData.dto";
import { SNACKS } from "../storage_config";

export async function createSnack(newSnack: SnackData) {
  const snacks = await getSnack();

  if (snacks.some((snack) => snack.snackName === newSnack.snackName)) {
    throw new Error("Snack already exists");
  }

  try {
    const storage = JSON.stringify([...snacks, newSnack]);

    await AsyncStorage.setItem(SNACKS, storage);

    console.log("Snack created", newSnack, storage, snacks);
  } catch (error) {
    throw error;
  }
}

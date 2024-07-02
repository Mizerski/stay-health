import AsyncStorage from "@react-native-async-storage/async-storage";
import { SnackData } from "./snackData.dto";
import { SNACKS } from "../storage_config";

export async function getSnack(): Promise<SnackData[]> {
  try {
    const storage = await AsyncStorage.getItem(SNACKS);

    const snacks: SnackData[] = storage ? JSON.parse(storage) : [];

    return snacks;
  } catch (error) {
    throw error;
  }
}

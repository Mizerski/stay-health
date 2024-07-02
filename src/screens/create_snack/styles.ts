import { themes } from "@/themes/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.gray_7,
  },
  content: {
    padding: 24,
  },
  text: {
    textAlign: "center",
    fontFamily: themes.fonts.fontFamily.bold,
    fontSize: themes.fonts.fontSize.rg,
  },
  row: {
    width: "48%",
    gap: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

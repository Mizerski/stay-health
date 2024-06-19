import { themes } from "@/themes/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: "100%",
    padding: 24,
    borderRadius: 20,
    backgroundColor: themes.colors.gray_7,
  },
  text: {
    textAlign: "center",
    fontFamily: themes.fonts.fontFamily.bold,
    fontSize: themes.fonts.fontSize.rg,
  },
  inputRow: {
    width: "48%",
    gap: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

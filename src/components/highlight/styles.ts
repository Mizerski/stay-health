import { themes } from "@/themes/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,

    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: themes.colors.gray_1,
    fontSize: themes.fonts.fontSize.xxl,
    fontFamily: themes.fonts.fontFamily.bold,
  },
  description: {
    textAlign: "center",
    color: themes.colors.gray_2,
    fontSize: themes.fonts.fontSize.rg,
    fontFamily: themes.fonts.fontFamily.regular,
  },
});

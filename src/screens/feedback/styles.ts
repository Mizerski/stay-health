import { themes } from "@/themes/index";

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.white,
    padding: 26,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    marginVertical: 20,
  },
  title: {
    fontSize: themes.fonts.fontSize.xxl,
    fontFamily: themes.fonts.fontFamily.bold,
    color: themes.colors.green_dark,
    marginBottom: 10,
  },
  bold: {
    fontFamily: themes.fonts.fontFamily.bold,
  },
  description: {
    fontSize: themes.fonts.fontSize.md,
    color: themes.colors.gray_2,
    fontFamily: themes.fonts.fontFamily.regular,

    textAlign: "center",

    marginBottom: 20,
  },
});

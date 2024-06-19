import { StyleSheet } from "react-native";

import { themes } from "@/themes/index";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,

    borderColor: themes.colors.gray_5,
  },

  title: {
    marginBottom: 4,

    textAlign: "left",
    fontFamily: themes.fonts.fontFamily.bold,
    fontSize: themes.fonts.fontSize.rg,
  },
});

import { StyleSheet } from "react-native";

import { themes } from "@/themes/index";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    borderRadius: 8,
    borderWidth: 1,

    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    marginRight: 10,
  },
  text: {
    color: themes.colors.gray_7,
    fontSize: themes.fonts.fontSize.md,
    fontFamily: themes.fonts.fontFamily.bold,
  },
});

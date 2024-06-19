import { themes } from "@/themes/index";

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    padding: 14,
    marginVertical: 4,

    borderColor: themes.colors.gray_6,
    backgroundColor: themes.colors.white,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
  },

  date_text: {
    color: themes.colors.gray_1,
    fontSize: themes.fonts.fontSize.sm,
    fontFamily: themes.fonts.fontFamily.bold,

    marginRight: 12,
  },
  separator: {
    color: themes.colors.gray_2,
    fontSize: themes.fonts.fontSize.md,
    fontFamily: themes.fonts.fontFamily.regular,

    marginRight: 12,
  },
  text: {
    width: 240,
    color: themes.colors.gray_2,
    fontSize: themes.fonts.fontSize.md,
    fontFamily: themes.fonts.fontFamily.regular,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 50,
    marginRight: 12,
  },
});

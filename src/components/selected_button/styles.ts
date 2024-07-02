import { StyleSheet } from "react-native";
import { themes } from "@/themes/index";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    marginTop: 16,
    borderRadius: 6,
    borderWidth: 1,

    alignItems: "center",

    borderColor: themes.colors.gray_5,
    backgroundColor: themes.colors.gray_5,
  },
  selected: {
    width: "100%",
    padding: 16,
    marginTop: 16,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    fontFamily: themes.fonts.fontFamily.bold,
    fontSize: themes.fonts.fontSize.md,
    color: themes.colors.gray_1,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 50,
    marginRight: 12,
  },
});

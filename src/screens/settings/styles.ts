import { StyleSheet } from "react-native";
import { themes } from "@/themes/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: themes.colors.gray_7,
  },

  title: {
    fontFamily: themes.fonts.fontFamily.bold,
    fontSize: themes.fonts.fontSize.xl,
    color: themes.colors.gray_1,
  },
  option: {
    fontFamily: themes.fonts.fontFamily.regular,
    fontSize: themes.fonts.fontSize.lg,
    color: themes.colors.gray_2,

    marginBottom: 8,
  },
  select_language_colunm: {
    marginTop: 30,
    height: 160,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  language_button: {
    backgroundColor: themes.colors.gray_5,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  language_button_selected: {
    backgroundColor: themes.colors.gray_2,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  language_text: {
    color: themes.colors.gray_2,
  },
  language_text_selected: {
    color: themes.colors.gray_7,
  },
});

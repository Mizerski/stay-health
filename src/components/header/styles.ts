import { themes } from "@/themes/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,

    justifyContent: "center",
  },
  navigation: {
    position: "absolute",
    left: 24,
    top: 24,
  },
  navigation_alternative: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: themes.fonts.fontFamily.bold,
    fontSize: themes.fonts.fontSize.xl,
    color: themes.colors.gray_2,

    textAlign: "center",

    width: "80%",
  },
});

import { themes } from "@/themes/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: themes.colors.gray_7,
  },

  header: {
    width: "100%",
    height: 60,
    marginBottom: 33,

    justifyContent: "space-between",
    flexDirection: "row",
  },

  user_img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 3,

    borderColor: themes.colors.gray_1,
  },

  new_label: {
    width: "100%",
    marginTop: 40,
  },
  day_list: {
    width: "100%",
    marginTop: 20,
  },
  text: {
    fontSize: themes.fonts.fontSize.md,
    fontFamily: themes.fonts.fontFamily.regular,

    marginBottom: 10,
  },
  date: {
    fontSize: themes.fonts.fontSize.md,
    fontFamily: themes.fonts.fontFamily.bold,

    marginBottom: 10,
  },
});

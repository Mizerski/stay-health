import { StyleSheet } from "react-native";

import { themes } from "@/themes/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.gray_7,
  },
  content: {
    padding: 24,
  },

  buttonColumn: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 130,
  },
});

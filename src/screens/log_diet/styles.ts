import { StyleSheet } from "react-native";

import { themes } from "@/themes/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.gray_7,
  },

  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },

  snackItem: {
    backgroundColor: themes.colors.gray_6,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
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

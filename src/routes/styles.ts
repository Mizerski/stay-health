import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { themes } from "../themes";

export const tabBarStyles: StyleProp<ViewStyle> = {
  backgroundColor: themes.colors.gray_1,
  borderTopColor: themes.colors.gray_1,

  height: 70,
  padding: 12,
  paddingBottom: 12,
  bottom: 20,
  borderRadius: 8,
  elevation: 5,

  position: "absolute",

  marginHorizontal: "3%",

  shadowColor: themes.colors.gray_1,
};

export const tabBarLabelStyles: StyleProp<TextStyle> = {
  fontFamily: themes.fonts.fontFamily.bold,
  fontSize: themes.fonts.fontSize.sm,
};

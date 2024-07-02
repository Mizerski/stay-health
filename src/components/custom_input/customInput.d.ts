import { TextInputProps } from "react-native";

export interface CustomInputProps extends TextInputProps {
  title: string;
  isDataInput?: boolean;
  isHourInput?: boolean;
  onChangeText: (text: string) => void;
  value: string;
}

import { HighlightProps } from "../highlight/highlight";

export interface HeaderProps extends HighlightProps {
  onPress: () => void;
  type: "green" | "red" | "gray";
}

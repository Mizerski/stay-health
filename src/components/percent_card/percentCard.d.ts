import { HighlightProps } from "../highlight/highlight";

export interface PercentCardProps extends HighlightProps {
  type: "green" | "red" | "gray";
  onPress?: () => void;
}

export interface CustomButtomProps {
  title: string;
  onPress: () => void;
  type?: "default" | "delete";
  withIcon?: boolean;
}

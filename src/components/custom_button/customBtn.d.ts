import React from "react";

export interface CustomButtomProps {
  title: string;
  onPress: () => void;
  type?: "default" | "delete";
  withIcon?: boolean;
  icon?: React.ReactNode;
  isDisabled?: boolean;
}

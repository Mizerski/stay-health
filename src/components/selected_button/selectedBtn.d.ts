import { DayListProps } from "../day_list/dayList";

export interface SelectedButtonProps extends DayListProps {
  title: string;
  onPress: () => void;
  isSelect?: boolean;
}

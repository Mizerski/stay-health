import { Text, View } from "react-native";

import { styles } from "./styles";
import { DayListProps } from "./dayList";
import { themes } from "@/themes/index";

export function DayList({ date, meal, onPress, isRed }: DayListProps) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.date_text}>{date}</Text>
                <Text style={styles.separator}>|</Text>

                <Text
                    style={styles.text}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {meal}
                </Text>
            </View>
            <View style={[styles.dot, {
                backgroundColor: isRed ? themes.colors.red_mid : themes.colors.green_mid
            }]} />
        </View>
    )
}
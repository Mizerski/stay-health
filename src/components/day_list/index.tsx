import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { DayListProps } from "./dayList";

import { themes } from "@/themes/index";

import { formatDate } from "@/utils/dateFormater";

export function DayList({ date, meal, onPress, isRed }: DayListProps) {

    const safeDate = date ? formatDate(date) : '01.01.00';


    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.content}>
                <Text style={styles.date_text}>{safeDate}</Text>
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
        </TouchableOpacity>
    )
}
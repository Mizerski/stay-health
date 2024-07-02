import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { SelectedButtonProps } from "./selectedBtn";
import { themes } from "@/themes/index";

export function SelectedButton({ title, onPress, isRed, isSelect }: SelectedButtonProps) {


    const redBorder = isRed ? themes.colors.red_dark : themes.colors.green_dark;
    const redBackground = isRed ? themes.colors.red_light : themes.colors.green_light;

    return (
        <TouchableOpacity style={[
            styles.container,
            {
                borderColor: isSelect ? redBorder : themes.colors.gray_5,
                backgroundColor: isSelect ? redBackground : themes.colors.gray_5
            }
        ]} onPress={onPress}>
            <View style={styles.content}>
                <View style={[styles.dot, {
                    backgroundColor: isRed ? themes.colors.red_dark : themes.colors.green_dark
                }]} />
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
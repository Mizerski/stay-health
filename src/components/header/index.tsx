import { TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { Highlight } from "../highlight";

import ArrowIcon from "@expo/vector-icons/Feather"
import { themes } from "@/themes/index";
import { HeaderProps } from "./header";



export function Header({ onPress, type = "green", description, title }: HeaderProps) {

    let backgroundColor = themes.colors.green_dark;
    let iconColor = themes.colors.green_dark;
    let fontSize = themes.fonts.fontSize.xxl;
    let navigationStyle = styles.navigation;

    switch (type) {
        case "green":
            backgroundColor = themes.colors.green_light;
            iconColor = themes.colors.green_dark;
            break;
        case "red":
            backgroundColor = themes.colors.red_light;
            iconColor = themes.colors.red_dark;
            break;
        case "gray":
            backgroundColor = themes.colors.gray_6;
            iconColor = themes.colors.gray_2;
            fontSize = themes.fonts.fontSize.lg;
            navigationStyle = styles.navigation_alternative;
            break;
    }

    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            <TouchableOpacity
                onPress={onPress}
                style={[styles.navigation, navigationStyle]}
            >
                <ArrowIcon
                    name="arrow-left"
                    size={25}
                    color={iconColor}
                />
            </TouchableOpacity>

            <Highlight
                title={title}
                description={description}
                titleStyle={{ fontSize: fontSize }}
            />
        </View>
    )
}
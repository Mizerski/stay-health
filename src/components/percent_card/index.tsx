import { TouchableOpacity } from "react-native";
import ArrowIcon from "@expo/vector-icons/Feather"

import { styles } from "./styles";
import { Highlight } from "../highlight";
import { PercentCardProps } from "./percentCard";

import { themes } from "@/themes/index";


export function PercentCard({ type = "green", description, title, onPress, withIcon = false }: PercentCardProps) {

    let cardColor = themes.colors.green_light;
    let iconColor = themes.colors.green_dark;

    switch (type) {
        case "green":
            cardColor = themes.colors.green_light;
            iconColor = themes.colors.green_dark;
            break;
        case "red":
            cardColor = themes.colors.red_light;
            iconColor = themes.colors.red_dark;
            break;
        case "gray":
            cardColor = themes.colors.gray_6;
            break;
    }


    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, { backgroundColor: cardColor }]}
        >

            {withIcon && (
                <ArrowIcon
                    name="arrow-up-right"
                    size={25}
                    color={iconColor}
                    style={styles.navigation}
                />
            )}

            <Highlight
                title={title}
                description={description}
            />
        </TouchableOpacity>
    )
}
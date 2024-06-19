import { View } from "react-native";

import { styles } from "./styles";
import { Highlight } from "../highlight";
import { PercentCardProps } from "./percentCard";
import { themes } from "@/themes/index";


export function PercentCard({ type = "green", description, title }: PercentCardProps) {

    let cardColor = themes.colors.green_light;

    switch (type) {
        case "green":
            cardColor = themes.colors.green_light;
            break;
        case "red":
            cardColor = themes.colors.red_light;
            break;
        case "gray":
            cardColor = themes.colors.gray_6;
            break;
    }


    return (
        <View style={[styles.container, { backgroundColor: cardColor }]}>
            <Highlight
                title={title}
                description={description}
            />
        </View>
    )
}
import { View, Text } from "react-native";

import { styles } from "./styles";
import { HighlightProps } from "./highlight";


export function Highlight({ title, description, titleStyle }: HighlightProps) {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            {description && <Text style={styles.description}>{description}</Text>}
        </View>
    )
}
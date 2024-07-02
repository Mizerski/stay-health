import { View, TouchableOpacity, Text } from "react-native";
import { AlternativeHeaderProps } from "./alternative.d";
import { styles } from "./styles";
import ArrowIcon from "@expo/vector-icons/Feather"
import { themes } from "@/themes/index";


export function AlternativeHeader({ onPress, title }: AlternativeHeaderProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.navigation_alternative}>
                <ArrowIcon
                    name="arrow-left"
                    size={25}
                    color={themes.colors.gray_2}
                />
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
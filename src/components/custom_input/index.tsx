import { TextInput, Text, View } from "react-native";

import { styles } from "./styles";
import { CustomInputProps } from "./customInput";

export function CustomInput({ title }: CustomInputProps) {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>
                {title}
            </Text>
            <TextInput style={styles.input} />
        </View>
    )
}
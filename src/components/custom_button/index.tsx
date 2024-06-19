import { themes } from "@/themes/index";
import { CustomButtomProps } from "./customBtn";
import { styles } from "./styles";

import { TouchableOpacity, Text, View } from "react-native";

export function CustomButtom({ title, onPress, type = "default", withIcon = true }: CustomButtomProps) {

    let buttonColor = themes.colors.gray_2;
    let buttonBorderColor = themes.colors.gray_2;
    let buttonTextColor = themes.colors.gray_7;

    switch (type) {
        case "default":
            buttonColor = themes.colors.gray_2;
            buttonBorderColor = themes.colors.gray_2;
            buttonTextColor = themes.colors.gray_7;
            break;
        case "delete":
            buttonColor = themes.colors.white;
            buttonBorderColor = themes.colors.gray_1;
            buttonTextColor = themes.colors.gray_1;
    }
    return (

        <TouchableOpacity
            style={[styles.container,
            {
                backgroundColor: buttonColor,
                borderColor: buttonBorderColor
            }]}
            onPress={onPress}
        >
            <View style={styles.content}>

                {withIcon && (
                    <Text
                        style={[styles.icon, { color: buttonTextColor }
                        ]}>
                        +
                    </Text>
                )}

                <Text style={[styles.text, { color: buttonTextColor }]}>
                    {title}
                </Text>

            </View>
        </TouchableOpacity>
    )
}
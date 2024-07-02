import { themes } from "@/themes/index";
import { CustomButtomProps } from "./customBtn";
import { styles } from "./styles";

import { TouchableOpacity, Text, View } from "react-native";

export function CustomButtom({ title, onPress, type = "default", withIcon = true, isDisabled, icon }: CustomButtomProps) {

    let buttonColor = themes.colors.gray_2;
    let buttonBorderColor = themes.colors.gray_2;
    let buttonTextColor = themes.colors.gray_7;
    let iconColor = themes.colors.gray_7;

    switch (type) {
        case "default":
            buttonColor = themes.colors.gray_2;
            buttonBorderColor = themes.colors.gray_2;
            buttonTextColor = themes.colors.gray_7;
            iconColor = themes.colors.gray_7;
            break;
        case "delete":
            buttonColor = themes.colors.white;
            buttonBorderColor = themes.colors.gray_1;
            buttonTextColor = themes.colors.gray_1;
            iconColor = themes.colors.gray_1;
            break;
    }

    return (

        <TouchableOpacity
            style={[styles.container,
            {
                backgroundColor: buttonColor,
                borderColor: buttonBorderColor,
                opacity: isDisabled ? 0.6 : 1
            }]}
            onPress={onPress}
            disabled={isDisabled}
        >
            <View style={styles.content}>

                {withIcon && (
                    <Text style={[styles.icon, { color: iconColor }]}>
                        {icon}
                    </Text>
                )}

                <Text style={[styles.text, { color: buttonTextColor }]}>
                    {title}
                </Text>

            </View>
        </TouchableOpacity>
    )
}
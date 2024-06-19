import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import { CustomButtom } from "@/components/custom_button";

import Happy from "@/assets/happy.png";


export function FeedbackScreen() {

    const navigation = useNavigation();

    function handleNavigateToHome() {
        navigation.navigate("Home");
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>

                <Text style={styles.title}>
                    Continue assim!
                </Text>

                <Text style={styles.description}>
                    Você continua dentro da dieta. Muito bem!
                </Text>

                <Image source={Happy} style={{ marginBottom: 20 }} />

                <CustomButtom
                    withIcon={false}
                    title="Ir para a página inicial"
                    onPress={() => handleNavigateToHome()}
                />
            </View>
        </View>
    )
}
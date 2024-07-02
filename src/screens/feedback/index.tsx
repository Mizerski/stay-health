import { Image, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { styles } from "./styles";
import { FeedbackScreenProps } from "./feedback";

import { CustomButtom } from "@/components/custom_button";

import Happy from "@/assets/happy.png";
import Sad from "@/assets/sad.png";

import { colors } from "@/themes/colors";
import { Highlight } from "@/components/highlight";


export function FeedbackScreen() {

    const navigation = useNavigation();
    const route = useRoute();

    const { isRedSelect } = route.params as FeedbackScreenProps;

    function handleNavigateToHome() {
        navigation.navigate("Home");
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>

                {isRedSelect ? (
                    <>
                        <Text style={[styles.title, { color: isRedSelect && colors.red_dark }]}>Que pena!</Text>
                        <Text style={styles.description}>Você <Text style={styles.bold}>saiu da dieta</Text> dessa vez, mas continue se esforçando e não desista!</Text>
                    </>
                ) : (
                    <>
                        <Text style={styles.title}>Continue assim!</Text>
                        <Text style={styles.description}>Você continua <Text style={styles.bold}>dentro da dieta. </Text>Muito bem!</Text>
                    </>
                )}

                {isRedSelect ? (
                    <Image source={Sad} style={styles.img} />
                ) : (
                    <Image source={Happy} style={styles.img} />
                )}


                <CustomButtom
                    withIcon={false}
                    title="Ir para a página inicial"
                    onPress={() => handleNavigateToHome()}
                />

            </View>
        </View>
    )
}
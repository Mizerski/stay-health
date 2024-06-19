import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import { Header } from "@/components/header";
import { CustomButtom } from "@/components/custom_button";
import { CustomInput } from "@/components/custom_input";


export function CreateSnackScreen() {
    const navigation = useNavigation();

    function handleNavigateToFeedback() {
        navigation.navigate("Feedback");
    }

    function handleNavigateToHome() {
        navigation.navigate("Home");
    }
    return (
        <View style={styles.container}>
            <Header
                onPress={() => handleNavigateToHome()}
                type="gray"
                title="Nova refeição"
            />
            <View style={styles.content}>

                <CustomInput title="Nome" />
                <CustomInput title="Descriçao" />

                <View style={styles.inputRow}>
                    <CustomInput title="Data" />
                    <CustomInput title="Hora" />
                </View>




                <CustomButtom
                    withIcon={false}
                    title="Cadastrar refeição"
                    onPress={() => handleNavigateToFeedback()}
                />
            </View>
        </View>
    )
}
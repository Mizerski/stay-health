import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import { Header } from "@/components/header";
import { CustomButtom } from "@/components/custom_button";
import { CustomInput } from "@/components/custom_input";
import { SelectedButton } from "@/components/selected_button";


export function CreateSnackScreen() {
    const navigation = useNavigation();

    const [isGreenSelect, setIsGreenSelect] = useState(false);
    const [isRedSelect, setIsRedSelect] = useState(false);

    function handleNavigateToFeedback() {
        navigation.navigate("Feedback", { isRedSelect: isRedSelect });
    }

    function handleNavigateToHome() {
        navigation.navigate("Home");
    }

    function handleSelectedButton(type: string) {
        if (type === "green") {
            setIsGreenSelect(!isGreenSelect);
            setIsRedSelect(false);
        }
        if (type === "red") {
            setIsGreenSelect(false);
            setIsRedSelect(!isRedSelect);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Header
                        onPress={() => handleNavigateToHome()}
                        type="gray"
                        title="Nova refeição"
                    />
                    <View style={styles.content}>

                        <CustomInput title="Nome" />
                        <CustomInput title="Descriçao" />

                        <View style={styles.row}>
                            <CustomInput title="Data" />
                            <CustomInput title="Hora" />
                        </View>

                        <CustomButtom
                            withIcon={false}
                            title="Cadastrar refeição"
                            onPress={() => handleNavigateToFeedback()}
                            isDisabled={!(isGreenSelect || isRedSelect)}
                        />

                        <View style={styles.row}>
                            <SelectedButton
                                title="Sim"
                                onPress={() => { handleSelectedButton("green") }}
                                isSelect={isGreenSelect} />

                            <SelectedButton
                                isRed
                                title="Não"
                                onPress={() => { handleSelectedButton("red") }}
                                isSelect={isRedSelect} />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
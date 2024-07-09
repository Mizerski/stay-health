import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from "react-native";

import { styles } from "./styles";

import { CustomButtom } from "@/components/custom_button";
import { CustomInput } from "@/components/custom_input";
import { SelectedButton } from "@/components/selected_button";
import { AlternativeHeader } from "@/components/header/alternative";

import { createSnack } from "@/storage/snack/create_snack";
import { useTranslation } from "react-i18next";


export function CreateSnackScreen() {
    const navigation = useNavigation();
    const { t } = useTranslation();

    const [isGreenSelect, setIsGreenSelect] = useState(false);
    const [isRedSelect, setIsRedSelect] = useState(false);

    const [snackName, setSnackName] = useState<string>('');
    const [snackDate, setSnackDate] = useState<string>('');
    const [snackDescription, setSnackDescription] = useState<string>('');
    const [snackHour, setSnackHour] = useState("");
    const [snackType, setSnackType] = useState("");

    function handleNavigateToFeedback() {
        navigation.navigate("Feedback", { isRedSelect: isRedSelect });
    }

    function handleNavigateToHome() {
        resetState();
        navigation.navigate("Home");
    }

    function handleSelectedButton(type: string) {
        if (type === "green") {
            setIsGreenSelect(!isGreenSelect);
            setIsRedSelect(false);
            setSnackType("green");
        }
        if (type === "red") {
            setIsGreenSelect(false);
            setIsRedSelect(!isRedSelect);
            setSnackType("red");
        }
    }

    async function handleCreateSnack() {

        const snackData = {
            snackName,
            snackDescription,
            snackDate,
            snackHour,
            snackType
        }

        try {
            await createSnack(snackData);

            resetState();
            handleNavigateToFeedback();
        } catch (error) {
            console.log("Error creating snack", error);
        }
    }

    function resetState() {
        setSnackDate("");
        setSnackDescription("");
        setSnackHour("");
        setSnackName("");
        setSnackType("");
        setIsGreenSelect(false);
        setIsRedSelect(false);
    }


    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    <AlternativeHeader
                        onPress={handleNavigateToHome}
                        title={t("create_snack_title")}
                    />

                    <View style={styles.content} >
                        <CustomInput title={t("name")}
                            onChangeText={setSnackName}
                            value={snackName}
                        />
                        <CustomInput title={t("description")}
                            onChangeText={setSnackDescription}
                            value={snackDescription}
                        />

                        <View style={styles.row}>
                            <CustomInput title={t("date")} isDataInput
                                onChangeText={setSnackDate}
                                value={snackDate}
                            />
                            <CustomInput title={t("time")} isHourInput
                                onChangeText={setSnackHour}
                                value={snackHour}
                            />
                        </View>

                        <CustomButtom
                            withIcon={false}
                            title={t("create_snack_title")}
                            onPress={() => handleCreateSnack()}
                            isDisabled={!(isGreenSelect || isRedSelect)}
                        />

                        <View style={styles.row}>
                            <SelectedButton
                                title={t("yes")}
                                onPress={() => { handleSelectedButton("green") }}
                                isSelect={isGreenSelect} />

                            <SelectedButton
                                isRed
                                title={t("no")}
                                onPress={() => { handleSelectedButton("red") }}
                                isSelect={isRedSelect} />
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
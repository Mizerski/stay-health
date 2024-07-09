import { Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import TrashIcon from "@expo/vector-icons/Ionicons"
import PencilIcon from "@expo/vector-icons/FontAwesome"
import { styles } from "./styles";

import { CustomButtom } from "@/components/custom_button";
import { AlternativeHeader } from "@/components/header/alternative";

import { deleteSnack } from "@/storage/snack/delete_snack";
import { SnackData } from "@/storage/snack/snackData.dto";

type Params = {
    snackId: SnackData;
}

export function LogDietScreen() {
    const route = useRoute();
    const navigation = useNavigation();

    const { snackId: snackDetails } = route.params as Params;

    console.log(snackDetails)

    function handleNavigateToHome() {
        navigation.navigate("HomeStack");
    }

    async function handleDeleteMeal(snackId: SnackData) {
        try {
            await deleteSnack(snackId);
            handleNavigateToHome()
            console.log("Refeição deletada com sucesso", snackId);
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <SafeAreaView style={styles.container}>
            <AlternativeHeader
                onPress={handleNavigateToHome}
                title="Editar refeição"
            />

            <View style={styles.content}>

                <Text style={styles.text}>Refeição</Text>

                <View style={styles.snackItem}>
                    <Text style={styles.text}>Detalhes da Refeição:</Text>
                    <Text style={styles.text}>Nome: {snackDetails.snackName}</Text>
                    <Text style={styles.text}>Descrição: {snackDetails.snackDescription}</Text>
                    <Text style={styles.text}>Data: {snackDetails.snackDate}</Text>
                    <Text style={styles.text}>Hora: {snackDetails.snackHour}</Text>
                    <Text style={styles.text}>Tipo: {snackDetails.snackType}</Text>

                </View>

                <View style={styles.buttonColumn}>

                    <CustomButtom
                        title="Editar refeição"
                        withIcon
                        onPress={() => { }}
                        icon={<PencilIcon name="pencil" size={18} />}

                    />

                    <CustomButtom
                        withIcon
                        type="delete"
                        title="Excluir refeição"
                        onPress={() => {
                            handleDeleteMeal(snackDetails)
                        }}
                        icon={<TrashIcon name="trash" size={18} />}
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}
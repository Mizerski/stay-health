import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import TrashIcon from "@expo/vector-icons/Ionicons"
import PencilIcon from "@expo/vector-icons/FontAwesome"
import { styles } from "./styles";

import { Header } from "@/components/header";
import { CustomButtom } from "@/components/custom_button";


export function LogDietScreen() {
    const navigation = useNavigation();

    function handleNavigateToHome() {
        navigation.navigate("Home");
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header
                type="gray"
                title="Refeição"
                onPress={() => handleNavigateToHome()}
            />
            <View style={styles.content}>
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
                        onPress={() => { }}
                        icon={<TrashIcon name="trash" size={18} />}
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}
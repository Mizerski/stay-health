import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

import { styles } from "./styles";

import { Header } from "@/components/header";
import { PercentCard } from "@/components/percent_card";
import { themes } from "@/themes/index";

type Params = {
    average: string;
    type: "green" | "red" | "gray";
}

export function StatisticsScreen() {

    const navigation = useNavigation();
    const route = useRoute();

    const { average, type } = route.params as Params;

    let backgroundColor = themes.colors.gray_5;

    switch (type) {
        case "green":
            backgroundColor = themes.colors.green_light;
            break;
        case "red":
            backgroundColor = themes.colors.red_light;
            break;
        case "gray":
            backgroundColor = themes.colors.gray_6;
            break;
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: backgroundColor }]}>

            <Header
                onPress={() => navigation.navigate("Home")}
                type={type}
                title={average}
                description="das refeições dentro da dieta"
            />

            <View style={styles.content}>

                <Text style={styles.text}>
                    Estatísticas gerais
                </Text>

                <View style={styles.cardGrid}>

                    <PercentCard
                        title="22"
                        description="melhor sequência de pratos dentro da dieta"
                        type="gray"
                    />
                    <PercentCard
                        title="109"
                        description="refeições registradas"
                        type="gray"
                    />

                    <View style={styles.twoCard}>

                        <PercentCard
                            title="50"
                            description="das refeições dentro da dieta"
                            type="green"
                        />


                        <PercentCard
                            title="50"
                            description="das refeições fora da dieta"
                            type="red"
                        />
                    </View>


                </View>
            </View>
        </SafeAreaView>
    )
}
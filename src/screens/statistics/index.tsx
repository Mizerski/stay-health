import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

import { Header } from "@/components/header";
import { PercentCard } from "@/components/percent_card";

export function StatisticsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
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
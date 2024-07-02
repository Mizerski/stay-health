import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { AveragePercentage, PercentCardType } from "@/utils/averagePercentage";

import { styles } from "./styles";

import { DayList } from "@/components/day_list";
import { PercentCard } from "@/components/percent_card";
import { CustomButtom } from "@/components/custom_button";

import { image } from "@/constants/user";

import Logo from "@/assets/logo.png";

export function HomeScreen() {
    const value1 = 80;
    const value2 = 20;

    const average = AveragePercentage(value1, value2);
    const type = PercentCardType(value1, value2);

    const navigation = useNavigation();

    function handleNavigateToStatistics() {
        navigation.navigate("Statistics", {
            average,
            type
        });
    }

    function handleNavigateToSnack() {
        navigation.navigate("Snack");
    }

    function handleNavigateToLogDiet() {
        navigation.navigate("LogDiet");
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>
                    Olá, Wesley
                </Text>
                <Image
                    src={image}
                    style={styles.user_img}
                />
            </View>

            <PercentCard
                withIcon
                title={average}
                description="das refeições dentro da dieta"
                type={type}
                onPress={() => handleNavigateToStatistics()}
            />

            <View style={styles.new_label}>
                <Text style={styles.text}>
                    Refeições
                </Text>
                <CustomButtom
                    title="Nova Refeição"
                    onPress={() => handleNavigateToSnack()}
                />
            </View>

            <View style={styles.day_list}>
                <Text style={styles.date}>
                    18.08.2021
                </Text>


                <DayList
                    date="20:00"
                    meal="Café da manhã"
                    onPress={() => handleNavigateToLogDiet()}
                />

                <DayList
                    date="20:00"
                    meal="Café da manhã"
                    onPress={() => handleNavigateToLogDiet()}
                    isRed
                />
            </View>
        </SafeAreaView>
    )
}
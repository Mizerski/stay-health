import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AveragePercentage, PercentCardType } from "@/utils/averagePercentage";

import { styles } from "./styles";

import { DayList } from "@/components/day_list";
import { PercentCard } from "@/components/percent_card";
import { CustomButtom } from "@/components/custom_button";

import { image } from "@/constants/user";

import { getSnack } from "@/storage/snack/get_snack";
import { SnackData } from "@/storage/snack/snackData.dto";
import { useTranslation } from "react-i18next";

export function HomeScreen() {

    const { t } = useTranslation();

    const value1 = 80;
    const value2 = 20;

    const average = AveragePercentage(value1, value2);
    const type = PercentCardType(value1, value2);

    const [snacks, setSnacks] = useState<SnackData[]>([]);

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

    useEffect(() => {
        async function fetchSnacks() {
            try {
                const snackData = await getSnack();
                setSnacks(snackData);
            } catch (error) {
                console.error(error);
            }
        }

        fetchSnacks();
    }, []);

    const renderItem = ({ item }: { item: SnackData }) => (
        <DayList
            date={item.snackDate}
            meal={item.snackName || 'No name'}
            onPress={() => handleNavigateToLogDiet()}
            isRed={item.snackType === 'red'}
        />
    );

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>
                    {t("welcome")} Wesley!
                </Text>
                <Image
                    src={image}
                    style={styles.user_img}
                />
            </View>

            <PercentCard
                withIcon
                title={average}
                description={t("percent_card_description")}
                type={type}
                onPress={() => handleNavigateToStatistics()}
            />

            <View style={styles.new_label}>
                <Text style={styles.text}>
                    {t("meals")}
                </Text>
                <CustomButtom
                    title={t("new_snack")}
                    onPress={() => handleNavigateToSnack()}
                />
            </View>

            <View style={styles.day_list}>
                <Text style={styles.date}>
                    18.08.2021
                </Text>


                <FlatList
                    data={snacks}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />


            </View>
        </SafeAreaView>
    )
}
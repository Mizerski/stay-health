import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Text, View, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import LunchIcon from "@expo/vector-icons/MaterialIcons";

import { AveragePercentage, PercentCardType } from "@/utils/averagePercentage";

import { styles } from "./styles";

import { DayList } from "@/components/day_list";
import { PercentCard } from "@/components/percent_card";
import { CustomButtom } from "@/components/custom_button";

import { image } from "@/constants/user";

import { getSnack } from "@/storage/snack/get_snack";
import { SnackData } from "@/storage/snack/snackData.dto";

export function HomeScreen() {

    const { t } = useTranslation();
    const [snacks, setSnacks] = useState<SnackData[]>([]);
    const [average, setAverage] = useState<string>("");
    const [type, setType] = useState<"green" | "red" | "gray">("gray");

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

    function handleNavigateToLogDiet(snacks: SnackData) {
        navigation.navigate("LogDiet", {
            snackId: snacks
        });
        console.log("dados enviados -> ", snacks);
    }




    useFocusEffect((
        useCallback(() => {
            async function loadSnacks() {
                const snack = await getSnack();
                setSnacks(snack);


                let greenSnackCount = 0;
                let redSnackCount = 0;

                snack.forEach((item) => {
                    if (item.snackType === 'green') greenSnackCount++;
                    else if (item.snackType === 'red') redSnackCount++;
                });


                const averagePercent = AveragePercentage(greenSnackCount, redSnackCount);
                const type = PercentCardType(greenSnackCount, redSnackCount);

                setAverage(averagePercent);
                setType(type);
            }
            loadSnacks();
        }, [])
    ));




    const renderItem = ({ item }: { item: SnackData }) => (
        <DayList
            date={item.snackDate}
            meal={item.snackName || 'No name'}
            onPress={() => handleNavigateToLogDiet(item)}
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
                    withIcon
                    icon={<LunchIcon name="lunch-dining" size={18} />}
                />
            </View>

            <View style={styles.day_list}>
                <Text style={styles.date}>
                    18.08.2021
                </Text>


                <FlatList
                    data={snacks}
                    renderItem={renderItem}
                    keyExtractor={(_item, index) => index.toString()}
                />


            </View>
        </SafeAreaView>
    )
}
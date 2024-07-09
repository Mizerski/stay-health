import { useTranslation } from "react-i18next";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "@/screens/home";
import { StatisticsScreen } from "@/screens/statistics";
import { CreateSnackScreen } from "@/screens/create_snack";
import { FeedbackScreen } from "@/screens/feedback";
import { LogDietScreen } from "@/screens/log_diet";
import { OptionScreen } from "@/screens/option_screen";
import { TabBarIcon } from "@/components/route_icons";

import { themes } from "../themes";
import { tabBarLabelStyles, tabBarStyles } from "./styles";

const Tab = createBottomTabNavigator();
const { Screen, Navigator } = createNativeStackNavigator();


export function AppStack() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen name="HomeStack" component={HomeScreen} />
            <Screen name="Statistics" component={StatisticsScreen} />
            <Screen name="CreateSnack" component={CreateSnackScreen} />
            <Screen name="Feedback" component={FeedbackScreen} />
            <Screen name="LogDiet" component={LogDietScreen} />
        </Navigator>
    )
}

export function AppRoute() {
    const { t } = useTranslation();


    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,

            tabBarActiveTintColor: themes.colors.gray_5,
            tabBarInactiveTintColor: themes.colors.gray_3,

            tabBarStyle: tabBarStyles,
            tabBarLabelStyle: tabBarLabelStyles

        }}>
            <Tab.Screen name="Home" component={AppStack}
                options={{
                    title: t("tab_home"),
                    tabBarIcon: (props) => <TabBarIcon {...props} name="home" />
                }} />

            <Tab.Screen name="Snack" component={CreateSnackScreen}
                options={{
                    title: t("tab_snack"),
                    tabBarIcon: (props) => <TabBarIcon {...props} name="create" />
                }} />

            <Tab.Screen name="Options" component={OptionScreen}
                options={{
                    title: t("tab_settings"),
                    tabBarIcon: (props) => <TabBarIcon {...props} name="setting" />
                }} />

        </Tab.Navigator>
    )
}


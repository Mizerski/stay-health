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
import { tabBarStyles } from "./styles";

const Tab = createBottomTabNavigator();
const { Screen, Navigator } = createNativeStackNavigator();


export function AppStack() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen name="Home" component={HomeScreen} />
            <Screen name="Statistics" component={StatisticsScreen} />
            <Screen name="CreateSnack" component={CreateSnackScreen} />
            <Screen name="Feedback" component={FeedbackScreen} />
            <Screen name="LogDiet" component={LogDietScreen} />
        </Navigator>
    )
}

export function AppRoute() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,

            tabBarActiveTintColor: themes.colors.gray_5,
            tabBarInactiveTintColor: themes.colors.gray_3,

            tabBarStyle: tabBarStyles,
        }}>
            <Tab.Screen name="Home" component={AppStack}
                options={{
                    tabBarIcon: (props) => <TabBarIcon {...props} name="home" />
                }} />

            <Tab.Screen name="Snack" component={CreateSnackScreen}
                options={{
                    tabBarIcon: (props) => <TabBarIcon {...props} name="create" />
                }} />

            <Tab.Screen name="Options" component={OptionScreen}
                options={{
                    tabBarIcon: (props) => <TabBarIcon {...props} name="setting" />
                }} />

        </Tab.Navigator>
    )
}


import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "@/screens/home";
import { StatisticsScreen } from "@/screens/statistics";



const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoute() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Statistics"
        >
            <Screen name="Home" component={HomeScreen} />

            <Screen name="Statistics" component={StatisticsScreen} />
        </Navigator>
    )
}
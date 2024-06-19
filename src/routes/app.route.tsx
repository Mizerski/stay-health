import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "@/screens/home";
import { StatisticsScreen } from "@/screens/statistics";
import { CreateSnackScreen } from "@/screens/create_snack";
import { FeedbackScreen } from "@/screens/feedback";



const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoute() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Feedback"
        >
            <Screen name="Home" component={HomeScreen} />

            <Screen name="Statistics" component={StatisticsScreen} />
            <Screen name="Snack" component={CreateSnackScreen} />
            <Screen name="Feedback" component={FeedbackScreen} />

        </Navigator>
    )
}
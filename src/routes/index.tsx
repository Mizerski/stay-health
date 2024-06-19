import { NavigationContainer } from "@react-navigation/native";

import { AppRoute } from "./app.route";


export function Routes() {
    return (
        <NavigationContainer>
            <AppRoute />
        </NavigationContainer>
    )
}
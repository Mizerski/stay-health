import { View } from "react-native";

import { styles } from "./styles";
import { Highlight } from "../highlight";




export function Header() {

    return (
        <View style={styles.container}>
            <Highlight
                title="90.0%"
                description="das refeições dentro da dieta"
            />
        </View>
    )
}
import { View, Text } from 'react-native';

import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';


export function OptionScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>OptionScreen</Text>
        </SafeAreaView>
    )
}
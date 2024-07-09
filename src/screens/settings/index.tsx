import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import { useLanguage } from '@/hooks/i18n';


export function SettingScreen() {
    const { t, handleLaguageChange, language } = useLanguage();
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(language);

    function handleLanguageChange(value: string) {
        handleLaguageChange(value);
        setSelectedLanguage(value);
    }

    function getStyle(language: string, styleType: "button" | "text") {
        const isSelected = selectedLanguage === language;
        switch (styleType) {
            case "button":
                return isSelected ? styles.language_button_selected : styles.language_button;
            case "text":
                return isSelected ? styles.language_text_selected : styles.language_text;
            default:
                return {};
        }
    }

    useEffect(() => {
        handleLaguageChange(language)
    }, [language])



    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{t("tab_settings")} </Text>

            <View style={styles.select_language_colunm}>
                <Text style={styles.option}>{t("settings_languages")}:</Text>
                <TouchableOpacity
                    style={getStyle("pt", "button")}
                    onPress={() => handleLanguageChange("pt")}
                >
                    <Text style={getStyle("pt", "text")}>
                        {t("settings_portuguese")}
                    </Text>
                </TouchableOpacity>



                <TouchableOpacity
                    style={getStyle("en", "button")}
                    onPress={() => handleLanguageChange("en")}
                >
                    <Text style={getStyle("en", "text")}>
                        {t("settings_english")}
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}


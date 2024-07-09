import "intl-pluralrules";
import { useTranslation } from 'react-i18next';

import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';


import { Routes } from './src/routes';

import { initializeLanguage } from '@/hooks/i18n';



export default function App() {

  const [isLanguageInitialized, setIsLanguageInitialized] = useState(false);




  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  useEffect(() => {
    initializeLanguage().then(() => setIsLanguageInitialized(true));
  }, [])

  if (!isLanguageInitialized || !fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      {fontsLoaded ? <Routes /> : null}
    </>
  );
}


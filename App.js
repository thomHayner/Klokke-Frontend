import * as React from 'react';
import { RecoilRoot } from 'recoil';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { Orbitron_900Black, useFonts } from '@expo-google-fonts/orbitron';
import BottomNav from './components/BottomNav';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Orbitron_900Black,
  });

  //// [SPLASHSCREEN FOR FONT LOADING] ////
  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <RecoilRoot>
        <NavigationContainer>
          <BottomNav />
        </NavigationContainer>
        <StatusBar style='auto' />
      </RecoilRoot>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

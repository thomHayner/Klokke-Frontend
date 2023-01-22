import * as React from 'react';
import { RecoilRoot } from 'recoil';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { Orbitron_900Black, useFonts } from '@expo-google-fonts/orbitron';
import BottomNav from './screens/BottomNav';
import { loadDatabase } from './utilities/sqlite_loadDatabase';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  //// [CHECK THE FONT LOADING AT START] ////
  let [fontsLoaded] = useFonts({
    Orbitron_900Black,
  });
  
  //// [CHECK THE DATABASE LOADING AT START] ////
  const [dbLoaded, setDbLoaded] = React.useState(false);
  React.useEffect(()=> {
    loadDatabase().then(() => setDbLoaded(true));
  },[]);

  //// [SPLASHSCREEN FOR FONT AND DATABASE LOADING] ////
  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded && dbLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, dbLoaded]);
  
  if (!fontsLoaded && ! dbLoaded) {
    return null;
  }

  //// [COMPONENT] ////
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

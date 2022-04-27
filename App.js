import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import LoginNavigator from './navigation/LoginNavigator';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  const [loaded] = useFonts({
    MontereyBold: require('./assets/fonts/MontereyFLF-Bold.ttf'),
    MontereyBoldItalic: require('./assets/fonts/MontereyFLF-BoldItalic.ttf'),
    MontereyItalic: require('./assets/fonts/MontereyFLF-Italic.ttf'),
    Monterey: require('./assets/fonts/MontereyFLF.ttf'),
    MontereyMedium: require('./assets/fonts/MontereyMediumFLF.ttf')
  });

  if(!loaded) return <AppLoading/>

  return (
    <Provider store={store}>
     <LoginNavigator/>
    </Provider>
  );
}
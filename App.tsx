/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {NavigationDrawer} from './components/navigation/NavigationDrawer';
import {initializeDatabase} from './src/services/db';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    const init = async () => {
      await initializeDatabase();
    };

    init();
  }, []);

  const MyNewLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(181, 5, 5)',
    },
  };

  const MyNewDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: 'rgb(236, 52, 52)',
    },
  };

  return (
    <NavigationContainer theme={isDarkMode ? MyNewDarkTheme : MyNewLightTheme}>
      <NavigationDrawer />
    </NavigationContainer>
  );
};

export default App;

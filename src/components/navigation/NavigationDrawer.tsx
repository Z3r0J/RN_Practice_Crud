import {createDrawerNavigator} from '@react-navigation/drawer';
import {useColorScheme} from 'react-native';
import {FormContact} from '../forms/FormContact';
import {HomeComponent} from '../home/HomeComponent';

const Drawer = createDrawerNavigator();

export const NavigationDrawer = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: isDarkMode ? 'rgb(255,255,255)' : 'rgb(0,0,0)',
        headerStyle: {
          backgroundColor: 'red',
        },
      }}>
      <Drawer.Screen name="Home" component={HomeComponent} />
      <Drawer.Screen
        name="Add"
        component={FormContact}
        options={{
          title: 'Agregar Contacto',
          drawerItemStyle: {display: 'none'},
        }}
      />
    </Drawer.Navigator>
  );
};

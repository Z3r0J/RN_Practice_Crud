import { createDrawerNavigator } from "@react-navigation/drawer"
import { HomeComponent } from "../home/HomeComponent";


const Drawer = createDrawerNavigator();

export const NavigationDrawer = () => {
  return (
    <Drawer.Navigator
    initialRouteName="HomeComponent"
    >
        <Drawer.Screen name="Home" component={HomeComponent}/>
    </Drawer.Navigator>
  )
}

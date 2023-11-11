import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Navigation from './src/navigation/Navigation'

import ProfileNavigation from "./src/navigation/ProfileNavigation";
import BillNavigation from './src/navigation/BillNavigation';
import Login from './src/screens/auth/login/Login';
import RegisterUser from './src/screens/auth/register/Register';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Changarrito" component={Navigation} />
        <Drawer.Screen name="Profile" component={ProfileNavigation} />
        <Drawer.Screen name="Pagos" component={BillNavigation} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Registro" component={RegisterUser} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

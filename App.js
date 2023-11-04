import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Navigation from './src/navigation/Navigation'

import ProfileScreen from "./src/screens/profile/ProfileScreen";
import BillScreen from './src/screens/profile/BillScreen'
import FoodScreen from './src/screens/Food/FoodScreen';
import OrderScreen from './src/screens/Order/OrderScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Changarrito" component={Navigation} />
        <Drawer.Screen name="Perfil" component={ProfileScreen} />
        <Drawer.Screen name="Pagos" component={BillScreen} />
        <Drawer.Screen name="Comida" component={FoodScreen} />
        <Drawer.Screen name="Order"  component={OrderScreen}/>
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

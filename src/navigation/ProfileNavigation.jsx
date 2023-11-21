import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OptionsProfile from "../screens/profile/OptionsProfile";
import ProfileScreen from '../screens/profile/ProfileScreen';
import MenuScreen from '../screens/Food/DetailsMenuScreen';
import AddressScreen from '../screens/profile/AddressScreen';
import BillScreen from '../screens/profile/BillScreen';
import OrderScreen from '../screens/Order/OrderScreen';
import ChangePasswordScreen from '../screens/profile/ChangePasswordScreen'

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions= {{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Profile"
        component={OptionsProfile}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={ProfileScreen}
      />
      <Stack.Screen
        name="UpdateMenu"
        component={MenuScreen}
      />
      <Stack.Screen
        name="Address"
        component={AddressScreen}
      />
      <Stack.Screen
        name="PaymentMethods"
        component={BillScreen}
      />
      <Stack.Screen
        name="History"
        component={OrderScreen}
      />
      <Stack.Screen
        name="Password"
        component={ChangePasswordScreen}
      />
    </Stack.Navigator>
  );
}
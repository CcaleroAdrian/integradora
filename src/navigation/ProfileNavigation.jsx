import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from "../screens/profile/ProfileScreen";


const Drawer = createDrawerNavigator();

export default function AccountNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Profile">
      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
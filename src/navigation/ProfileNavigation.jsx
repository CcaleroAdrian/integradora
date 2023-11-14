import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from "../screens/profile/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Perfil"
      screenOptions= {{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Perfil"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
}
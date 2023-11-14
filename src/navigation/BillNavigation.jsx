import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BillScreen from "../screens/profile/BillScreen";

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Bill"
      screenOptions= {{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Bill"
        component={BillScreen}
      />
    </Stack.Navigator>
  );
}
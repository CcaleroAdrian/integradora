import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from "../screens/restaurant/ReviewsScreen";


const Stack = createNativeStackNavigator();

export default function CartNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={CartScreen}
        options={{ 
            title: "",
            headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
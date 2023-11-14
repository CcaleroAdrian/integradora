import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from "../screens/restaurant/RestaurantScreen";


const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ 
            title: "",
            headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
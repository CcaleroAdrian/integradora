import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import SearchCategoryScreen from '../screens/search/SearchCategoryScreen';
import RestaurantDetailScreen from "../screens/restaurant/RestaurantScreen";


const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
    screenOptions= {{
        headerShown: false
    }}>
      <Stack.Screen
        name="Inicio"
        component={HomeScreen}
        options={{ 
            title: "Bienvenido",
            headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="find"
        component={SearchCategoryScreen}
        options={{ 
            title: "",
            headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="detalle"
        component={RestaurantDetailScreen}
        options={{ 
            title: "",
            headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
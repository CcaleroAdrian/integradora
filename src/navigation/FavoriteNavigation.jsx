import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import FavoriteScreen from "../screens/favorite/FavoriteScreen";
import MapScreen from "../screens/maps/MapScreen"


const Stack = createNativeStackNavigator();

export default function FavoritesNavigation() {
  return (
    <Stack.Navigator
    screenOptions= {{
      headerShown: false
    }}
    >
      <Stack.Screen
        name="Favorite"
        component={MapScreen}
      />
    </Stack.Navigator>
  );
}
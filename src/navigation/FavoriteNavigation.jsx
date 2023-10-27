import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoriteScreen from "../screens/favorite/FavoriteScreen";


const Stack = createNativeStackNavigator();

export default function FavoritesNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{ 
            headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
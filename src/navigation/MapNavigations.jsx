import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from "../screens/maps/MapScreen";


const Stack = createNativeStackNavigator();

export default function MapNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{ 
            title: "Cerca de tu ubicación",
        }}
      />
    </Stack.Navigator>
  );
}
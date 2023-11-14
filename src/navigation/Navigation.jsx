import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome5";

import HomeNavigation from '../navigation/HomeNavigation'
import FavoritesNavigation from '../navigation/FavoriteNavigation'
import SearchNavigation from '../navigation/SearchNavigations'
import CartNavigation from '../navigation/CartNavigation'

const Tab = createBottomTabNavigator();

export default function Navigation(){

    return(
        <Tab.Navigator
        initialRouteName="Inicio"
        screenOptions= {{
            headerShown: false
        }}
        >
            <Tab.Screen
                name="Inicio"
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="store" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favoritos"
                component={FavoritesNavigation}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" color={color} size={size} solid />
                    ),
                }}
            />
            <Tab.Screen
                name="Buscar"
                component={SearchNavigation}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="hamburger" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Carrito"
                component={CartNavigation}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="shopping-cart" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}


import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome5";
import { Image } from 'react-native';
import HomeNavigation from '../navigation/HomeNavigation'
import FavoritesNavigation from '../navigation/FavoriteNavigation'
import SearchNavigation from '../navigation/SearchNavigations'
import CartNavigation from '../navigation/CartNavigation'
import ProfileNavigation from '../navigation/ProfileNavigation'

const Tab = createBottomTabNavigator();

export default function Navigation(){

    return(
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions= {{
            headerShown: false
        }}
        >
            <Tab.Screen
                name="Home"
                component={HomeNavigation}
                options={{
                    tabBarLabel: "Inicio",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="store" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesNavigation}
                options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" color={color} size={size} solid />
                    ),
                }}
            />
            <Tab.Screen
                name="Buscar"
                component={SearchNavigation}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => renderIcon(),
                }}
            />
            <Tab.Screen
                name="Shopping"
                component={CartNavigation}
                options={{
                    tabBarLabel: "Carrito",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="shopping-cart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={ProfileNavigation}
                options={{
                    tabBarLabel: "Más",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="bars" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

function renderIcon() {
    return (
      <Image
        source={require("../../assets/icono/icono1.png")}
        style={{ width: 65, height: 65, top: -10 }}
      />
    );
  }
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';
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
            headerShown: false,
            tabBarActiveTintColor:'#BF365A',
            tabBarInactiveBackgroundColor: '#CCCCCC',
            tabBarLabelStyle:{fontSize:14}
        }}
        >
            <Tab.Screen
                name="Home"
                component={HomeNavigation}
                options={{
                    tabBarLabel: "Inicio",
                    tabBarIcon: () => HomeIcon(),
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesNavigation}
                options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: () => FavoriteIcon(),
                }}
            />
            <Tab.Screen
                name="Buscar"
                component={SearchNavigation}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => MapaIcon(),
                }}
            />
            <Tab.Screen
                name="Shopping"
                component={CartNavigation}
                options={{
                    tabBarLabel: "Carrito",
                    tabBarIcon: () => CartIcon(),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={ProfileNavigation}
                options={{
                    tabBarLabel: "Más",
                    tabBarIcon: () => SettingIcon(),
                }}
            />
        </Tab.Navigator>
    )
}

function HomeIcon() {
    return (
      <Image
        source={require("../../assets/icons/home.png")}
        style={{ width: 30, height: 30, }}
      />
    );
}

function FavoriteIcon() {
    return (
      <Image
        source={require("../../assets/icons/favorite.png")}
        style={{ width: 30, height: 30 }}
      />
    );
}

function MapaIcon() {
    return (
        <View
        style={{ borderWidth:3, borderColor:'white', borderRadius:100, top: -10}}>
      <Image
        source={require("../../assets/icons/mapa.png")}
        style={{ width: 65, height: 65}}
        />
        </View>
    );
}

function CartIcon() {
    return (
      <Image
        source={require("../../assets/icons/cart.png")}
        style={{ width: 30, height: 30 }}
      />
    );
}

function SettingIcon() {
    return (
        <Image
        source={require("../../assets/icons/config.png")}
        style={{ width: 30, height: 30 }}
        />
    );
}
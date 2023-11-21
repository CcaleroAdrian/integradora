import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import DrawerNavigation from "./DrawerNavigation";
import Login from "../screens/auth/login/Login";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
//   const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const isAuthenticated = true;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Changarrito"
        screenOptions={{
          headerShown: false,
        }}
      >
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Root" component={DrawerNavigation} />
          </>
        ) : (
          <>
            {/*<Stack.Screen name="SignIn" component={Login} />*/}
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

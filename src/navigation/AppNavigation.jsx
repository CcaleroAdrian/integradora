import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Navigation from './Navigation'
import RegisterScreen from '../screens/auth/register/Register';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
//   const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const isAuthenticated = true;

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Root"
             screenOptions= {{
                headerShown: false
            }}
            >
            { isAuthenticated ? ( 
                <>
                    <Stack.Screen name='Navigation' component={Navigation} />
                </>
            ): (
                <>
                    {/*<Stack.Screen name="SignIn" component={Login} />*/}
                    <Stack.Screen name="Registro" component={RegisterScreen} />
                </>
            )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

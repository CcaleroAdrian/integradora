import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import DrawerNavigation from './DrawerNavigation';
import Login from '../screens/auth/login/login_v2';
import RegisterScreen from '../screens/auth/register/Register';

const Stack = createNativeStackNavigator();

export default function AppNavigator(){
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    console.log(isAuthenticated);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Changarrito"
             screenOptions= {{
                headerShown: false
            }}
            >
            { isAuthenticated ? (
                <>
                    <Stack.Screen name='Root' component={DrawerNavigation} />
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
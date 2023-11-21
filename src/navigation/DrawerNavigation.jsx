import { createDrawerNavigator } from '@react-navigation/drawer';

import ProfileNavigation from "./ProfileNavigation";
import BillNavigation from './BillNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(){
 return(
    <Drawer.Navigator>
        <Drawer.Screen name="Changarrito" component={Navigation} />
        <Drawer.Screen name="Profile" component={ProfileNavigation} />
        <Drawer.Screen name="Pagos" component={BillNavigation} />
    </Drawer.Navigator>
 )
}
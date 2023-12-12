import React,{ useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Text } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import {getRestaurantCategoria} from '../../services/restaurant';
import CardRecordCategory from "../../components/category/CardRecordCategory";

export default function SearchCategoryScreen({navigation}){
    const route = useRoute();
    const categoria = route.params?.categoria;
    const [restaurantes, setRestaurantes] = useState([]);
    useEffect(() => {
        const restaurante = async () =>{
            try {
                const result = await getRestaurantCategoria(categoria);
                setRestaurantes(result);
                //console.warn(result);
            } catch (error) {
                console.warn("Error al obtener platillos:", error);
            }
        }
        restaurante();
    },[])

    const detalle = (restaurant) =>{
        console.log(restaurant);
        navigation.navigate('detalle', {restaurant: restaurant})
    }

    // console.log(categoria)
    return(
        <>
        { restaurantes.length >0 ?
            <ScrollView style={{flex:1, marginTop:20}}>
                {restaurantes.map((item) => (
                <CardRecordCategory key={item.id} data={item} onPress={()=>detalle(item.id)} />
                ))}
            </ScrollView>
        :
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                <Text variant="displaySmall">¡Pronto te tendremos mas opciones!</Text>        
            </View>
        }
        </>
    )
}
import React from "react";
import { IconButton, Surface } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import {addFavorito} from '../../actions/favoriteActions';
import {addFavorite} from '../../services/favorites';
import { Timestamp } from 'firebase/firestore';

export default function ButtonHeartOutline({platillo}){
    const dispatch = useDispatch();
    const id_user = useSelector((state) => state.user.user.id);
   // dispatch(setFavorito(result))
    const handleAdd = async(platillo) =>{
        try {
            console.info(platillo);
            // Crear un objeto con los datos del favorito
            const nuevoFavorito = {
                id_platillo: platillo,
                id_user: id_user,
                created: Timestamp.now(), // Obtén el timestamp actual
            };

            const id = await addFavorite(nuevoFavorito);
            console.log(id)
            nuevoFavorito.id = id;
            dispatch(addFavorito(nuevoFavorito));
        } catch (error) {
            console.error('Error al agregar documento a favoritos:', error);
        }
    }

    //console.info(platillo)
    return(
        <Surface elevation={2} style={{borderRadius:100, backgroundColor:'transparent'}}>
            <IconButton
                icon="heart-outline"
                iconColor='red'
                size={30}
                mode='contained'
                onPress={() => handleAdd(platillo)}
            />
        </Surface>
    )
}
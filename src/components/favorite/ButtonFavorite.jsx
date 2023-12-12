import React from "react";
import { IconButton, Surface } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import {deleteFavorito} from '../../actions/favoriteActions';
import {deleteFavorite} from '../../services/favorites';

export default function ButtonFavorite({platillo}){
    const dispatch = useDispatch();
   // dispatch(setFavorito(result))
    const handleDelete = async(id) =>{
        console.info(id);
        try {
            console.debug("Borrando de firebase")
            // Borrar el documento de Firebase
            await deleteFavorite(id.trim());
            console.debug("Borrado de firebase Exitoso")
            // Después de recibir la confirmación de Firebase, eliminar del store
            console.debug("Borrando del Store")
            dispatch(deleteFavorito(id.trim()));
            console.debug("Borrando con exito del Store")
        } catch (error) {
            console.error('Error al borrar el documento:', error);
        }
    }

    //console.info(platillo)
    return(
        <Surface elevation={2} style={{borderRadius:100, backgroundColor:'white'}}>
            <IconButton
                icon="heart"
                iconColor='red'
                size={30}
                onPress={() => handleDelete(platillo)}
            />
        </Surface>
    )
}
import React, { useEffect, useState } from 'react';

import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// Trabajar datos con Firebase
import { getFavoritos } from "../../services/favorites";
import {setFavorito} from '../../actions/favoriteActions';
import CardFavorite from "../../components/favorite/CardFavorite";

export default function FavoriteScreen() {
  const dispatch = useDispatch();
  const favoritos = useSelector((state) => state.favoritos.favoritos);
  const id_user = useSelector((state) => state.user.user.id);

  useEffect(() => {
    // Obtener favoritos
    const fetchData = async () => {
      try {
        const result = await getFavoritos(id_user);
        dispatch(setFavorito(result))
      } catch (error) {
        console.error("Error al obtener favoritos:", error);
      }
    }
    // Verificar si la colección está vacía antes de hacer la petición a Firebase
    if (favoritos.length === 0) {
      fetchData();
    }

  }, []);


  return(
    <>
      {favoritos.length > 0 ?
        <ScrollView>
          {favoritos.map((item) => (
            <CardFavorite key={item.id} data={item} />
          ))}
        </ScrollView>
      :
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
          <Text variant="displaySmall">¡Aun no tienes favoritos!</Text>        
        </View>
      } 
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
    textAlign: 'center',
  },
});
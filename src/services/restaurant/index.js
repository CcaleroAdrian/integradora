import {db, app} from '../firebase'
import { collection, getDocs,getDoc, where, doc, deleteDoc,query, orderBy, limit,} from "firebase/firestore";

// Obtener platillos por Restaurante
export const getRestaurantCategoria = async(categoria)=> {
    try {
        const restaurantesQuery = query(
          collection(db, 'restaurant'),
          where('categoria', 'array-contains', categoria)
        );
      
        const snapshot = await getDocs(restaurantesQuery);
        const restaurantes = [];

        snapshot.forEach((doc) => {
            // Aquí puedes acceder a los datos de cada restaurante
           const restaurante = {
             id: doc.id,
             ...doc.data(),
           };
           restaurantes.push(restaurante);
        });
      
        // console.log('Restaurantes encontrados:', restaurantes);
        return restaurantes;
      } catch (error) {
        console.error('Error al obtener documentos:', error);
        throw error;
      }
}


export default {getRestaurantCategoria}
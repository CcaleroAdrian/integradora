import { ref,getDownloadURL, listAll  } from 'firebase/storage';
import {db, app} from '../firebase'
import { collection, getDocs,getDoc, where, doc, deleteDoc,query, orderBy, limit,} from "firebase/firestore";

// Obtener platillos por Restaurante
export const getPlatillosRestaurant = async(idRestaurant)=> {
    try {
        const query = await getDocs(collection(db,"platillo"), where("id_restaurante", "==", idRestaurant));
        const platillos = query.docs.map((doc) => ({
          id: doc.id,
          payload: doc.data(),
        }));
        return platillos;
      } catch (error) {
        console.error('Error al obtener documentos:', error);
        throw error;
      }
}

// Elminar un platillo del restaurante
export const deletePlatilloRestaurant = async (id) => {
  try {
    console.warn(id);
    await deleteDoc(doc(db,'platillo',id))
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Obtener los ultimos platillos agregados
export const getNewPlatillos = async() => {
  try {
    const data = [];
    const platillosQuery = query(
      collection(db, 'platillo'),
      orderBy('created', 'desc'),
      limit(10)); // establecemos el query

    const platillosSnapshot = await getDocs(platillosQuery); // recuperamos colección de documentos

    if (platillosSnapshot.size > 0) {
      const promises = platillosSnapshot.docs.map(async (item) => {
        const platilloData = item.data();
        // Obten el nombre del restaurante relacionado
        const restauranteRef = doc(db, 'restaurant', platilloData.id_restaurante.trim());
        const restauranteSnapshot = await getDoc(restauranteRef);
        const restauranteData = restauranteSnapshot.data();
    
        if (restauranteData) {
          // Aquí puedes acceder a los campos del platillo y del restaurante
          data.push({ id: item.id, ...platilloData, restaurant: restauranteData.nombre });
        }
      });
    
      // Espera a que todas las promesas se resuelvan antes de continuar
      await Promise.all(promises);
    }
    return data;
  } catch (error) {
    console.error('Error al obtener documentos:', error);
    throw error;
  }
}

export default {getPlatillosRestaurant, deletePlatilloRestaurant, getNewPlatillos}
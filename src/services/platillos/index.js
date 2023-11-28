import { ref,getDownloadURL, listAll  } from 'firebase/storage';
import {db} from '../firebase'
import { collection, getDocs, where, doc, deleteDoc} from "firebase/firestore";

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

export const deletePlatilloRestaurant = async (idPlatillo) => {
  try {
    let value = idPlatillo.trim();
    await deleteDoc(doc(db, "platillo", value))
  } catch (error) {
    console.error('Error al borrar el documento:', error);
    throw error;
  }
};

export default {getPlatillosRestaurant, deletePlatilloRestaurant}
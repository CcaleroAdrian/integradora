import {db} from '../firebase'
import { collection, getDocs } from "firebase/firestore";

export const getCategories= async()=> {
    try {
        const querySnapshot = await getDocs(collection(db,"categorias"));
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        return documents;
      } catch (error) {
        console.error('Error al obtener documentos:', error);
        throw error;
      }
}

export default {getCategories}
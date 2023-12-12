import {db} from '../firebase'
import { collection, getDocs,getDoc, where, doc, deleteDoc,query, orderBy, addDoc} from "firebase/firestore";

export const getFavoritos = async(idUsuario) => {
    try {
        const data = [];
        // Paso 1: Obtener todos los favoritos del usuario
        const favoritosQuery = query(
          collection(db, 'favoritos'),
          where('id_user', '==', idUsuario)
        );
    
        const favoritosSnapshot = await getDocs(favoritosQuery);
    
        // Almacena los IDs de los platillos favoritos del usuario
        const Favoritos = []
        favoritosSnapshot.docs.map((doc) => {
          Favoritos.push({
            id: doc.id,
            id_platillo: doc.data().id_platillo.trim(),
          })
        });

        // Paso 2: Consultar información de cada platillo y su restaurante asociado
        const platillosPromises = Favoritos.map(async (favorito) => {
          const platilloRef = doc(db, 'platillo', favorito.id_platillo);
          const platilloSnapshot = await getDoc(platilloRef);
    
          if (platilloSnapshot) {
            const platilloData = platilloSnapshot.data();
            // Obtén el nombre del restaurante asociado al platillo
            const restauranteRef = doc(db, 'restaurant', platilloData.id_restaurante.trim());
            const restauranteSnapshot = await getDoc(restauranteRef);
    
            if (restauranteSnapshot) {
              const restauranteData = restauranteSnapshot.data();
    
              // Devuelve la información del platillo y del restaurante asociado
                data.push({
                    id: favorito.id,
                    id_user: idUsuario,
                    id_platillo: platilloSnapshot.id, 
                    ...platilloData,
                    restaurante: restauranteData.nombre,
                });
            }
          }
        });
    
        // Espera a que todas las promesas se resuelvan antes de retornar
        await Promise.all(platillosPromises);
    
        // Filtra los resultados para eliminar platillos sin restaurante asociado
        //const resultadoFinal = platillosConRestaurantes.filter(item => item !== null);
    
        return data;
      } catch (error) {
        console.error('Error al obtener favoritos del usuario:', error);
        throw error;
      }
}

export const deleteFavorite = async (id) => {
  try {
    console.warn(id);
    await deleteDoc(doc(db,'favoritos',id))
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const addFavorite = async (nuevoFavorito) => {
  try {
    const favoritosRef = collection(db, 'favoritos');
    const nuevoDocRef = await addDoc(favoritosRef, nuevoFavorito);

    return nuevoDocRef
  } catch (error) {
    console.error('Error:', error);
    throw error;
  } 
}



export default {getFavoritos}
import { ref,getDownloadURL, listAll  } from 'firebase/storage';
import {db, storage} from '../firebase'
import { collection, getDocs  } from "firebase/firestore";

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

export const getListaImagenes = async() =>{
  try{
    const listRef = ref(storage, 'categorias');

    // Find all the prefixes and items.
      listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(ref(itemRef))
          . then((url)=>{
            console.info(url);
          })
        });
        
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
    /*
    console.info(listRef.fullPath)
    getDownloadURL(ref(listRef))
    . then((url)=>{
      console.info(url);
    })
    console.info(url);
    */
  } catch (error) {
    console.log(error)
  }
}

export default {getCategories, getListaImagenes}
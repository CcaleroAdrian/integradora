import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import {setCategory} from '../actions/platilloActions';
import CardWithImage from "../components/CardWithImage";
import CategoryCard from "../components/CategoryCard";
import PromotionalCard from "../components/PromotionalCard";
import FoodCard from "../components/FoodCard";
import { getCategories } from "../services/categories";
import { colors } from "../utils/palette";

// Trabajar datos con Firebase
import { getNewPlatillos } from "../services/platillos";


const datos = [
  {
    id: 1,
    imagen: require("../../assets/categorias/hambuerguesa.jpg"),
    title: "Hamburguesa Clásica",
    oldPrice: 8.99,
    newPrice: 6.99,
  },
  {
    id: 2,
    imagen: require("../../assets/categorias/postres.jpg"),
    title: "Pizza Margarita",
    oldPrice: 12.99,
    newPrice: 9.99,
  },
  {
    id: 3,
    imagen: require("../../assets/categorias/saludable.jpg"),
    title: "Ensalada César",
    oldPrice: 7.99,
    newPrice: 5.99,
  },
  {
    id: 4,
    imagen: require("../../assets/categorias/sushi.jpg"),
    title: "Tradicional Sushi",
    oldPrice: 18.99,
    newPrice: 15.99,
  },
  {
    id: 5,
    imagen: require("../../assets/categorias/hambuerguesa.jpg"),
    title: "Otra hamburguesa Clásica pero mas prrona",
    oldPrice: 8.99,
    newPrice: 6.99,
  },
  {
    id: 6,
    imagen: require("../../assets/categorias/postres.jpg"),
    title: "Nueva pizza mejor que la anterior",
    oldPrice: 12.99,
    newPrice: 9.99,
  },
];


export default function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.platillo.categories);

  const [platillos, setPlatillos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const busquedaCategoria = (categoria) =>{
    console.log(categoria.id);
    navigation.navigate('find', {categoria: categoria.id})
  }

  useEffect(() => {
    // Obtener categorias
    const fetchData = async () => {
      try {
        const result = await getCategories();
        dispatch(setCategory(result))

        //console.log(result);
      } catch (error) {
        console.error("Error al obtener categorias:", error);
      }
    };

    // Obtener platillos recien agregados
    const platillos = async () =>{
      try {
        const result = await getNewPlatillos();
        setPlatillos(result);
        //console.warn(result);
      } catch (error) {
        console.warn("Error al obtener platillos:", error);
      }
    }



    if(categories.length === 0){
      fetchData();
    }
    platillos();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      {/** Cuadro de busqueda -> exportar como componente */}
      <Searchbar
          placeholder="Buscar comida"
          onChangeText={onChangeSearch}
          value={searchQuery}
          elevation ={2}
          style={{backgroundColor:'white', color: 'black', marginTop: 25}}
          iconColor = {colors.text.primary}
      />

      <View style={styles.banner}>
        <CardWithImage
          imageSource={require("../../assets/brands/banner.jpg")}
        />
      </View>

      {/** Categorias */}
      <View style={styles.seccion_categorias}>
        <Text style={styles.title}>Categorias</Text>
        <FlatList
          data={categories}
          horizontal={true} // Configura el desplazamiento horizontal
          contentContainerStyle={styles.contentContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryCard imageSource={item.data.imagen} title={item.data.text} onPress={() => busquedaCategoria(item)}/>
          )}
        />
      </View>

      {/** Carusel con las promociones - Top 5*/}
      <View style={styles.seccion}>
        <Text style={styles.title}>!Promo especial!</Text>

        <FlatList
          data={datos}
          horizontal={true} // Configura el desplazamiento horizontal
          contentContainerStyle={styles.contentContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PromotionalCard
              imageSource={item.imagen}
              title={item.title}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
            />
          )}
        />
      </View>

      <View style={{ margin: 10 }}>
        <Text style={styles.title}>Lo más nuevo</Text>
        {platillos.map((item) => (
          <FoodCard
            key={item.id}
            imageSource={item.imagen}
            title={item.nombre}
            restaurant={item.restaurant}
            ranking={item.calificacion}
            price={item.precio}
            time={item.tiempo_preparacion}
            id={item.id}
            category={categories.find(categoria=> categoria.id == item.categoria.trim()).data.text}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    marginVertical: 10,
  },
  scroll: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: colors.background.white,
  },
  search: {
    flexDirection: "row",
    paddingHorizontal: 8,
    height: 50,
    width: "100%",
    marginTop: 15,
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    color: colors.text.gray,
  },
  searchIcon: {
    padding: 5,
    color: colors.text.mediumGray,
  },
  seccion: {
    height: 310,
  },
  seccion_categorias: {
    flex: 1,
  },
  contentContainer: {
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    width: 120, // Ancho de cada elemento de la lista
    height: 150, // Alto de cada elemento de la lista
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  imagen: {
    width: "100%",
    height: 200,
  },
});

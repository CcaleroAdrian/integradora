import * as React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import CardWithImage from "../components/CardWithImage";
import CategoryCard from "../components/CategoryCard";
import PromotionalCard from "../components/PromotionalCard";
import FoodCard from "../components/FoodCard";
import { getCategories } from "../services/categories";
import { colors } from "../utils/palette";

const data = [
  { id: 1, imagen: require("../../assets/icons/pizza.png"), text: "Pizza" },
  {
    id: 2,
    imagen: require("../../assets/icons/fastFood.png"),
    text: "Fast Food",
  },
  { id: 3, imagen: require("../../assets/icons/sushi.png"), text: "Sushi" },
  {
    id: 4,
    imagen: require("../../assets/icons/italiana.png"),
    text: "Italiana",
  },
  {
    id: 5,
    imagen: require("../../assets/icons/mexicana.png"),
    text: "Mexicana",
  },
  {
    id: 6,
    imagen: require("../../assets/icons/saludable.png"),
    text: "Saludable",
  },
  {
    id: 7,
    imagen: require("../../assets/icons/desayunos.png"),
    text: "Desayunos",
  },
  {
    id: 8,
    imagen: require("../../assets/icons/postres.png"),
    text: "Postres y Helados",
  },
  {
    id: 9,
    imagen: require("../../assets/icons/cafeteria.png"),
    text: "Cafeterias",
  },
  {
    id: 10,
    imagen: require("../../assets/icons/mariscos.png"),
    text: "Mariscos",
  },
  {
    id: 11,
    imagen: require("../../assets/icons/parrillada.png"),
    text: "A la Parrilla",
  },
  { id: 12, imagen: require("../../assets/icons/casera.png"), text: "Casera" },
];

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

const productos = [
  {
    id: 1,
    imagen: require("../../assets/platillo.jpg"),
    title: "Ravioli del Bosque Encantado pero mas chido que el siguiente",
    restaurant: "Tutsy food",
    ranking: 4.9,
    price: "30.00",
    time: 30,
    category: "category",
  },
  {
    id: 2,
    imagen: require("../../assets/platillo.jpg"),
    title: "Ravioli del Bosque Encantado",
    restaurant: "Tutsy food",
    ranking: 4.3,
    price: "30.00",
    time: 30,
    category: "category",
  },
  {
    id: 3,
    imagen: require("../../assets/platillo.jpg"),
    title: "Ravioli del Bosque Encantado",
    restaurant: "Tutsy food",
    ranking: 4.6,
    price: "30.00",
    time: 30,
    category: "category",
  },
  {
    id: 4,
    imagen: require("../../assets/platillo.jpg"),
    title: "Ravioli del Bosque Encantado",
    restaurant: "Tutsy food",
    ranking: 4.9,
    price: "30.00",
    time: 30,
    category: "category",
  },
  {
    id: 5,
    imagen: require("../../assets/platillo.jpg"),
    title: "Ravioli del Bosque Encantado",
    restaurant: "Tutsy food",
    ranking: 4.7,
    price: "30.00",
    time: 30,
    category: "category",
  },
  {
    id: 6,
    imagen: require("../../assets/platillo.jpg"),
    title: "Ravioli del Bosque Encantado",
    restaurant: "Tutsy food",
    ranking: 4.7,
    price: "30.00",
    time: 30,
    category: "category",
  },
  {
    id: 7,
    imagen: require("../../assets/platillo.jpg"),
    title: "Ravioli del Bosque Encantado",
    restaurant: "Tutsy food",
    ranking: 4.4,
    price: "30.00",
    time: 30,
    category: "category",
  },
  {
    id: 8,
    imagen: require("../../assets/platillo.jpg"),
    title: "Ravioli del Bosque Encantado",
    restaurant: "Tutsy food",
    ranking: 4.2,
    price: "30.00",
    time: 30,
    category: "category",
  },
  {
    id: 9,
    imagen: require("../../assets/platillo.jpg"),
    title: "Ravioli del Bosque Encantado",
    restaurant: "Tutsy food",
    ranking: 4.3,
    price: "30.00",
    time: 30,
    category: "category",
  },
  {
    id: 10,
    imagen: require("../../assets/platillo.jpg"),
    title: "Ravioli del Bosque Encantado",
    restaurant: "Tutsy food",
    ranking: 5.0,
    price: "30.00",
    time: 30,
    category: "category",
  },
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCategories();
        //console.warn(result);
      } catch (error) {
        console.error("Error al cargar documentos:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      {/** Cuadro de busqueda -> exportar como componente */}
      <View style={styles.search}>
        <Icon name="search" color="gray" size={20} />
        <TextInput
          style={styles.input}
          placeholder="  Bobba Tea"
          value={searchQuery}
        />
      </View>

      <View style={styles.banner}>
        <CardWithImage
          imageSource={require("../../assets/brands/banner.jpg")}
        />
      </View>

      {/** Categorias */}
      <View style={styles.seccion_categorias}>
        <Text style={styles.title}>Categorias</Text>
        <FlatList
          data={data}
          horizontal={true} // Configura el desplazamiento horizontal
          contentContainerStyle={styles.contentContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryCard imageSource={item.imagen} title={item.text} />
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

      {/** <FoodCard name={productos[0].title} imageSource={productos[0].imagen} price={productos[0].price} ranking={productos[0].ranking}/>*/}
      <View style={{ margin: 10 }}>
        <Text style={styles.title}>Lo más nuevo</Text>
        {productos.map((item) => (
          <FoodCard
            key={item.id}
            imageSource={item.imagen}
            title={item.title}
            restaurant={item.restaurant}
            ranking={item.ranking}
            price={item.price}
            time={item.time}
            category={item.category}
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
    alignItems: "center",
    borderRadius: 50,
    paddingHorizontal: 8,
    height: 50,
    width: "100%",
    marginBottom: 10,
    backgroundColor: colors.background.light,
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

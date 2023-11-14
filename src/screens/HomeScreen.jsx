import * as React from 'react';
import { Text, View, TextInput, StyleSheet, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";
import CardWithImage from '../components/CardWithImage'
import CategoryCard from '../components/CategoryCard'
import CardWithBackgroundImage from '../components/CardWithBackgroundImage';
import FoodCard from '../components/FoodCard';
import {getCategories} from '../services/categories'

const data = [
  {id: 1,imagen: require('../../assets/categorias/comida_mexicana.jpg'), text:"Mexicana"},
  {id: 2,imagen: require('../../assets/categorias/desayunos.png'), text:"Desayunos"},
  {id: 3,imagen: require('../../assets/categorias/hambuerguesa.jpg'), text:"Hamburguesa"},
  {id: 4,imagen: require('../../assets/categorias/pizza.jpg'), text:"Pizza"},
  {id: 5,imagen: require('../../assets/categorias/postres.jpg'), text:"Postres"},
  {id: 6,imagen: require('../../assets/categorias/saludable.jpg'), text:"Saludable"},
  {id: 7,imagen: require('../../assets/categorias/sushi.jpg'), text:"Sushi"}
]

const datos = [
  {id: 1,imagen: require('../../assets/categorias/comida_mexicana.jpg'), title:"Mexicana", description:"comida mexicana"},
  {id: 2,imagen: require('../../assets/categorias/desayunos.png'), title:"Desayunos", description:"Los mejores desayunos"},
  {id: 4,imagen: require('../../assets/categorias/pizza.jpg'), title:"Pizza", description:"Tradicionales Pizzas"},
  {id: 3,imagen: require('../../assets/categorias/hambuerguesa.jpg'), title:"Hamburguesa", description:"Ricas hamburguesas"},
  
  {id: 5,imagen: require('../../assets/categorias/postres.jpg'), title:"Postres", description:"Increibles Postres"},
  {id: 6,imagen: require('../../assets/categorias/saludable.jpg'), title:"Saludable", description:"La mejor comida saludable"},
  {id: 7,imagen: require('../../assets/categorias/sushi.jpg'), title:"Sushi", description:"Tradicional Sushi"}
]

const productos = [
  {id: 1, imagen:require('../../assets/platillo.jpg'), title: 'Comida', ranking:5, price:"30.00"},
  {id: 2, imagen:require('../../assets/platillo.jpg'), title: 'Comida', ranking:5, price:"30.00"},
  {id: 3, imagen:require('../../assets/platillo.jpg'), title: 'Comida', ranking:5, price:"30.00"},
  {id: 4, imagen:require('../../assets/platillo.jpg'), title: 'Comida', ranking:5, price:"30.00"},
  {id: 5, imagen:require('../../assets/platillo.jpg'), title: 'Comida', ranking:5, price:"30.00"},
  {id: 6, imagen:require('../../assets/platillo.jpg'), title: 'Comida', ranking:5, price:"30.00"},
  {id: 7, imagen:require('../../assets/platillo.jpg'), title: 'Comida', ranking:5, price:"30.00"},
  {id: 8, imagen:require('../../assets/platillo.jpg'), title: 'Comida', ranking:5, price:"30.00"},
  {id: 9, imagen:require('../../assets/platillo.jpg'), title: 'Comida', ranking:5, price:"30.00"},
  {id: 10, imagen:require('../../assets/platillo.jpg'), title: 'Comida', ranking:5, price:"30.00"}
]

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCategories();
        console.log(result);
      } catch (error) {
        console.error('Error al cargar documentos:', error);
      }
    };

    fetchData();
  }, []);
    return (
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.home}>
          <CardWithImage imageSource={require('../../assets/comida.jpg')} text="Bienvenido"/>
        </View>

        {/** Cuadro de busqueda -> exportar como componente */}
        <View style={styles.search}>
          <Icon name="search" color="gray" size={20} />
          <TextInput
            style={styles.input}
            placeholder="  Buscar comida..."
            value={searchQuery}
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
              <CategoryCard imageSource={item.imagen} title={item.text}/>
              )}
              />
        </View>

        {/** Carusel con las promociones - Top 5*/}
        <View style={styles.seccion}>
          <Text style={styles.title}>Promociones</Text>
          
          <FlatList
            data={datos}
            horizontal={true} // Configura el desplazamiento horizontal
            contentContainerStyle={styles.contentContainer}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardWithBackgroundImage imageSource={item.imagen} title={item.title} description={item.description}/>
              )}
              />
        </View>

        {/** <FoodCard name={productos[0].title} imageSource={productos[0].imagen} price={productos[0].price} ranking={productos[0].ranking}/>*/}
        <View style={{margin: 10}}>
          <Text style={styles.title}>Lo más nuevo</Text>
          {
            productos.map((item) => (
              <FoodCard key={item.id} name={item.title} imageSource={item.imagen} price={item.price} ranking={item.ranking}/>
            ))
          }
        </View>
      </ScrollView>
      
  );
}

const styles = StyleSheet.create({
  home: {
    height:120, 
    width:'100%',
    marginBottom: '30%',
  },
  scroll: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    paddingHorizontal: 5,
    height: 50,
    width: '100%',
    marginBottom: 10
  },
  input: {
    fontSize: 18,
  },
  searchIcon: {
    padding: 5,
  },
  seccion: {
    paddingHorizontal: 5,
    margin: 10,
    height: 330,
  },
  seccion_categorias: {
    flex: 1,
    height: 190
  },
  contentContainer: {
    height: '100%',
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  item: {
    width: 120, // Ancho de cada elemento de la lista
    height: 150, // Alto de cada elemento de la lista
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  imagen:{
    width: '100%',
    height: 200, 
  }
});
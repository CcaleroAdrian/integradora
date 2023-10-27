import * as React from 'react';
import { Text, View, TextInput, StyleSheet, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";
import CardWithImage from '../components/CardWithImage'
import CategoryCard from '../components/CategoryCard'
import CardWithBackgroundImage from '../components/CardWithBackgroundImage';
import FoodCard from '../components/FoodCard';

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
  {id: 3,imagen: require('../../assets/categorias/hambuerguesa.jpg'), title:"Hamburguesa", description:"Ricas hamburguesas"},
  {id: 4,imagen: require('../../assets/categorias/pizza.jpg'), text:"Pizza", description:"Tradicionales Pizzas"},
  {id: 5,imagen: require('../../assets/categorias/postres.jpg'), text:"Postres", description:"Increibles Postres"},
  {id: 6,imagen: require('../../assets/categorias/saludable.jpg'), text:"Saludable", description:"La mejor comida saludable"},
  {id: 7,imagen: require('../../assets/categorias/sushi.jpg'), text:"Sushi", description:"Tradicional Sushi"}
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

    return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <CardWithImage imageSource={require('../../assets/comida.jpg')} text="Bienvenido"/>
      {/** Cuadro de busqueda -> exportar como componente */}
      
      <View style={styles.container}>
        <Icon name="search" color="gray" size={20} />
        <TextInput
          style={styles.input}
          placeholder="  Buscar comida..."
          value={searchQuery}
        />
      </View>
      {/** Categorias */}
      <View style={styles.seccion_categorias}>
        <FlatList
          data={data}
          horizontal={true} // Configura el desplazamiento horizontal
          contentContainerStyle={styles.contentContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
            <CategoryCard imageSource={item.imagen} title={item.text}/>
            </View>
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
            <View style={styles.item}>
              <CardWithBackgroundImage imageSource={require('../../assets/categorias/desayunos.png')} title={item.title} description={item.description}/>
            </View>
          )}
        />
      </View>
      {/** <FoodCard name={productos[0].title} imageSource={productos[0].imagen} price={productos[0].price} ranking={productos[0].ranking}/>*/}
      <SafeAreaView>
        <FlatList
            data={productos}
            contentContainerStyle={styles.contentContainer}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <FoodCard name={item.title} imageSource={item.imagen} price={item.price} ranking={item.ranking}/>
              </View>
            )}
          />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    paddingHorizontal: 5,
    margin: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  searchIcon: {
    padding: 5,
  },
  seccion: {
    paddingHorizontal: 5,
    margin: 10,
  },
  seccion_categorias: {
    flex: 1,
    height:150,
  },
  contentContainer: {
    height: '100%', // Asegura que el contenido de FlatList tenga la misma altura que los elementos
  },
  title:{
    fontSize: 20,
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
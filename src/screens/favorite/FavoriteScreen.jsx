import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

const items = [
  { id: 1, img: require('/assets/comida.jpg'), title: "Domino´s (Madre Selva)", icon: 'staro', descr: "4.1 $$$ - Pizza/Americana", time: "18-33Min - MX$28", ad: "Ahorros de hasta MX$99" },
  { id: 2, img: require('/assets/categorias/desayunos.png'), title: "Tio Toño", icon: 'star', descr: "5.0 $$$ - Desayuno/Mexicano", time: "20-30Min - MX$40", ad: "Ahorros de hasta MX$70" },
  { id: 3, img: require('/assets/categorias/hambuerguesa.jpg'), title: "McDonalds", icon: 'staro', descr: "3.5 $$$ - Hambuerguesa/Americana", time: "15-25Min - MX$33", ad: "Ahorros de hasta MX$80" },
]

export default function Offers() {

  const [page, setpage] = useState(false)
  const onHandlePage = () => {
    setpage((prevState) => !prevState)
  }

  if (page) return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../../../assets/vacio.png')} style={{ width: 100, height: 100 }} />
      <Text style={{ fontSize: 18, fontWeight: 'bold', }}>No tienes tiendas favoritas todavia</Text>
      <Text style={{ fontSize: 14, marginBottom: 15 }}>Agregar tiendas que te gustan a favoritos</Text>
      <TouchableOpacity style={styles.buttonV} onPress={onHandlePage}>
        <Text style={styles.buttonText}>Buscar Tiendas</Text>
      </TouchableOpacity>
    </View>

  )

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) =>
          <View style={styles.card} >
            <View>
              <Image source={item.img} style={styles.image} />
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.cardText}>{item.title}</Text>
              <Text style={{ marginBottom: 5 }}><Icon name={item.icon} color={'#FFCD00'} size={20} />{item.descr}</Text>
              <Text style={{ marginBottom: 5 }}>{item.time}</Text>
              <TouchableOpacity style={styles.button} onPress={() => alert("Botón presionado")}>
                <Text style={styles.buttonText}>{item.ad}</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
      <TouchableOpacity onPress={onHandlePage}>
        <Text style={{ marginTop: 10, fontSize: 18 }}>No hay más tiendas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center'
  },
  contentContainer: {
    height: 'auto', // Asegura que el contenido de FlatList tenga la misma altura que los elementos
  },
  card: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 16,
    height: 140
  },
  image: {
    height: '100%',
    width: 100,
    borderRadius: 10,
    objectFit: 'cover'
  },
  cardBody: {
    paddingLeft: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#FFD8A3',
    borderRadius: 10,
    padding: 5,
  },
  buttonV: {
    backgroundColor: '#FFFFF',
    padding: 8,
    borderRadius: 5,
    borderWidth: 4, // Grosor del borde
    borderColor: '#FFD8A3', // Color del borde
    borderRadius: 10
  },
  buttonText: {
    color: '#FF6746',
    fontWeight: 'bold'
  }
});
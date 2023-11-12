import React, { useState } from 'react';
import { View, Text, Image, ScrollView, FlatList, TextInput, Button, StyleSheet } from 'react-native';

const comentarios= [
    {
        id: 1,
        imagenPerfil: require('../../../assets/profile.jpg'),
        comentario: 'Excelente platillo',
        usuario: 'German Torres',
        calificacion: 4.5
    },
    {
        id:2,
        imagenPerfil: require('../../../assets/profile.jpg'),
        comentario: 'No fue entregado a tiempo',
        usuario: 'Diana Flores',
        calificacion: 3.5
    }
]

const platillo = {
    imagen: require('../../../assets/platillo.jpg'),
    nombre: 'Chillaquiles Verdes',
    precio: '80.00',
    descripcion: 'Chilaquiles verdes, acompañados de frijoles refritos.',
    ranking: '4.6'
}

export default function ReviewsScreen () {
  // Supongamos que route.params contiene los datos del platillo y comentarios anteriores.
  //const platillo = route.params.platillo;
  // const comentariosAnteriores = route.params.comentariosAnteriores;

  const [nuevaReview, setNuevaReview] = useState('');

  const agregarReview = () => {
    // Aquí puedes implementar la lógica para agregar la nueva revisión al backend.
    console.log('Nueva revisión:', nuevaReview);
    // También puedes actualizar la lista de comentarios anteriores si es necesario.
  };

  const CommentItem = ({ comentario }) => (
    <View style={styles.comentarioContainer}>
      <View style={styles.comentarioHeader}>
        <Image source={comentario.imagenPerfil} style={styles.imagenPerfil} />
        <View style={styles.infoUsuario}>
          <Text style={styles.nombreUsuario}>{comentario.usuario}</Text>
          <Text style={styles.calificacionUsuario}>Calificación: {comentario.calificacion}</Text>
        </View>
      </View>
      <Text style={styles.comentario}>{comentario.comentario}</Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.platilloContainer}>
        <Image source={platillo.imagen} style={styles.platilloImage} />
        <Text style={styles.platilloName}>{platillo.nombre}</Text>
        <Text style={styles.platilloInfo}>Precio: ${platillo.precio}</Text>
        <Text style={styles.platilloInfo}>Descripción: {platillo.descripcion}</Text>
        <Text style={styles.platilloInfo}>Ranking: {platillo.ranking}</Text>
      </View>

      <Text style={styles.titulo}>Comentarios Anteriores:</Text>
      {
        comentarios.map((item)=>(
            <CommentItem comentario={item} key={item.id}/>
        ))
      }

      <Text style={styles.titulo}>Añadir Tu Review:</Text>
      <TextInput
        multiline
        numberOfLines={4}
        placeholder="Escribe tu revisión aquí..."
        value={nuevaReview}
        onChangeText={(text) => setNuevaReview(text)}
        style={styles.inputReview}
      />
      <Button title="Agregar Review" onPress={agregarReview} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    platilloContainer: {
      margin: 16,
    },
    platilloImage: {
      width: '100%',
      height: 200,
    },
    platilloName: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 8,
    },
    platilloInfo: {
      fontSize: 16,
      marginVertical: 4,
    },
    titulo: {
      fontSize: 18,
      fontWeight: 'bold',
      margin: 16,
    },
    comentarioContainer: {
      margin: 16,
    },
    comentarioHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    imagenPerfil: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 8,
    },
    infoUsuario: {
      flex: 1,
    },
    nombreUsuario: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    calificacionUsuario: {
      fontSize: 14,
      color: '#888',
    },
    comentario: {
      fontSize: 16,
    },
    inputReview: {
      margin: 16,
      padding: 10,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
    },
  });
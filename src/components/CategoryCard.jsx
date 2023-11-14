import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const CategoryCard = ({ title, imageSource }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    width: 150,
  },
  image: {
    width: '100%',
    height: 100, // Ajusta la altura de la imagen según tus necesidades
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo semi-transparente para el título
    color: 'white',
    padding: 10,
  },
});

export default CategoryCard;

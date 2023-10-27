import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const FoodCard = ({ name, imageSource, price, ranking }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>Precio: ${price}</Text>
      <Text style={styles.rank}>Ranking: {ranking}/5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 150, // Ajusta la altura de la imagen según tus necesidades
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginBottom: 5,
  },
  rank: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
});

export default FoodCard;

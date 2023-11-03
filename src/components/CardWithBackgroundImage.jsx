import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const CardWithBackgroundImage = ({ imageSource, title, description }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.backgroundImage} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    height: '100%', // Ajusta la altura de la tarjeta según tus necesidades
    width: 250,

  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente para el título y descripción
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
});

export default CardWithBackgroundImage;

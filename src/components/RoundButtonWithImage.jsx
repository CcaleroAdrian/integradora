import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const RoundButtonWithImage = ({ imageSource, text }) => {
  return (
    <View>
        <Text style={styles.text}>{text}</Text>
        <TouchableOpacity style={styles.button}>
            <Image source={imageSource} style={styles.image} />
        </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  button: {
    width: 90, // Ajusta el ancho según tus necesidades
    height:90, // Ajusta el alto según tus necesidades
    borderRadius: 50, // Un radio de la mitad del ancho/alto hará que sea redondo
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 60,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute',
    marginBottom: 15,
  },
});

export default RoundButtonWithImage;

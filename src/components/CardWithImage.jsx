import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CardWithImage = ({ imageSource, text }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} resizeMode="cover"/>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 150,
    borderRadius: 30,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default CardWithImage;
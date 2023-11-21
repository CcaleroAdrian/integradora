import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {colors} from '../utils/palette';

const CardWithBackgroundImage = ({ imageSource, title, oldPrice, newPrice }) => {

  const length = 32
  const formatedTitle = title.length > length ? title.substring(0,length) + '...' : title

  return (
    <View style={styles.card}>
      <View style={styles.containerImage}>
        <Image source={imageSource} style={styles.backgroundImage} resizeMode="cover"/>
      </View>
      <View style={styles.containerPromo}>
        <Text style={styles.promo}>Solo nuevos usuarios</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.formatedTitle}>{formatedTitle}</Text>
        </View>
        <View style={styles.prices}>
          <Text style={styles.newPrice}>MX${newPrice}</Text>
          <Text style={styles.oldPrice}>MX${oldPrice}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pide ya!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    margin: 8,
    width: 150,
    backgroundColor: colors.background.white,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  containerImage: {
    height: 100,
    overflow: 'hidden',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  containerPromo: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 3,
    backgroundColor: colors.background.primary,
  },
  promo: {
    color: colors.text.white,
    fontWeight: '900',
  },
  content: {
    padding: 5,
  },
  title: {
    height: 40,
  },
  formatedTitle: {
    color: colors.text.black,
    fontWeight: '700',
    fontSize: 16,
  },
  prices: {
    marginVertical: 4,
  },
  newPrice: {
    color: colors.text.mediumGray,
    fontSize: 16,
    fontWeight: '700',
  },
  oldPrice: {
    color: colors.text.lightGray,
    fontWeight: '900',
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  button: {
    backgroundColor: colors.background.primary,
    padding: 8,
    borderRadius: 5,
    width: 90,
  },
  buttonText: {
    color: colors.text.white,
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
  },
});

export default CardWithBackgroundImage;

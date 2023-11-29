import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/palette';

const CategoryCard = ({ title, imageSource }) => {
  return (
    <View style={styles.card}>
      <View style={styles.containerImage}>
        <Image source={{uri:imageSource}} style={styles.image} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 90,
    height: 130,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImage: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background.white,
    borderWidth: 1,
    borderColor: colors.border.light,
    width: 70,
    height: 70,
    padding: 8,
    borderRadius: 35,
  },
  image: {
    width: 45,
    height: 45,
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.text.auxiliar,
  },
});

export default CategoryCard;

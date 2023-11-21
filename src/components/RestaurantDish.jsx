import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { colors } from "../utils/palette";

const RestaurantDish = ({ data }) => {
  return (
    <View style={styles.containerDish}>
      <Image source={data.imagen} style={styles.dishImage} />
      <View style={styles.containerData}>
        <Text style={styles.title}>{data.nombre}</Text>
        <Text style={styles.description}>{data.descripcion}</Text>
        <Text style={styles.price}>MX ${data.precio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerDish: {
    flex: 1,
    marginVertical: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.background.white,
    padding: 8,
  },
  dishImage: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  title: {
    color: colors.text.black,
    fontSize: 16,
    fontWeight: "800",
  },
  containerData: {
    padding: 8,
    width: "60%",
  },
  description: {
    color: colors.text.mediumGray,
  },
  price: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: "800",
    marginTop: 6,
  }
});

export default RestaurantDish;

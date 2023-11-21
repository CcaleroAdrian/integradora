import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { colors } from "../utils/palette";

const RestaurantModalFood = ({ data }) => {
  const [counter, setCounter] = useState(1);

  return (
    <View style={styles.containerGlobal}>
      <View style={styles.containerDish}>
        <Image source={data.imagen} style={styles.dishImage} />
        <View style={styles.containerData}>
          <Text style={styles.title}>{data.nombre}</Text>
          <Text style={styles.description}>{data.descripcion}</Text>
          <Text style={styles.price}>MX ${data.precio}</Text>
        </View>
      </View>
      <View style={styles.containerControls}>
        <View style={styles.containerCounter}>
          <Pressable
            style={[ styles.buttonControl]}
            disabled={counter === 1}
            onPress={() => setCounter(counter-1)}
          >
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <View style={styles.counter}>
            <Text style={styles.counterText}>{counter}</Text>
          </View>
          <Pressable
            style={[styles.buttonControl]}
            onPress={() => setCounter(counter+1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
        <View style={styles.containerButton}>
          <Pressable
            style={[styles.buttonAdd]}
            onPress={() => setCounter(counter+1)}
          >
            <Text style={styles.buttonAddText}>Añadir al carrito</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerGlobal: {
    flex: 1,
    flexDirection: "column",
  },
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
  },
  containerCounter: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  counter: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: colors.text.black,
    width: 60,
    padding: 10,
  },
  counterText: {
    fontSize: 20,
    fontWeight: "800",
  },
  buttonControl: {
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.border.secondary,
  },
  buttonText: {
    fontSize: 35,
    fontWeight: "800",
    color: colors.text.secondary,
  },
  containerControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonAdd: {
    backgroundColor: colors.background.secondary,
    padding: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAddText: {
    color: colors.text.white,
    fontSize: 16,
    fontWeight: "800",
  }
});

export default RestaurantModalFood;

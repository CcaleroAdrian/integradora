import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { colors } from "../utils/palette";
import { useState } from "react";

const CartItem = ({ data }) => {
  const len = 30;
  const formattedDescription =
    data.descripcion.length > len
      ? data.descripcion.substring(0, len) + "..."
      : data.descripcion;
  const [counter, setCounter] = useState(data.amount);

  return (
    <View style={styles.containerItem}>
      <View style={styles.containerImage}>
      <Image source={data.imagen} style={styles.itemImage} />
      </View>
      <View style={styles.containerData}>
        <Text style={styles.title}>{data.nombre}</Text>
        <Text style={styles.description}>{formattedDescription}</Text>
        <Text style={styles.price}>MX ${data.precio}</Text>
        <View style={styles.containerControls}>
          <Pressable
            style={styles.controlButton}
            onPress={() => setCounter(counter-1)}
            disabled={counter === 1}
          >
            <Text style={styles.controlButtonText}>-</Text>
          </Pressable>
          <Text style={styles.counter}>{counter}</Text>
          <Pressable
            style={styles.controlButton}
            onPress={() => setCounter(counter+1)}
          >
            <Text style={styles.controlButtonText}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.containerTrash}>
        <Image
          source={require("../../assets/icons/trash.png")}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    marginVertical: 4,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.background.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  containerImage: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  itemImage: {
    width: 90,
    height: 90,
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
    fontSize: 14,
    fontWeight: "800",
    marginTop: 6,
  },
  containerControls: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  controlButton: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.border.light,
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  controlButtonText: {
    fontSize: 16,
    fontWeight: "800",
    color: colors.text.mediumGray,
  },
  counter: {
    color: colors.text.black,
    fontSize: 16,
    fontWeight: "800",
  },
  containerTrash: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "10%",
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default CartItem;

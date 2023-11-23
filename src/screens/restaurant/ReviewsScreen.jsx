import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";
import CartItem from "../../components/CartItem";
import { colors } from "../../utils/palette";

const items = [
  {
    id: 1,
    imagen: require("../../../assets/categorias/desayunos.png"),
    nombre: "Desayuno americano",
    precio: 20.0,
    descripcion:
      "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
    amount: 1,
  },
  {
    id: 2,
    imagen: require("../../../assets/categorias/postres.jpg"),
    nombre: "Desayuno Frances",
    precio: 40.0,
    descripcion:
      "Cafe Capuccino con un Cruisane de jamón y queso y fruta de elección",
    amount: 3,
  },
  {
    id: 3,
    imagen: require("../../../assets/categorias/comida_mexicana.jpg"),
    nombre: "Desayuno Mexicano",
    precio: 60.0,
    descripcion:
      "Un pinche Guajolocombo de atole champurrado y su tortita de tamal de rajas",
    amount: 2,
  },
];

export default function ReviewsScreen() {
  return (
    <View style={styles.globalContainer}>
      <View style={styles.containerItemList}>
        <ScrollView>
          {items.map((item, idx) => (
            <CartItem key={idx} data={item} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.containerSummary}>
        <View style={styles.containerTotal}>
          <Text style={styles.totalLabel}>Total a pagar:</Text>
          <Text style={styles.totalAmount}>$500.40</Text>
        </View>
        <View style={styles.summary}>
          <Pressable style={styles.buttonPay}>
            <Text style={styles.buttonPayText}>Proceder al pago</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    height: "100%",    
    justifyContent: "center",
    alignItems: "center",
  },
  containerItemList: {
    flex: 1,
  },
  containerSummary: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: colors.background.white,
  },
  containerTotal: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 150,
  },
  totalLabel: {
    color: colors.text.mediumGray,
    fontSize: 16,
    fontWeight: "800",
  },
  totalAmount: {
    color: colors.text.auxiliar,
    fontSize: 28,
    fontWeight: "800",
  },
  buttonPay: {
    backgroundColor: colors.background.tertiary,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPayText: {
    color: colors.text.white,
    fontSize: 16,
    fontWeight: "800",
  },
});

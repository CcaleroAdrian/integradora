import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  StyleSheet,
  Pressable,
} from "react-native";
import CartItem from "../../components/CartItem";
import PaymentCard from "../../components/PaymentCard";
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

const cards = [
  {
    id: 1,
    cardNumber: "2345345634561244",
    type: "credito",
    image: require("../../../assets/icons/mastercard.png"),
    selected: true,
  },
  {
    id: 2,
    cardNumber: "3456235798763456",
    type: "debito",
    image: require("../../../assets/icons/visa.png"),
    selected: false,
  },
];

export default function ReviewsScreen() {
  const [shoppingCart, setShoppingCart] = useState(items);
  const [modalVisible, setModalVisible] = useState(false);
  const [paymentCards, setpaymentCards] = useState(cards);

  const increaseAmount = (id) => {
    const newCart = shoppingCart.map((item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    );
    setShoppingCart(newCart);
  };

  const decrementAmount = (id) => {
    const newCart = shoppingCart.map((item) =>
      item.id === id ? { ...item, amount: item.amount - 1 } : item
    );
    setShoppingCart(newCart);
  };

  const calculateTotalAmount = () => {
    return shoppingCart.reduce(
      (total, item) => total + item.amount * item.precio,
      0
    );
  };

  const deleteItem = (id) => {
    const newCart = shoppingCart.filter((item) => item.id !== id);
    setShoppingCart(newCart);
  };

  return (
    <View style={styles.globalContainer}>
      <View style={styles.containerItemList}>
        <ScrollView>
          {shoppingCart.map((item) => (
            <CartItem
              key={item.id}
              data={item}
              increase={increaseAmount}
              decrement={decrementAmount}
              deleteSelf={deleteItem}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.containerSummary}>
        <View style={styles.containerTotal}>
          <Text style={styles.totalLabel}>Total a pagar:</Text>
          <Text style={styles.totalAmount}>
            $ {calculateTotalAmount().toFixed(2)}
          </Text>
        </View>
        <View style={styles.summary}>
          <Pressable
            style={styles.buttonPay}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.buttonPayText}>Proceder al pago</Text>
          </Pressable>
        </View>
      </View>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredModal}>
          <View style={styles.containerModal}>
            <Text style={styles.confirmLabel}>Confirmación de la orden</Text>
            <View style={styles.containerCards}>
              {paymentCards.map((item) => (
                <PaymentCard key={item.id} data={item} />
              ))}
            </View>
            <View>
              <Text>Dirección de entrega</Text>
            </View>
            <View style={styles.containerSummary}>
              <View style={styles.containerTotal}>
                <Text style={styles.totalLabel}>Total a pagar:</Text>
                <Text style={styles.totalAmount}>
                  $ {calculateTotalAmount().toFixed(2)}
                </Text>
              </View>
              <View style={styles.summary}>
                <Pressable
                  style={styles.buttonPay}
                  onPress={() => setModalVisible(true)}
                >
                  <Text style={styles.buttonPayText}>Realizar pago</Text>
                </Pressable>
              </View>
            </View>
            <Pressable
              style={[styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonCloseText}>X</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
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
    paddingTop: 14,
    paddingBottom: 30,
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
  centeredModal: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  containerModal: {
    width: "100%",
    paddingTop: 22,
    paddingHorizontal: 10,
    backgroundColor: colors.background.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: "80%",
  },
  buttonClose: {
    borderWidth: 1,
    borderColor: colors.border.primary,
    width: 30,
    height: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 5,
    right: 10,
  },
  buttonCloseText: {
    color: colors.text.primary,
    fontSize: 15,
    fontWeight: "900",
  },
  confirmLabel: {
    fontWeight: "900",
    fontSize: 22,
    color: colors.text.black,
  },
  containerCards: {
    flex: 1,
    marginTop: 10,
  },
});

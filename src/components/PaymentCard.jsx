import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { colors } from "../utils/palette";

const paymentCard = ({ data }) => {

  const formatedNumber = `${data.cardNumber.slice(0,4)} **** **** ${data.cardNumber.slice(12, 16)}`;

  return (
    <View style={styles.paymentCard}>
      <View style={styles.typeCard}>
        <Image
          source={data.image}
          style={styles.typeCardIcon}
        />
      </View>
      <View style={styles.dataCard}>
        <Text style={styles.cardLabel}>Tarjeta de Credito</Text>
        <Text style={styles.cardNumber}>{formatedNumber}</Text>
      </View>
      <View style={styles.cardCheck}>
        <View style={styles.check}>
          <View style={data.selected && styles.backgroundCheck}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentCard: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "rgba(0, 0, 0,0.5)",
    borderRadius: 12,
    marginBottom: 10,
  },
  typeCard: {
    width: "30%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  typeCardIcon: {
    width: 70,
    height: 45,
  },
  dataCard: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: "900",
    color: colors.text.white,
  },
  cardNumber: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.text.lightGray,
  },
  cardCheck: {
    width: "20%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  check: {
    overflow:  "hidden",
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 2,
    borderColor: colors.border.light,
  },
  backgroundCheck: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: colors.background.white,
  },
});

export default paymentCard;

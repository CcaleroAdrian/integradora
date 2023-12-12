import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { colors } from "../../utils/palette";
import ButtonFavorite from '../../components/favorite/ButtonFavorite';

const CardFavorite = ({ data }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.containerImage}>
      <Image source={{uri:data.imagen}} style={styles.itemImage} />
      </View>
      <View style={styles.containerData}>
        <Text style={styles.title}>{data.nombre}</Text>
        <Text style={styles.description}>{data.descripcion}</Text>
      </View>
      <View style={styles.containerTrash}>
        <ButtonFavorite platillo={data.id} />
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
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius:15,
  },
  containerImage: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  itemImage: {
    width: 90,
    height: 120,
    borderRadius: 15,
  },
  title: {
    color: colors.text.black,
    fontSize: 18,
    fontWeight: "800",
    marginBottom:10,
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

export default CardFavorite;

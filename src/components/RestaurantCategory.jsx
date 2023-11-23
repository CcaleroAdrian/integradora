import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import RestaurantDish from "../components/RestaurantDish";
import { colors } from "../utils/palette";

const RestaurantCategory = ({ title, data, showModal }) => {
  return (
    <View style={styles.containerGlobal}>
      <Text style={styles.title}>{title}</Text>
      {data.map((item) => (
        <RestaurantDish key={item.id} data={item} showModal={showModal}/>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  containerGlobal: {
    flex: 1,
    width: '100%',
    borderBottomWidth: 2,
    borderColor: colors.border.light,
    paddingBottom: 20,
  },
  title: {
    color: colors.text.black,
    fontSize: 22,
    fontWeight: "800",
    marginVertical: 12,
  },
});

export default RestaurantCategory;

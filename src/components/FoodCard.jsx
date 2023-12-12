import React from "react";
import { View, Image, Text, StyleSheet, ImageBackground } from "react-native";
import { spacing } from "../utils/spacing";
import { colors } from "../utils/palette";
import ButtonHeartOutline from '../components/favorite/ButtonHeartOutline';

const FoodCard = ({
  imageSource,
  title,
  restaurant,
  ranking,
  price,
  time,
  category,
  id,
}) => {
  const length = 32;
  const formatedTitle =
    title.length > length ? title.substring(0, length) + "..." : title;
  //console.info(category);
  return (
    <View style={styles.card}>
      { imageSource.length==0 ?
        <ImageBackground source={require('../../assets/icons/image.png')} style={styles.containerImage} >
          <View style={styles.like}>
            <ButtonHeartOutline platillo={id} />
          </View>
        </ImageBackground>
        :
        <ImageBackground source={{uri:imageSource}} style={styles.containerImage} >
          <View style={styles.like}>
            <ButtonHeartOutline platillo={id} />
          </View>
        </ImageBackground>
      }
      
      <View style={styles.data}>
        <View style={styles.containerRanking}>
          <Image
            source={require("../../assets/icons/star.png")}
            style={styles.iconStart}
          />
          <Text style={styles.ranking}>{ranking}</Text>
        </View>
        <Text style={styles.title}>{formatedTitle}</Text>
        <Text style={styles.restaurant}>{restaurant}</Text>
        <View style={styles.containerTime}>
          <Image
            source={require("../../assets/icons/time2.png")}
            style={styles.iconTime}
          />
          <Text style={styles.time}>{time}min aprox</Text>
        </View>
        <View style={styles.containerCategory}>
          <Text style={styles.category}>{category}</Text>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>MXN ${price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "white",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border.light,
    padding: 3,
    borderRadius: 10,
    marginBottom: 12,
  },
  containerImage: {
    width: "100%",
    height: 180,
    justifyContent: "flex-end",
    alignItems: "start",
    borderRadius: 13,
    overflow: "hidden",
  },
  like: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: colors.background.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  containerRanking: {
    position: "absolute",
    top: -15,
    left: 10,
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    width: 55,
    backgroundColor: colors.background.primary,
    padding: spacing.padding.xsmall,
    borderRadius: 10,
  },
  ranking: {
    fontSize: 16,
    color: colors.text.light,
    marginStart: 3,
    fontWeight: "800",
  },
  data: {
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.primaryText,
    marginTop: 8,
  },
  restaurant: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.mediumGray,
    marginBottom: 4,
  },
  iconStart: {
    width: 15,
    height: 15,
  },
  iconTime: {
    width: 18,
    height: 18,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  containerCategory: {
    alignSelf: "flex-start",
    backgroundColor: colors.background.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },
  category: {
    fontSize: 15,
    fontWeight: "800",
    color: colors.text.white,
  },
  containerTime: {
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    marginBottom: 6,
  },
  time: {
    fontSize: 15,
    color: colors.text.mediumGray,
    marginStart: 3,
  },
  containerPrice: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.text.auxiliar,
  }
});

export default FoodCard;

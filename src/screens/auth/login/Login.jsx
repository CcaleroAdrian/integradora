import * as React from "react";
import {
    Text,
  Image,
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useState, useEffect } from "react";
import { colors } from "../../../utils/palette";

export default function Login() {
  return (
    <ImageBackground
      source={require("../../../../assets/backgrounds/background_2.jpg")}
      style={styles.background}
    >
      <View style={styles.containerLogin}>
        <View style={styles.card}>
          <Image
            source={require("../../../../assets/icon.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>Login</Text>
        </View>
      </View>
      <Text>Login</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "start",
  },
  containerLogin: {
    width: "100%",
    height: 500,
    backgroundColor: "#F54939",
  },
  card: {
    width: 300,
    height: 400,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});

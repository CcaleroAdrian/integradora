import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { colors } from "../../utils/palette";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { Surface, Divider, IconButton, Icon } from 'react-native-paper';

export default function PLatilloItem ({ data, category, onDelete }) {

  const result = category.find((cat) => cat.id.trim() === data.payload.categoria.trim())

  const handleDelete= () =>{
    onDelete(data.id)
  }

  return (
    <Surface elevation={5}>
      <View style={styles.containerItem}>
        <View style={styles.containerImage}>
          {data.payload.imagen.length == 0 ?
            <Image source={require('../../../assets/icons/image.png')} style={styles.itemImage} />
          :
            <Image source={{uri:data.payload.imagen}} style={styles.itemImage} />
          }
        </View>
        <View style={styles.containerData}>
          <Text style={styles.title}>{data.payload.nombre}</Text>
          <Text style={styles.description}>{data.payload.descripcion}</Text>
          <View style={{flexDirection: "row"}}>
            <View style={{flex: 0.3}}>
              <View style={{flexDirection: "row", marginTop:6}}>
                <Icon source="currency-usd" size={25}/>
                <Text style={styles.price}>{data.payload.precio}</Text>
              </View>
            </View>
            <View style={{flex: 0.3}}>
              <View style={{flexDirection: "row", marginTop:6}}>
                <Icon source="timer-outline" size={25}/>
                <Text style={styles.price}>{data.payload.tiempo_preparacion} min.</Text>
              </View>
            </View>
            <View style={{flex: 0.5}}>
              <View style={{flexDirection: "row", marginTop:6}}>
                <Icon source="silverware-variant" size={25}/>
                <Text style={styles.price}>{result.text}</Text>
              </View>
            </View>
          </View>
          
          <Divider style={{marginTop:10,}}/>
          <View style={{flexDirection: "row", alignItems: 'flex-end', justifyContent: 'flex-end'}}>
            <IconButton
              icon="pencil"
              size={30}
              onPress={() => console.log('Pressed')}
            />
            <IconButton
              icon="delete-outline"
              size={30}
              onPress={handleDelete}
            />
          </View>
        </View>
      </View>
    </Surface>
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
    width: "20%",
  },
  itemImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  title: {
    color: colors.text.black,
    fontSize: 16,
    fontWeight: "800",
  },
  containerData: {
    padding: 8,
    width: "80%",
  },
  description: {
    color: colors.text.mediumGray,
  },
  price: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 6,
    marginTop: 4,
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

import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { IconButton } from 'react-native-paper';
import { colors } from "../../utils/palette";
import { Text } from 'react-native-paper';

const CardRecordCategory = ({ data, onPress }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.containerImage}>
      <Image source={{uri:data.imagen}} resizeMode='center' style={styles.itemImage} />
      </View>
      <View style={styles.containerData}>
        <Text variant="headlineSmall">{data.nombre}</Text>
        <Text variant="titleSmall">Direccion: </Text>
        <Text variant="bodySmall">{data.direccion}</Text>
        <Text variant="titleSmall">Horario: </Text>
        <Text variant="bodyMedium">{data.hora_apertura} - {data.hora_cierre}</Text>
      </View>
      <View style={styles.containerTrash}>
            <IconButton
                icon="menu-right"
                iconColor='grey'
                size={95}
                onPress={onPress}
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
    height: 150,
    borderRadius: 15,
  },
  containerData: {
    padding: 8,
    width: "60%",
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

export default CardRecordCategory;

import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

export function ListItem({ item, onPressElement }) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#FAFAFA' : 'white',
        },
        styles.item,
      ]}
      onPress={() => onPressElement(item.id, item.latitude, item.longitude)}
    >
      <View style={styles.column}>
        <Image
          source={item.img}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.direction}>{item.direction}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.title}>5 km</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row', // Alinea los elementos en una fila
    justifyContent: 'space-between', // Distribuye el espacio entre las columnas
    alignItems: 'center', // Alinea verticalmente al centro
    paddingHorizontal: 5, // Agrega espacio horizontal
  },
  column: {
    flex: 1, // Ocupa igual espacio en la fila
    alignItems: 'center', // Alinea elementos en el centro horizontalmente
    paddingBottom: 20,
  },
  logo: {
    height: 45,
    width: 45,
    borderRadius: 50,
    marginRight: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2F3136',
  },
  direction: {
    fontSize: 14,
    fontWeight: '400',
    color: '#989CA5',
  },
});
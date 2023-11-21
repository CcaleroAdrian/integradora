import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

export default function OptionsProfile({navigation}) {
  //const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  

  return (
    <View style={styles.container}>
      {/* Imagen que ocupa el 30% de la pantalla */}
      <Image
        source={require('../../../assets/comida.jpg')}
        style={styles.backgroundImage}
      />

      {/* Avatar flotante */}
      <View style={styles.avatarContainer}>
        <Image source={require('../../../assets/profile.jpg')} style={styles.avatar} />
      </View>

      {/* Sección de ítems */}
      <View style={styles.itemSection}>
        <TouchableOpacity onPress={() => navigateToScreen('UpdateProfile')}>
          <View style={styles.item}>
            <Icon name="user-edit" size={24} color="gray" style={styles.icon}/>
            <Text style={styles.itemText}>Actualizar Información</Text>
            <Icon name="chevron-right" size={24} color="gray" style={styles.icon}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('UpdateMenu')}>
          <View style={styles.item}>
            <Icon name="utensils" size={24} color="gray" style={styles.icon}/>
            <Text style={styles.itemText}>Actualizar Menú</Text>
            <Icon name="chevron-right" size={24} color="gray" style={styles.icon}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Address')}>
          <View style={styles.item}>
            <Icon name="map-marked" size={24} color="gray" style={styles.icon}/>
            <Text style={styles.itemText}>Direcciones</Text>
            <Icon name="chevron-right" size={24} color="gray" style={styles.icon}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('PaymentMethods')}>
          <View style={styles.item}>
            <Icon name="credit-card" size={24} color="gray" style={styles.icon}/>
            <Text style={styles.itemText}>Métodos de Pago</Text>
            <Icon name="chevron-right" size={24} color="gray" style={styles.icon}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('History')}>
          <View style={styles.item}>
            <Icon name="receipt" size={24} color="gray" style={styles.icon}/>
            <Text style={styles.itemText}>Historial de Pedidos</Text>
            <Icon name="chevron-right" size={24} color="gray" style={styles.icon}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Password')}>
          <View style={styles.item}>
            <Icon name="key" size={24} color="gray" style={styles.icon}/>
            <Text style={styles.itemText}>Cambio de Contraseña</Text>
            <Icon name="chevron-right" size={24} color="gray" style={styles.icon}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Password')}>
          <View style={styles.item}>
            <Icon name="sign-out-alt" size={24} color="gray" style={styles.icon}/>
            <Text style={styles.itemText}>Cerrar sesión</Text>
            <Icon name="chevron-right" size={24} color="gray" style={styles.icon}/>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        //flex: 0.7, // Ocupa el 30% de la pantalla
        width: '100%',
        height: 250,
        borderBottomRightRadius: 130,
    },
    avatarContainer: {
        position: 'absolute',
        top: '23%', // Puedes ajustar según sea necesario
        left: '40%', // Puedes ajustar según sea necesario
        transform: [{ translateX: -40 }, { translateY: -40 }],
        backgroundColor: 'transparent', // Para que el fondo sea transparente
    },
    avatar: {
        width: 180,
        height: 180,
        borderRadius: 90,
        borderWidth: 3,
        borderColor: 'white', // Ajusta el color del borde según sea necesario
    },
    itemSection: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        margin: 20,
        marginTop: 90, // Ajusta según sea necesario para que no se superponga con el avatar
        elevation: 5,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
    },
    itemText: {
        fontSize: 18,
        flex: 1,
        textAlign: 'center',
    },
    icon: {
        marginLeft: 10,
        marginRight: 10,
    },
});
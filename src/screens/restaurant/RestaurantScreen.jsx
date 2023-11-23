import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import RestaurantCategory from "../../components/RestaurantCategory";
import RestaurantModalFood from "../../components/RestaurantModalFood";
import { LogBox } from "react-native";
import { colors } from "../../utils/palette";

LogBox.ignoreLogs(["some warning"]); // Puedes ignorar ciertos tipos de logs si es necesario.
const restaurante = {
  imagen: require("../../../assets/restaurant/la_poma.jpeg"),
  nombre: "Sultan Dine",
  direccion:
    "Av. de los Sabores 456, Ciudad Saborosa, CP 12345, País de los Paladares Felices",
  ranking: "4.5",
  reviews: 16,
  categories: [
    {
      id: 1,
      name: "Pizza",
      platillos: [
        {
          id: 1,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
        {
          id: 2,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
        {
          id: 3,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
        {
          id: 4,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
        {
          id: 5,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
      ],
    },
    {
      id: 2,
      name: "Bebidas frias",
      platillos: [
        {
          id: 6,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
        {
          id: 7,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
        {
          id: 8,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
        {
          id: 9,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
        {
          id: 10,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
      ],
    },
    {
      id: 3,
      name: "Pastas",
      platillos: [
        {
          id: 11,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
        {
          id: 12,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
        {
          id: 13,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
        {
          id: 14,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
        {
          id: 15,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
      ],
    },
    {
      id: 4,
      name: "Sopas",
      platillos: [
        {
          id: 16,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
        {
          id: 17,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
        {
          id: 18,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
        {
          id: 19,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
        {
          id: 20,
          imagen: require("../../../assets/categorias/desayunos.png"),
          nombre: "Desayuno americano",
          precio: "23.30",
          descripcion:
            "Hot-cakes con lechera o miel de mapple, huevos revueltos o al gusto y cafe americano o de olla",
          ranking: "4.8",
        },
      ],
    },
  ],
};

export default function RestaurantScreen() {
  const [cantidad, setCantidad] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const showModal = (data) => {
    setSelectedData(data);
    setModalVisible(true);
  }

  return (
    <ScrollView>
      <ImageBackground
        source={restaurante.imagen}
        style={styles.hero}
        resizeMode="cover"
      />
      <View style={styles.containerData}>
        <View style={styles.card}>
          <Text style={styles.title}>{restaurante.nombre}</Text>
          <View style={styles.containerCategories}>
            {restaurante.categories.map((category) => (
              <Text key={category.id} style={styles.category}>
                {category.name}
              </Text>
            ))}
          </View>
          <View style={styles.containerAddress}>
            <Image
              source={require("../../../assets/icons/location.png")}
              style={styles.icon}
            />
            <Text style={styles.address}>{restaurante.direccion}</Text>
          </View>
          <View style={styles.containerRanking}>
            <Image
              source={require("../../../assets/icons/star.png")}
              style={styles.icon}
            />
            <Text style={styles.ranking}>{restaurante.ranking}</Text>
            <Text style={styles.reviews}>({restaurante.reviews})</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerMenu}>
        {restaurante.categories.map((category) => (
          <RestaurantCategory
            key={category.id}
            title={category.name}
            data={category.platillos}
            showModal={showModal}
          />
        ))}
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.centeredModal}>
          <View style={styles.containerModal}>
            <RestaurantModalFood data={selectedData} />
            <Pressable
              style={[styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.buttonCloseText}>X</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: "100%",
    height: 300,
  },
  containerData: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background.white,
  },
  card: {
    backgroundColor: colors.background.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginTop: -30,
    width: "90%",
  },
  title: {
    color: colors.text.black,
    fontSize: 24,
    fontWeight: "900",
  },
  containerRanking: {
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    marginTop: 6,
    padding: 8,
    borderTopWidth: 1,
    borderColor: colors.border.light,
  },
  ranking: {
    fontSize: 16,
    color: colors.text.black,
    marginStart: 3,
    fontWeight: "800",
  },
  icon: {
    width: 15,
    height: 15,
  },
  reviews: {
    marginLeft: 3,
    fontWeight: "800",
    color: colors.text.mediumGray,
  },
  containerAddress: {
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
  },
  address: {
    padding: 6,
  },
  containerCategories: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 6,
  },
  category: {
    color: colors.text.lightGray,
    fontSize: 16,
    fontWeight: "800",
    marginEnd: 10,
  },
  containerMenu: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background.white,
  },
  centeredModal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  containerModal: {
    width: "100%",
    padding: 10,
    backgroundColor: colors.background.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: "40%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
    fontWeight: "900"
  }
});

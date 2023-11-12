import React, {useState} from 'react';
import { Text, View, ImageBackground, ScrollView, TextInput, Button } from 'react-native';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['some warning']); // Puedes ignorar ciertos tipos de logs si es necesario.


const restaurante = {
    imagen: require('../../../assets/restaurant/lugar1.jpg'),
    nombre: 'La casa de los desayunos',
    direccion: 'Domicilio conocido # 27, Puebla Pue.',
    ranking: '4.5',
    horario: '8:00 - 18:00',
    platillos: [{
        id: 1,
        imagen: require('../../../assets/categorias/desayunos.png'),
        nombre: 'Desayuno americano',
        precio: '23.30',
        descripcion: 'Hot-cakes, huevos revueltos y cafe',
        ranking: '4.8'
    },
    {
        id: 2,
        imagen: require('../../../assets/categorias/desayunos.png'),
        nombre: 'Desayuno americano',
        precio: '23.30',
        descripcion: 'Hot-cakes, huevos revueltos y cafe',
        ranking: '4.8'
    },
    {
        id: 3,
        imagen: require('../../../assets/categorias/desayunos.png'),
        nombre: 'Desayuno americano',
        precio: '23.30',
        descripcion: 'Hot-cakes, huevos revueltos y cafe',
        ranking: '4.8'
    },
    {
        id: 4,
        imagen: require('../../../assets/categorias/desayunos.png'),
        nombre: 'Desayuno americano',
        precio: '23.30',
        descripcion: 'Hot-cakes, huevos revueltos y cafe',
        ranking: '4.8'
    },
    {
        id: 5,
        imagen: require('../../../assets/categorias/desayunos.png'),
        nombre: 'Desayuno americano',
        precio: '23.30',
        descripcion: 'Hot-cakes, huevos revueltos y cafe',
        ranking: '4.8'
    }]
}

export default function RestaurantScreen() {
    const [cantidad, setCantidad] = useState(1);

    return(
        <ScrollView>
            <ImageBackground source={restaurante.imagen} style={{ width: '100%', height: 300 }} resizeMode="stretch">
                <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: 16, alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>{restaurante.nombre}</Text>
                    <Text style={{ color: 'white' }}>Dirección: {restaurante.direccion}</Text>
                    <Text style={{ color: 'white' }}>Ranking: {restaurante.ranking}</Text>
                    <Text style={{ color: 'white' }}>Horario: {restaurante.horario}</Text>
                </View>
            </ImageBackground>

            <Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 16 }}>Platillos:</Text>
            {
                restaurante.platillos.map((item) => (
                    <View style={{ margin: 16 }} key={item.id}>
                        <ImageBackground source={ item.imagen} style={{ width: '100%', height: 150 }}>
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: 8 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{item.nombre}</Text>
                            <Text style={{ color: 'white' }}>Precio: ${item.precio}</Text>
                            <Text style={{ color: 'white' }}>Descripción: {item.descripcion}</Text>
                            <Text style={{ color: 'white' }}>Ranking: {item.ranking}</Text>
                            <TextInput
                            placeholder="Cantidad"
                            value={cantidad.toString()}
                            onChangeText={(text) => setCantidad(text)}
                            />
                            <Button
                            title="Agregar al carrito"
                            onPress={() => {
                                // Agregar lógica para agregar al carrito de compras
                            }}
                            />
                        </View>
                        </ImageBackground>
                    </View>
                ))
            }
            </ScrollView>
    );
}
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import Icone from "react-native-vector-icons/Feather";

export default function FoodScreen() {
    const [bank, setbank] = useState('BBVA');

    const descrip = 'Nasi Padang es un plato tradicional de la cocina indonesia, originario de la región de Padang en Sumatra. Consiste en arroz blanco acompañado por una amplia variedad de guarniciones...'

    return (
        <View style={styles.container}>
            <Image source={require('/assets/platillo.jpg')} style={styles.imagen} />
            <View style={{ padding: 20 }}>
                <View style={styles.textContainer}>
                    <Text style={styles.leftBold}>Nasi Padang</Text>
                    <Text style={styles.rightBold}>$68</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.left}>Indonesian Food</Text>
                    <Text style={styles.right}><Icon name='truck' size={20} />  Free Delevery</Text>
                </View>
                <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 10 }}><Icone name='star' color='#FFBD00' size={20} /> {` 5.5 (100 Reviews)`}</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Food Details</Text>
                <Text style={{ fontSize: 16, marginBottom: 10 }}>{descrip}</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Nasi Padang Size</Text>
                <View style={styles.containerBotton}>
                    <TouchableOpacity style={[styles.button, styles.whiteButton]} >
                        <Text style={styles.buttonText}>Small</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.blackButton]} >
                        <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Medium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.whiteButton]} >
                        <Text style={styles.buttonText}>Large</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>{`Chosee Additions (Bonus)`}</Text>
                <View style={styles.containerBotton}>
                    <TouchableOpacity style={[styles.button, styles.whiteButton]} >
                        <Text style={styles.buttonText}>Sayor nangka</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.blackButton]} >
                        <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Sayur singkong</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.whiteButton]} >
                        <Text style={styles.buttonText}>Kikill Sapi</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerBotton}>
                    <TouchableOpacity style={[styles.button, styles.blackButton]} >
                        <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Sambell Cabe Ijo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.whiteButton]}>
                        <Text style={styles.buttonText}>Nasi extra</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerFood}>
                    <TouchableOpacity style={styles.buttonV} >
                        <Text style={styles.buttonTexto}><Icone name='shopping-bag' color='#FFBD00' size={20} /> Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} >
                        <Text style={styles.buttonTexts}><Icone name='shopping-cart' color='white' size={20} /> Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imagen: {
        marginBottom: 10,
        width: "100%",
        height: 200,
        objectFit: 'cover',
    },
    textContainer: {
        flexDirection: 'row', // Alinea los textos en la misma fila
        justifyContent: 'space-between', // Espacio entre los textos
        alignItems: 'center', // Alineación vertical en el centro
        marginBottom: 10
    },
    leftBold: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    rightBold: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFBD00'
    },
    left: {
        fontSize: 16,
    },
    right: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    containerBotton: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    containerFood: {
        flexDirection: 'row',
        marginBottom: 10,
        padding: 10,
    },
    button: {
        backgroundColor: '#EDEDED',
        padding: 10,
        borderRadius: 30, // Valor alto para hacer el botón redondeado
        marginRight: 10,
    },
    whiteButton: {
        borderColor: 'black',
    },
    blackButton: {
        backgroundColor: 'black',
    },
    buttonText: {
        color: 'black', // Color de texto para los botones blancos
        fontSize: 14,
    },
    buttonV: {
        backgroundColor: '#FFFFF',
        padding: 8,
        borderRadius: 5,
        borderWidth: 4, // Grosor del borde
        borderColor: '#FFBD00', // Color del borde
        borderRadius: 10,
        width: '40%',
        marginRight: 10,
        alignItems: 'center',

    },
    buttonTexto: {
        color: '#FFBD00',
        fontWeight: 'bold',
        fontSizen: 20
    },
    buttons: {
        alignItems: 'center',
        backgroundColor: '#FFBD00',
        borderRadius: 10,
        padding: 8,
        width: '60%'
    },
    buttonTexts: {
        color: 'white',
        fontWeight: 'bold',
        fontSizen: 20
    }

});
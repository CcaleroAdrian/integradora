import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Asegúrate de importar FontAwesome desde tu proyecto o utilizar otra biblioteca de iconos.

const items = [
    { id: 1, img: require('/assets/categorias/comida_mexicana.jpg'), title: "Chiles en nogada", peso: "-240 g", price:20},
    { id: 2, img: require('/assets/categorias/pizza.jpg'), title: "Pizza suprema", peso: "-160 g", price:8},
    { id: 3, img: require('/assets/categorias/postres.jpg'), title: "Pastel de frutos rojos", peso: "-310 g", price:18},
]
export default function OrderScreen() {
    const [count, setCount] = useState(1);

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const increaseCount = () => {
        setCount(count + 1);
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                contentContainerStyle={styles.contentContainer}
                renderItem={({ item }) =>
                    <View style={styles.card} >
                        <View>
                            <Image source={item.img} style={styles.image} />
                        </View>
                        <View style={styles.cardBody}>
                            <Text style={styles.cardText}>{item.title}</Text>
                            <Text style={{ marginBottom: 15, color:"#AAAAAA" , fontWeight:'bold'}}>{item.peso}</Text>
                            <View style={styles.conten}>
                                <View style={styles.selec} >
                                    <TouchableOpacity style={styles.iconButton} onPress={decreaseCount}>
                                        <FontAwesome name="minus" size={12} color="black" />
                                    </TouchableOpacity>
                                    <Text style={styles.count}>{count}</Text>
                                    <TouchableOpacity style={styles.iconButton} onPress={increaseCount}>
                                        <FontAwesome name="plus" size={12} color="black" />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ fontSize: 16, fontWeight: "bold" }} >${item.price}</Text>
                            </View>
                        </View>
                    </View>
                }
            />
            <View style={styles.promo}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }} >-3H4KUR0</Text>
                <Text style={styles.promoText} >Promocode  confirmed</Text>
            </View>
            <View style={styles.orderCount}>
                <Text style={styles.countText} >Subtotal</Text>
                <Text style={styles.countText}>$46.00</Text>
            </View>
            <View style={styles.orderCount}>
                <Text style={styles.countText} >Promocode</Text>
                <Text style={styles.countText}>- $6.00</Text>
            </View>
            <View style={styles.orderCount}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Total</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>$6.00</Text>
            </View>
            <TouchableOpacity style={styles.BotonPay}>
                <Text style={{fontSize: 18, color:'white', fontWeight:'bold' }}>Order</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: 'center'
    },
    contentContainer: {
        height: 'auto', // Asegura que el contenido de FlatList tenga la misma altura que los elementos
        width: 350
    },
    card: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 16,
        height: 130,
    },
    image: {
        height: '100%',
        width: 100,
        borderRadius: 10,
        objectFit: 'cover'
    },
    cardBody: {
        paddingLeft: 10,
        flex: 1,
    },
    cardText: {
        fontSize: 16,
        marginBottom: 15,
        color: '#333',
        fontWeight: 'bold'
    },
    conten: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    selec: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D5D5D5',
        borderRadius: '2em',
        width: '35%',
        padding: 5
    },
    iconButton: {
        paddingTop: 8,
        paddingBottom: 8,
    },
    count: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 15,
    },
    promo: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 16,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    promoText: {
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: '#CFF278',
        padding: 10,
        borderRadius: 10
    },
    orderCount: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        marginBottom: 2,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    countText: {
        fontSize: 16,
        color: '#AAAAAA',
        fontWeight: 'bold'
    },
    BotonPay: {
        backgroundColor: '#1F1F1F',
        padding: 10,
        borderRadius: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
    },
})
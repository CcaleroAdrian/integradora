import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalPay from './ModalPay/ModalPay';

const item = [
    { id: 1, img: require('../../../assets/visa.png'), text: "---2211" },
    { id: 2, img: require('../../../assets/visa.png'), text: "---0832" },
    { id: 3, img: require('../../../assets/visa.png'), text: "---6421" },
    { id: 4, img: require('../../../assets/visa.png'), text: "---4681" },
    { id: 5, img: require('../../../assets/visa.png'), text: "---9531" },
]

export default function Pay() {
    const [show, setShow] = useState(false);

    const onShowModal = () => setShow((prevState) => !prevState)
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Métodos de pago</Text>
            <FlatList
                data={item}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <View style={styles.item}>
                        <Image source={require('../../../assets/visa.png')} style={styles.imagen} />
                        <Text>{item.text}</Text>
                    </View>
                } />
            <TouchableOpacity
                style={styles.selectedButton}
                onPress={onShowModal}
            >
                <Text style={styles.buttonText}>Agregar un metodo de pago</Text>
            </TouchableOpacity>
            <ModalPay onShowModal={onShowModal} show={show}  />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        color: '#333',
        fontWeight: 'bold'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:20
    },
    imagen: {
        height: 30,
        width: 60,
        marginRight: 20
    },
    selectedButton: {
        padding: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#007AFF',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
})

import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, Image, TextInput } from 'react-native';

export default function ModalPay({ onShowModal, show }) {

    const [bank, setbank] = useState('BBVA');
    const [nombre, setNombre] = useState('Agustin');
    const [numCard, setnumCard] = useState('');
    const [date, setdate] = useState('');
    const [cvv, setcvv] = useState('');

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={show}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.head} >
                            <Text style={styles.text} >Añadir Tarjeta de credito</Text>
                            <Image source={require('../../../../assets/visa.png')} style={styles.imagen} />
                        </View>
                        <View>
                            <View style={styles.field}>
                                <Text style={styles.label}>Nombre del banco:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Nombre del banco'
                                    value={bank}
                                    onChangeText={(text) => setbank(text)}
                                />
                            </View>
                            <View style={styles.field}>
                                <Text style={styles.label}>Tu nombre:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Tu nombre'
                                    value={nombre}
                                    onChangeText={(text) => setNombre(text)}
                                />
                            </View>
                            <View style={styles.field}>
                                <Text style={styles.label}>Numero de tarjeta:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Numero de tarjeta'
                                    value={numCard}
                                    onChangeText={(text) => setnumCard(text)}
                                />
                            </View>
                            <View style={styles.field}>
                                <Text style={styles.label}>Fecha:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Fecha'
                                    value={date}
                                    onChangeText={(text) => setdate(text)}
                                />
                            </View>
                            <View style={styles.field}>
                                <Text style={styles.label}>CVV:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='CVV'
                                    value={cvv}
                                    onChangeText={(text) => setcvv(text)}
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.selectedButton}
                            onPress={onShowModal}
                        >
                            <Text style={styles.buttonText}>Guardar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    selectedButton: {
        padding: 10,
        borderRadius: "2rem",
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#558BFF',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
    imagen: {
        height: 30,
        width: 60,
        marginRight: 20
    },
    head: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    field: {
        marginBottom: 20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
        fontWeight: 'bold'
    },
    input: {
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 40,
        width:"30%"
    },
});

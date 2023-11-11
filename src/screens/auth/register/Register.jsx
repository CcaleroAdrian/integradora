import { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ImageBackground } from 'react-native';

export default function Register() {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [direccionEntrega, setDireccionEntrega] = useState('');

    const handleRegistro = () => {
        // Aquí puedes agregar la lógica de registro del nuevo usuario
    };

    return (
        <ImageBackground source={require('../../../../assets/categorias/comida_mexicana.jpg')} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.registerCard}>
                    <Image source={require('../../../../assets/logo.png')} style={styles.logo} />
                    <Text style={styles.heading}>Registro de Nuevo Usuarios</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        value={nombre}
                        onChangeText={(text) => setNombre(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Apellidos"
                        value={apellidos}
                        onChangeText={(text) => setApellidos(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Teléfono"
                        value={telefono}
                        onChangeText={(text) => setTelefono(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Correo Electrónico"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        secureTextEntry
                        value={contrasena}
                        onChangeText={(text) => setContrasena(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Fecha de Nacimiento"
                        value={fechaNacimiento}
                        onChangeText={(text) => setFechaNacimiento(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Dirección de Entrega"
                        value={direccionEntrega}
                        onChangeText={(text) => setDireccionEntrega(text)}
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerCard: {
        backgroundColor: 'rgba(240, 207, 155, 0.8)',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        borderColor: 'solid'
    },
    logo: {
        width: 100,
        height: 100,
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        height: 40,
        width: '100%',
    },
});

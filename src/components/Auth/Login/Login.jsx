import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ImageBackground, CheckBox } from 'react-native';

export default function Login({children}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        // Aquí puedes agregar la lógica de inicio de sesión
    };

    return (
        <ImageBackground source={require('../../../../assets/categorias/comida_mexicana.jpg')} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.loginCard}>
                    <Image source={require('../../../../assets/logo.png')} style={styles.logo} />
                    <Text style={styles.heading}>Iniciar Sesión</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre de usuario o correo electrónico"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <View style={styles.checkboxContainer}>
                        <Text>Recordarme</Text>
                        <CheckBox
                            type="checkbox"
                            style={styles.checkbox}
                            value={rememberMe}
                            onValueChange={() => setRememberMe(!rememberMe)}
                        />
                    </View>
                    <Button title="Iniciar Sesión" onPress={handleLogin} color="#FF5454" />
                    <Text style={styles.forgotPasswordLink}>¿Olvidaste tu contraseña?</Text>
                    <Text style={styles.registerLink}>¿No tienes una cuenta? Regístrate</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginCard: {
        backgroundColor: 'rgba(240, 207, 155, 0.8)',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
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
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        marginLeft: 10,
    },
    forgotPasswordLink: {
        color: 'blue',
        marginBottom: 10,
        textDecorationLine: 'underline',
    },
    registerLink: {
        color: 'green',
        textDecorationLine: 'underline',
    },
});
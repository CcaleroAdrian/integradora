import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { FontAwesome } from '@expo/vector-icons';
import {setSignIn} from '../../../actions/userActions';

const backgroundImage = require('../../../../assets/comida.jpg');
const logoImage = require('../../../../assets/icon.png')


export default function Login({ navigation }) {
  const dispath = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // Inicializamos con nuestro Context
  const {user, setUser} = useState();


  const signInWithEmailPassword = async()=>{
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setError('');
      navigation.navigate('Root',{screen: 'Changarrito'});
      console.log(user)

      dispath(setSignIn(true)); // cambiamos el valor a true
      //console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error: "+errorCode+" detalle: "+errorMessage )
      setError('Verificar usuario/Contraseña incorrectos.');
    });
  }
  
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.zoneLog}>
          <Image source={logoImage} style={styles.logo} />
        </View>
        <View style={styles.overlay}>
          {/* Aquí coloca tu formulario u otros elementos superpuestos */}
          <View style={styles.formContainer}>
            
            <Text style={styles.heading}>Bienvenido</Text>
            <Text style={styles.subtitle}>Ingresa a tu cuenta</Text>
            <Text style={styles.errorText}>{error}</Text>
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              placeholderTextColor="#fff"
              onChangeText={text => setEmail(text)}
              value={email}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#fff"
              secureTextEntry
              onChangeText={text => setPassword(text)}
              value={password}
            />
            <TouchableOpacity style={styles.loginButton} onPress={signInWithEmailPassword}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordLink}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row',}}>
              <TouchableOpacity style={[styles.button, styles.googleButton]}>
                <FontAwesome name="google" size={20} color="#BF3604" />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.twitterButton]}>
                <FontAwesome name="twitter" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.facebookButton]}>
                <FontAwesome name="facebook" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Puedes ajustar el modo de escala según tus preferencias
  },
  errorText: {
    color: 'red', // Color del texto de error
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  zoneLog:{
    justifyContent: 'center',
    alignItems: 'center',

  },
  logo: {
    width: 150, // Ajusta el tamaño de la imagen de logotipo según tus necesidades
    height: 150, // Ajusta el tamaño de la imagen de logotipo según tus necesidades
    resizeMode: 'contain', // Ajusta la escala de la imagen
    marginTop: 60,
  },
  overlay: {
    flex: 1,
    //backgroundColor: 'rgba(0, 0, 0, 0.2)', // Fondo semi-transparente para hacer legibles los elementos
    justifyContent: 'flex-end'
  },
  formContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff', // Fondo semi-transparente para el formulario
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 50, // Aplica borderRadius solo a las esquinas superiores
    borderTopRightRadius: 50, // Aplica borderRadius solo a las esquinas superiores
  
  },
  heading: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#BF3604',
    marginTop: 5
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A6A6A6',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 15,
    marginBottom: 10,
    padding: 10,
    color: '#fff',
    fontSize: 14,
  },
  loginButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#BF3604',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 60,
    borderRadius: 50,
    marginBottom: 10,
  },
  googleButton: {
    borderColor: '#0D0D0D',
    borderStyle: 'solid',
    borderWidth: 2
  },
  twitterButton: {
    backgroundColor: '#05AFF2', // Color de Twitter
    marginLeft: 20,
  },
  facebookButton: {
    backgroundColor: '#2A558C', // Color de Facebook
    marginLeft: 20,
  },
  forgotPasswordLink: {
    color: '#0D0D0D', // Cambia el color según tus preferencias
    textDecorationLine: 'none', // Subraya el texto para indicar que es un enlace
    marginBottom: 30,
  }
});
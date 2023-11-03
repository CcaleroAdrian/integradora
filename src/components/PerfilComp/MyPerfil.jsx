import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function MyPerfil() {
    const [nombre, setNombre] = useState('Juan');
    const [apellidos, setApellidos] = useState('Pérez');
    const [email, setEmail] = useState('juanperez@example.com');
    const [telefonoPrefijo, setTelefonoPrefijo] = useState('+52');
    const [telefonoNumero, setTelefonoNumero] = useState('123-456-7890');
    const [fechaNacimiento, setFechaNacimiento] = useState('30/01/2002');
    const [sexo, setSexo] = useState('Masculino');
  
    return (
      <View style={styles.container}>
        <View style={styles.card} >
          <Text style={{fontSize:18, fontWeight:'bold'}}>Mi perfil</Text>
          <Text style={{fontSize:16,}}>Actualizar tus datos personales</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={styles.input}
            value={nombre}
            onChangeText={(text) => setNombre(text)}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Apellidos:</Text>
          <TextInput
            style={styles.input}
            value={apellidos}
            onChangeText={(text) => setApellidos(text)}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Teléfono:</Text>
          <View style={styles.phoneInputContainer}>
            <TextInput
              style={styles.phonePrefix}
              value={telefonoPrefijo}
              onChangeText={(text) => setTelefonoPrefijo(text)}
            />
            <TextInput
              style={styles.phoneInput}
              value={telefonoNumero}
              onChangeText={(text) => setTelefonoNumero(text)}
            />
          </View>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Fecha de Nacimiento:</Text>
          <TextInput
            style={styles.input}
            value={fechaNacimiento}
            onChangeText={(text) => setFechaNacimiento(text)}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Sexo:</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[styles.radioButton, sexo === 'Masculino' && styles.selectedButton]}
              onPress={() => setSexo('Masculino')}
            >
              <Text style={[styles.buttonText, sexo === 'Masculino' && styles.selectedText]}>Hombre</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.radioButton, sexo === 'Femenino' && styles.selectedButton]}
              onPress={() => setSexo('Femenino')}
            >
              <Text style={[styles.buttonText, sexo === 'Femenino' && styles.selectedText]}>Mujer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    card:{
      backgroundColor:'#86ACFF',
      height:80,
      width:'100%',
      padding:15,
      marginBottom:20,
      borderRadius:10
    },
    cardText:{
      fontSize:18,
      fontWeight:'bold'
    },
    cardTitle:{
      fontSize:16,
    },
    field: {
      marginBottom: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 5,
      color: '#333',
      fontWeight:'bold'
    },
    input: {
      fontSize: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      height: 40,
    },
    phoneInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    phonePrefix: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      height: 40,
      fontWeight:'bold',
      width:'25%'
    },
    phoneInput: {
      flex: 3,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      height: 40,
      width:'75%'
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    radioButton: {
      backgroundColor: '#eee',
      padding: 10,
      borderRadius: 5,
      flex: 1,
      alignItems: 'center',
    },
    selectedButton: {
      backgroundColor: '#007AFF',
    },
    buttonText: {
      fontSize: 16,
    },
    selectedText: {
      color: 'white',
    },
  });
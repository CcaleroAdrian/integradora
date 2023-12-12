import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput,Text,  Button, List, Menu, Snackbar, Modal, Portal, IconButton, Chip } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { useSelector } from 'react-redux';

export default function EditMenuModal({id}) {
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [idRestaurante, setIdRestaurante] = useState('123'); // Puedes ajustar según tu lógica
    const [imagen, setImagen] = useState(null);
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [tiempoPreparacion, setTiempoPreparacion] = useState('');
    // recuperamos datos del Store
    const idSocio = useSelector((state) => state.user.socio);
    const categories = useSelector((state) => state.platillo.categories);

    const [snackbarVisible, setSnackbarVisible] = useState(false);
  
    const showSnackbar = () => setSnackbarVisible(true);
    const hideSnackbar = () => setSnackbarVisible(false);
  
    const pickImage = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.cancelled) {
        setImagen(result.uri);
      }
    };
  
    const handleFormSubmit = () => {
      // Aquí puedes manejar la lógica para enviar los datos a tu backend
      // y mostrar un mensaje de éxito con el Snackbar
      showSnackbar();
    };

    // Manejo de un control tipo ComboBox
    const [visible, setVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [inputValue, setInputValue] = useState('');
    const showCombobox = () => setVisible(true);
    const hideCombobox = () => setVisible(false);
    const handleItemPress = (item) => {
        const result = categories.find((cat) => cat.id.trim() === item);
        setCategoria(item);
        setSelectedItem(result.data.text);
        hideCombobox();
    };

    const [selectedCategory, setSelectedCategory] = useState('');
    const handleCategoryPress = (category) => {
        // Si la categoría está seleccionada, deselecciónala
        if (selectedCategory != category.data.text) {
          setSelectedCategory(category.data.text);
        }
    };


    return (
      <ScrollView style={styles.container}>
        {id?
            <Text variant="headlineSmall" style={styles.head}>Actualizar Producto</Text>
        :
            <Text variant="headlineSmall" style={styles.head}>Agregar Producto</Text>
        }
        <View>
            <TextInput
                label="Nombre"
                value={nombre}
                onChangeText={(text) => setNombre(text)}
                placeholder='Nombre del producto'
                style={styles.inputs}
                left={<TextInput.Icon icon="silverware" />}
            />
            <TextInput
                label="Descripción"
                value={descripcion}
                onChangeText={(text) => setDescripcion(text)}
                style={styles.inputs}
                multiline={true}
                left={<TextInput.Icon icon="nutrition" />}
            />
            <TextInput
                label="Precio"
                value={precio}
                keyboardType="numeric"
                onChangeText={(text) => setPrecio(text)}
                left={<TextInput.Icon icon="cash" />}
                style={styles.inputs}
            />
            <TextInput
                label="Tiempo de Preparación"
                value={tiempoPreparacion}
                onChangeText={(text) => setTiempoPreparacion(text)}
                style={styles.inputs}
                left={<TextInput.Icon icon="av-timer" />}
            />
            <View>
                <TextInput
                    label="Categoría"
                    value={selectedCategory}
                    editable={false}
                    style={styles.inputs}
                    left={<TextInput.Icon icon="tag" />}
                />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {categories.map((category) => (
                    <Chip
                        key={category.id}
                        onPress={() => handleCategoryPress(category)}
                        mode={selectedCategory === category.data.text ? 'outlined' : 'flat'}
                        icon="silverware-clean"
                        style={{ 
                            margin: 4, 
                            backgroundColor: selectedCategory === category.data.text ? '#b54a63' : '#cdcfd1',
                            color: selectedCategory === category.data.text ? 'black' : '#fff',
                        }}
                    >
                        {category.data.text}
                    </Chip>
                    ))}
                </View>
            </View>
        </View>
        
  
  
          {/* Campo para cargar la imagen */}
          <View>
            <Button onPress={pickImage}>Subir Imagen</Button>
            {imagen && (
              <View>
                <IconButton icon="close" size={20} onPress={() => setImagen(null)} />
                <Image source={{ uri: imagen }} style={{ width: 200, height: 200 }} />
              </View>
            )}
          </View>
  
        <Button mode="contained" onPress={handleFormSubmit}>
          Enviar
        </Button>
  
        <Snackbar
          visible={snackbarVisible}
          onDismiss={hideSnackbar}
          action={{
            label: 'OK',
            onPress: hideSnackbar,
          }}
        >
          Platillo registrado con éxito.
        </Snackbar>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    head: {
        marginTop: 20,
        marginBottom: 20,
    },
    inputs:{
        backgroundColor: 'white',
        marginBottom:15,
    },
    categories:{
        color:'black',
        backgroundColor: 'grey'
    }

  });
import React from 'react';
import { Text,View, StyleSheet, ScrollView} from 'react-native';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import PLatilloItem from '../../components/restaurant/platilloCard'
import { colors } from "../../utils/palette";
import { FAB, Searchbar, Dialog, Button} from 'react-native-paper';
import {setPlatillos} from '../../actions/platilloActions';
import { deletePlatilloRestaurant } from "../../services/platillos";

// Trabajar datos con Firebase
import { getPlatillosRestaurant } from "../../services/platillos";

export default function DetailsMenuScreen({ navigation }) {
    const categories = useSelector((state) => state.platillo.categories);
    const idSocio = useSelector((state) => state.user.socio);
    const platillos = useSelector((state) => state.platillo.platillos);

    const [searchQuery, setSearchQuery] = useState("");
    const [visible, setVisible] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const dispatch = useDispatch();

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    const onChangeSearch = query => setSearchQuery(query);

    //handle para eliminar registro
    const handleDelete = (id) => {
        console.info("id: "+id)
        setSelectedItemId(id.trim())
        showDialog()
    }

    // Evento para eliminar el pruducto de firebase y del Store
    const eliminarPlatillo = async () => {
        try {
            // Borrar el documento de Firebase
            await deletePlatilloRestaurant(selectedItemId);
      
            // Después de recibir la confirmación de Firebase, eliminar del store
            dispatch(deleteDocument(documentId));
            hideDialog();
        } catch (error) {
            console.error('Error al borrar el documento:', error);
        }
    }

    //Descargamos los platillos del restaurante
    useEffect(() => {
        const fetchData = async () => {
            try {
                //Hacemos la consulta a firebase
                const result = await getPlatillosRestaurant(idSocio);
                // Actualizar el store con la nueva data
                dispatch(setPlatillos(result));
            } catch (error) {
                console.error("Error al cargar documentos:", error);
            }
        };

        // Verificar si la colección está vacía antes de hacer la petición a Firebase
        if (platillos.length === 0) {
            fetchData();
        }

    }, []);

    return (
        <View style={styles.globalContainer}>
            <View style={styles.search}>
                <Searchbar
                    placeholder="Buscar"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
            <ScrollView style={styles.scrollView}>
                { platillos.map((item) => (
                    <PLatilloItem key={item.id} data={item} category={categories} onDelete={handleDelete}/>
                ))}
            </ScrollView>
            <FAB
                icon="plus"
                style={styles.fab}
                mode='elevated'
                theme={{ colors: { primary: 'green' } }}
                onPress={() => navigation.navigate('editMenu', {id:null})}
            />
            {/* Mensaje de confirmacion*/}
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Eliminar registro</Dialog.Title>
                <Dialog.Content>
                    <Text variant="bodyMedium">Desea borrar el registro?</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDialog}>Cancelar</Button>
                    <Button onPress={eliminarPlatillo}>Aceptar</Button>
                </Dialog.Actions>
            </Dialog>
        </View>
    )
}

const styles = StyleSheet.create({
    globalContainer: {
      flex: 1,
      height: "100%",    
      justifyContent: "center",
      alignItems: "center",
    },
    containerItemList: {
      flex: 1,
    },
    search: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 50,
        paddingHorizontal: 8,
        height: 50,
        width: "100%",
        marginBottom: 10,
        marginTop: 40,
        backgroundColor: colors.background.light,
    },
    input: {
        fontSize: 16,
        marginLeft:2,
        color: colors.text.gray,
    },
    fab: {
        position: 'absolute',
        backgroundColor: 'red',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})
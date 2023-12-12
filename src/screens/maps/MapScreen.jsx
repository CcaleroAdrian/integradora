import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from 'react-native';
// Import Map and Marker
import MapView, {Marker,PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from "expo-location";
import {mapStyle} from '../../utils/mapStyle'
import { useMap } from '../../utils/useMap';
import CustomMarker from '../../components/maps/CustomMarker';
import BottomSheet from '../../components/maps/BottomSheet';
import { MARKERS_DATA } from '../../utils/data';
import { ListItem } from '../../components/maps/ListItem';

export default function MapScreen() {
    const {
        mapRef,
        selectedMarker,
        handleNavigateToPoint,
        handelResetInitialPosition,
    } = useMap();

    const [currentLocation, setCurrentLocation] = useState(null);
    const [initialRegion, setInitialRegion] = useState({
        latitude: 18.506519,
        longitude: -98.756474,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    
    // Inicializamos las coordenadas actuales del dispositivo
    useEffect(() => {
        // Funcion para solicitar permiso a la ubicacion
        const getLocation = async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== "granted") {
            console.log("Permiso a la ubicación denegado");
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setCurrentLocation(location.coords);
          console.log(location)
          setInitialRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          });
        };
    
        getLocation();
    }, []);
    
    const positionActual = async()=>{
        let location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location.coords);
        console.log(location)
    }
    positionActual();
    //console.log(currentLocation)
    //console.log(initialRegion)

    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={styles.mapStyle}
                initialRegion={{
                    latitude: initialRegion.latitude,
                    longitude: initialRegion.longitude,
                    latitudeDelta: initialRegion.latitudeDelta,
                    longitudeDelta: initialRegion.longitudeDelta,
                }}
                customMapStyle={mapStyle}
            >
                <Marker
                    draggable
                    coordinate={{
                        latitude: currentLocation.latitude,
                        longitude: currentLocation.longitude,
                    }}
                    onDragEnd={
                        (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                    }
                    title={'Ubicacion Actual'}
                    description={'This is a description of the marker'}
                />
                {MARKERS_DATA.map((marker) => (
                    <CustomMarker
                        key={marker.id}
                        id={marker.id}
                        selectedMarker={selectedMarker}
                        color={marker.color}
                        latitude={marker.latitude}
                        longitude={marker.longitude}
                    />
                    ))
                }
                {/*<Marker
                    draggable
                    coordinate={{
                    latitude: 18.506519,
                    longitude: -98.756474,
                    }}
                    onDragEnd={
                    (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                    }
                    title={'Test Marker'}
                    description={'This is a description of the marker'}
                />*/}
            </MapView>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={MARKERS_DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ListItem item={item} onPressElement={handleNavigateToPoint} />
                    )}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    mapStyle: {
        flex: 1,
        justifyContent: 'center', // Centra el contenido en la parte superior
        alignItems: 'center', // Centra horizontalmente el contenido
    },
    flatListContainer: {
        height: '25%', // 30% de la pantalla
        width: '100%',
        backgroundColor: 'white',
        borderColor: 'gray',
        padding: 10,
        borderRadius: 10,
        shadowColor: 'black', // Color de la sombra
        shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
        shadowOpacity: 0.3, // Opacidad de la sombra (0-1)
        shadowRadius: 4, // Radio de la sombra
        elevation: 3, // Elevation (Android)
    },
});
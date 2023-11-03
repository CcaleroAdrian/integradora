import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { mapStyle } from '../../utils/mapStyle';
import { useMap } from '../../utils/useMap';
import BottomSheet from './BottomSheet';
import CustomMarker from './CustomMarker';
import { MARKERS_DATA } from '../../utils/data';

export default function Map() {
    const {
        mapRef,
        selectedMarker,
        handleNavigateToPoint,
        handelResetInitialPosition,
    } = useMap();

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                customMapStyle={mapStyle}
                provider={PROVIDER_GOOGLE}
                style={styles.mapStyle}
                initialRegion={{
                    latitude: 18.506519,
                    longitude: -98.756474,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                }}
                mapType="standard"
            >
                {/*
                {MARKERS_DATA.map((marker) => (
                    <CustomMarker
                        key={marker.id}
                        id={marker.id}
                        selectedMarker={selectedMarker}
                        color={marker.color}
                        latitude={marker.latitude}
                        longitude={marker.longitude}
                    />
                ))}
                */}
            </MapView>
            <BottomSheet onPressElement={handleNavigateToPoint} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
import React,{ useState, useEffect } from 'react';
import { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
//import Animated from 'react-native-reanimated';
//import {useTimingTransition} from "react-native-redash";
//import { useMarkerAnimation } from '../../utils/useMarkerAnimation';

export default function CustomMarker({
  id,
  selectedMarker,
  color,
  latitude,
  longitude,
}) {
 // const scale = useMarkerAnimation({ id, selectedMarker });
 const [active, setActive] = useState(0);
  useEffect(() => {
    const isActive = id === selectedMarker ? 1 : 0;
    setActive(isActive);
  }, [id, selectedMarker]);

  /*const transition = useTimingTransition(active, {
    duration: 200,
  });

  const scale = Animated.interpolate(transition, {
    inputRange: [0, 1],
    outputRange: [1, 1.5],
  });*/

  return (
    <Marker
      coordinate={{
        latitude: latitude,
        longitude: longitude,
      }}
    >
      <View style={styles.markerWrapper}>
        {/*
        <Animated.View
          style={[
            styles.marker,
            {
              backgroundColor: color,
              transform: [{ scale: scale }],
            },
          ]}
        ></Animated.View>
        */}
      </View>
    </Marker>
  );
}

const styles = StyleSheet.create({
  markerWrapper: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    height: 22,
    width: 22,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
});
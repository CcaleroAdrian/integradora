import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Register from '../../components/Auth/Register/Register';
import Pay from '../../components/PerfilComp/Pay';

export default function HomeScreen() {
  const [handlePage, setHandlePage] = useState(true);

  const onHandlePage = () => {
    setHandlePage((prevState) => !prevState)
  }

  return (
    <View style={{ flex: 1 }} >
      {handlePage ?
        <Pay />
        :
        <Register />
      }
      <Button title="Cambiar pagina" onPress={onHandlePage} color="#FF5454" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

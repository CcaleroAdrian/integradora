import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable, Button } from 'react-native';
import Login from '../../components/Auth/Login/Login';
import MyPerfil from '../../components/PerfilComp/MyPerfil';


export default function Profile() {
  const [handlePage, setHandlePage] = useState(true);

  const onHandlePage = () => {
    setHandlePage((prevState) => !prevState)
  }

  return (
    <View style={{ flex: 1 }} >
      {handlePage ?
        <MyPerfil />
        :
        <Login />
      }
      <Button title="Cambiar pagina" onPress={onHandlePage} color="#FF5454" />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Pressable,
  Modal,
} from 'react-native';
import { Formulario } from './src/components/Formulario';

const App = () => {

  // Hooks
  const [ modalvisible, setModalVisible ] = useState
  (false)

  const nuevaCitaHandler = () => {
    console.log('Apachurrado');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable
        style={styles.btnNuevaCita}
        onPress={() => setModalVisible(true) }
      >
        <Text style={styles.btnTextNuevaCita}>Nueva cita</Text>
      </Pressable>

        <Formulario
          modalvisible={modalvisible}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 15,
    color: '#374151',
    fontWeight: '600'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9'
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 17,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
})

export default App;

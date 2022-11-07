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
  FlatList
} from 'react-native';
import { Formulario } from './src/components/Formulario';
import Patient from './src/components/Patient';

const App = () => {

  // Hooks
  const [modalvisible, setModalVisible] = useState(false)
  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  const patientEdit = id => {
    const patientEdit = patients.filter(patient => patient.id === id)

    console.log(patientEdit[0])
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable
        style={styles.btnNuevaCita}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.btnTextNuevaCita}>Nueva cita</Text>
      </Pressable>

      {patients.length === 0 ? <Text style={styles.noPatients}>No hay pacientes</Text> :
        <FlatList
          style={styles.list}
          data={patients}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Patient
                item={item}
                setModalVisible={setModalVisible}
                patientEdit={patientEdit}
              />
            )
          }}
        />}

      <Formulario
        modalvisible={modalvisible}
        setModalVisible={setModalVisible}
        patients={patients}
        setPatients={setPatients}
        patient={patient}
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
    marginTop: 30,
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
  noPatients: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800'
  },
  list: {
    marginTop: 50,
    marginHorizontal: 20
  }
})

export default App;

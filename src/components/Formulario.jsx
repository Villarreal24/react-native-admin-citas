import React, { useState, useEffect } from 'react'

import {
    Modal,
    Text,
    Button,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    ScrollView,
    Pressable,
    Alert,
} from 'react-native'
import DatePicker from 'react-native-date-picker'

export const Formulario = ({
    modalvisible,
    setModalVisible,
    patients,
    setPatients,
    patient: patientObj,
    setPatient: setPatientApp }) => {

    const [id, setId] = useState('')
    const [patient, setPatient] = useState('')
    const [owner, setOwner] = useState('')
    const [email, setEmail] = useState('')
    const [cellphone, setCellphone] = useState('')
    const [date, setDate] = useState(new Date())
    const [symptom, setSymptom] = useState('')

    useEffect(() => {
        if (Object.keys(patientObj).length > 0) {
            setId(patientObj.id)
            setPatient(patientObj.patient)
            setOwner(patientObj.owner)
            setEmail(patientObj.email)
            setCellphone(patientObj.cellphone)
            setDate(patientObj.date)
            setSymptom(patientObj.symptom)
        }
    }, [])

    // Validación de formulario
    const handlerCita = () => {
        if ([patient, owner, email, date, symptom].includes('')) {
            Alert.alert(
                'Error',
                'Faltan campos por rellenar'
            )
            return
        }

        const newPatient = {
            id: Date.now(),
            patient,
            owner,
            email,
            cellphone,
            date,
            symptom
        }

        // Revizar si es nuevo o edición
        if (id) {
            // Editando
            newPatient.id = id

            const patientUpdated = patients.map(patientState =>
                patientState.id === newPatient.id ? newPatient : patientState)

            setPatients(patientUpdated)
            // setPatientApp({})
        } else {
            // Nuevo registro
            newPatient.id = Date.now()
            setPatients([...patients, newPatient])
        }

        setModalVisible(!modalvisible)
        setPatient('')
        setOwner('')
        setEmail('')
        setCellphone('')
        setDate(new Date())
        setSymptom('')
    }

    return (
        <Modal
            animationType='fade'
            visible={modalvisible}
        >
            <SafeAreaView style={styles.contenido}>
                <ScrollView>
                    <Text style={styles.titulo}>Nueva {''}
                        <Text style={styles.tituloBold}>Cita</Text>
                    </Text>

                    <Pressable
                        style={styles.btnCancelar}
                        onPress={() => {
                            setModalVisible(!modalvisible)
                            setPatientApp({})
                            setPatient('')
                            setOwner('')
                            setEmail('')
                            setCellphone('')
                            setDate(new Date())
                            setSymptom('')
                        }}>
                        <Text style={styles.btnCancelarTexto}>Cancelar</Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre paciente</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Ingresar paciente'
                            placeholderTextColor={'#666'}
                            value={patient}
                            onChangeText={setPatient}
                        ></TextInput>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre propietario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Ingresar propietario'
                            placeholderTextColor={'#666'}
                            value={owner}
                            onChangeText={setOwner}
                        ></TextInput>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            keyboardType='email-address'
                            style={styles.input}
                            placeholder='Ingresar email'
                            placeholderTextColor={'#666'}
                            value={email}
                            onChangeText={setEmail}
                        ></TextInput>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Número celular</Text>
                        <TextInput
                            keyboardType='number-pad'
                            style={styles.input}
                            placeholder='Ingresar celular'
                            placeholderTextColor={'#666'}
                            value={cellphone}
                            onChangeText={setCellphone}
                            maxLength={10}
                        ></TextInput>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha</Text>
                        <View style={styles.fechaContenedor}>
                            <DatePicker
                                date={date}
                                locale='es'
                                onDateChange={(date) => setDate(date)}
                            />
                        </View>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Síntomas paciente</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Ingresar síntomas'
                            placeholderTextColor={'#666'}
                            value={symptom}
                            onChangeText={setSymptom}
                            multiline={true}
                            numberOfLines={4}
                        ></TextInput>
                    </View>

                    <Pressable
                        style={styles.btnNuevaCita}
                        onPress={handlerCita}>
                        <Text style={styles.btnNuevaCitaTexto}>Agregar paciente</Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '#7F26B1',
        flex: 1,
    },
    titulo: {
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 30,
        color: '#FFF'
    },
    btnCancelar: {
        marginTop: 20,
        backgroundColor: '#5D1A83',
        marginHorizontal: 20,
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
    },
    btnCancelarTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 17,
        textTransform: 'uppercase'
    },
    tituloBold: {
        fontWeight: '800'
    },
    campo: {
        marginTop: 5,
        marginHorizontal: 20,
        marginBottom: 5,
    },
    label: {
        color: '#FFF',
        marginBottom: 5,
        marginTop: 10,
        fontSize: 20,
        fontWeight: '500'
    },
    input: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 5
    },
    fechaContenedor: {
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    btnNuevaCita: {
        marginVertical: 40,
        backgroundColor: '#06AE06',
        padding: 15,
        marginHorizontal: 20,
        borderRadius: 10
    },
    btnNuevaCitaTexto: {
        textAlign: 'center',
        color: '#FFF',
        textTransform: 'uppercase',
        fontSize: 17,
        fontWeight: '600'
    }
})
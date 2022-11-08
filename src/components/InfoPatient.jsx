import React from 'react'
import { Text, SafeAreaView, View, Pressable, StyleSheet } from 'react-native'
import { formatDate } from '../helpers/index'

const infoPatient = ({ patient, setModalPatient, setPatient }) => {

    return (
        <SafeAreaView
            style={styles.content}
        >

            <Text style={styles.titulo}>Información
                <Text style={styles.tituloBold}> Paciente</Text>
            </Text>

            <View>
                <Pressable
                    style={styles.btnCancelar}
                    onPress={() => {
                        setModalPatient(false)
                        setPatient({})
                    }}
                >
                    <Text style={styles.btnCancelarTexto}>Cerrar</Text>
                </Pressable>
            </View>

            <View style={styles.contentPatient}>
                <View style={styles.camp}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.value}>{patient.patient}</Text>
                </View>

                <View style={styles.camp}>
                    <Text style={styles.label}>Propietario:</Text>
                    <Text style={styles.value}>{patient.owner}</Text>
                </View>

                <View style={styles.camp}>
                    <Text style={styles.label}t>Email:</Text>
                    <Text style={styles.value}t>{patient.email}</Text>
                </View>

                <View style={styles.camp}>
                    <Text style={styles.label}>Celular:</Text>
                    <Text style={styles.value}>{patient.cellphone}</Text>
                </View>


                <View style={styles.camp}>
                    <Text style={styles.label}t>Fecha:</Text>
                    <Text style={styles.value}t>{formatDate(patient.date)}</Text>
                </View>

                <View style={styles.camp}>
                    <Text style={styles.label}>Sintomas:</Text>
                    <Text style={styles.value}>{patient.symptom}</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#F4F4F4',
        flex: 1,
    },
    titulo: {
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 30,
        color: '#424242'
    },
    tituloBold: {
        fontWeight: '800',
        color: '#424242'
    },
    btnCancelar: {
        marginTop: 20,
        backgroundColor: '#F59E0B',
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
    contentPatient: {
        marginTop: 10,
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    camp: {
        marginBottom: 10,
    },
    label: {
        textTransform: 'uppercase',
        color: '#373737',
        fontWeight: '700',
        marginBottom: 4,
        fontSize: 15,
    },
    value: {
        color: '#646464',
        fontWeight: '500',
        fontSize: 19,
    }
})

export default infoPatient

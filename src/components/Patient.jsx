import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { formatDate } from '../helpers/index'

const Patient = ({
    item,
    setModalVisible,
    setPatient,
    patientEdit,
    patientDelete,
    setModalPatient }) => {
    const { patient, date, id } = item

    

    return (
        <Pressable
            onPress={() => {
                setModalPatient(true)
                setPatient(item)
            }}
        >
            <View style={styles.content}>
                <Text style={styles.label}>Paciente:</Text>
                <Text style={styles.text}>{patient}</Text>
                <Text style={styles.date}>{formatDate(date)}</Text>

                <View style={styles.contentButtons}>
                    <Pressable
                        style={[styles.btn, styles.btnEdit]}
                        onLongPress={() => {
                            setModalVisible(true)
                            patientEdit(id)
                        }}
                    >
                        <Text style={styles.btnText}>Editar</Text>
                    </Pressable>

                    <Pressable
                        style={[styles.btn, styles.btnDelete]}
                        onLongPress={() => patientDelete(id)}
                    >
                        <Text style={styles.btnText}>Eliminar</Text>
                    </Pressable>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#FFF',
        padding: 20,
        borderBottomColor: '#94A3B8',
        borderBottomWidth: 1,
        borderRadius: 10,
    },
    label: {
        label: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700',
        marginBottom: 10
    },
    text: {
        color: '#6D28D9',
        fontSize: 19,
        fontWeight: '800',
        marginBottom: 10
    },
    date: {
        color: '#374151',
    },
    contentButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    btn: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    btnEdit: {
        backgroundColor: '#F59E0B'
    },
    btnDelete: {
        backgroundColor: '#EE1515',
    },
    btnText: {
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: '600',
        fontSize: 12
    }
})

export default Patient
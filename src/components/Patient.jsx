import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

const Patient = ({ item, setModalVisible, patientEdit }) => {
    const { patient, date, id } = item

    const formatDate = date => {
        const newDate = new Date(date)
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }

        return newDate.toLocaleDateString('es-ES', options)
    }

    return (
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

                <Pressable style={[styles.btn, styles.btnDelete]}>
                    <Text style={styles.btnText}>Eliminar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#FFF',
        padding: 20,
        borderBottomColor: '#94A3B8',
        borderBottomWidth: 1
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
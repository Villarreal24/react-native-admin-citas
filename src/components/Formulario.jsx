import React from 'react'

import {
    Modal,
    Text,
    Button,
    SafeAreaView,
} from 'react-native'

export const Formulario = ({ modalvisible }) => {

    return (
        <Modal
            animationType='fade'
            visible={modalvisible}
        >
            <SafeAreaView>
                
            </SafeAreaView>
        </Modal>
    )
}

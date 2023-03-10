import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const CustomInput = ({ value, setValue, placeholder, secure }) => {
    return (
        <View style={styles.container}>
            <TextInput value={value} onChangeText={setValue} placeholder={placeholder} secureTextEntry={secure} style={styles.input} />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 5
    },
    input: {}
}) 
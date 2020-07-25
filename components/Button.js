import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = (props) => {
    return(
        <TouchableOpacity style={styles.btn} onPress={props.onPress}>
           <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        width: 60, 
        height: 60, 
        backgroundColor: '#F5DEB3',
        borderRadius: 50,
        marginBottom: 0,
        paddingTop: 20,
    },
    text: {
        textAlign: 'center'
    }
})


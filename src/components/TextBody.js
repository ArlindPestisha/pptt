import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const TextBody = (props) => {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.textText}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        paddingTop: 20,
        marginLeft: 30
        
    },
    textText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',

    }
})

export default TextBody
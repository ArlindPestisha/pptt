import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'


const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={{height: 40}}
                placeholder="From:"
    
            />
            <TextInput
                style={{height: 40}}
                placeholder="To:"
    
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default HomeScreen

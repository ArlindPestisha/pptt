import React from 'react'
import { StyleSheet, View } from 'react-native'

const CardComponent = (props) => {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
}

export default CardComponent

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: '#fcf8ed',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        width: '80%',
        justifyContent: 'space-between'
    },
})

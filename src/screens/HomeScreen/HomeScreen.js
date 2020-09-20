import React from 'react'
import { View, Text, TextInput, ImageBackground,Button } from 'react-native'
import styles from './styles'


const HomeScreen = ({navigation}) => {
    return (
        <ImageBackground source={require('../../../assets/background.jpg')} style={styles.container}>
            
                {/*<Text style={styles.text}>Let's Find Your new buddy to travel!!</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="From:"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="To:"
                    />
    </View>*/}
                <Button
                    title="Serach"
                    color="red"
                    onPress={() => {navigation.push('Profile')}}
                />
            
        </ImageBackground>
    )
}

export default HomeScreen

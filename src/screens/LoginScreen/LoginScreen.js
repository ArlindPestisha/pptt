import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const LoginScreen = ({navigation}) => {

    //Set the const for state use
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Function to navigate between screens
    const onFooterlinkPress = () => {
        navigation.navigate('Registration')
    }

    const onLoginPress = () => {}

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style= {{flex: 1, width: '100%'}}
                keyboardShouldPersistTaps='always'>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'                    
                />
            </KeyboardAwareScrollView>
        </View>
    )
}

export default LoginScreen

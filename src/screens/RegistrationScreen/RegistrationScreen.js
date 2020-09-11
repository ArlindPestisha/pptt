import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

const RegistrationScreen = ({navigation}) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () => {}

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
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='#aaaaaa'
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'                    
                />
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(text) => setPassword(text)}
                    value={fullName}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'                    
                />
                <TextInput
                    style={styles.input}
                    placeholder='Confirm Password'
                    placeholderTextColor='#aaaaaa'
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'                    
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Creat account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text styles={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}
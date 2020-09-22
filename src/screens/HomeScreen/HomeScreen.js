import React from 'react'
import { ImageBackground,} from 'react-native'
import TheButton from '../../components/TheButton'
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
                <TheButton 
                    title='Find your travel buddy bllla!'
                    onPress={() => {navigation.push('Profile')}} />
        </ImageBackground>
    )
}

export default HomeScreen

import React from 'react'
import { Text, View, ScrollView,Image, Button,StyleSheet, FlatList  } from 'react-native'

import CardComponent from '../../components/CardComponent'
import Footer from '../../components/Footer'
import TextBody from '../../components/TextBody'


const ProfileScreen = () => {
    return (
        <View style={styles.container}>

                <View>
                    <TextBody text='Hello Find someone to travel together'/>
                </View>
                <ScrollView>

                <View style={styles.cardContainer}>
                    <CardComponent>
                        <Text>Arlind</Text>
                        <Image source={require('../../../assets/icon.png')} />
                        <Button title='like' />
                    </CardComponent>
                    <CardComponent>
                        <Text>Arlind</Text>
                        <Image source={require('../../../assets/icon.png')} />
                        <Button title='like' />
                    </CardComponent>
                    <CardComponent>
                        <Text>Arlind</Text>
                        <Image source={require('../../../assets/icon.png')} />
                        <Button title='like' />
                    </CardComponent>
                    <CardComponent>
                        <Text>Arlind</Text>
                        <Image source={require('../../../assets/icon.png')} />
                        <Button title='like' />
                    </CardComponent>
                </View>   
                </ScrollView>
                <Footer />
                
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(187, 134, 252, 0.38)',
        justifyContent: 'flex-start'
        
    },
    cardContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
        
    }
})


export default ProfileScreen


import React from 'react'
import { Text, View, ScrollView,Image, Button,StyleSheet, FlatList  } from 'react-native'

import CardComponent from '../../components/CardComponent'
import Footer from '../../components/Footer'
import TextBody from '../../components/TextBody'
import TheButton from '../../components/TheButton'
import Line from '../../components/Line'



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
                        <Line />
                        <Text>Train Number: 1111</Text>
                        <Text>Location to go: Stockholm</Text>
                        <Text>Seat Number: 2222</Text>
                        <Text>More About Me</Text>
                        <Line />
                        <View style={styles.buttonViewContainer}>
                            <TheButton title='Lets Travel Together' />
                        </View>
                    </CardComponent>
                    <CardComponent>
                        <Text>Arlind</Text>
                        <Line />
                        <Text>Train Number: 1111</Text>
                        <Text>Location to go: Stockholm</Text>
                        <Text>Seat Number: 2222</Text>
                        <Text>More About Me</Text>
                        <Line />
                        <View style={styles.buttonViewContainer}>
                            <TheButton title='Lets Travel Together' />
                        </View>
                    </CardComponent>
                    <CardComponent>
                        <Text>Arlind</Text>
                        <Line />
                        <Text>Train Number: 1111</Text>
                        <Text>Location to go: Stockholm</Text>
                        <Text>Seat Number: 2222</Text>
                        <Text>More About Me</Text>
                        <Line />
                        <View style={styles.buttonViewContainer}>
                            <TheButton title='Lets Travel Together' />
                        </View>
                    </CardComponent>
                </View>   
                </ScrollView>
                <Footer />
                
        </View>
        
    )
}

const styles = StyleSheet.create({
    buttonViewContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    theButton: {
        backgroundColor: 'red',
        
    },
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


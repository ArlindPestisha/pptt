import React from 'react'
import { Text, View, ScrollView,StyleSheet, } from 'react-native'

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
                    <View style={styles.viewCards}>
                        <CardComponent>
                            <View style={styles.containerText}>
                                <Text style={styles.text}>Arlind</Text>
                            </View>
                            <Line />
                            <View style={styles.containerText}>
                                <Text style={styles.text}>Train Number: 1111</Text>
                                <Text style={styles.text}>Location to go: Stockholm</Text>
                                <Text style={styles.text}>Seat Number: 2222</Text>
                                <Text style={styles.text}>More About Me</Text>
                            </View>
                            <Line />
                            <View style={styles.buttonViewContainer}>
                                <TheButton title='Lets Travel Together' />
                            </View>
                        </CardComponent>
                    </View>
                    <View style={styles.viewCards}>
                        <CardComponent>
                            <Text style={styles.text}>Arlind</Text>
                            <Line />
                            <View style={styles.containerText}>
                                <Text style={styles.text}>Train Number: 1111</Text>
                                <Text style={styles.text}>Location to go: Stockholm</Text>
                                <Text style={styles.text}>Seat Number: 2222</Text>
                                <Text style={styles.text}> More About Me</Text>
                            </View>
                            <Line />
                            <View style={styles.buttonViewContainer}>
                                <TheButton title='Lets Travel Together' />
                            </View>
                        </CardComponent>
                    </View>
                    <View style={styles.viewCards}>
                        <CardComponent>
                            <Text style={styles.text}>Arlind</Text>
                            <Line />
                            <View style={styles.containerText}>
                                <Text style={styles.text}>Train Number: 1111</Text>
                                <Text style={styles.text}>Location to go: Stockholm</Text>
                                <Text style={styles.text}>Seat Number: 2222</Text>
                                <Text style={styles.text}>More About Me</Text>
                            </View>
                            <Line />
                            <View style={styles.buttonViewContainer}>
                                <TheButton title='Lets Travel Together' />
                            </View>
                        </CardComponent>
                    </View>
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
        backgroundColor: '#884fc9',
        
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
        
    },
    viewCards: {
        padding:15
    },
    text: {
        color: '#a64fc9',
        fontWeight: 'bold'
    },
    containerText: {
        flex: 1,
        justifyContent: 'flex-start',
        
    }
})


export default ProfileScreen


import React, { useEffect, useState } from 'react';
import { LoginScreen, HomeScreen, RegistrationScreen, ProfileScreen } from './src/screens';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { firebase } from './src/firebase/config'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }


const Stack = createStackNavigator();

const App = () => {
  
  //Using Hooks for state
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  if (loading) {
    return (
      <></>
    )
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*Here I am using the ternary operator ?  : ;*/}
        { user ? (
          <>
            <Stack.Screen name='Home'>
              {props => <HomeScreen {...props } extraData={user} />}
            </Stack.Screen>
            <Stack.Screen name='Profile' component={ProfileScreen} />
          </>
          
        ) : (
          <>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Registration' component={RegistrationScreen} />
            
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App

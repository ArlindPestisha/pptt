import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

//Firebase configuration for data and auth
const firebaseConfig = {
    apiKey: 'AIzaSyA7JNY68G6mZkAv1Lzk78u5MMWKoUelpM8',
    authDomain: 'pptt-553d2.firebaseapp.com',
    databaseURL: 'https://pptt-553d2.firebaseio.com',
    projectId: 'pptt-553d2',
    storageBucket: 'pptt-553d2.appspot.com',
    messagingSenderId: '882925173685',
    appId: '1:882925173685:ios:5fb26a6ef92f8956ccf7fc',
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export { firebase }
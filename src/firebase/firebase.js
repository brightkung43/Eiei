import firebase from 'firebase';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


const config = {
    apiKey: "AIzaSyBz9t_9rOv_FUIW-I6LRUZqHM75fBJ50g4",
    authDomain: "seedsad-aaf83.firebaseapp.com",
    databaseURL: "https://seedsad-aaf83.firebaseio.com",
    projectId: "seedsad-aaf83",
    storageBucket: "seedsad-aaf83.appspot.com",
    messagingSenderId: "153377489056",
    appId: "1:153377489056:web:1f9e8b5dfa2bacdd1609c5",
    measurementId: "G-44W5PZDRJM"
};
firebase.initializeApp(config);
export default firebase;
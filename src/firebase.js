import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDY3wY68ObaQvSLlxKLnG4T996ScS_y72Q",
    authDomain: "twitter-clone-72d66.firebaseapp.com",
    projectId: "twitter-clone-72d66",
    storageBucket: "twitter-clone-72d66.appspot.com",
    messagingSenderId: "271590829298",
    appId: "1:271590829298:web:cf169cdc59940ec0f2f46b",
    measurementId: "G-C1EG4KZP8X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
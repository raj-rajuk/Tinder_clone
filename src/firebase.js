import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAWySCCjv74B80lvBPnwhjgM-mNQ9awszc",
    authDomain: "tinder-clone-22dd9.firebaseapp.com",
    projectId: "tinder-clone-22dd9",
    storageBucket: "tinder-clone-22dd9.appspot.com",
    messagingSenderId: "100407927985",
    appId: "1:100407927985:web:80b8ef07f9fe1437766e90",
    measurementId: "G-CY3H3BG2HH"
  };



const firebaseApp = firebase.initializeApp(firebaseConfig);


const database = firebaseApp.firestore();

export default database;


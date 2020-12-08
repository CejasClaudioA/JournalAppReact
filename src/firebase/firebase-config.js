import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDLnSDKLmnMsJAs2GbTn1tB5f3P8Zw6pnA",
    authDomain: "journalappreact-23859.firebaseapp.com",
    databaseURL: "https://journalappreact-23859.firebaseio.com",
    projectId: "journalappreact-23859",
    storageBucket: "journalappreact-23859.appspot.com",
    messagingSenderId: "636096798472",
    appId: "1:636096798472:web:3a0dcce4b388df43bf16bd",
    measurementId: "G-SN6RKQ1EZ4"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    firebase,
    googleAuthProvider
}


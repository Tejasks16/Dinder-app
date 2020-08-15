import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB8VbgiwM-COrbCYIKSynpbPP-yRU9O5_I",
    authDomain: "dinder-bd59f.firebaseapp.com",
    databaseURL: "https://dinder-bd59f.firebaseio.com",
    projectId: "dinder-bd59f",
    storageBucket: "dinder-bd59f.appspot.com",
    messagingSenderId: "455706421611",
    appId: "1:455706421611:web:b9a2312f1336c97308842e",
    measurementId: "G-8YMPQVTBP0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
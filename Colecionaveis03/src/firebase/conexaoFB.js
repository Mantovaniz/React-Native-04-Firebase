import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBtEmHx5EkQAh-ecA-2OMPW_5BDMG5GEMA",
    authDomain: "colecionaveisfb-8ada8.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-8ada8.firebaseio.com",
    projectId: "colecionaveisfb-8ada8",
    storageBucket: "colecionaveisfb-8ada8.appspot.com",
    messagingSenderId: "319764236064",
    appId: "1:319764236064:web:6f453de6c7b247f67ef945",
    measurementId: "G-Z63C4Y5VLG"
  };

var app = firebase.initializeApp(firebaseConfig);

export const conexaoFS = app.firestore();

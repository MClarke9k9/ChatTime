import React from 'react';
import firebase from 'firebase/app';



var firebaseConfig = {
    apiKey: "AIzaSyDhi45zIfAdvVdj6vk7juWK9mSYpPa2ExA",
    authDomain: "chattime-86b6d.firebaseapp.com",
    projectId: "chattime-86b6d",
    storageBucket: "chattime-86b6d.appspot.com",
    messagingSenderId: "130091436117",
    appId: "1:130091436117:web:5a21f86f96f0775c52ecdc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase;
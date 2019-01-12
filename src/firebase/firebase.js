
import * as firebase from 'firebase'; 

const config = {
    apiKey: "AIzaSyAI36RY6dskbA3bIbAQyX-HwZF8EYE52fk",
    authDomain: "luontovahdit-4d535.firebaseapp.com",
    databaseURL: "https://luontovahdit-4d535.firebaseio.com",
    projectId: "luontovahdit-4d535",
    storageBucket: "luontovahdit-4d535.appspot.com",
    messagingSenderId: "925269395595"
  };

  firebase.initializeApp(config);
  firebase.database().ref().set({
    name : 'Alexander'
  }); 
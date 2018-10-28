import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCiOy-DUQLu4SvJOpQXAGiba0UIIc2a7_I",
    authDomain: "ignacio-tech-marioplan.firebaseapp.com",
    databaseURL: "https://ignacio-tech-marioplan.firebaseio.com",
    projectId: "ignacio-tech-marioplan",
    storageBucket: "ignacio-tech-marioplan.appspot.com",
    messagingSenderId: "597283514662"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;
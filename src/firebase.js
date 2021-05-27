import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyByffo-IibtSHeZmhyae1oFEfJdlOnL7Ew",
    authDomain: "camouflage-70029.firebaseapp.com",
    projectId: "camouflage-70029",
    storageBucket: "camouflage-70029.appspot.com",
    messagingSenderId: "97070594478",
    appId: "1:97070594478:web:10c23ac9999f4e41f8703f"
  };

  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore();
  const auth = firebase.auth()

  const usersCollection = db.collection('users')

  export {
      db,
      auth,
      usersCollection
  }

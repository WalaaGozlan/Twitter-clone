// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAukVa1eroth2Se5QqoPVzxDCMah7NAiBk",
    authDomain: "twitter-clone-55f66.firebaseapp.com",
    projectId: "twitter-clone-55f66",
    storageBucket: "twitter-clone-55f66.appspot.com",
    messagingSenderId: "374103506779",
    appId: "1:374103506779:web:de28eef018e6ccfcb3247e",
    measurementId: "G-10RGD8PXG5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;
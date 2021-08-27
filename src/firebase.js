import firebase from "firebase";
import 'firebase/database'
const firebaseConfig = {
    apiKey: "AIzaSyBb_K1AZJntztJ9hz0KxlEdoQ74v-r1QhU",
    authDomain: "twitter-d1616.firebaseapp.com",
    projectId: "twitter-d1616",
    storageBucket: "twitter-d1616.appspot.com",
    messagingSenderId: "356842497413",
    appId: "1:356842497413:web:bf3cf070509907dd5bd0ec",
    measurementId: "G-T0FWNN5QX7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db=firebase.firestore();
  export default db;
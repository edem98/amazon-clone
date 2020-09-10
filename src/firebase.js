import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCxWUHCBv99whz3p33aXpAN0zmDSqpDgrg",
  authDomain: "clone-aee19.firebaseapp.com",
  databaseURL: "https://clone-aee19.firebaseio.com",
  projectId: "clone-aee19",
  storageBucket: "clone-aee19.appspot.com",
  messagingSenderId: "494154151360",
  appId: "1:494154151360:web:98131c1405e78830488425",
  measurementId: "G-7TJLKC51PM",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

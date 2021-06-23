import firebase from 'firebase/app'

import 'firebase/auth';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqUE1TE9NehXO1w7E4St18LpBdYwlavnw",
  authDomain: "letmeask2-391e1.firebaseapp.com",
  databaseURL: "https://letmeask2-391e1-default-rtdb.firebaseio.com",
  projectId: "letmeask2-391e1",
  storageBucket: "letmeask2-391e1.appspot.com",
  messagingSenderId: "432208350194",
  appId: "1:432208350194:web:efb54974d1c30b64c7796b",
  measurementId: "G-B72HY8WNEN"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export {firebase, auth, database};
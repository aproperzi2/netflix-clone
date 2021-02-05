import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkMWS9XRw3lap-p72ZHNuJYyE2HoPNoRs",
  authDomain: "netflix-clone-8e43a.firebaseapp.com",
  projectId: "netflix-clone-8e43a",
  storageBucket: "netflix-clone-8e43a.appspot.com",
  messagingSenderId: "894406665842",
  appId: "1:894406665842:web:fa8c3df3528b52340f44eb",
  measurementId: "G-3DPPG7D0LG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCIEXTq9W6PvJzfsgr8PeYjZnXi45BlZQM",
  authDomain: "assignment10-ff719.firebaseapp.com",
  projectId: "assignment10-ff719",
  storageBucket: "assignment10-ff719.appspot.com",
  messagingSenderId: "1038873922473",
  appId: "1:1038873922473:web:4a7492eff35e4fa6add2b8"
};


const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();


export { auth }
export default db
 
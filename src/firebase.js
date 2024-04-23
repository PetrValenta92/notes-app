import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAf3Drejt4fS9jv4la_KzUS8HetVNGtRRo",
  authDomain: "react-notes-8acdb.firebaseapp.com",
  projectId: "react-notes-8acdb",
  storageBucket: "react-notes-8acdb.appspot.com",
  messagingSenderId: "155745753619",
  appId: "1:155745753619:web:1df2ed961194361092fde6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
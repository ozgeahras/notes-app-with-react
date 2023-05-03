import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCNQH08z2qU7YQ72SDlCYMOcSNlpM4MKkU",
  authDomain: "react-notes-b9d76.firebaseapp.com",
  projectId: "react-notes-b9d76",
  storageBucket: "react-notes-b9d76.appspot.com",
  messagingSenderId: "76972159972",
  appId: "1:76972159972:web:ebce8e1ed05875bc6dcdf1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notesCollection = collection(db, "notes");

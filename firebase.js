// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC_ZoY_22A49C6C4XNAbOpLYkh2iDUs5sU",
    authDomain: "netflix-clone-a6472.firebaseapp.com",
    projectId: "netflix-clone-a6472",
    storageBucket: "netflix-clone-a6472.appspot.com",
    messagingSenderId: "324557455214",
    appId: "1:324557455214:web:5719da18a437e38d9b4b7f"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);

  const auth = getAuth();

  export { auth, db as default };
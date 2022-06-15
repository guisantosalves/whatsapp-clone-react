import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBC2nMKZU9hLqqZNTPo-zRPNdll7hCIFG8",
  authDomain: "whatsapp-clone-react-11e77.firebaseapp.com",
  projectId: "whatsapp-clone-react-11e77",
  storageBucket: "whatsapp-clone-react-11e77.appspot.com",
  messagingSenderId: "819807299249",
  appId: "1:819807299249:web:66fcb9824ea493d7b46490",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export {db}

export {provider}
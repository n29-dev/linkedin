// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC5Up3eMIVLdneNdpW5ApijK00ROR_oTs",
  authDomain: "linkedin-ad25a.firebaseapp.com",
  projectId: "linkedin-ad25a",
  storageBucket: "linkedin-ad25a.appspot.com",
  messagingSenderId: "1020158425543",
  appId: "1:1020158425543:web:a843fb49ee783360b841e2",
  measurementId: "G-Z99XSM3ZSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};



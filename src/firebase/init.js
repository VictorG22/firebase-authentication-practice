// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLFCQpuDHn-bPqbV7OHzIlVhHf-wcG52E",
  authDomain: "fir-practice-91be7.firebaseapp.com",
  projectId: "fir-practice-91be7",
  storageBucket: "fir-practice-91be7.appspot.com",
  messagingSenderId: "204873309906",
  appId: "1:204873309906:web:c4fabc9f5bd3b71e89170b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
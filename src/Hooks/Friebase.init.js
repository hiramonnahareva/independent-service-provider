// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtUc8upqDEbQqsC9q8_xRrlqN5Ipilkgk",
  authDomain: "assignment-10-9be48.firebaseapp.com",
  projectId: "assignment-10-9be48",
  storageBucket: "assignment-10-9be48.appspot.com",
  messagingSenderId: "606845342220",
  appId: "1:606845342220:web:ed15ffacf58cd209da1429"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth (app)
export default app ;

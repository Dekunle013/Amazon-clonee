import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB16oWpkwu08LWN_IWvEuYS6RQMSLN_l8k",
  authDomain: "clonee-b68e1.firebaseapp.com",
  projectId: "clonee-b68e1",
  storageBucket: "clonee-b68e1.appspot.com",
  messagingSenderId: "875954178344",
  appId: "1:875954178344:web:264e9bde2c77de48cd681d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase services
export { auth, db };

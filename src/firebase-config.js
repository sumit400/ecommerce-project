// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDzD6owuE4CtfLn2r-6zeKkbjwR_JVD8ZE",
  authDomain: "weekdayreact-cf361.firebaseapp.com",
  projectId: "weekdayreact-cf361",
  storageBucket: "weekdayreact-cf361.appspot.com",
  messagingSenderId: "230864730095",
  appId: "1:230864730095:web:a7a18cb52ff25fe0fe281a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
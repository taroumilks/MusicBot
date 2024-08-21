 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import{getFireStore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.13.0/firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA2khQsbJ0DzjdMg4dIK2u6n762yohwyh8",
    authDomain: "spotify-musicbot-c2448.firebaseapp.com",
    projectId: "spotify-musicbot-c2448",
    storageBucket: "spotify-musicbot-c2448.appspot.com",
    messagingSenderId: "305984795194",
    appId: "1:305984795194:web:77d010328f9b1c4d1a3b03",
    measurementId: "G-MRPF1DYQBN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const signUp = document.getElementByID('submitSingup');
  signUp.addEventListener
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
 import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
 import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 function showMessage(message, divId){
   var messageDiv = document.getElementById(divId);
   messageDiv.style.display = "block";
   messageDiv.innerHTML = message;
   messageDiv.style.opacity = 1;
   setTimeout(function(){
     messageDiv.style.opacity = 0;
   }, 5000);
 }
 const signUp = document.getElementById('signUp');
 signUp.addEventListener('click', (event) =>{
   event.preventDefault();
   const email = document.getElementById('Email').value;
   const password = document.getElementById('Password').value;
   const firstName = document.getElementById('FirstName').value;
   const LastName = document.getElementById('LastName').value;
   
   const auth = getAuth();
   const db = getFirestore();

   createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     const user = userCredential.user;
     const userData = {
       email: email,
       firstName: firstName,
       lastName: LastName
     };
       showMessage('Account Created Successfully', 'signUpMessage');
       const docRef=doc(db, "users", user.uid);
       setDoc(docRef,userData)
       .then(()=>{
           window.location.href='../Login-Folder/log-in.html';
       })
       .catch((error)=>{
           console.error("error writing document", error);

       });
   })
   .catch((error)=>{
       const errorCode=error.code;
       if(errorCode=='auth/email-already-in-use'){
           showMessage('Email Address Already Exists !!!', 'signUpMessage');
       }
       else{
           showMessage('unable to create User', 'signUpMessage');
       }
   })
});
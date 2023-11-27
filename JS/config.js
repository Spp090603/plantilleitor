   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
   import { getAuth, updateProfile, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js'

   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   const firebaseConfig = {
     apiKey: "AIzaSyAcehXbhdGy62BkBnpKs9estMfUWoUGbCw",
     authDomain: "plantilleitor.firebaseapp.com",
     projectId: "plantilleitor",
     storageBucket: "plantilleitor.appspot.com",
     messagingSenderId: "169751014529",
     appId: "1:169751014529:web:d57499ca55b9a9b6667180"
   };
     
   // Initialize Firebase
   export const app = initializeApp(firebaseConfig);
   export const firebaseAuth = getAuth(app);
   export const actualizarperfil=updateProfile;
   export const evaludarSesion = onAuthStateChanged
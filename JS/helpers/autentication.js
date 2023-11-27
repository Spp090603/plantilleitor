import {  signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js'
import { firebaseAuth } from '../config.js'
export const autentication = async (email, password)=>{
    const result = await signInWithEmailAndPassword(firebaseAuth, email,password) 
    console.log(result) 
}
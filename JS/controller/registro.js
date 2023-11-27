
import {createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js'
import { actualizarperfil, firebaseAuth } from '../config.js'


const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warning")

//Validación datos
form.addEventListener("submit", e=>{
    e.preventDefault() 
    let warning = ""
    let entrar = false  
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
     parrafo.innerHTML = ""
   
    if(nombre.value.length < 6){
        warning +=`El nombre no es valido <br>`
        entrar = true
        // debugger
    } 
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warning +=`El email no es valido <br>`
        entrar = true
    }
    
    if(pass.value.length < 8){
        warning +=`La contraseña no es valida <br>`
       
        entrar = true 
    }
    
    if(entrar){
        parrafo.innerHTML = warning
    }else{
        parrafo.innerHTML = "Enviado" 
    }
})

//Registrar Ususario
registro.addEventListener('click', async()=>{
    console.log(email.value,pass.value);
    const {user} = await createUserWithEmailAndPassword(firebaseAuth, email.value, pass.value)
    const res = await actualizarperfil(firebaseAuth.currentUser, {
        displayName: nombre.value
    })
    console.log(res)
})


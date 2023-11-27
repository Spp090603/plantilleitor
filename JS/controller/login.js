import { autentication } from "../helpers/autentication.js"

const user = document.getElementById("user")
const password = document.getElementById("password")  
const form = document.getElementById("form")
const botongoogle = document.getElementById("googlebtn")
const botoninicio = document.getElementById("botoninicio")

botoninicio.addEventListener("click", (e)=>{
    autentication(user.value, password.value)
})


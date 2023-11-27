/*
Este archivo se encarga hacer una redirección
en caso el usuario no esté registrado en la plataforma

Debemos colocar el script de parte final de la etiqueta
head.

En caso de que queramos que una pagina esté disponible para
todo el publico, entonces no agregamos esta etiqueta.
*/

import { evaludarSesion, firebaseAuth } from "../config.js";

evaludarSesion(firebaseAuth, (user) => {
	console.log(user)
})
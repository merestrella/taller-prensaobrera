/*
* 👋 Bienvenido a RunJS 🚀
*
* Para comenzar, intente escribir algo de código
*
* Por ejemplo, aquí hay una función que devuelve una cadena:
*/
//const holaMundo = () => '¡Hola Mundo! 🌎'

// Cuando se llama a la función, el resultado se muestra a la derecha 👉
//holaMundo()




let titulo = "'Comienza la movilizacion del sindicalismo combativo'"
let seccion = "Politicas"
let autor = "Redacción"
let publicada = true
let caracteresTotales = 80
let caracteresUsados = titulo.length
let caracteresRestantes = caracteresTotales - caracteresUsados

//let result =  `El titulo de la nota es: ${titulo} y pertenece a la seccion ${seccion}, la escribió ${autor} y ${publicada ? "está" : "no está"} publicada`

let cre = "Juan"
let sueldo = 120000

let coti = `La cotización de ${cre} es de ${sueldo * 0.05}`

console.log(coti) 

let longitudTitulo = `El título es ${titulo.length > 30 ? "largo" : "corto"}`

console.log(longitudTitulo)


//let result = `${caracteresRestantes > 0 ? `Te quedan ${caracteresRestantes}` : "Te pasaste"}`


let persona = {
  nombre: "Nacho",
  apellido: "De la Torre",
  salario: 100000,
  suscripto: false,
  prensasVendidas: 10
}

let result = `El compañero ${persona.nombre} ${persona.apellido} cobra ${persona.salario}, su cotización es de ${persona.salario * 0.05}, `${persona.suscripto` 
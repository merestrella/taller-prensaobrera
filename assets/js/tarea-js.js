/*
* 馃憢 Bienvenido a RunJS 馃殌
*
* Para comenzar, intente escribir algo de c贸digo
*
* Por ejemplo, aqu铆 hay una funci贸n que devuelve una cadena:
*/
//const holaMundo = () => '隆Hola Mundo! 馃寧'

// Cuando se llama a la funci贸n, el resultado se muestra a la derecha 馃憠
//holaMundo()




let titulo = "'Comienza la movilizacion del sindicalismo combativo'"
let seccion = "Politicas"
let autor = "Redacci贸n"
let publicada = true
let caracteresTotales = 80
let caracteresUsados = titulo.length
let caracteresRestantes = caracteresTotales - caracteresUsados

//let result =  `El titulo de la nota es: ${titulo} y pertenece a la seccion ${seccion}, la escribi贸 ${autor} y ${publicada ? "est谩" : "no est谩"} publicada`

let cre = "Juan"
let sueldo = 120000

let coti = `La cotizaci贸n de ${cre} es de ${sueldo * 0.05}`

console.log(coti) 

let longitudTitulo = `El t铆tulo es ${titulo.length > 30 ? "largo" : "corto"}`

console.log(longitudTitulo)


//let result = `${caracteresRestantes > 0 ? `Te quedan ${caracteresRestantes}` : "Te pasaste"}`


let persona = {
  nombre: "Nacho",
  apellido: "De la Torre",
  salario: 100000,
  suscripto: false,
  prensasVendidas: 10
}

let result = `El compa帽ero ${persona.nombre} ${persona.apellido} cobra ${persona.salario}, su cotizaci贸n es de ${persona.salario * 0.05}, `${persona.suscripto` 
//Condicionales para validad casos
//if, si

/*
if (condicional) {
    acciones de cumplirse la condicional
} else if (condicion a cumplirse diferente a la primera condicional) {
acciones a realizar si se cumple la condicional, no se recomienda más de 4 anidaciones
} else {
    acciones a realizar si no se cumple la condicional
}



//operador terrnario
genera el "if" y el "else" en una sola linea

condition ? true: false

*/

//ejemeplo

var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, será tu primera votación");
} else if  (edad > 18){
    console.log("Puedes votar de nuevo");
} else {
    console.log("Todavía no puedes votar");
}



//Operador terniario
var numero = 1;

var resultado = numero === 1 ? "si soy un uno" : "No, no soy uno"

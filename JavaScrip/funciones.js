// Procedimientos o tareas 

//Declarativas
//Palabra reservada function
//Ejecutas la funcion por su nombre

function  miFuncion(){
    return 3;
}

miFuncion();


//Expresion o anonimas
//Variables que contienen funciones
//Ejecutas la funcion por el nombre de la variable
var miFuncion2 = function(){
    return a + b;
}

//Las funciones necesitan parametros para trabajar


miFuncion();

//Ejemplos funciones

function saludarEstudiantes(estudiante){
    console.log(estudiante)
}

saludarEstudiantes("Pedro")

// Llamado de funcion con variables
//Se usa comillas para ligar string con variable (format) y  la variable con signo de pesos
//para apuntar a la variable dentro de llaves
//nota: comillas invertidas alt + 96 o altgr + +

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}

// Respuesta en consola
Hola Pedro

function sumar(a,b) {
    var resultado = a + b;
    return resultado
}

//en consola
>sumar(1,2)
<3
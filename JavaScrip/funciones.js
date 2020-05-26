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
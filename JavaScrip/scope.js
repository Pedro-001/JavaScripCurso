/*  Variables globales y variables locales:
todo lo que este dentro de la funcion es variable loca
todo lo que esta en exterior de funciones global

Las variables locales solo pueden ser usadas dentro de las funciones
las variables globales pueden ser usadas dentro de funciones y fuera
de ellas */

var miNombre = "Pedro"

function nombre(){
    var miApellido = "Barrios Molina";
    console.log(miNombre + " " + miApellido)
}

>nombre()
<Pedro Alberto Barrios Molina

>miNombre
< Pedro

>miApellido
<Error


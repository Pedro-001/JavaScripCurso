/* Existen coerciones cuando interactuan dos valores. implicitas y explicitas
//////
coerciones implicitas:
Ellenguaje nos ayuda, cambia de un tipo de valor a otro

numero -> string
string -> numero
example

4 + "7" =  47 -> vuelve el valor numero 4 en un string y lo fuciona con "7"
4 * "7" = 28 -> transforma el string "7" en un numero.

///////
coerciones explicitas:
Forzar el cambio de valor por medio de comando.

var  a = 20 -> numero
var  b = a + "" -> string

var  c = String(a) -> Se usa el metodo String() para cambiar la variable a

var d = Number(c) -> Se usa el metodo Number() para cambiar la variable c

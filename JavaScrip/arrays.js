/* estructura de datos, 
tipo objeto, 
un valor que guarda valores,
pueden ser de diferentes tipos,
estructura o lista de datos de js

--------ESTRUCTURA

estructura:
var nombreVariable = ["aqui", "se", "agrega", "los", "valores"];

--------ACCEDER
Para acceder a elementos de manera individual dentro del array 

nombreVariable[Posicion Dentro del Array]


--------METODOS DE ARRAY
mutar los arrays y su interior

-agregar elementos al final del array:

    var nombreVariable = ["aqui", "se", "agrega", "los", "valores"];
    var agregarnombreVariable = nombreVariable.push(elemento)

-agregar elementos al inicio del array

    var nombreVariable = ["aqui", "se", "agrega", "los", "valores"];
    var agregarnombreVariable = nombreVariable.unshift(elemento)



-quitar elementos:

    var nombreVariable = ["aqui", "se", "agrega", "los", "valores"];
    var QuitarUltimonombreVariable = nombreVariable.pop("valores")

-quitar el elemento de inicio del array:
    var nombreVariable = ["aqui", "se", "agrega", "los", "valores"];
    var QuitarPrimernombreVariable = nombreVariable.shift(elemento)


-Posición de la variable dentro del array
    var nombreVariable = ["aqui", "se", "agrega", "los", "valores"];
    var posicion = nombreVariable.indexOf(elemento)

*/

>var frutas = ["fresa", "manzana", "sandia", "uva"];
console.log(frutas);

<(4) ["fresa", "manzana", "sandia", "uva"]

>console.log(frutas.length);
< 4


>var frutas = ["fresa", "manzana", "sandia", "uva"];
 var masFrutas = frutas.push("plantano")

 >frutas
 < (5) ["fresa", "manzana", "sandia", "uva", "platano"];



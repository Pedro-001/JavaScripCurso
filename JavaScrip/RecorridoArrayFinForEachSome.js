>
var articulos = [
    { nombre: "bicicleta", costo: 3000},
    { nombre: "television", costo: 2500},
    { nombre: "libro", costo: 320},
    { nombre: "celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700}
];


/*            find:
encontrar algo dentro del objeto, no modifica el array, genera un nuevo array

*/

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

>
encuentraArticulo

<
{nombre: "Laptop", costo: 20000}



/*            forEach
No genera un nuevo array, genera el filtrado y regresa un resultado 
*/

>
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

<
bicicleta
VM217:2 television
VM217:2 libro
VM217:2 celular
VM217:2 Laptop
VM217:2 teclado
VM217:2 Audifonos


/*                   some
Regresa una validación: verdadero o falso cuando se cumple una condicion, genera un nuevo array
 */

>
 var articulosBaratos = articulos.some(function(articulo){
     return articulo.costo <= 700;
 });

 < true
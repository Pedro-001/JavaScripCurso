/* 



*/

>var articulos = [
    { nombre: "bicicleta", costo: 3000},
    { nombre: "television", costo: 2500},
    { nombre: "libro", costo: 320},
    { nombre: "celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700}
];


/*              Filter: 
filtrar si algo es verdad o falso y lo mete en un
nuevo arrya */
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});


>articulosFiltrados
<
(2) [{…}, {…}]
0: {nombre: "libro", costo: 320}
1: {nombre: "teclado", costo: 500}
length: 2
__proto__: Array(0)



/*               Map:
mapear ciertos articulos, genera un nuevo array */


>var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});


var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre

});

>nombreArticulo

<(7) ["bicicleta", "television", "libro", "celular", "Laptop", "teclado", "Audifonos"]
0: "bicicleta"
1: "television"
2: "libro"
3: "celular"
4: "Laptop"
5: "teclado"
6: "Audifonos"
length: 7
__proto__: Array(0)
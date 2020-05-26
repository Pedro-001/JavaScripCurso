/* Hoisting varibles que se declaran antes de que se procese cualquier
tipo de codigo, solo pasa con versiones pasadas emascript 5 para atras, en 6 en adelante
solo sucede con cons y lens */



//declarar variable
var miNombre;
//inicializar variable
miNombre = "Pedro";




//EJEMPLO HOISTING 


>console.log(miNombre);
var miNombre = "Pedro";

<undefined

/* Al mandar a llamar la variable antes de declararla e inicializar, 
cuando se procesa el codigo antes de compilarlo y se encuentra una variable
que no está declarada, la guarda como variable pero la declara como undefined,
por eso al usarse en console.log, la variable ya está declara como no definida */



>undefined>var miNombre = undefined;
console.log(miNombre + " soy ese hoisting");
miNombre = "Pedro"

< undefined Soy esa variable
  Pedro
/* Lo que sucedio fue que primero tomo el valor undefined de la variable declarada
lo mostro con el string y después y despues tomo el valor de PEDRO despuesd de volverla a
declarar */


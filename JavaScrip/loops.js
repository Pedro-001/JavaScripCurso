/* loos o ciclos FOR y FOR OF


estructura
---------------------------------------
for (var 1 = 0; i < variable; 1++){
    funcion
}
ejemplo:
for(variable inicio; condicion; incremental o decremental){
    funcion o accion mientras dure la condicion del for
}
---------------------------------------
Con esta siguiente estructura sirve para los arrays
ya que hace un pase por todos los valores dentro del array
y ejecuta la funcion
for(var NombreDeVariable of ListaArray){
    funcion
}


*/

>var estudiantes = ["maria", "sergio", "rosa", "daniel"];
 function saludarEstudiantes(estudiante){
     console.log(`Hola, ${estudiantes}`)
 }

 for(var i = 0; i < estudiantes.length; i++){
     saludarEstudiantes(estudiantes[i]);
 }

 <Hola Maria
  Hola sergio
  Hola rosa
  Hola daniel
/* loop while o mientras
Mientras la condicion se este cumpliendo el while se estará ejecutando 
-Estrucutura


while(condicion){
    funcion o accion;
}


*/

>var estudiantes = ["Maria", "Sergio", "Rosa","Daniel"];

 function saludarEstudiantes(estudiante){
     console.log(`Hola, ${estudiante}`);
 }

 while(estudiantes.length > 0 ){
     var estudiante = estudiantes.shift();
     saludarEstudiantes(estudiante);
 }
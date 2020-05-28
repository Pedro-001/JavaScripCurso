/* 

------Estructura o sintaxis

var NombreObjeto = {
Propiedades = valores,
propiedades = valores,
propiedades = valores

}


---------acceder a propiedades internas
NombreObjeto.Propiedad

-----Metodo
Una de las propiedades del objeto sea una funcion

var NombreObjeto = {
Propiedades = valores,
propiedades = valores,
propiedades = valores

NombreDeLaFfuncion: function(parametros){
    accion de la funcion
}
}

this -> variable que hace referencia a un objeto 
this.valorDelObjeto
*/

>var miAuto = {
    marcca: "toyota" ,
    modelo: "Priux" ,
    annio = 2020
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
}

//invocara el objeto
>miAuto
<{marca: "toyota", modelo: "prius", annio = "2020"}

//Seleccionar valor del objeto
>miAuto.annio
<2020

//invocar metodo del objeto
>miAuto.detalleDelAuto();
< auto prius 2020



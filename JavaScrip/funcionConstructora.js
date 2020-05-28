/* Funcion constructora
Generar un template de objeto, generar parametros y propiedades 
para generar nuevas instancias del objeto

--- Objeto 


function NombreFuncion (PropiedadesDeLaFuncion) {
    this.propiedaddelafuncion = propiedaddelafuncion
}


*/


function auto(marcca, modelo, annio){
    this.marca = marca
    this.modelo = modelo
    this. annio = annio
}

//Construir objetos
//Genera una instancia de objetos con el template del objeto function
>var autoNuevo = new auto("Tesla", "Model X", "2020")

>autoNuevo
< autp {marca:"Tesla", modelo:"Model X", años:"2020"}

>var autoNuevo2 = new auto("Ford", "edge", "2020")

>autoNuevo2
< autp {marca:"Ford", modelo:"edge", años:"2020"}

>var autoNuevo3 = new auto("Nissan", "Altima", "2006")

>autoNuevo2
< autp {marca:"Nissan", modelo:"Altima", años:"2006"}



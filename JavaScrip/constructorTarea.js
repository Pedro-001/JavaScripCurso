function auto(marca, color, modelo, annio){
    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
    this.annio = annio;
}




for ( var i = 0;  i <4 ;  i++) {
    var listaAutos = [];
    var Marca = ["Nissan", "VW", "Toyota", "Tesla"];
    var Color = ["Rojo", "Azul", "Verde", "Negro"];
    var Modelo = ["Sentra", "Jetta", "Prius", "Model X"];
    var Annio = ["2020","2020","2020","2020"];  
   
    marca = Marca[i];
    color = Color[i];
    modelo = Modelo[i];
    annio = Annio[i];
    
    var nuevoAuto = new auto(marca, color, modelo, annio)

    
    console.log(nuevoAuto);
    //listaAutos.unshift(nuevoAuto);
 
}



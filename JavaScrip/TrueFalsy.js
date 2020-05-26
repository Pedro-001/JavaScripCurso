
//Si uno no agrega valor automaticamente es falso
>Boolean()
< false

//El valor es falso 
>Boolean(0)
< false

//el valor es true
>Boolean(1)
< true

//el valor es falso
>Boolean(null)
< false

//el valor es falso
>Boolean(NaN)
< false

//el valor es falso
>Boolean(undefined)
< false

//el valor es falso
>Boolean(")
< false

//el valor es verdader
>Boolean("a")
< true

//el valor es verdader
>Boolean(function(){})
< true

//el valor es verdader
>Boolean("asaa")
< true
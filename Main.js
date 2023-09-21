/* 
RestoMatch
Esta aplicacion esta pensanda para que el usuario ingrese una serie de preferencias para ir a algun establecimiento gastronomico, 
 en donde el programa le indica en funcion de estas, cual o cuales son las mejores opciones.
*/

//En el main solo se piden datos al usuario, se hace control de entradas y se llama a la funcion encargada de filtrar por preferencias.

//Las clases tienen sus propios archivos y los objetos del RestoMatch y los restaurantes estan declarados en el archivo objetos

let Nombre = prompt("¡Bienvenido RestoMatch!\nIngrese su nombre:");

Bucle = true;

let Zona = prompt("¡Hola " + Nombre + "!\nIndica en que zona te gustaria ir a comer:");

Aux = RestoMatch.filtrarZona(Zona);

if (Aux.length > 0) Bucle = false;

while(Bucle) {

    let Zona = prompt(Nombre + " no contamos con establecimientos en la zona indicada, por indica otra zona:");

    Aux = RestoMatch.filtrarZona(Zona);

    if (Aux.length > 0) Bucle = false;

}

let Tipo = prompt(Nombre + " selecciona alguna de estas categorías:\n-Parrilla\n-Cerveceria\n-Bodegon\n-Confiteria");

Bucle = true;

if (Tipo == "Parrilla" || Tipo == "Cerveceria" ||Tipo ==  "Bodegon" ||Tipo ==  "Confiteria") Bucle = false;

while(Bucle) {

    let Tipo = prompt(Nombre + " esa opcion no es valida, selecciona alguna de estas categorías:\n-Parrilla\n-Cerveceria\n-Bodegon\n-Confiteria");

    if (Tipo == "Parrilla" || Tipo == "Cerveceria" ||Tipo ==  "Bodegon" ||Tipo ==  "Confiteria") Bucle = false;
}


let Estilo = prompt(Nombre + " ahora indicanos si buscas un lugar moderno o clasico:")

Bucle = true;

if (Estilo == "clasico" || Estilo == "moderno") Bucle = false;

while(Bucle) {

    let Estilo = prompt(Nombre + " esa opcion no es valida, indique clásico o moderno:");

    if (Estilo == "clasico" || Estilo == "moderno") Bucle = false;

}

let Servicio = prompt(Nombre + " por último indicanos que tipo de servicio estas buscando:\n-Desayuno\n-Brunch\n-Almuerzo\n-Merienda\n-Happyhour\n-Cena\n-Tragos")

/* Esto puede usarse para probar comentando lo anterior
Nombre = "Fabricio";
Zona = "Caballito";
Tipo = "Cerveceria";
Estilo = "moderno";
Servicio = "Cena";*/

const cliente1 = new Cliente(Nombre, Zona, Tipo, Estilo, Servicio);

lista = RestoMatch.ordenarPreferencias(cliente1);

listaNombre = lista.map((resto) => resto.Nombre);


alert("Estos son los restaurantes que coinciden con sus preferencias:\n" + listaNombre);

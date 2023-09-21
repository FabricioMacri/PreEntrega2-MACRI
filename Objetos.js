

servicios1 = ["Almuerzo", "Merienda", "Cena", "Tragos"];

const Resto1 = new Resto(1, "La Cabrera", "Villa Crespo", 5, "Parrilla", "moderno", servicios1);

servicios2 = ["Happy Hour", "Cena", "Tragos"];

const Resto2 = new Resto(2, "La Birra", "Almagro", 4, "Cerveceria", "moderno", servicios2);

servicios3 = ["Desayuno", "Almuerzo", "Merienda", "Cena"];

const Resto3 = new Resto(3, "Bellagamba", "Caballito", 3, "Bodegon", "clasico", servicios3);

servicios4 = ["Desayuno", "Brunch" ,"Almuerzo", "Merienda", "Cena"];

const Resto4 = new Resto(4, "Mateo", "Caballito", 4, "Confiteria", "moderno", servicios4);

servicios5 = ["Tragos", "happyhour" ,"Almuerzo", "Cena"];

const Resto5 = new Resto(5, "Temple", "Caballito", 4, "Cerveceria", "moderno", servicios5);

servicios6 = ["Tragos", "happyhour" ,"Almuerzo", "Cena"];

const Resto6 = new Resto(6, "Cervelar", "Caballito", 3, "Cerveceria", "moderno", servicios6);

servicios7 = ["Tragos", "happyhour" ,"Almuerzo", "Cena"];

const Resto7 = new Resto(7, "El boliche de Dario", "Villa Crespo", 3.5, "Parrilla", "clasico", servicios7);

let listaRestos = [];

listaRestos.push(Resto1);
listaRestos.push(Resto2);
listaRestos.push(Resto3);
listaRestos.push(Resto4);
listaRestos.push(Resto5);
listaRestos.push(Resto6);
listaRestos.push(Resto7);

const RestoMatch = new restoMatch(listaRestos);

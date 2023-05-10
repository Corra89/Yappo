/*
let a ='ciao';
let b = 2+3;
console.log(a);
console.log(b);
const base = 10;
const altezza = 5;
let area = base*altezza;
console.log(area);
console.log("La tua Area è" + (base*altezza) + "cm");
let num=5;
console.log(num % 2);

console.log(base==altezza);

console.log(base % 2 == 0);

console.log(altezza % 10 == 0);

console.log((altezza % 2 == 0)&&(base % 2 == 0));

let anno=2023

console.log((anno % 4 == 0)&&(anno % 100 != 0)||(anno % 400 == 0))


var x = "12";
var y = "13";
var z = x * y;
console.log(z);

var x = "12";
var y = x + 13;
console.log(y);

console.log(12=="12");
console.log(12==="12");
*/

//alert("Ciao!"); PopUp
// dichiarare una variabile stringa e provare a convertirla in numero
// provare l'istruzione typeof

/*
let temperature = [25,26,27,28,22,24,23];

console.log(temperature);
console.log(temperature[0]);  //stampa la prima temp.
temperature[0]=20;
console.log(temperature[0]);

let tris= [
    ["","",""]
    ["","",""]
    ["","",""]
]
console.log(tris[0],[1])


let eta = 15;
if(eta > 15){
    console.log("OK");
    console.log("OK2");
}
else{
    console.log("NO");
}

ES1: definire base e altezza e stampare "quadrato o rettangolo"
*/

var base = 10;
var altezza = 10;
if (altezza==base){
    console.log("quadrato")
} 
else{
    console.log("rettangolo")
}

/* ES2: calcolare le imposte in una tassazione progressiva.
Inventarsi in una variabile reddito un numero.
- se si guadagna meno di 2000€ si paga 0€
- se si guadagna da 2000€ a 15000€ di questa parte si paga il 10%
- tra 15000€ e 30000€ si paga 30%
- 30000€ e oltre si paga il 40%
*/

let reddito = 40000;
let imposte = 0;
if(reddito > 30000){
    imposte += (reddito-30000)*.40;
    reddito = 30000
}
if(reddito > 15000){
    imposte += (reddito-15000)*.30;
    reddito = 15000
}
if(reddito > 2000){
    imposte += (reddito-2000)*.10;
    reddito = 2000
}
console.log(imposte);

// ES1: inizializzare le età di due persone e stampare la più grande

// ES2: trovare il numero più piccolo di tre numeri

// ES3: controllare se un triangolo è equilatero, scaleno, isoscele

let Mario = 15
let Roy = 40
if(Mario>Roy){
    console.log(Mario)
}
else{console.log(Roy)}

let x=5, y=4, z=3;
if(x < y && x < z){
    console.log(x)
}
else if(y < x && y < z){
    console.log(y)
}
else{console.log(z)}

let lato1 = 10
let lato2 = 10
let lato3 = 10
if(lato1 == lato2 && lato1 == lato3){
    console.log ("Equilatero")
} 
else if(lato1 == lato2 || lato1 == lato3 || lato2 == lato3){
    console.log ("Isoscele")
}
else{console.log("Scaleno")}

// <while> ripete l'azione finchè è vera
// <for> ripete l'azione fino ad un numero prefissato
// <foreach> ripete l'azione per la quantità di elementi una lista

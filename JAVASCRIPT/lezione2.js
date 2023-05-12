// INTERAZIONE WHILE

// STAMPARE DA 0 A 10

/* 
let n = 10;

while(n <= 10){
    console.log(n);
    n++;
}
while(n >= 0){
    console.log(n);
    n--;
}
while(n >= 0){
    if(n % 2 == 0)
    console.log(n);
    n --;
}
*/


/*
for(let i = 0; i < 10; i++){
    console.log(i)
};

(INIZIALIZZAZIONE; CONDIZIONE; AGGIORNAMENTO){
      ISTRUZIONE DA RIPETERE
}
*/


/*
for(let n = 10; n >= 0; n--){
    console.log(n)
};
let array = [1,2,3,4,5,10]
for(let i = 0; i < array.length; i++){
    console.log(array[i])
};


let array = [1,2,3,4,5,10]
for(let i = 0; i < array.length; i++){
    if(i % 2 == 0);
    console.log(array[i]);
}

for(numero of array){
    console.log(numero);
}


// STAMPARE I NUMERI PARI DI UN ARRAY
// DATI DUE ARRAY DI DIMENSIONE UGUALE, CALCOLARE IL VETTORE SOMMA

let array = [1,2,3,4,5,6,7,8,9,10];
for(numero of array){
    if(numero % 2 == 0)
    console.log(numero);
}

let i = 2
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let risultato = [];
for (let i = 0; i < array1.length; i++) {
    risultato.push(array1[i] + array2[i]);
    console.log(risultato[Number]);
}

//array1.push(4) istruzione per aggiungere un elemento alla fine di una lista

const array1 = ["Paolo","Fabio","Giovanni","Gabriele","Francesco","Andrea","Marco","Federico","Renato"];
console.log(array1);
const array2 = [];
for (let i = 0; i < array1.length; i++){
    array1[i].startsWith("F") && array2.push(array1[i]);
}
console.log(array2);

// definizione di funzione
function pariDispari(num){
    if(num%2==0)
    console.log("È pari");
    else
    console.log("È dispari")
}
let numero = 6;
// chiamata di funzione
pariDispari(numero);

function somma(x, y){
    return x + y;
}
let x = 2
let sum = somma(x, 5);
// let sum = 7;
console.log(somma(somma(3, 5)))

// ES funzione senza return: stampare il fattoriale di n 
// ES con return: restituire il fattoriale n

function stampaFattoriale(n){
    let tot = 1;
    for(let i = 1; i <= n; i++)
    tot *= i;
    console.log(tot)
}

function fattoriale(n){
    let tot = 1;
    for(let i = 1; i <= n; i++)
    tot *= i;
    return tot;
}

function m1(b){
    return !b;
}

function m2(b){
    return !m1(b);
}

console.log(m2(4 !== 5));
*/

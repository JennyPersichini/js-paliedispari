//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

let pariDispariChoice = prompt("Inserisci 'pari' o 'dispari'");
let numChoice = prompt("Inserisci un numero tra 1 e 5");
let num1 = parseInt(numChoice);

console.log(`Il numero da te scelto è ${num1}`)

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function numComputer(){
    num2 = Math.floor(Math.random() * 5) + 1;
    console.log(`Il computer ha scelto ${num2}`);
}

//Sommiamo i due numeri

let sum = num1 + numComputer();

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function check(sum) {
    let result = 0;

    if (sum % 2 == 0){
        result = "Pari";
    } else {
        result = "Dispari";
    }

    return result;

}

//Dichiariamo chi ha vinto.


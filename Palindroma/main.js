//Chiedere all’utente di inserire una parola.

let word = prompt("Inserire una parola");

//Creare una funzione per capire se la parola inserita è palindroma.

//Palindroma: è una parola che letta in entrambi i versi, da la stessa parola.
//La parola inserita è uguale in entrambi i versi??? Se si è PALINDROMA!!


//Creo una funzione che con un ciclo for mi prenda lettera x lettera dell'intera parola scelta e la legge anche al contrario.

function reverse(word) {

    let reverseWord = "";

    for (let i = word.length - 1; i >=  0; i--) {
        reverseWord += (word[i]); 
    }

    return reverseWord;
    
 }

//Se la parola inserita combacia con la sua versione al contrario, è palindroma; altrimenti non è palindroma.
 
 if (word == reverse(word)) {
    alert(`${word} è palindroma!!!`);
 } else {
    alert(`${word} non è palindroma!!!`);
 }
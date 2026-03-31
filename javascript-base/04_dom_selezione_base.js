// ====================================================================================== //
// File: 04_dom_selezione_base.js                                                        //
// Obiettivo: imparare a selezionare tag HTML con JavaScript (DOM)                      //
// ====================================================================================== //

// -------------------------------------------------------------------------------------- //
// PREREQUISITO IMPORTANTE                                                                //
// Questo file va eseguito nel browser, NON con Node.js, perché usa "document".         //
// Apri dom_playground.html e collega questo script (vedi in fondo al file HTML).        //
// -------------------------------------------------------------------------------------- //

// Stampiamo un titolo nel terminale del browser (Console DevTools) per orientarsi.
console.log("\n===== DOM 04: SELEZIONE BASE =====\n"); // Messaggio iniziale con righe vuote per migliorare la leggibilità.

// Il DOM (Document Object Model) è la rappresentazione ad oggetti della pagina HTML.
// Con JavaScript possiamo cercare elementi HTML e manipolarli.

// -------------------------------------------------------------------------------------- //
// 1) getElementById                                                                       //
// -------------------------------------------------------------------------------------- //

// getElementById cerca un elemento tramite il suo attributo id.
const titoloPrincipale = document.getElementById("titolo"); // Prendiamo l'elemento <h1 id="titolo">.
console.log("Elemento con id 'titolo':", titoloPrincipale); // Stampiamo l'oggetto elemento trovato.

// textContent legge (o imposta) il testo interno di un elemento.
console.log("Testo attuale del titolo:", titoloPrincipale.textContent); // Vediamo il testo del titolo.

// -------------------------------------------------------------------------------------- //
// 2) querySelector                                                                        //
// -------------------------------------------------------------------------------------- //

// querySelector usa i selettori CSS e restituisce il PRIMO elemento che corrisponde.
const primaDescrizione = document.querySelector(".descrizione"); // Cerchiamo il primo elemento con classe "descrizione".
console.log("Primo elemento con classe descrizione:", primaDescrizione); // Mostriamo l'elemento trovato.
console.log("Testo prima descrizione:", primaDescrizione.textContent); // Mostriamo il suo contenuto testuale.

// Possiamo usare querySelector anche su tag, ad esempio "ul", "li", "section", ecc.
const primaLista = document.querySelector("ul"); // Prende il primo <ul> presente nel documento.
console.log("Primo elemento <ul> trovato:", primaLista); // Verifica in console.

// -------------------------------------------------------------------------------------- //
// 3) querySelectorAll                                                                     //
// -------------------------------------------------------------------------------------- //

// querySelectorAll restituisce TUTTI gli elementi trovati sotto forma di NodeList.
const tutteLeDescrizioni = document.querySelectorAll(".descrizione"); // Cerchiamo tutti i tag con classe "descrizione".
console.log("Tutte le descrizioni (NodeList):", tutteLeDescrizioni); // Mostriamo l'elenco completo.
console.log("Numero descrizioni trovate:", tutteLeDescrizioni.length); // .length indica quante descrizioni abbiamo trovato.

// Usiamo forEach per leggere ogni elemento della NodeList.
tutteLeDescrizioni.forEach((elemento, indice) => { // Per ogni elemento troviamo anche la sua posizione.
  console.log("Descrizione", indice, "=>", elemento.textContent); // Stampiamo indice e testo di ogni paragrafo.
}); // Fine ciclo su NodeList.

// -------------------------------------------------------------------------------------- //
// 4) Selezione di più elementi specifici                                                 //
// -------------------------------------------------------------------------------------- //

const tuttiICorsi = document.querySelectorAll("#lista-corsi .corso"); // Cerchiamo solo i <li> con classe corso dentro #lista-corsi.
console.log("Corsi trovati:", tuttiICorsi.length); // Mostriamo quanti corsi sono presenti.

for (let i = 0; i < tuttiICorsi.length; i++) { // Ciclo classico for per mostrare anche questa variante.
  console.log("Corso in posizione", i, ":", tuttiICorsi[i].textContent); // Stampiamo il testo di ogni corso.
} // Fine for.

// -------------------------------------------------------------------------------------- //
// 5) Esercizi                                                                             //
// -------------------------------------------------------------------------------------- //

console.log("\n--- Esercizio 1 (risolto): seleziona box messaggio ---"); // Titolo esercizio risolto.
const boxMessaggio = document.getElementById("boxMessaggio"); // Selezioniamo il div con id boxMessaggio.
console.log("boxMessaggio trovato:", boxMessaggio); // Verifica elemento.
console.log("Testo boxMessaggio:", boxMessaggio.textContent); // Verifica contenuto testuale.

console.log("\n--- Esercizio 2 (DA COMPLETARE): seleziona bottone ---"); // Titolo esercizio da completare.
// TODO: seleziona il bottone con id "btnSaluta" e salvalo in una costante chiamata "bottoneSaluta".
// TODO: stampa in console la costante "bottoneSaluta".

console.log("\n--- Esercizio 3 (DA COMPLETARE): conta i li ---"); // Titolo esercizio da completare.
// TODO: usa querySelectorAll("li") e salva il risultato in "tuttiLi".
// TODO: stampa quanti <li> ci sono usando tuttiLi.length.

console.log("\n===== FINE LEZIONE 04 =====\n"); // Chiusura della lezione.

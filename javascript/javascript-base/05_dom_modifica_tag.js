// ====================================================================================== //
// File: 05_dom_modifica_tag.js                                                          //
// Obiettivo: modificare testo, attributi, classi e stile dei tag HTML                  //
// ====================================================================================== //

// -------------------------------------------------------------------------------------- //
// PREREQUISITO IMPORTANTE                                                                //
// Esegui questo file nel browser caricando dom_playground.html.                         //
// -------------------------------------------------------------------------------------- //

console.log("\n===== DOM 05: MODIFICA TAG HTML =====\n"); // Titolo iniziale della lezione.

// Selezioniamo gli elementi che useremo più volte.
const titolo = document.getElementById("titolo"); // Riferimento all'h1 principale.
const boxMessaggio = document.getElementById("boxMessaggio"); // Riferimento al div messaggi.
const primaDescrizione = document.querySelector(".descrizione"); // Primo paragrafo descrittivo.

// -------------------------------------------------------------------------------------- //
// 1) Modificare testo: textContent e innerHTML                                            //
// -------------------------------------------------------------------------------------- //

console.log("--- Modifica testo ---"); // Titolo sezione.
console.log("Titolo prima:", titolo.textContent); // Leggiamo il testo originale del titolo.

titolo.textContent = "DOM Playground - Titolo modificato con JavaScript"; // Cambiamo il testo dell'h1 in modo sicuro (solo testo).
console.log("Titolo dopo textContent:", titolo.textContent); // Verifichiamo il nuovo testo.

// innerHTML permette di inserire anche tag HTML dentro un elemento.
boxMessaggio.innerHTML = "<strong>Messaggio aggiornato:</strong> ora il contenuto include HTML."; // Inseriamo HTML dentro il div.
console.log("Contenuto boxMessaggio dopo innerHTML:", boxMessaggio.innerHTML); // Mostriamo il contenuto HTML risultante.

// -------------------------------------------------------------------------------------- //
// 2) Modificare attributi                                                                 //
// -------------------------------------------------------------------------------------- //

console.log("\n--- Attributi HTML ---"); // Titolo sezione.

// setAttribute imposta o aggiorna un attributo di un elemento.
primaDescrizione.setAttribute("data-argomento", "dom-base"); // Aggiungiamo un attributo personalizzato data-argomento.
console.log("Attributo data-argomento:", primaDescrizione.getAttribute("data-argomento")); // Leggiamo il valore appena scritto.

// Possiamo anche lavorare con attributi standard, ad esempio title.
primaDescrizione.setAttribute("title", "Paragrafo modificato via JavaScript"); // Aggiungiamo tooltip testuale.
console.log("Attributo title:", primaDescrizione.getAttribute("title")); // Verifichiamo il valore title.

// -------------------------------------------------------------------------------------- //
// 3) Classi CSS con classList                                                             //
// -------------------------------------------------------------------------------------- //

console.log("\n--- classList ---"); // Titolo sezione.

// add aggiunge una classe, remove la rimuove, toggle la aggiunge/rimuove alternativamente.
titolo.classList.add("titolo-attivo"); // Aggiungiamo una classe al titolo.
console.log("Classi titolo dopo add:", titolo.className); // Mostriamo tutte le classi correnti.

titolo.classList.remove("titolo-attivo"); // Rimuoviamo la stessa classe.
console.log("Classi titolo dopo remove:", titolo.className); // Verifichiamo la rimozione.

// toggle è comodo per attivare/disattivare uno stato.
const risultatoToggle = titolo.classList.toggle("titolo-evidenza"); // Se non esiste la classe la aggiunge e restituisce true.
console.log("Risultato toggle:", risultatoToggle); // Mostra true/false in base allo stato finale.
console.log("Classi titolo dopo toggle:", titolo.className); // Verifichiamo classi aggiornate.

// -------------------------------------------------------------------------------------- //
// 4) Stili inline con .style                                                              //
// -------------------------------------------------------------------------------------- //

console.log("\n--- Stili inline ---"); // Titolo sezione.

titolo.style.color = "darkblue"; // Cambiamo il colore del testo direttamente via JavaScript.
titolo.style.backgroundColor = "#e8f0ff"; // Impostiamo il colore di sfondo del titolo.
titolo.style.padding = "8px"; // Aggiungiamo spazio interno per migliorare leggibilità.

console.log("Stile titolo color:", titolo.style.color); // Leggiamo il colore applicato.
console.log("Stile titolo backgroundColor:", titolo.style.backgroundColor); // Leggiamo il background applicato.

// -------------------------------------------------------------------------------------- //
// 5) Esercizi                                                                             //
// -------------------------------------------------------------------------------------- //

console.log("\n--- Esercizio 1 (risolto): cambia testo bottone ---"); // Titolo esercizio risolto.
const bottoneColore = document.getElementById("btnColore"); // Selezioniamo il bottone con id btnColore.
bottoneColore.textContent = "Colore aggiornato"; // Aggiorniamo l'etichetta del bottone.
console.log("Nuovo testo bottone:", bottoneColore.textContent); // Verifica nel terminale.

console.log("\n--- Esercizio 2 (DA COMPLETARE): attributo id dinamico ---"); // Titolo esercizio.
// TODO: seleziona l'input con id "inputNome".
// TODO: aggiungi l'attributo placeholder con valore "Inserisci nome e cognome".
// TODO: stampa il placeholder letto con getAttribute.

console.log("\n--- Esercizio 3 (DA COMPLETARE): stile box ---"); // Titolo esercizio.
// TODO: cambia il colore del testo di #boxMessaggio in "green".
// TODO: imposta fontWeight a "bold".
// TODO: stampa i valori style.color e style.fontWeight.

console.log("\n===== FINE LEZIONE 05 =====\n"); // Chiusura della lezione.

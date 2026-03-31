// ====================================================================================== //
// File: 07_dom_creazione_elementi.js                                                    //
// Obiettivo: creare, inserire e rimuovere tag HTML via JavaScript                      //
// ====================================================================================== //

// -------------------------------------------------------------------------------------- //
// PREREQUISITO IMPORTANTE                                                                //
// Esegui nel browser caricando dom_playground.html e collegando questo script.          //
// -------------------------------------------------------------------------------------- //

console.log("\n===== DOM 07: CREAZIONE ELEMENTI =====\n"); // Titolo iniziale.

// Selezioniamo gli elementi necessari per gli esempi.
const listaDinamica = document.getElementById("listaDinamica"); // Lista vuota dove aggiungeremo nuovi <li>.
const btnAggiungi = document.getElementById("btnAggiungi"); // Bottone per aggiungere elementi.
const boxMessaggio = document.getElementById("boxMessaggio"); // Box per feedback testuali.

// -------------------------------------------------------------------------------------- //
// 1) createElement + appendChild                                                         //
// -------------------------------------------------------------------------------------- //

// createElement crea un nuovo nodo HTML in memoria.
const primoElemento = document.createElement("li"); // Creiamo un nuovo <li>.
primoElemento.textContent = "Elemento creato all'avvio script"; // Impostiamo testo interno del nuovo elemento.
listaDinamica.appendChild(primoElemento); // Inseriamo il nuovo elemento in fondo alla lista nel DOM.

console.log("Aggiunto primo elemento iniziale alla lista dinamica."); // Conferma in console.

// -------------------------------------------------------------------------------------- //
// 2) Aggiunta dinamica su click                                                           //
// -------------------------------------------------------------------------------------- //

let contatoreElementi = 1; // Contatore iniziale; 1 perché abbiamo già aggiunto il primo elemento.

btnAggiungi.addEventListener("click", () => { // Quando l'utente clicca il bottone, aggiungiamo un nuovo elemento.
  contatoreElementi++; // Aumentiamo il contatore per numerare il nuovo elemento.

  const nuovoLi = document.createElement("li"); // Creiamo un nuovo tag <li>.
  nuovoLi.textContent = `Elemento dinamico numero ${contatoreElementi}`; // Impostiamo testo dinamico con template literal.

  // classList.add assegna una classe CSS (utile per stile o selezione futura).
  nuovoLi.classList.add("item-dinamico"); // Aggiungiamo una classe descrittiva al nuovo elemento.

  listaDinamica.appendChild(nuovoLi); // Inseriamo il nuovo <li> in fondo alla lista.

  boxMessaggio.textContent = `Aggiunto: ${nuovoLi.textContent}`; // Aggiorniamo il box con un messaggio di conferma.
  console.log("Elemento aggiunto:", nuovoLi.textContent); // Debug in console.
}); // Fine listener click.

// -------------------------------------------------------------------------------------- //
// 3) prepend e remove                                                                     //
// -------------------------------------------------------------------------------------- //

// prepend inserisce un elemento all'inizio invece che alla fine.
const elementoInTesta = document.createElement("li"); // Creiamo un nuovo <li> da mettere in cima.
elementoInTesta.textContent = "Elemento inserito in testa con prepend"; // Testo descrittivo.
listaDinamica.prepend(elementoInTesta); // Inseriamo questo elemento all'inizio della lista.

console.log("Inserito un elemento in testa con prepend."); // Conferma operazione.

// remove rimuove un elemento esistente dal DOM.
const elementoDaRimuovere = document.querySelector("#listaDinamica li"); // Selezioniamo il primo <li> attuale.
if (elementoDaRimuovere) { // Verifichiamo che l'elemento esista prima di rimuoverlo.
  elementoDaRimuovere.remove(); // Rimozione sicura del nodo selezionato.
  console.log("Rimosso il primo elemento della lista con remove()."); // Conferma in console.
} // Fine controllo esistenza.

// -------------------------------------------------------------------------------------- //
// 4) Esercizi                                                                             //
// -------------------------------------------------------------------------------------- //

console.log("\n--- Esercizio 1 (risolto): crea paragrafo ---"); // Titolo esercizio risolto.
const paragrafo = document.createElement("p"); // Creiamo un nuovo tag <p>.
paragrafo.textContent = "Paragrafo creato via JavaScript."; // Inseriamo testo nel paragrafo.
document.body.appendChild(paragrafo); // Aggiungiamo il paragrafo in fondo al body.
console.log("Paragrafo aggiunto al body."); // Conferma in console.

console.log("\n--- Esercizio 2 (DA COMPLETARE): svuota lista ---"); // Titolo esercizio.
// TODO: usa listaDinamica.innerHTML = "" per rimuovere tutti gli elementi della lista.
// TODO: stampa in console quanti elementi restano con querySelectorAll("#listaDinamica li").length.

console.log("\n--- Esercizio 3 (DA COMPLETARE): crea bottone nuovo ---"); // Titolo esercizio.
// TODO: crea un nuovo bottone con createElement("button").
// TODO: imposta textContent a "Nuovo bottone".
// TODO: aggiungi il bottone al body con appendChild.

console.log("\n===== FINE LEZIONE 07 =====\n"); // Chiusura della lezione.

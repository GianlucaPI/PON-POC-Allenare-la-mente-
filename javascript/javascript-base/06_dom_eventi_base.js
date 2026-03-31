// ====================================================================================== //
// File: 06_dom_eventi_base.js                                                           //
// Obiettivo: gestire eventi HTML (click, input, submit) con JavaScript                 //
// ====================================================================================== //

// -------------------------------------------------------------------------------------- //
// PREREQUISITO IMPORTANTE                                                                //
// Esegui nel browser caricando dom_playground.html e collegando questo script.          //
// -------------------------------------------------------------------------------------- //

console.log("\n===== DOM 06: EVENTI BASE =====\n"); // Titolo iniziale della lezione.

// In JavaScript un "evento" è qualcosa che accade nella pagina (es. click, digitazione, invio form).
// Con addEventListener possiamo dire: "quando succede X, esegui questa funzione".

// Selezioniamo gli elementi con cui lavoreremo.
const btnSaluta = document.getElementById("btnSaluta"); // Bottone per click semplice.
const btnColore = document.getElementById("btnColore"); // Bottone per cambiare colore.
const titolo = document.getElementById("titolo"); // Titolo da aggiornare visivamente.
const inputNome = document.getElementById("inputNome"); // Input testo per evento input.
const boxMessaggio = document.getElementById("boxMessaggio"); // Box dove scrivere messaggi.
const formContatto = document.getElementById("formContatto"); // Form per evento submit.
const email = document.getElementById("email"); // Campo email dentro il form.

// -------------------------------------------------------------------------------------- //
// 1) Evento click                                                                         //
// -------------------------------------------------------------------------------------- //

btnSaluta.addEventListener("click", () => { // Registriamo una funzione da eseguire quando l'utente clicca il bottone.
  console.log("Click su btnSaluta rilevato"); // Log di debug per vedere che l'evento è scattato.
  boxMessaggio.textContent = "Ciao! Hai cliccato il bottone Saluta."; // Aggiorniamo il testo del box messaggio.
}); // Fine gestione click su btnSaluta.

// Cambiamo colore titolo a ogni click alternando due stati.
let titoloBlu = true; // Stato iniziale: true significa "usa blu".

btnColore.addEventListener("click", () => { // Evento click sul bottone colore.
  if (titoloBlu) { // Se lo stato è true, applichiamo primo colore.
    titolo.style.color = "blue"; // Impostiamo testo blu.
    boxMessaggio.textContent = "Titolo impostato su blu."; // Messaggio di conferma.
  } else { // Se lo stato era false, applichiamo il colore alternativo.
    titolo.style.color = "crimson"; // Impostiamo testo rosso scuro.
    boxMessaggio.textContent = "Titolo impostato su crimson."; // Messaggio di conferma.
  } // Fine blocco condizionale.

  titoloBlu = !titoloBlu; // Invertiamo lo stato per il click successivo.
  console.log("Nuovo stato titoloBlu:", titoloBlu); // Debug dello stato attuale.
}); // Fine gestione click su btnColore.

// -------------------------------------------------------------------------------------- //
// 2) Evento input                                                                         //
// -------------------------------------------------------------------------------------- //

// L'evento input scatta mentre l'utente digita.
inputNome.addEventListener("input", () => { // Ogni volta che cambia il contenuto dell'input, eseguiamo questa funzione.
  const valoreCorrente = inputNome.value; // Leggiamo il testo scritto dall'utente.
  console.log("Input attuale:", valoreCorrente); // Mostriamo il testo in console per controllo.

  if (valoreCorrente.length === 0) { // Se il campo è vuoto...
    boxMessaggio.textContent = "Scrivi il tuo nome per vedere un saluto personalizzato."; // Messaggio guida.
  } else { // Se il campo contiene almeno un carattere...
    boxMessaggio.textContent = `Ciao ${valoreCorrente}!`; // Mostriamo saluto dinamico.
  } // Fine condizione su input vuoto/non vuoto.
}); // Fine gestione evento input.

// -------------------------------------------------------------------------------------- //
// 3) Evento submit del form                                                               //
// -------------------------------------------------------------------------------------- //

formContatto.addEventListener("submit", (evento) => { // Evento submit sul form, funzione con parametro evento.
  evento.preventDefault(); // Blocchiamo il comportamento predefinito (ricarica pagina).

  const emailInserita = email.value.trim(); // Leggiamo email e rimuoviamo eventuali spazi esterni.
  console.log("Tentativo invio email:", emailInserita); // Debug del valore inserito.

  if (emailInserita.includes("@") && emailInserita.includes(".")) { // Controllo base molto semplice su formato email.
    boxMessaggio.textContent = `Form inviato correttamente con email: ${emailInserita}`; // Messaggio di successo.
  } else { // Se il controllo non passa...
    boxMessaggio.textContent = "Email non valida: inserisci un indirizzo corretto."; // Messaggio di errore.
  } // Fine controllo validazione semplificata.
}); // Fine gestione submit.

// -------------------------------------------------------------------------------------- //
// 4) Esercizi                                                                             //
// -------------------------------------------------------------------------------------- //

console.log("\n--- Esercizio 1 (DA COMPLETARE): click su btnAggiungi ---"); // Titolo esercizio.
// TODO: seleziona il bottone con id "btnAggiungi".
// TODO: aggiungi un listener click che stampi in console "Hai cliccato Aggiungi".

console.log("\n--- Esercizio 2 (DA COMPLETARE): input maiuscolo ---"); // Titolo esercizio.
// TODO: nel listener di inputNome, crea una variabile con il testo in MAIUSCOLO (toUpperCase).
// TODO: stampa quella variabile in console.

console.log("\n===== FINE LEZIONE 06 =====\n"); // Chiusura della lezione.

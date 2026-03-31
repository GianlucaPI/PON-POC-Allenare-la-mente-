// ====================================================================================== //
// File: 08_dom_input_types.js                                                           //
// Obiettivo: leggere e usare diversi input type HTML con JavaScript (DOM)              //
// ====================================================================================== //

// -------------------------------------------------------------------------------------- //
// PREREQUISITO IMPORTANTE                                                                //
// Esegui questo script nel browser tramite dom_playground.html.                         //
// -------------------------------------------------------------------------------------- //

console.log("\n===== DOM 08: INPUT TYPES =====\n"); // Titolo iniziale in console per separare bene la lezione.

// Selezioniamo i riferimenti agli elementi HTML che ci servono.
const inputText = document.getElementById("inputText"); // Input di tipo text.
const inputNumber = document.getElementById("inputNumber"); // Input di tipo number.
const inputDate = document.getElementById("inputDate"); // Input di tipo date.
const inputCheckbox = document.getElementById("inputCheckbox"); // Input di tipo checkbox.
const inputRange = document.getElementById("inputRange"); // Input di tipo range.
const inputColor = document.getElementById("inputColor"); // Input di tipo color.
const btnLeggiInput = document.getElementById("btnLeggiInput"); // Bottone per leggere tutti i valori.
const boxMessaggio = document.getElementById("boxMessaggio"); // Box dove mostriamo un riepilogo rapido.

// Questa funzione legge il radio selezionato nel gruppo "livello".
function leggiLivelloSelezionato() { // Funzione di utilità per non ripetere codice.
  const radioSelezionato = document.querySelector('input[name="livello"]:checked'); // Selettore CSS: prende il radio checked nel gruppo livello.

  if (!radioSelezionato) { // Se non esiste un radio selezionato...
    return "nessuno"; // Restituiamo una stringa di fallback.
  } // Fine controllo.

  return radioSelezionato.value; // Se presente, restituiamo il suo valore (base/intermedio/avanzato).
} // Fine funzione leggiLivelloSelezionato.

// Evento principale: click sul bottone di lettura input.
btnLeggiInput.addEventListener("click", () => { // Quando clicchi il bottone, leggiamo tutti i campi.
  const valoreText = inputText.value; // .value legge il testo inserito.
  const valoreNumber = inputNumber.value; // Per number, .value è comunque stringa.
  const valoreNumberAsNumber = inputNumber.valueAsNumber; // valueAsNumber converte direttamente in numero (NaN se vuoto/non valido).
  const valoreDate = inputDate.value; // Data in formato stringa YYYY-MM-DD.
  const valoreCheckbox = inputCheckbox.checked; // .checked è booleano: true/false.
  const valoreRange = inputRange.value; // Range letto come stringa.
  const valoreColor = inputColor.value; // Colore in formato esadecimale (#rrggbb).
  const livello = leggiLivelloSelezionato(); // Valore del radio attivo.

  console.log("--- Valori input letti ---"); // Titolo del blocco log.
  console.log("text:", valoreText); // Mostra valore testo.
  console.log("number (string):", valoreNumber); // Mostra number come stringa.
  console.log("number (numero):", valoreNumberAsNumber); // Mostra number come numero.
  console.log("date:", valoreDate); // Mostra data selezionata.
  console.log("checkbox:", valoreCheckbox); // Mostra true/false.
  console.log("radio livello:", livello); // Mostra radio selezionato.
  console.log("range:", valoreRange); // Mostra valore slider.
  console.log("color:", valoreColor); // Mostra colore selezionato.

  // Aggiorniamo anche la pagina con un riepilogo leggibile.
  boxMessaggio.textContent = `Nome: ${valoreText || "(vuoto)"} | Età: ${Number.isNaN(valoreNumberAsNumber) ? "(non valida)" : valoreNumberAsNumber} | Livello: ${livello} | Range: ${valoreRange}`; // Messaggio compatto con valori utili.
  boxMessaggio.style.color = valoreColor; // Usiamo il color picker per colorare il testo del box.
}); // Fine listener click.

// Extra didattico: mostriamo in tempo reale il valore del range durante lo spostamento.
inputRange.addEventListener("input", () => { // L'evento input su range scatta mentre trascini lo slider.
  console.log("Range aggiornato in tempo reale:", inputRange.value); // Log continuo del valore corrente.
}); // Fine listener range.

console.log("\n--- Esercizio 1 (DA COMPLETARE) ---"); // Titolo esercizio.
// TODO: se checkbox è false, mostra nel boxMessaggio "Devi accettare le condizioni".
// TODO: altrimenti mostra "Condizioni accettate".

console.log("\n--- Esercizio 2 (DA COMPLETARE) ---"); // Titolo esercizio.
// TODO: aggiungi un controllo sul numero: se è minore di 18 stampa in console "Minorenne", altrimenti "Maggiorenne".

console.log("\n===== FINE LEZIONE 08 =====\n"); // Chiusura della lezione.

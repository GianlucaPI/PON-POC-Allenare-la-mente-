// ====================================================================================== //
// File: 01_sintassi_base.js                                                              //
// Obiettivo: Ripasso intensivo JavaScript - sintassi base per studente di quinta superiore //
// ====================================================================================== //

// -------------------------------------------------------------------------------------- //
// COME USARE QUESTO FILE                                                                 //
// 1) Leggi i commenti con calma: spiegano il "perché" oltre al "cosa".               //
// 2) Esegui il file con Node.js (esempio: node 01_sintassi_base.js).                    //
// 3) Osserva l'output nel terminale (console).                                           //
// 4) Completa gli esercizi segnati come "DA COMPLETARE".                                //
// -------------------------------------------------------------------------------------- //

// Stampiamo un titolo per capire quando inizia il programma nel terminale.
console.log("\n===== RIPASSO JAVASCRIPT: SINTASSI BASE =====\n"); // console.log invia testo al terminale; \n crea righe vuote per rendere l'output più leggibile.

// ====================================================================================== //
// 1) VARIABILI: let e const                                                              //
// ====================================================================================== //

// In JavaScript, una variabile è un "contenitore" con un nome, che conserva un valore.
// L'operatore di assegnazione è il simbolo "=".
// ATTENZIONE: qui "=" NON significa uguaglianza matematica, ma "assegna il valore a destra alla variabile a sinistra".

let etaStudente = 18; // "let" dichiara una variabile che può cambiare nel tempo; qui assegniamo il numero 18.
console.log("Età iniziale:", etaStudente); // Mostriamo il valore iniziale della variabile per verificare che l'assegnazione sia avvenuta.

etaStudente = 19; // Riassegnazione: usiamo ancora "=" per sostituire il vecchio valore (18) con il nuovo valore (19).
console.log("Età aggiornata:", etaStudente); // Stampiamo il nuovo valore per capire che "let" permette la modifica.

const annoNascita = 2007; // "const" dichiara una costante: dopo l'assegnazione iniziale non può essere riassegnata.
console.log("Anno di nascita:", annoNascita); // Stampiamo la costante; è utile quando il dato non deve cambiare.

// annoNascita = 2008; // Questa riga è commentata perché causerebbe errore: una "const" non può essere riassegnata.

console.log("\n--- Esercizio 1 (risolto): variabili ---"); // Separatore visivo per distinguere le sezioni.
let nomeScuola = "Liceo Scientifico"; // Creiamo una variabile stringa con il nome della scuola.
console.log("Scuola:", nomeScuola); // Verifichiamo nel terminale il contenuto della variabile.
nomeScuola = "Istituto Tecnico"; // Cambiamo il valore per mostrare che con "let" è consentito.
console.log("Scuola aggiornata:", nomeScuola); // Confermiamo l'aggiornamento.

console.log("\n--- Esercizio 2 (DA COMPLETARE): variabili ---"); // Titolo dell'esercizio da fare.
let citta = "Milano"; // Punto di partenza: variabile già creata.
// TODO: cambia il valore di "citta" in "Roma" usando l'operatore di assegnazione "=".
console.log("Città attuale (dopo la tua modifica):", citta); // Dopo la modifica, qui dovresti vedere "Roma".

// ====================================================================================== //
// 2) TIPI DI DATI PRINCIPALI                                                            //
// ====================================================================================== //

// JavaScript è un linguaggio a tipizzazione dinamica: il tipo è associato al valore, non al nome della variabile.

let nome = "Giulia"; // Tipo string: sequenza di caratteri di testo racchiusa tra virgolette.
let voto = 8; // Tipo number: numeri interi o decimali in JavaScript usano lo stesso tipo.
let presenza = true; // Tipo boolean: può essere solo true (vero) o false (falso).
let valoreMancante = null; // Tipo speciale null: indica "assenza intenzionale" di valore.
let nonDefinito; // Variabile dichiarata ma senza assegnazione: valore undefined.

console.log("\n--- Tipi di dati ---"); // Titolo sezione output.
console.log("nome =", nome, "| tipo:", typeof nome); // typeof restituisce il tipo del valore contenuto in "nome".
console.log("voto =", voto, "| tipo:", typeof voto); // Verifichiamo che un numero è di tipo "number".
console.log("presenza =", presenza, "| tipo:", typeof presenza); // Verifichiamo il tipo boolean.
console.log("valoreMancante =", valoreMancante, "| tipo:", typeof valoreMancante); // Nota storica: typeof null restituisce "object" (comportamento noto di JS).
console.log("nonDefinito =", nonDefinito, "| tipo:", typeof nonDefinito); // Quando non assegni nulla, il tipo risulta "undefined".

console.log("\n--- Esercizio 3 (risolto): confronto tra tipi ---"); // Separatore esercizio.
let numeroComeTesto = "10"; // Questa è una stringa, non un numero, anche se contiene cifre.
let numeroVero = 10; // Questo invece è un numero reale per JavaScript.
console.log("numeroComeTesto:", numeroComeTesto, "| tipo:", typeof numeroComeTesto); // Mostriamo che è string.
console.log("numeroVero:", numeroVero, "| tipo:", typeof numeroVero); // Mostriamo che è number.

// ====================================================================================== //
// 3) ISTRUZIONI CONDIZIONALI: if / else if / else                                      //
// ====================================================================================== //

// Le condizioni permettono di scegliere quale blocco di codice eseguire in base a una regola logica.

console.log("\n--- Condizionali ---"); // Titolo sezione.
let votoCompito = 7; // Variabile numerica che rappresenta il voto di un compito.

if (votoCompito >= 8) { // Se il voto è maggiore o uguale a 8, entra in questo blocco.
  console.log("Ottimo lavoro!"); // Messaggio per voti alti.
} else if (votoCompito >= 6) { // Altrimenti, se non era >=8 ma è >=6, entra qui.
  console.log("Sufficiente, puoi migliorare."); // Messaggio per sufficienza.
} else { // Se nessuna condizione precedente è vera, entra nell'else finale.
  console.log("Insufficiente, serve ripasso."); // Messaggio per voto insufficiente.
} // Fine catena condizionale.

console.log("\n--- Esercizio 4 (DA COMPLETARE): condizionali ---"); // Titolo esercizio.
let temperatura = 28; // Dato di partenza: temperatura in gradi.
// TODO: scrivi una condizione if/else:
// - se temperatura >= 30 stampa "Fa molto caldo"
// - altrimenti stampa "Temperatura sopportabile"
console.log("Temperatura letta:", temperatura); // Riga di supporto per verificare il valore usato nell'esercizio.

// ====================================================================================== //
// 4) CICLI: for e while                                                                  //
// ====================================================================================== //

// I cicli servono a ripetere un blocco di istruzioni più volte senza scrivere codice duplicato.

console.log("\n--- Ciclo for ---"); // Titolo ciclo for.

// Struttura del for: for (inizializzazione; condizione; aggiornamento) { ... }
for (let i = 0; i < 5; i++) { // i parte da 0; il ciclo continua finché i è minore di 5; i++ aumenta i di 1 a ogni giro.
  console.log("Valore di i:", i); // Stampiamo i per osservare la sequenza 0,1,2,3,4.
} // Fine ciclo for.

// Spiegazione dettagliata di i++:
// i++ è un operatore di incremento.
// Significa: "prendi il valore corrente di i e aumentalo di 1".
// È equivalente a scrivere: i = i + 1.

console.log("\n--- Ciclo while ---"); // Titolo ciclo while.
let contatore = 3; // Inizializziamo il contatore prima del while.

while (contatore > 0) { // Il blocco si ripete finché la condizione è vera.
  console.log("Contatore:", contatore); // Stampiamo il valore corrente prima di ridurlo.
  contatore--; // Operatore di decremento: contatore = contatore - 1.
} // Fine while quando contatore arriva a 0.

console.log("\n--- Esercizio 5 (risolto): somma da 1 a 5 con for ---"); // Titolo esercizio.
let somma = 0; // Variabile accumulatore: parte da 0 e cresce a ogni iterazione.
for (let n = 1; n <= 5; n++) { // n assume i valori 1,2,3,4,5.
  somma = somma + n; // Aggiorniamo la somma aggiungendo il valore corrente di n.
  console.log("Passo", n, "=> somma parziale:", somma); // Mostriamo l'evoluzione passo dopo passo.
} // Fine ciclo.
console.log("Somma finale da 1 a 5:", somma); // Risultato atteso: 15.

console.log("\n--- Esercizio 6 (DA COMPLETARE): while ---"); // Titolo esercizio da completare.
let x = 5; // Valore iniziale.
// TODO: usa un while per stampare x fino a 1 (in ordine decrescente).

// ====================================================================================== //
// 5) FUNZIONI CLASSICHE E ARROW FUNCTIONS                                               //
// ====================================================================================== //

// Una funzione è un blocco riutilizzabile di codice che può ricevere input (parametri) e restituire output (return).

function saluta(nomePersona) { // Dichiarazione di funzione classica; nomePersona è un parametro (dato in ingresso).
  return "Ciao, " + nomePersona + "!"; // return invia il risultato fuori dalla funzione; + concatena stringhe.
} // Fine funzione.

console.log("\n--- Funzioni classiche ---"); // Titolo sezione funzioni classiche.
let messaggioSaluto = saluta("Marco"); // Chiamiamo la funzione passando "Marco" come argomento.
console.log(messaggioSaluto); // Stampiamo il valore restituito dalla funzione.

// Arrow function (funzione freccia): sintassi più compatta, introdotta in ES6.
const quadrato = (numero) => { // Definiamo una funzione freccia e la assegniamo a una costante.
  return numero * numero; // Restituiamo il quadrato del numero (numero moltiplicato per se stesso).
}; // Fine arrow function.

console.log("\n--- Arrow function ---"); // Titolo sezione arrow function.
console.log("Quadrato di 4:", quadrato(4)); // Chiamiamo la funzione con 4; output atteso 16.

// Arrow function in forma compatta (quando c'è una sola espressione).
const doppio = (numero) => numero * 2; // return implicito: non serve scrivere return esplicitamente in questa forma breve.
console.log("Doppio di 7:", doppio(7)); // Output atteso 14.

console.log("\n--- Esercizio 7 (DA COMPLETARE): funzione ---"); // Titolo esercizio.
// TODO: crea una funzione chiamata "triplo" che riceve un numero e restituisce il suo triplo.
// TODO: poi usa console.log per stampare il triplo di 5.

// ====================================================================================== //
// 6) ARRAY E METODI BASE                                                                //
// ====================================================================================== //

// Un array è una struttura che conserva più valori in ordine, ciascuno con un indice (posizione) che parte da 0.

let materie = ["Matematica", "Informatica", "Italiano"]; // Creiamo un array con 3 stringhe.

console.log("\n--- Array base ---"); // Titolo sezione array.
console.log("Array iniziale:", materie); // Stampiamo l'array completo.
console.log("Primo elemento (indice 0):", materie[0]); // Accesso per indice: il primo elemento è in posizione 0.

materie.push("Storia"); // push aggiunge un elemento in fondo all'array.
console.log("Dopo push('Storia'):", materie); // Verifichiamo che "Storia" è stata aggiunta.

let ultimaMateria = materie.pop(); // pop rimuove e restituisce l'ultimo elemento dell'array.
console.log("Elemento rimosso con pop:", ultimaMateria); // Stampiamo cosa è stato rimosso.
console.log("Array dopo pop:", materie); // L'array ora non contiene più l'ultimo elemento rimosso.

console.log("Lunghezza array:", materie.length); // length indica quanti elementi contiene l'array.

materie.forEach((materia, indice) => { // forEach esegue una funzione per ogni elemento dell'array.
  console.log("Indice", indice, "=>", materia); // Stampiamo indice e valore per capire l'iterazione.
}); // Fine forEach.

console.log("\n--- Esercizio 8 (risolto): map ---"); // Titolo esercizio risolto.
let numeri = [1, 2, 3, 4]; // Array di numeri.
let numeriRaddoppiati = numeri.map((numero) => numero * 2); // map crea un nuovo array trasformando ogni elemento.
console.log("Originale:", numeri); // L'array originale non viene modificato da map.
console.log("Raddoppiati:", numeriRaddoppiati); // Nuovo array con valori raddoppiati.

console.log("\n--- Esercizio 9 (DA COMPLETARE): array ---"); // Titolo esercizio.
let colori = ["rosso", "verde"]; // Array iniziale.
// TODO: aggiungi "blu" con push e poi stampa l'array aggiornato con console.log.

// ====================================================================================== //
// 7) OGGETTI                                                                             //
// ====================================================================================== //

// Un oggetto è una struttura key-value (chiave-valore): ogni proprietà ha un nome (chiave) e un valore associato.

let studente = { // Inizio dichiarazione oggetto.
  nome: "Luca", // Proprietà "nome" con valore stringa.
  classe: "5A", // Proprietà "classe" con valore stringa.
  media: 7.5, // Proprietà "media" con valore numerico.
  promosso: true // Proprietà booleana.
}; // Fine oggetto.

console.log("\n--- Oggetti ---"); // Titolo sezione oggetti.
console.log("Oggetto studente:", studente); // Stampiamo l'oggetto completo.
console.log("Nome studente:", studente.nome); // Accesso con notazione punto alla proprietà "nome".

studente.media = 8.0; // Modifichiamo una proprietà esistente usando l'operatore di assegnazione.
console.log("Media aggiornata:", studente.media); // Verifichiamo la modifica.

studente.citta = "Torino"; // Aggiungiamo una nuova proprietà non presente inizialmente.
console.log("Oggetto dopo aggiunta proprietà citta:", studente); // Stampiamo l'oggetto aggiornato.

console.log("\n--- Esercizio 10 (DA COMPLETARE): oggetti ---"); // Titolo esercizio.
let auto = { // Definizione oggetto auto.
  marca: "Fiat", // Proprietà marca.
  modello: "Panda" // Proprietà modello.
}; // Fine oggetto auto.
// TODO: aggiungi la proprietà "anno" con valore 2020 e stampa l'oggetto completo.

// ====================================================================================== //
// 8) MINI RIEPILOGO FINALE                                                              //
// ====================================================================================== //

console.log("\n===== RIEPILOGO ====="); // Titolo riepilogo finale.
console.log("Hai visto: let/const, tipi di dati, if/else, for/while, funzioni, array, oggetti."); // Messaggio riassuntivo dei temi studiati.
console.log("Completa gli esercizi segnati come DA COMPLETARE e riesegui il file per verificare i risultati."); // Invito alla pratica attiva.
console.log("=====================\n"); // Chiusura visiva dell'output.

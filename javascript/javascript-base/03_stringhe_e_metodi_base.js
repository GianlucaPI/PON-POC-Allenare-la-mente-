// ====================================================================================== //
// File: 03_stringhe_e_metodi_base.js                                                    //
// Obiettivo: Ripasso JavaScript - stringhe e metodi base                               //
// ====================================================================================== //

// -------------------------------------------------------------------------------------- //
// COME USARE QUESTO FILE                                                                 //
// 1) Leggi i commenti: ogni riga spiega non solo il "cosa", ma soprattutto il "perché". //
// 2) Esegui con Node.js: node 03_stringhe_e_metodi_base.js                              //
// 3) Osserva l'output nel terminale per capire il comportamento dei metodi.             //
// 4) Completa gli esercizi segnati come "DA COMPLETARE".                                //
// -------------------------------------------------------------------------------------- //

// Stampiamo un'intestazione per riconoscere subito questa lezione nel terminale.
console.log("\n===== RIPASSO JAVASCRIPT: STRINGHE E METODI BASE =====\n"); // \n crea righe vuote per separare visivamente il contenuto.

// ====================================================================================== //
// 1) COS'È UNA STRINGA                                                                   //
// ====================================================================================== //

// Una stringa è un valore testuale, cioè una sequenza di caratteri.
// In JavaScript puoi usare virgolette doppie "...", singole '...' oppure i template literal `...`.

let nome = "Alice"; // Stringa con virgolette doppie.
let cognome = 'Rossi'; // Stringa con virgolette singole.
let classe = `5B`; // Stringa con template literal (backtick).

console.log("--- Stringhe di base ---"); // Titolo della sezione nel terminale.
console.log("Nome:", nome); // Mostriamo la prima stringa.
console.log("Cognome:", cognome); // Mostriamo la seconda stringa.
console.log("Classe:", classe); // Mostriamo la terza stringa.
console.log("Tipo di nome:", typeof nome); // typeof conferma che il tipo è "string".

console.log("\n--- Esercizio 1 (risolto): frase completa ---"); // Titolo esercizio risolto.
let fraseStudente = "Studente: " + nome + " " + cognome + " - Classe " + classe; // Usiamo + per concatenare più stringhe in un unico testo.
console.log(fraseStudente); // Stampiamo il risultato finale della concatenazione.

console.log("\n--- Esercizio 2 (DA COMPLETARE): stringa semplice ---"); // Titolo esercizio da completare.
let materiaPreferita = "Informatica"; // Variabile di partenza.
// TODO: crea una variabile chiamata "messaggioMateria" che dica: "La mia materia preferita è Informatica".
// TODO: stampa "messaggioMateria" con console.log.

// ====================================================================================== //
// 2) CONCATENAZIONE E TEMPLATE LITERAL                                                   //
// ====================================================================================== //

// Concatenare significa unire più pezzi di testo.
// Con l'operatore + funziona sempre, ma i template literal sono più leggibili quando inseriamo variabili.

console.log("\n--- Concatenazione ---"); // Titolo sezione.
let citta = "Torino"; // Stringa con una città.
let anno = 2026; // Numero che inseriremo in una frase.

let fraseConPiu = "Vivo a " + citta + " nel " + anno + "."; // Unione con + tra testo fisso e variabili.
console.log("Con +:", fraseConPiu); // Mostriamo la frase costruita col metodo classico.

let fraseConTemplate = `Vivo a ${citta} nel ${anno}.`; // Template literal: ${...} inserisce il valore di una variabile dentro la stringa.
console.log("Con template literal:", fraseConTemplate); // Mostriamo lo stesso risultato in forma più moderna e leggibile.

console.log("\n--- Esercizio 3 (risolto): saluto dinamico ---"); // Titolo esercizio risolto.
let utente = "Marco"; // Nome utente.
let saluto = `Ciao ${utente}, benvenuto al ripasso JavaScript!`; // Frase dinamica con template literal.
console.log(saluto); // Output finale del saluto.

console.log("\n--- Esercizio 4 (DA COMPLETARE): template literal ---"); // Titolo esercizio.
let votoFinale = 8; // Numero di partenza.
// TODO: crea una stringa in una variabile chiamata "reportVoto" con testo: "Il tuo voto finale è 8" usando ${}.
// TODO: stampa "reportVoto".

// ====================================================================================== //
// 3) LUNGHEZZA E ACCESSO AI CARATTERI                                                    //
// ====================================================================================== //

// Ogni stringa ha una proprietà .length che indica quanti caratteri contiene.
// I caratteri hanno un indice (posizione) che parte da 0.

console.log("\n--- length e indici ---"); // Titolo sezione.
let parola = "JavaScript"; // Stringa di esempio.

console.log("Parola:", parola); // Mostriamo la stringa completa.
console.log("Lunghezza:", parola.length); // .length conta tutti i caratteri (qui 10).
console.log("Primo carattere [0]:", parola[0]); // Indice 0 = primo carattere.
console.log("Secondo carattere [1]:", parola[1]); // Indice 1 = secondo carattere.
console.log("Ultimo carattere:", parola[parola.length - 1]); // Ultimo indice = lunghezza - 1.

console.log("\n--- Esercizio 5 (DA COMPLETARE): indici ---"); // Titolo esercizio.
let linguaggio = "Python"; // Stringa di appoggio.
// TODO: stampa il primo carattere di "linguaggio".
// TODO: stampa l'ultimo carattere di "linguaggio" usando linguaggio.length - 1.

// ====================================================================================== //
// 4) METODI BASE: toUpperCase, toLowerCase, trim                                        //
// ====================================================================================== //

// I metodi delle stringhe NON modificano la stringa originale in-place.
// Restituiscono una nuova stringa, quindi spesso conviene salvare il risultato in una nuova variabile.

console.log("\n--- Metodi di trasformazione ---"); // Titolo sezione.
let testo = "  Ciao Mondo  "; // Stringa con spazi iniziali e finali.
console.log("Testo originale:", `[${testo}]`); // Mettiamo parentesi quadre per vedere chiaramente gli spazi.

let maiuscolo = testo.toUpperCase(); // Trasforma tutti i caratteri alfabetici in maiuscolo.
console.log("toUpperCase:", `[${maiuscolo}]`); // Mostriamo il risultato.

let minuscolo = testo.toLowerCase(); // Trasforma tutti i caratteri alfabetici in minuscolo.
console.log("toLowerCase:", `[${minuscolo}]`); // Mostriamo il risultato.

let senzaSpazi = testo.trim(); // trim rimuove gli spazi all'inizio e alla fine della stringa.
console.log("trim:", `[${senzaSpazi}]`); // Mostriamo il testo "pulito".

console.log("Originale dopo i metodi:", `[${testo}]`); // Dimostriamo che la stringa originale non è stata modificata.

console.log("\n--- Esercizio 6 (risolto): normalizzazione username ---"); // Titolo esercizio risolto.
let inputUtente = "  EDUARDO  "; // Input simulato con spazi e maiuscole.
let usernameNormalizzato = inputUtente.trim().toLowerCase(); // Prima togliamo spazi esterni, poi convertiamo in minuscolo.
console.log("Username normalizzato:", usernameNormalizzato); // Output atteso: "eduardo".

console.log("\n--- Esercizio 7 (DA COMPLETARE): pulizia testo ---"); // Titolo esercizio.
let titolo = "  verifica javascript  "; // Stringa con difetti di formattazione.
// TODO: crea la variabile "titoloPulito" con trim e poi toUpperCase.
// TODO: stampa "titoloPulito".

// ====================================================================================== //
// 5) METODI BASE: includes, startsWith, endsWith                                        //
// ====================================================================================== //

// Questi metodi aiutano a cercare se una stringa contiene o inizia/finisce con un testo.

console.log("\n--- Ricerca in stringhe ---"); // Titolo sezione.
let email = "studente@example.com"; // Email di esempio.

console.log("Email:", email); // Stampiamo la stringa di partenza.
console.log("includes('@'):", email.includes("@")); // true se la stringa contiene il carattere @.
console.log("startsWith('studente'):", email.startsWith("studente")); // true se la stringa inizia con "studente".
console.log("endsWith('.com'):", email.endsWith(".com")); // true se la stringa termina con ".com".

console.log("\n--- Esercizio 8 (risolto): controllo password minima ---"); // Titolo esercizio risolto.
let password = "abc12345"; // Password di esempio.
let passwordValida = password.length >= 8; // Regola minima: almeno 8 caratteri.
console.log("Password valida (>=8 caratteri):", passwordValida); // Stampa true/false in base alla regola.

console.log("\n--- Esercizio 9 (DA COMPLETARE): controllo dominio ---"); // Titolo esercizio.
let sito = "www.scuola.it"; // Stringa esempio.
// TODO: verifica con endsWith se "sito" termina con ".it".
// TODO: salva il risultato in "dominioItaliano" e stampalo.

// ====================================================================================== //
// 6) METODI BASE: replace, slice, split, join                                            //
// ====================================================================================== //

// Questi metodi servono per sostituire, tagliare e spezzare/riformare stringhe.

console.log("\n--- replace e slice ---"); // Titolo sottosezione.
let frase = "Oggi studio Java"; // Frase di partenza.
let fraseAggiornata = frase.replace("Java", "JavaScript"); // replace sostituisce la prima occorrenza trovata del testo cercato.
console.log("Originale:", frase); // Mostriamo la frase iniziale.
console.log("replace:", fraseAggiornata); // Mostriamo la frase con la sostituzione.

let estratto = fraseAggiornata.slice(5, 11); // slice prende i caratteri dall'indice 5 fino a prima dell'indice 11.
console.log("slice(5, 11):", estratto); // Mostra il pezzo estratto.

console.log("\n--- split e join ---"); // Titolo sottosezione.
let elenco = "HTML,CSS,JavaScript"; // Stringa con elementi separati da virgola.
let arrayMaterie = elenco.split(","); // split divide la stringa in un array usando la virgola come separatore.
console.log("Dopo split:", arrayMaterie); // Stampiamo l'array ottenuto.

let testoConTrattini = arrayMaterie.join(" - "); // join unisce gli elementi dell'array in una stringa con separatore " - ".
console.log("Dopo join:", testoConTrattini); // Stampiamo la nuova stringa unita.

console.log("\n--- Esercizio 10 (DA COMPLETARE): split/join ---"); // Titolo esercizio.
let data = "18/03/2026"; // Data in formato giorno/mese/anno.
// TODO: usa split("/") per ottenere giorno, mese e anno in un array.
// TODO: usa join("-") per trasformarla nel formato "18-03-2026".
// TODO: stampa il risultato finale.

// ====================================================================================== //
// 7) MINI SFIDA FINALE (RISOLTA)                                                        //
// ====================================================================================== //

// Obiettivo: combinare più metodi di stringa in un mini caso reale.

console.log("\n--- Mini sfida finale (risolta) ---"); // Titolo sfida.
let inputNome = "  giULia  "; // Input sporco simulato: spazi e maiuscole/minuscole mescolate.

let nomePulito = inputNome.trim(); // 1) Rimuoviamo spazi esterni.
let primaLettera = nomePulito[0].toUpperCase(); // 2) Prima lettera in maiuscolo.
let restoNome = nomePulito.slice(1).toLowerCase(); // 3) Dal secondo carattere in poi tutto in minuscolo.
let nomeFormattato = primaLettera + restoNome; // 4) Ricomponiamo il nome con iniziale maiuscola.

console.log("Input originale:", `[${inputNome}]`); // Mostriamo il dato iniziale.
console.log("Nome formattato:", nomeFormattato); // Mostriamo il risultato finale corretto.

// ====================================================================================== //
// 8) RIEPILOGO                                                                           //
// ====================================================================================== //

console.log("\n===== RIEPILOGO ====="); // Titolo riepilogo.
console.log("Hai ripassato: concatenazione, template literal, length, indici e metodi base delle stringhe."); // Sintesi dei temi trattati.
console.log("Completa i TODO e riesegui il file per consolidare davvero i concetti."); // Invito a pratica attiva.
console.log("=====================\n"); // Chiusura grafica.

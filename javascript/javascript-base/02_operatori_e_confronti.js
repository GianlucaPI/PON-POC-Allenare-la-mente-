// ====================================================================================== //
// File: 02_operatori_e_confronti.js                                                     //
// Obiettivo: Ripasso JavaScript - operatori, confronti e logica booleana               //
// ====================================================================================== //

// -------------------------------------------------------------------------------------- //
// COME USARE QUESTO FILE                                                                 //
// 1) Leggi i commenti: spiegano sia il "cosa" sia il "perché".                       //
// 2) Esegui il file con Node.js: node 02_operatori_e_confronti.js                       //
// 3) Controlla l'output nel terminale.                                                   //
// 4) Completa gli esercizi segnati come "DA COMPLETARE".                                //
// -------------------------------------------------------------------------------------- //

// Stampiamo un titolo iniziale per rendere l'output più ordinato e riconoscibile.
console.log("\n===== RIPASSO JAVASCRIPT: OPERATORI E CONFRONTI =====\n"); // \n crea righe vuote per separare visivamente le sezioni nel terminale.

// ====================================================================================== //
// 1) OPERATORI ARITMETICI                                                               //
// ====================================================================================== //

// Gli operatori aritmetici lavorano principalmente con numeri.
// I più usati sono: + (somma), - (sottrazione), * (moltiplicazione), / (divisione), % (resto), ** (potenza).

let a = 12; // Variabile numerica di partenza.
let b = 5; // Seconda variabile numerica per i calcoli.

console.log("--- Operatori aritmetici ---"); // Titolo sezione.
console.log("a =", a, "| b =", b); // Mostriamo i valori di partenza per capire i risultati successivi.

let somma = a + b; // L'operatore + somma i due operandi numerici.
console.log("a + b =", somma); // Stampa 17, cioè 12 + 5.

let differenza = a - b; // L'operatore - sottrae il secondo numero dal primo.
console.log("a - b =", differenza); // Stampa 7, cioè 12 - 5.

let prodotto = a * b; // L'operatore * esegue la moltiplicazione.
console.log("a * b =", prodotto); // Stampa 60, cioè 12 * 5.

let quoziente = a / b; // L'operatore / esegue la divisione.
console.log("a / b =", quoziente); // Stampa 2.4, perché 12 diviso 5 è un numero decimale.

let resto = a % b; // L'operatore % restituisce il resto della divisione intera.
console.log("a % b =", resto); // Stampa 2, perché 12 = (5 * 2) + 2.

let potenza = a ** 2; // L'operatore ** eleva a potenza: qui 12 alla 2.
console.log("a ** 2 =", potenza); // Stampa 144.

console.log("\n--- Esercizio 1 (risolto): media semplice ---"); // Titolo esercizio risolto.
let voto1 = 7; // Primo voto.
let voto2 = 8; // Secondo voto.
let voto3 = 9; // Terzo voto.
let media = (voto1 + voto2 + voto3) / 3; // Sommiamo i voti e dividiamo per 3 per ottenere la media.
console.log("Media dei voti:", media); // Mostriamo il risultato finale.

console.log("\n--- Esercizio 2 (DA COMPLETARE): resto ---"); // Titolo esercizio da fare.
let numero = 23; // Numero di partenza.
// TODO: crea una variabile chiamata "restoDivisione" con il resto di numero diviso 4.
// TODO: stampa il risultato con console.log.

// ====================================================================================== //
// 2) ASSEGNAZIONE COMPOSTA E INCREMENTO/DECREMENTO                                      //
// ====================================================================================== //

// Oltre a "=", JavaScript offre operatori composti: +=, -=, *=, /=.
// Servono a riscrivere in forma più compatta operazioni molto comuni.

console.log("\n--- Assegnazione composta ---"); // Titolo sezione.
let punteggio = 10; // Valore iniziale.
console.log("Punteggio iniziale:", punteggio); // Verifica iniziale.

punteggio += 5; // Equivale a: punteggio = punteggio + 5.
console.log("Dopo += 5:", punteggio); // Ora vale 15.

punteggio -= 3; // Equivale a: punteggio = punteggio - 3.
console.log("Dopo -= 3:", punteggio); // Ora vale 12.

punteggio *= 2; // Equivale a: punteggio = punteggio * 2.
console.log("Dopo *= 2:", punteggio); // Ora vale 24.

punteggio /= 4; // Equivale a: punteggio = punteggio / 4.
console.log("Dopo /= 4:", punteggio); // Ora vale 6.

console.log("\n--- Incremento e decremento ---"); // Titolo sottosezione.
let i = 0; // Inizializziamo una variabile contatore.
console.log("Valore iniziale di i:", i); // Stampa 0.

i++; // Operatore di incremento: equivale a i = i + 1.
console.log("Dopo i++:", i); // Stampa 1.

i--; // Operatore di decremento: equivale a i = i - 1.
console.log("Dopo i--:", i); // Torna a 0.

console.log("\n--- Esercizio 3 (DA COMPLETARE): assegnazione composta ---"); // Titolo esercizio.
let credito = 50; // Credito iniziale.
// TODO: aggiungi 20 a credito usando +=.
// TODO: sottrai 10 a credito usando -=.
// TODO: stampa il valore finale di credito.

// ====================================================================================== //
// 3) CONFRONTI: ==, ===, !=, !==, >, <, >=, <=                                         //
// ====================================================================================== //

// Gli operatori di confronto restituiscono un boolean: true oppure false.
// Differenza fondamentale:
// - == confronta i valori con conversione di tipo (confronto "debole").
// - === confronta valore e tipo senza conversione (confronto "stretto").

console.log("\n--- Confronti base ---"); // Titolo sezione.
console.log("5 > 3 =>", 5 > 3); // true perché 5 è maggiore di 3.
console.log("5 < 3 =>", 5 < 3); // false perché 5 non è minore di 3.
console.log("5 >= 5 =>", 5 >= 5); // true perché 5 è uguale a 5.
console.log("4 <= 2 =>", 4 <= 2); // false perché 4 è maggiore di 2.

console.log("\n--- Differenza tra == e === ---"); // Titolo sottosezione molto importante.
console.log("'10' == 10 =>", "10" == 10); // true: con == JavaScript converte la stringa "10" in numero 10 prima del confronto.
console.log("'10' === 10 =>", "10" === 10); // false: con === il tipo deve essere identico (string vs number).
console.log("0 == false =>", 0 == false); // true: conversione implicita di tipo con ==.
console.log("0 === false =>", 0 === false); // false: number e boolean sono tipi diversi.

console.log("\n--- Diverso: != e !== ---"); // Titolo sottosezione.
console.log("'8' != 8 =>", "8" != 8); // false: con != c'è conversione, quindi i valori risultano uguali e "diverso" è falso.
console.log("'8' !== 8 =>", "8" !== 8); // true: tipi diversi, quindi "strettamente diverso" è vero.

console.log("\n--- Esercizio 4 (risolto): confronto età ---"); // Titolo esercizio risolto.
let eta = 18; // Età di esempio.
let maggiorenne = eta >= 18; // Se l'età è almeno 18, la persona è maggiorenne.
console.log("Età:", eta, "| maggiorenne:", maggiorenne); // Mostriamo sia il dato sia il risultato booleano.

console.log("\n--- Esercizio 5 (DA COMPLETARE): confronto stretto ---"); // Titolo esercizio.
let codiceInserito = "1234"; // Stringa inserita, ad esempio da input utente.
let codiceCorretto = 1234; // Numero previsto nel sistema.
// TODO: confronta le due variabili con === e salva il risultato in una variabile chiamata "accessoConsentito".
// TODO: stampa accessoConsentito con console.log.

// ====================================================================================== //
// 4) OPERATORI LOGICI: &&, ||, !                                                        //
// ====================================================================================== //

// Gli operatori logici combinano o negano condizioni booleane.
// && (AND): true solo se entrambe le condizioni sono true.
// || (OR): true se almeno una condizione è true.
// !  (NOT): inverte il valore booleano.

console.log("\n--- Operatori logici ---"); // Titolo sezione.
let haCompitiFatti = true; // Prima condizione.
let haPortatoMateriale = false; // Seconda condizione.

let prontoPerLezione = haCompitiFatti && haPortatoMateriale; // true solo se entrambe true.
console.log("Pronto per la lezione (AND):", prontoPerLezione); // In questo caso false, perché manca il materiale.

let puoEntrareInLaboratorio = haCompitiFatti || haPortatoMateriale; // true se almeno una è true.
console.log("Può entrare in laboratorio (OR):", puoEntrareInLaboratorio); // true, perché almeno una condizione è vera.

let nonHaMateriale = !haPortatoMateriale; // NOT inverte false in true.
console.log("Non ha materiale (NOT):", nonHaMateriale); // Mostra true.

console.log("\n--- Esercizio 6 (risolto): login semplificato ---"); // Titolo esercizio risolto.
let usernameCorretto = true; // Simuliamo verifica username.
let passwordCorretta = true; // Simuliamo verifica password.
let loginOk = usernameCorretto && passwordCorretta; // Login valido solo se entrambe le verifiche sono corrette.
console.log("Login riuscito:", loginOk); // Output atteso true.

console.log("\n--- Esercizio 7 (DA COMPLETARE): idoneità ---"); // Titolo esercizio.
let haDocumento = true; // Prima condizione.
let haBiglietto = false; // Seconda condizione.
// TODO: crea la variabile "puoViaggiare" che sia true solo se haDocumento e haBiglietto sono true.
// TODO: stampa puoViaggiare.

// ====================================================================================== //
// 5) PRECEDENZA DEGLI OPERATORI E PARENTESI                                             //
// ====================================================================================== //

// Come in matematica, anche in JavaScript l'ordine delle operazioni è importante.
// Le parentesi tonde () aiutano a rendere esplicito l'ordine e a evitare errori logici.

console.log("\n--- Precedenza operatori ---"); // Titolo sezione.
let risultatoSenzaParentesi = 2 + 3 * 4; // Prima si fa la moltiplicazione (3*4=12), poi la somma: 14.
console.log("2 + 3 * 4 =", risultatoSenzaParentesi); // Stampa 14.

let risultatoConParentesi = (2 + 3) * 4; // Con parentesi, prima si somma 2+3=5, poi si moltiplica per 4: 20.
console.log("(2 + 3) * 4 =", risultatoConParentesi); // Stampa 20.

// Nelle condizioni complesse, le parentesi migliorano molto la leggibilità.
let votoTeoria = 7; // Voto teoria.
let votoPratica = 5; // Voto pratica.
let haRecuperato = true; // Indica se c'è stato recupero.

let promosso = (votoTeoria >= 6 && votoPratica >= 6) || haRecuperato; // Promosso se entrambi >=6 oppure se ha recuperato.
console.log("Studente promosso:", promosso); // In questo esempio true grazie al recupero.

console.log("\n--- Esercizio 8 (DA COMPLETARE): parentesi logiche ---"); // Titolo esercizio.
let mediaFinale = 5.8; // Media dello studente.
let comportamentoBuono = true; // Comportamento disciplinare.
// TODO: crea una variabile "ammesso" che sia true se mediaFinale >= 6 oppure se comportamentoBuono è true.
// TODO: usa le parentesi per rendere la condizione chiarissima.
// TODO: stampa "ammesso".

// ====================================================================================== //
// 6) MINI SFIDA FINALE (RISOLTA)                                                        //
// ====================================================================================== //

// Obiettivo: usare insieme operatori aritmetici, confronti e logica.

console.log("\n--- Mini sfida finale (risolta) ---"); // Titolo sfida.
let puntiQuiz = 24; // Punti ottenuti nel quiz.
let bonus = 3; // Bonus assegnato.
let penalita = 2; // Penalità da sottrarre.

let punteggioFinale = puntiQuiz + bonus - penalita; // Calcolo completo del punteggio finale.
console.log("Punteggio finale:", punteggioFinale); // Mostriamo il risultato numerico.

let superaSoglia = punteggioFinale >= 25; // Verifica se il punteggio raggiunge la soglia minima.
console.log("Supera la soglia (>=25):", superaSoglia); // Mostriamo true/false.

let premio = superaSoglia && bonus > 0; // Premio se supera la soglia e ha ricevuto un bonus positivo.
console.log("Ha diritto al premio:", premio); // Risultato finale della logica combinata.

// ====================================================================================== //
// 7) RIEPILOGO                                                                           //
// ====================================================================================== //

console.log("\n===== RIEPILOGO ====="); // Titolo riepilogo.
console.log("Hai ripassato: operatori aritmetici, assegnazione composta, confronti, logica, precedenza."); // Sintesi argomenti.
console.log("Completa i TODO e riesegui il file per allenarti davvero in modo attivo."); // Invito alla pratica.
console.log("=====================\n"); // Chiusura visiva dell'output.

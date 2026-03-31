# Esercizi Proposti

Sulla base dei concetti visti in `esercizio1.html` (TODO List con LocalStorage) e `esercizio2.html` (Barra di Ricerca con Autocompletamento), ecco 4 nuovi esercizi per fare pratica con la manipolazione del DOM, gli eventi, gli array e il LocalStorage.

## Esercizio 3: Contatore Persistente
**Obiettivo:** Creare un contatore numerico con tre pulsanti: "Aumenta", "Diminuisci" e "Resetta". Il valore del contatore deve essere salvato nel `localStorage` in modo che ricaricando la pagina il numero non si azzeri.
- Usa un elemento HTML per mostrare il numero.
- Usa tre bottoni con eventi `click`.
- Salva e recupera il valore dal `localStorage`.

## Esercizio 4: Filtro Lista Elementi (Ricerca Live)
**Obiettivo:** Mostrare una lista (es. una serie di prodotti o nomi) a schermo. L'utente ha a disposizione una barra di testo: scrivendo al suo interno, la lista deve mostrare in tempo reale solo gli elementi che contengono il testo digitato.
- Usa l'evento `input` come nell'Esercizio 2.
- Usa `toLowerCase()` e `indexOf()` per filtrare un array predefinito.
- Ricrea la lista nel DOM in base al filtro.

## Esercizio 5: Appunti Rapidi (Sticky Notes)
**Obiettivo:** Inserire un'area di testo (`<textarea>`) dove l'utente può scrivere una nota. Al click su "Salva", la nota viene aggiunta a una griglia o lista di appunti visibile sotto. Gli appunti devono persistere con il `localStorage`.
- Quando l'utente clicca su un appunto salvato, quell'appunto viene eliminato.
- Usa `JSON.parse` e `JSON.stringify` per salvare l'array di note.

## Esercizio 6: Rubrica Contatti Base
**Obiettivo:** Un mini-form con due input: Nome e Telefono, e un bottone "Aggiungi". Cliccando "Aggiungi", il contatto appare in una lista sottostante e viene salvato nel `localStorage`.
- Ispirati alla TODO List, ma in questo caso devi salvare due dati per ogni elemento (puoi unire nome e telefono in una singola stringa, es. "Mario Rossi - 123456789").
- Implementa anche qui la rimozione al click sul contatto o tramit un pulsantino "X".

---
*Ogni esercizio ha la sua soluzione salvata in una cartella separata all'interno del workspace.*
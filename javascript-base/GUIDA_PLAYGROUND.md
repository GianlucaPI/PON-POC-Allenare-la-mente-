# Guida rapida: JavaScript DOM Playground

Questa guida spiega come avviare e usare correttamente il playground didattico nella cartella `javascript-base`.

## 1) Prerequisiti

- Browser moderno (Chrome, Edge, Firefox)
- (Consigliato) XAMPP attivo se vuoi testare in `localhost`
- File presenti nella cartella:
  - `dom_playground.html`
  - `04_dom_selezione_base.js`
  - `05_dom_modifica_tag.js`
  - `06_dom_eventi_base.js`
  - `07_dom_creazione_elementi.js`
  - `08_dom_input_types.js`

## 2) Come avviare il playground

Hai due opzioni.

### Opzione A (consigliata): tramite XAMPP + localhost

1. Avvia **Apache** da XAMPP Control Panel.
2. Assicurati che il progetto sia in:
   - `c:/xampp/htdocs/eduard/javascript/javascript-base/`
3. Apri il browser su:
   - `http://localhost/eduard/javascript/javascript-base/dom_playground.html`

### Opzione B: apertura diretta del file

1. Apri `dom_playground.html` con doppio click.
2. Si aprirà con percorso locale `file:///...`.
3. Per questo playground in genere funziona, ma è meglio usare `localhost` per evitare differenze tra ambienti.

## 3) Regola fondamentale: uno script alla volta

Nel file `dom_playground.html`, in fondo alla pagina, trovi script commentati come:

```html
<!-- <script src="./04_dom_selezione_base.js"></script> -->
<!-- <script src="./05_dom_modifica_tag.js"></script> -->
<!-- <script src="./06_dom_eventi_base.js"></script> -->
<!-- <script src="./07_dom_creazione_elementi.js"></script> -->
<!-- <script src="./08_dom_input_types.js"></script> -->
```

Per usare una lezione:

1. Togli il commento da **una sola** riga script.
2. Lascia le altre commentate.
3. Salva il file.
4. Ricarica la pagina nel browser.

Esempio (attivo solo file 06):

```html
<!-- <script src="./04_dom_selezione_base.js"></script> -->
<!-- <script src="./05_dom_modifica_tag.js"></script> -->
<script src="./06_dom_eventi_base.js"></script>
<!-- <script src="./07_dom_creazione_elementi.js"></script> -->
<!-- <script src="./08_dom_input_types.js"></script> -->
```

## 4) Come leggere output e debug

1. Apri DevTools con `F12`.
2. Vai nella scheda **Console**.
3. Esegui azioni nella pagina (click, input, submit).
4. Controlla i `console.log()` delle lezioni per capire cosa succede.

## 5) Ordine consigliato di studio

1. `04_dom_selezione_base.js`
2. `05_dom_modifica_tag.js`
3. `06_dom_eventi_base.js`
4. `07_dom_creazione_elementi.js`
5. `08_dom_input_types.js`

Questo ordine va dal più semplice (selezione elementi) al più pratico (eventi e input type).

## 6) Problemi comuni e soluzioni

### Problema: non succede nulla in pagina

- Controlla di avere attivato uno script nel file HTML.
- Controlla la Console per errori rossi.
- Ricarica con refresh forzato (`Ctrl + F5`).

### Problema: errore "Cannot read properties of null"

Significa che JavaScript sta cercando un elemento che non trova.

Verifica:

- L'`id` nel file JS è identico all'`id` nell'HTML.
- Lo script punta al file giusto.
- Non hai rinominato un elemento senza aggiornare anche il JS.

### Problema: script non caricato

- Controlla il percorso nel tag `<script src="...">`.
- Verifica il nome file esatto (anche maiuscole/minuscole per compatibilità).
- Se usi XAMPP, verifica che Apache sia avviato.

## 7) Mini checklist finale

Prima di iniziare una lezione verifica sempre:

- [ ] Pagina aperta da `localhost` (consigliato)
- [ ] Solo uno script attivo
- [ ] DevTools aperto su Console
- [ ] Nessun errore bloccante in rosso

---

Se vuoi, puoi creare anche una seconda guida “operativa” per lo studente con esercizi da svolgere in sequenza e spazio per le soluzioni.
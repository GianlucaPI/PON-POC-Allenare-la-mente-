# Istruzioni per unire la directory locale con una repository GitHub

Segui questi passaggi nel terminale per sincronizzare la tua repository locale con quella remota.

### 1. Salva le modifiche locali
Assicurati di aver aggiunto e committato tutti i tuoi file locali.
```bash
git add .
git commit -m "Primo commit della directory locale"
```

### 2. Collega la repository remota
Se non l'hai già fatto, collega la tua repository locale a quella su GitHub (sostituisci `<URL_DELLA_REPO>` con il link reale). Se `origin` esiste già, salta questo passaggio.
```bash
git remote add origin <URL_DELLA_REPO>
```

### 3. Rinomina il branch in main
Assicurati che il tuo branch locale principale si chiami `main` (spesso di default è `master`).
```bash
git branch -M main
```

### 4. Unisci le cronologie separate
Scarica e unisci i file presenti su GitHub (come README o .gitignore) forzando l'unione di storie non correlate.
```bash
git pull origin main --allow-unrelated-histories
```
*(Se si apre l'editor Vim per il messaggio di commit del merge: premi `Esc`, scrivi `:wq` e premi `Invio`)*

### 5. Carica tutto su GitHub
Pusha il codice unito indicando a Git di tracciare il branch `main` remoto.
```bash
git push -u origin main
```

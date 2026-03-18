# Lezione 4 — Hash Map (Tabelle Hash)

---

## 1. Cos'è una Hash Map?

Una **Hash Map** (o Tabella Hash) è una struttura dati che implementa il concetto di **Dizionario**, permettendo di associare un valore a una determinata chiave (coppie chiave-valore). 

L'obiettivo principale di una Hash Table è offrire operazioni di **inserimento, ricerca e cancellazione** in tempo costante **O(1)** nel caso medio.

### Come funziona?
Alla base c'è un array (di dimensione $m$) e una **Funzione di Hash** $h(k)$.
La funzione di Hash prende una chiave $k$ (dal Dominio dell'Universo originale delle chiavi $U$, ad esempio stringhe o numeri) e la trasforma, determinando a quale indice dell'array salvare l'elemento: $h(k) \to [0, m-1]$.

### Rappresentazione visiva

```
Chiave      Hash Function      Indice / Array T
"Alice"  ──▶  h("Alice") ──▶  0: [       ]
"Bob"    ──▶  h("Bob")   ──▶  1: [ "Bob" ]
"Carl"   ──▶  h("Carl")  ──▶  2: [       ]
                               3: ["Alice"]
```

---

## 2. Il problema delle Collisioni

Poiché lo spazio delle chiavi possibili (l'Universo $U$) è tendenzialmente molto più grande della dimensione dell'array prescelto $m$, prima o poi capiterà che due chiavi diverse finiscano per generare lo stesso indice dell'array (es: $h(k_1) = h(k_2)$ anche se $k_1 \neq k_2$). Questo problema si chiama **Collisione** e dev'essere gestito.

Esistono due approcci principali per risolvere le collisioni:

### 2.1 Chaining (Concatenamento)
Ogni "cella" dell'array contiene, anziché il valore diretto, un puntatore alla testa di una **Linked List** (Liste Collegate, viste nella Lezione 2).
Se più chiavi mappano allo stesso indice, vengono semplicemente aggiunte alla Linked List agganciata a quello slot.

* **Pro**: Semplice, l'array non diviene mai pienamente inutilizzabile.
* **Contro**: Se $m$ è troppo piccolo rispetto a quanti elementi $n$ si vogliono inserire, le liste diventano piene. Nel caso peggiore, la ricerca diventa una ricerca lineare sulla Link List, passando a complessità **O(n)**.

### 2.2 Open Addressing (Indirizzamento Aperto)
Tutte le chiavi sono salvate direttamente nell'array senza alcuna lista. Se lo slot calcolato $h(k)$ è già occupato da qualcos'altro, scatta un meccanismo di "Probing" per cercare il prossimo slot libero.
* **Linear Probing** (Ispezione lineare): se lo slot $i$ è occupato, si ispeziona $i+1$, $i+2$, ecc.
* **Problema**: *Primary clustering*, le celle occupate tendono ad accumularsi e raggrupparsi vicine, incrementando progressivamente il tempo di tutte le ricerche continue.

> **Load Factor ($\alpha$):** È il rapporto tra numero di elementi $n$ e slot disponibili $m$, calcolato come $\alpha = \frac{n}{m}$. Sotto la teoria dell'uniform hashing semplice, è il parametro fondamentale per le performance. Dimensioni corrette e buona funzione hash prevengono i sovraccarichi garantendo la media $O(1)$.

---

## 3. Complessità a confronto

| Operazione | Array (non ordinato) | Linked List | Hash Map (Media) | Hash Map (Peggiore)* |
|---|---|---|---|---|
| Inserimento | O(1) (in coda, con spazio) | O(1) (in testa) | **O(1)** | **O(n)** |
| Ricerca | O(n) | O(n) | **O(1)** | **O(n)** |
| Cancellazione| O(n) | O(1) (previo lookup) | **O(1)** | **O(n)** |

*\*Il caso peggiore O(n) si verifica ad esempio se tutte le chiavi inserite generano sistematicamente sempre collisioni mappandosi nel medesimo slot.*

---

## 4. Implementazione (Didattica) in Python con Chaining

In Python le Hash Map sono implementate nativamente e altamente ottimizzate dal tipo nativo `dict`.
Vediamo però un'architettura grezza in ottica didattica, adoperando **Liste che contengono liste** al fine di simulare il **Chaining**.

### 4.1 Inizializzazione

```python
class HashTable:
    def __init__(self, size=10):
        self.size = size
        # L'array principale: genero una lista di liste interne destinate al chaining
        self.table = [[] for _ in range(size)]
```

### 4.2 Funzione di Hash

Per decidere in quale slot cadere adoperiamo una classica forma "Division Method" usando divisione e resto (`modulo`):

```python
    def _hash(self, key):
        # hash() è un built-in di python per stringhe o numeri. Applichiamo il modulo `size`.
        return hash(key) % self.size
```

### 4.3 Inserimento — `insert`

```python
    def insert(self, key, value):
        index = self._hash(key)
        # Se la lista chaining possiede già la chiave la andrò ad aggiornare
        for i, kv in enumerate(self.table[index]):
            k, v = kv
            if key == k:
                self.table[index][i] = (key, value)
                return
        
        # Altrimenti, metto la tupla (chiave, valore) in append alla "chain"
        self.table[index].append((key, value))
```

### 4.4 Ricerca — `search`

```python
    def search(self, key):
        index = self._hash(key)
        # Esplora unicamente la lista dello slot calcolato! (Ricerca velocissima se liste corte)
        for k, v in self.table[index]:
            if k == key:
                return v
        return None
```

### 4.5 Cancellazione — `delete`

```python
    def delete(self, key):
        index = self._hash(key)
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                del self.table[index][i]
                return
```

---

## 5. Le Hash Map in azione nativa in Python: Dicts

Sui problemi complessi **non useremo mai** implementazioni artigianali. Python dispone dei dizionari `dict` e set `set` ottimizzati alle proprie dipendenze:

```python
# Inizializzo dict vuoto
mappa = {}
# Inserimento -> O(1)
mappa["Alice"] = 25
# Lookup (Accesso) -> O(1)
eta = mappa["Alice"]

# Check dell'appartenenza -> O(1) (Fondamentale al contrario della ricerca array O(n)!!)
if "Alice" in mappa:
    print("Record in memoria!")
```

---

## 6. Pattern risolutivi comuni 

Gran parte dei problemi risolvibili in Hash Map sono derivanti da questi filoni:

### Pattern A: Conteggio Frequenza
Richiesto quando trovi: *"Conta la ricorrenza / individua un anagramma"*.
```python
counts = {}
for numero in nums:
    counts[numero] = counts.get(numero, 0) + 1
```

### Pattern B: Memorizzazione Valori Visti
Se scorri un Array per trovare un complemento incrociato, tieni nota su Dicts o Sets "cosa" hai guardato e controlla `in my_map´ per tagliare il tempo computazionale da O(n²) a O(n).

---

# Esercizi LeetCode

---

## Esercizio 1 — Two Sum (LeetCode #1)

**Difficoltà LeetCode:** Easy (Sblocco di mentalità base Algoritmi)

### Traccia

Dato un array di interi `nums` e un intero `target`, restituisci gli indici dei due numeri tali per cui la loro somma è uguale a `target`. Ogni input contiene **esattamente una soluzione predeterminabile**. Non usare il medesimo slot valore 2 volte.

**Esempio:**
```
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
(Perché nums[0] + nums[1] = 2 + 7 == 9)
```

### Ragionamento

- **Approccio Naive (O(n²)):** Loop con iterazione bloccata dentro l'altra verificando tutte le combinazioni a "brute-force". Troppo oneroso.
- **Approccio Hash Map (O(n)):** 
  Scorriamo su $x$. Se stiamo iterando $x$, abbiamo letteralmente bisogno che là fuori vi sia uno $y$ equivalente al $target - x$. 
  Se salviamo nel tragitto intero ogni iterabile dentro una Map a coppia chiave(valore numerico) : valore(indice posizionale nell'Array)... possiamo appurare che $y$ fa già parte ad una delle iterazioni salvate!

```
Ciclo con val=2 -> target-2=7. C'è 7? No -> Mappa salvataggio {2:0}
Ciclo con val=7 -> target-7=2. C'è 2? SÌ è in Map ad indice=0! -> Restituisco [0, 1]
```

### Soluzione

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        mappa_visti = {}
        for indice, numero in enumerate(nums):
            mancante = target - numero
            if mancante in mappa_visti:
                return [mappa_visti[mancante], indice]
            # Assicuro in Map il numero visitato
            mappa_visti[numero] = indice
```
### Complessità
- Tempo medio O(n) (Percorriamo array una singola volta e mappa è ricerca O1)
- Spazio utilizzato mappa O(n). 

---

## Esercizio 2 — Valid Anagram (LeetCode #242)

**Difficoltà LeetCode:** Easy

### Traccia
Date due stringhe `s` e `t`, restituisci `True` limitatamente al fatto qualora `t` risulti puro **anagramma** di `s`. `False` altrimenti.

### Ragionamento
Ordinare l'array costa O(n log n), ma noi sappiamo usare le Map.
Analizzo quante volte una Lettera si propone e memorizzo nei Dicts.
Le singole Frequenze delle chiavi dei Dizionari delle lettere dev'esser congruo ad entrambe le stringhe esaminate. 

### Soluzione

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
            
        conteggi = {}
        # Incremento occorrenze s
        for let in s:
            conteggi[let] = conteggi.get(let, 0) + 1
            
        # Sottraggo occorrenze per verificare t
        for let in t:
            if let not in conteggi or conteggi[let] == 0:
                return False
            conteggi[let] -= 1
            
        return True
```

---

## Esercizio 3 — Contains Duplicate (LeetCode #217)

**Difficoltà LeetCode:** Easy

### Traccia
Un array interi `nums` restituirà il Boolean `True` ovemai un elemento sia riproposto **almeno due volte** nell'intero asse vettoriale, altrimenti ci restituisca `False` in caso siano univocamente disallineati.

### Ragionamento
Sfruttiamo l'apparato delle Map nella loro veste *scompattata*, ovvero il solo **Set**. Al posto di coppia valori, l'Hash Set è uno scatolone di salvataggio a ricerca logica in `tempo iterativo O(1)` 

### Soluzione

```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        storico_set = set()
        for num in nums:
            # Controllo immediato ultra fast
            if num in storico_set:
                return True
            storico_set.add(num)
        return False
```

### Commento didattico
> Nota come una HashMap/Set riduce sempre le Ricerche Globali da un costoso loop aggiuntivo $O(n)$ allo snap quasi immediato $O(1)$! Attingendo di default ad un aumento di architettura di Spazio Ram in $O(n)$ si ha come guadagno incalcolabile il decrescere asintotico di Onerosità in Tempo in puro $O(n)$. È un mantra da padroneggiare per i vostri algoritmi futuri: *"Scambia Spazio in eccesso per ottenere Celerità e Velocità"*.

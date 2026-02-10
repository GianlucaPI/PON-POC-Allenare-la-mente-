# Lezione 2 — Linked List (Liste Collegate)

---

## 1. Cos'è una Linked List?

Una **Linked List** (lista collegata) è una struttura dati lineare in cui gli elementi **non** sono memorizzati in posizioni contigue di memoria (come accade negli array), ma sono collegati tra loro tramite **puntatori** (riferimenti).

Ogni elemento della lista si chiama **nodo** e contiene:

| Campo | Descrizione |
|-------|-------------|
| `data` | Il valore memorizzato nel nodo |
| `next` | Un riferimento (puntatore) al nodo successivo |

L'ultimo nodo della lista ha `next = None` (indica la fine della catena).

### Rappresentazione visiva

```
head
 │
 ▼
[ 3 | ●]──▶[ 7 | ●]──▶[ 12 | ●]──▶[ 5 | None]
```

Ogni "scatola" è un nodo. La freccia rappresenta il puntatore `next`.

---

## 2. Array vs Linked List

| Operazione | Array | Linked List |
|---|---|---|
| Accesso per indice | **O(1)** — diretto | **O(n)** — bisogna scorrere |
| Inserimento in testa | **O(n)** — shift di tutti gli elementi | **O(1)** — basta aggiornare `head` |
| Inserimento in coda | **O(1)** (se c'è spazio) | **O(n)** — bisogna scorrere fino alla fine* |
| Cancellazione | **O(n)** — shift degli elementi | **O(1)** — una volta trovato il nodo |
| Memoria | Contigua, dimensione fissa | Sparsa, dimensione dinamica |

> \* Con un puntatore `tail` anche l'inserimento in coda diventa O(1).

**Quando usare una Linked List?**
- Quando servono inserimenti/cancellazioni frequenti in testa.
- Quando non si conosce in anticipo la dimensione della struttura.
- Quando non serve l'accesso casuale per indice.

---

## 3. Implementazione in Python

### 3.1 La classe `Node`

```python
class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next
```

Ogni nodo è un oggetto con due attributi:
- `data`: il valore contenuto.
- `next`: il riferimento al nodo successivo (di default `None`).

### 3.2 La classe `LinkedList`

```python
class LinkedList:
    def __init__(self):
        self.head = None
```

La lista tiene traccia solo della **testa** (`head`): il primo nodo della catena. Se `head` è `None`, la lista è vuota.

### 3.3 Inserimento in testa — `add_node`

```python
def add_node(self, data):
    new_node = Node(data)       # 1. Creo un nuovo nodo
    new_node.next = self.head   # 2. Il nuovo nodo punta al vecchio head
    self.head = new_node        # 3. Il nuovo nodo diventa head
```

**Esempio passo-passo:**

```
Lista iniziale:  head ──▶ [7 | ●] ──▶ [5 | None]

add_node(3):

1. Creo new_node = [3 | None]
2. new_node.next = head  →  [3 | ●] ──▶ [7 | ●] ──▶ [5 | None]
3. head = new_node

Risultato:  head ──▶ [3 | ●] ──▶ [7 | ●] ──▶ [5 | None]
```

Complessità: **O(1)** — non dipende dalla lunghezza della lista.

### 3.4 Ricerca — `search`

```python
def search(self, data):
    current = self.head
    while current is not None:
        if current.data == data:
            return True
        current = current.next
    return False
```

Si parte dalla testa e si **scorre** nodo per nodo fino a:
- Trovare il valore cercato → `True`
- Raggiungere la fine (`None`) → `False`

Complessità: **O(n)** — nel caso peggiore bisogna scorrere tutta la lista.

### 3.5 Cancellazione — `delete`

```python
def delete(self, data):
    current = self.head
    previous = None
    while current is not None:
        if current.data == data:
            if previous is not None:
                previous.next = current.next   # "Salta" il nodo corrente
            else:
                self.head = current.next       # Il nodo da cancellare è la testa
            return
        previous = current
        current = current.next
```

**Idea chiave:** per rimuovere un nodo, basta far puntare il nodo precedente al nodo successivo, "saltando" quello da eliminare.

```
Prima:   ... ──▶ [A | ●] ──▶ [B | ●] ──▶ [C | ●] ──▶ ...
                 previous     current

Dopo:    ... ──▶ [A | ●]─────────────────▶ [C | ●] ──▶ ...
                   Il nodo B è stato "scollegato"
```

### 3.6 Stampa — `print_list`

```python
def print_list(self):
    current = self.head
    while current is not None:
        print(current.data)
        current = current.next
```

Pattern fondamentale: **scorrere la lista con un ciclo while** fino a `None`.

---

## 4. Il pattern "scorrere una Linked List"

Quasi tutti i problemi sulle Linked List si basano su questo schema:

```python
current = head
while current is not None:
    # ... fai qualcosa con current.data ...
    current = current.next
```

> **Ricorda:** non puoi tornare indietro in una Singly Linked List! Una volta che sei passato oltre un nodo, per rivederlo devi ripartire dalla testa.

---

## 5. Il trucco del "Dummy Node"

Molti problemi di LeetCode usano un **nodo fittizio** (dummy) come testa temporanea per semplificare il codice ed evitare di gestire separatamente il caso in cui la testa stessa debba cambiare.

```python
dummy = Node(0)       # Nodo fittizio, il suo valore non conta
dummy.next = head     # Lo collego alla lista vera
# ... lavoro sulla lista ...
return dummy.next     # La vera testa è dummy.next
```

Vedrete questo trucco in azione negli esercizi!

---

## 6. La tecnica dei "due puntatori" (Two Pointers)

Un'altra tecnica molto comune: usare **due puntatori** che scorrono la lista a velocità diverse.

- **Slow** avanza di 1 nodo alla volta.
- **Fast** avanza di 2 nodi alla volta.

```python
slow = head
fast = head
while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
# Quando fast arriva alla fine, slow è nel mezzo!
```

Questa tecnica serve per:
- Trovare il **punto medio** della lista.
- Rilevare la presenza di un **ciclo**.

---

# Esercizi LeetCode

> Su LeetCode, i nodi di una Linked List sono definiti così:
> ```python
> class ListNode:
>     def __init__(self, val=0, next=None):
>         self.val = val
>         self.next = next
> ```
> È la stessa cosa del nostro `Node`, ma il campo si chiama `val` invece di `data`.

---

## Esercizio 1 — Reverse Linked List (LeetCode #206)

**Difficoltà LeetCode:** Easy

### Traccia

Data la testa (`head`) di una singly linked list, **invertire** la lista e restituire la nuova testa.

**Esempio:**
```
Input:  1 → 2 → 3 → 4 → 5 → None
Output: 5 → 4 → 3 → 2 → 1 → None
```

### Ragionamento

Per invertire la lista, dobbiamo cambiare la direzione di ogni freccia: ogni nodo deve puntare al **precedente** invece che al successivo.

Usiamo tre variabili:
- `prev` — il nodo precedente (inizialmente `None`)
- `curr` — il nodo corrente
- `nxt` — salviamo il prossimo nodo **prima** di modificare il puntatore

**Passo passo con la lista `1 → 2 → 3`:**

```
Inizio:   prev=None  curr=1   nxt=?

Passo 1:  nxt=2       1.next=None    prev=1   curr=2
          None ◀── 1    2 → 3 → None

Passo 2:  nxt=3       2.next=1       prev=2   curr=3
          None ◀── 1 ◀── 2    3 → None

Passo 3:  nxt=None    3.next=2       prev=3   curr=None
          None ◀── 1 ◀── 2 ◀── 3

Fine:     prev=3 (nuova testa!)
```

### Soluzione

```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        curr = head

        while curr is not None:
            nxt = curr.next     # 1. Salvo il prossimo nodo
            curr.next = prev    # 2. Inverto il puntatore
            prev = curr         # 3. Avanzo prev
            curr = nxt          # 4. Avanzo curr

        return prev             # prev è la nuova testa
```

### Complessità
- **Tempo:** O(n) — scorriamo la lista una volta sola.
- **Spazio:** O(1) — usiamo solo tre variabili extra.

### Commento didattico

> Questo è il primo esercizio fondamentale sulle Linked List. Insegna a **manipolare i puntatori** con cura: se cambi `curr.next` prima di salvare il nodo successivo, lo perdi per sempre! È come camminare su un ponte e togliere le assi dietro di te — devi assicurarti di avere un appoggio in avanti prima.
>
> **Per le terze:** Concentratevi sul capire il ciclo while e il ruolo delle tre variabili. Provate a disegnare i diagrammi su carta.
>
> **Per le quarte/quinte:** Provate anche la versione ricorsiva come sfida extra:
> ```python
> def reverseList(self, head):
>     if not head or not head.next:
>         return head
>     new_head = self.reverseList(head.next)
>     head.next.next = head
>     head.next = None
>     return new_head
> ```

---

## Esercizio 2 — Merge Two Sorted Lists (LeetCode #21)

**Difficoltà LeetCode:** Easy

### Traccia

Date le teste di due linked list **ordinate**, fonderle in un'unica lista ordinata e restituirne la testa. La lista risultante deve essere costruita collegando i nodi delle due liste originali.

**Esempio:**
```
Input:  list1: 1 → 2 → 4 → None
        list2: 1 → 3 → 4 → None
Output: 1 → 1 → 2 → 3 → 4 → 4 → None
```

### Ragionamento

L'idea è simile al **merge** nel Merge Sort: confrontiamo i primi elementi di entrambe le liste e scegliamo il più piccolo.

Usiamo un **dummy node** per semplificare la costruzione della nuova lista.

```
list1:  1 → 2 → 4
list2:  1 → 3 → 4
dummy:  [0 | ●] ──▶ ?

Passo 1: min(1, 1) = 1 (list1) → dummy → 1
Passo 2: min(2, 1) = 1 (list2) → dummy → 1 → 1
Passo 3: min(2, 3) = 2 (list1) → dummy → 1 → 1 → 2
Passo 4: min(4, 3) = 3 (list2) → dummy → 1 → 1 → 2 → 3
Passo 5: min(4, 4) = 4 (list1) → dummy → 1 → 1 → 2 → 3 → 4
Passo 6: list1 finita   → attacco il resto di list2 → ... → 4 → 4
```

### Soluzione

```python
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)     # Nodo fittizio
        current = dummy         # Puntatore che costruisce la lista risultato

        while list1 and list2:
            if list1.val <= list2.val:
                current.next = list1
                list1 = list1.next
            else:
                current.next = list2
                list2 = list2.next
            current = current.next

        # Una delle due liste potrebbe avere ancora nodi
        if list1:
            current.next = list1
        else:
            current.next = list2

        return dummy.next       # La vera testa è dopo il dummy
```

### Complessità
- **Tempo:** O(n + m) — dove n e m sono le lunghezze delle due liste.
- **Spazio:** O(1) — non creiamo nuovi nodi, ricolleghiamo quelli esistenti.

### Commento didattico

> Questo esercizio introduce due concetti importanti:
> 1. **Il dummy node** — un trucco elegantissimo che evita di gestire il caso speciale "la lista risultato è vuota". Il dummy funge da segnaposto iniziale, e alla fine restituiamo `dummy.next`.
> 2. **Il merge di due sequenze ordinate** — un pattern che ritorna nel Merge Sort e in molti altri algoritmi.
>
> **Per le terze:** Capite bene il ruolo del `dummy` e del `current`. Il `current` è come un muratore che costruisce un muro mattone per mattone: sceglie il mattone più piccolo tra i due mucchi e lo posiziona.
>
> **Per le quarte/quinte:** Pensate a cosa succede se una lista è vuota. Il codice gestisce già questo caso? (Sì! Il while non viene eseguito e il blocco if/else finale attacca direttamente l'altra lista.)

---

## Esercizio 3 — Linked List Cycle (LeetCode #141)

**Difficoltà LeetCode:** Easy

### Traccia

Data la testa di una linked list, determinare se la lista contiene un **ciclo** (cioè se un nodo punta a un nodo già visitato, creando un loop infinito).

**Esempio:**
```
Input:  3 → 2 → 0 → -4 ──┐
             ▲              │
             └──────────────┘
Output: True (c'è un ciclo)

Input:  1 → 2 → None
Output: False (nessun ciclo)
```

### Ragionamento

Usiamo la tecnica dei **due puntatori** (detta anche "Tartaruga e Lepre" — Floyd's algorithm):

- `slow` avanza di **1 nodo** alla volta.
- `fast` avanza di **2 nodi** alla volta.

Se c'è un ciclo, `fast` "gira in tondo" e prima o poi **raggiunge** `slow` (come un corridore veloce che doppia uno più lento su una pista circolare).

Se **non** c'è un ciclo, `fast` arriva a `None` e il ciclo while termina.

```
Senza ciclo:
  slow: 1 → 2 → 3
  fast: 1 → 3 → None  ✓ Esce dal while

Con ciclo (1 → 2 → 3 → 2 → 3 → ...):
  slow: 1, 2, 3, 2, 3, ...
  fast: 1, 3, 2, 3, 2, ...
  → Si incontrano! ✓
```

### Soluzione

```python
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow = head
        fast = head

        while fast is not None and fast.next is not None:
            slow = slow.next            # Tartaruga: 1 passo
            fast = fast.next.next       # Lepre: 2 passi
            if slow == fast:            # Si sono incontrati!
                return True

        return False                    # fast ha raggiunto la fine → niente ciclo
```

### Complessità
- **Tempo:** O(n) — nel caso peggiore, fast compie al massimo 2 giri del ciclo prima di incontrare slow.
- **Spazio:** O(1) — solo due puntatori extra.

### Commento didattico

> L'algoritmo di Floyd è un classico dell'informatica e una delle applicazioni più eleganti della tecnica dei due puntatori.
>
> **Basic:** L'intuizione è semplice: se corri su una pista circolare e qualcuno corre al doppio della tua velocità, prima o poi ti raggiungerà. Se invece la pista ha una fine, il corridore veloce arriverà al traguardo per primo.
>
> **Advanced:** Domanda extra — come fareste a trovare **il punto di inizio** del ciclo? (Suggerimento: dopo che slow e fast si incontrano, mettete un puntatore sulla testa e fateli avanzare entrambi di 1 — si reincontreranno al punto di inizio del ciclo. Questo è LeetCode #142!)
>
> **Soluzione alternativa (meno efficiente):** Si potrebbe usare un `set()` per memorizzare tutti i nodi visitati. Se incontri un nodo già nel set, c'è un ciclo. Ma questo usa O(n) di spazio in più.
> ```python
> def hasCycle(self, head):
>     visited = set()
>     current = head
>     while current:
>         if current in visited:
>             return True
>         visited.add(current)
>         current = current.next
>     return False
> ```

---

## Esercizio 4 — Remove Nth Node From End of List (LeetCode #19)

**Difficoltà LeetCode:** Medium (ma al limite dell'Easy, ottimo come sfida!)

### Traccia

Data la testa di una linked list, rimuovere il **n-esimo nodo dalla fine** della lista e restituire la testa.

**Esempio:**
```
Input:  1 → 2 → 3 → 4 → 5,  n = 2
Output: 1 → 2 → 3 → 5
(Rimosso il 4, che è il 2° nodo dalla fine)
```

### Ragionamento

Il trucco è usare **due puntatori** con un "distanziamento" di n nodi:

1. Fai avanzare `fast` di **n passi** in avanti.
2. Poi fai avanzare `slow` e `fast` **insieme**, un passo alla volta.
3. Quando `fast` arriva alla fine, `slow` è esattamente **un passo prima** del nodo da rimuovere.

```
Lista: 1 → 2 → 3 → 4 → 5,  n = 2

Passo 1: avanzo fast di 2
  slow                fast
   ↓                   ↓
   1 → 2 → 3 → 4 → 5 → None

Passo 2: avanzo entrambi fino a fast.next == None
              slow          fast
               ↓             ↓
   1 → 2 → 3 → 4 → 5 → None

Passo 3: slow.next = slow.next.next (salto il nodo 4)
   1 → 2 → 3 ──────▶ 5 → None
```

Usiamo un **dummy node** per gestire il caso limite in cui dobbiamo rimuovere la testa.

### Soluzione

```python
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(0)
        dummy.next = head
        slow = dummy
        fast = dummy

        # 1. Avanzo fast di n+1 passi (per avere slow PRIMA del nodo da rimuovere)
        for _ in range(n + 1):
            fast = fast.next

        # 2. Avanzo entrambi fino alla fine
        while fast is not None:
            slow = slow.next
            fast = fast.next

        # 3. Rimuovo il nodo
        slow.next = slow.next.next

        return dummy.next
```

### Complessità
- **Tempo:** O(n) — la lista viene percorsa una sola volta (un unico passaggio!).
- **Spazio:** O(1) — solo puntatori extra.

### Commento didattico

> Questo esercizio è il "boss finale" della lezione e combina tutto quello che abbiamo visto:
> - **Scorrimento della lista** con due puntatori
> - **Dummy node** per evitare casi speciali
> - **Manipolazione dei puntatori** per la cancellazione
>
> **Per le terze:** L'idea dei due puntatori "distanziati" è come due persone che camminano sullo stesso sentiero, ma una parte n passi prima dell'altra. Quando la prima arriva alla fine, la seconda è esattamente n passi prima della fine. Provate con carta e penna!
>
> **Per le quarte/quinte:** Notate che facciamo `n + 1` passi (non `n`) perché slow deve fermarsi **un nodo prima** di quello da cancellare — altrimenti non potremmo aggiornare il puntatore. Provate a pensare: cosa succede se n è uguale alla lunghezza della lista? (Dobbiamo rimuovere la testa — e il dummy node gestisce esattamente questo caso!)
>
> **Sfida extra:** Riuscite a risolvere il problema **senza** il dummy node? Dovrete gestire separatamente il caso `n == lunghezza della lista`.

---

## 7. Riepilogo dei pattern chiave

| Pattern | Dove lo usiamo |
|---|---|
| Scorrere con `while current` | Tutti gli esercizi |
| Tre variabili `prev / curr / nxt` | Inversione della lista (Es. 1) |
| Dummy node | Merge (Es. 2), Rimozione n-esimo (Es. 4) |
| Due puntatori (slow/fast) | Ciclo (Es. 3), Rimozione n-esimo (Es. 4) |

---

## 8. Consigli per lo studio

1. **Disegnate sempre i diagrammi.** Le Linked List diventano 10 volte più facili se le visualizzate su carta con le frecce.
2. **Attenzione all'ordine delle operazioni.** Quando modificate i puntatori, l'ordine conta: salvate prima ciò che vi serve, poi modificate.
3. **Testate i casi limite:**
   - Lista vuota (`head = None`)
   - Lista con un solo nodo
   - Operazione sulla testa o sulla coda
4. **Usate il dummy node** quando non siete sicuri se la testa cambierà.

---

## 9. Esercizi extra 

Chi vuole approfondire può provare questi problemi su LeetCode:

| # | Problema | Difficoltà | Hint |
|---|---|---|---|
| 876 | Middle of the Linked List | Easy | Slow/Fast pointer |
| 234 | Palindrome Linked List | Easy | Inverti la seconda metà |
| 160 | Intersection of Two Linked Lists | Easy | Due puntatori con "scambio" |
| 83 | Remove Duplicates from Sorted List | Easy | Scorrimento con confronto |

---

# Bonus — Linked List e Ricorsione

> **Questa sezione è pensata come challenge per gli studenti più avanzati (quarte e quinte).**
> La ricorsione è un modo di pensare diverso: invece di dire al computer "scorri la lista con un while", gli diciamo "risolvi il problema per il primo nodo, e poi chiedi a te stesso di risolvere il resto". È come le matrioske: ogni bambola contiene una versione più piccola di sé stessa.

## Come funziona la ricorsione sulle Linked List?

Ogni funzione ricorsiva su una Linked List segue questo schema:

```python
def funzione_ricorsiva(node):
    # 1. CASO BASE: cosa fare quando la lista è finita?
    if node is None:
        return ...

    # 2. PASSO RICORSIVO: risolvi il problema per il resto della lista
    risultato_resto = funzione_ricorsiva(node.next)

    # 3. COMBINA: usa il nodo corrente + il risultato del resto
    return ...
```

**L'idea chiave:** la ricorsione "srotola" la lista fino alla fine, e poi "torna indietro" nodo per nodo. Questo ci permette di fare cose che con un semplice while sarebbero più complicate — come elaborare i nodi **dal fondo verso la testa**.

### Visualizzazione dello stack di chiamate

Per la lista `1 → 2 → 3 → None`:

```
funzione(1)              ← chiamata iniziale
  └─ funzione(2)         ← prima ricorsione
       └─ funzione(3)    ← seconda ricorsione
            └─ funzione(None)  ← CASO BASE: torno indietro!
            ritorna a 3   ← "risalgo" con il risultato
       ritorna a 2
  ritorna a 1
```

> **Attenzione:** ogni chiamata ricorsiva usa spazio nello **stack** (la pila di chiamate), quindi la complessità spaziale è sempre almeno **O(n)** per la ricorsione su una lista di n nodi.

---

## Esercizio R1 — Reverse Linked List (versione ricorsiva)

Abbiamo già risolto questo problema in modo iterativo (Esercizio 1). Ora rifacciamolo con la ricorsione.

### Traccia

Data la testa di una linked list, invertirla e restituire la nuova testa.

```
Input:  1 → 2 → 3 → None
Output: 3 → 2 → 1 → None
```

### Ragionamento

L'idea ricorsiva è:
1. **Caso base:** se la lista è vuota o ha un solo nodo, è già invertita.
2. **Passo ricorsivo:** inverti tutto tranne il primo nodo, poi metti il primo nodo alla fine.

**Passo passo con `1 → 2 → 3`:**

```
reverseList(1 → 2 → 3)
  │  "Inverti dal nodo 2 in poi"
  └─ reverseList(2 → 3)
       │  "Inverti dal nodo 3 in poi"
       └─ reverseList(3)
            → Caso base! Ritorno 3 (new_head = 3)

       Ora: head=2, head.next=3, new_head=3
       3.next = 2  (head.next.next = head)  →  3 → 2
       2.next = None (head.next = None)     →  3 → 2 → None
       Ritorno new_head = 3

  Ora: head=1, head.next=2, new_head=3
  2.next = 1  (head.next.next = head)  →  3 → 2 → 1
  1.next = None (head.next = None)     →  3 → 2 → 1 → None
  Ritorno new_head = 3

Risultato: 3 → 2 → 1 → None  ✓
```

### Soluzione

```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Caso base: lista vuota o singolo nodo
        if not head or not head.next:
            return head

        # Inverti ricorsivamente il resto della lista
        new_head = self.reverseList(head.next)

        # "Gira" il puntatore: il nodo dopo di me deve puntare a me
        head.next.next = head
        # Io non punto più a nessuno (per ora)
        head.next = None

        return new_head
```

### La riga magica: `head.next.next = head`

Questa è la riga che confonde di più. Vediamola in dettaglio:

```
Prima:   head ──▶ head.next ──▶ ...
           1  ──▶    2     ──▶ ...

head.next.next = head  (cioè: 2.next = 1)

Dopo:    head ◀── head.next
           1  ◀──    2
```

Stiamo dicendo: "il nodo che viene dopo di me (`head.next`) deve puntare indietro a me (`head`)". Poi con `head.next = None` tagliamo il vecchio collegamento in avanti.

### Complessità
- **Tempo:** O(n)
- **Spazio:** O(n) — per lo stack di ricorsione (n chiamate annidate)

### Commento didattico

> Confrontate le due versioni: iterativa (3 variabili, un while) vs ricorsiva (poche righe, ma serve capire lo stack). La versione iterativa è più efficiente (O(1) spazio), quella ricorsiva è più elegante ma usa O(n) spazio. In un colloquio di lavoro, è bene conoscerle entrambe!

---

## Esercizio R2 — Merge Two Sorted Lists (versione ricorsiva, LeetCode #21)

Anche questo l'abbiamo già risolto in modo iterativo. La versione ricorsiva è sorprendentemente concisa.

### Traccia

Date due liste ordinate, fonderle in una sola lista ordinata.

```
Input:  list1: 1 → 3 → 5    list2: 2 → 4 → 6
Output: 1 → 2 → 3 → 4 → 5 → 6
```

### Ragionamento

Ad ogni passo:
1. Confronta le due teste.
2. La più piccola diventa il prossimo nodo del risultato.
3. Ricorsivamente, fondi il resto.

```
merge(1→3→5, 2→4→6)
  1 < 2 → prendo 1, e ricorsivamente merge(3→5, 2→4→6)
    2 < 3 → prendo 2, e ricorsivamente merge(3→5, 4→6)
      3 < 4 → prendo 3, e ricorsivamente merge(5, 4→6)
        4 < 5 → prendo 4, e ricorsivamente merge(5, 6)
          5 < 6 → prendo 5, e ricorsivamente merge(None, 6)
            list1 è None → ritorno 6 (caso base!)
          5.next = 6 → 5→6
        4.next = 5→6 → 4→5→6
      3.next = 4→5→6 → 3→4→5→6
    2.next = 3→4→5→6 → 2→3→4→5→6
  1.next = 2→3→4→5→6 → 1→2→3→4→5→6  ✓
```

### Soluzione

```python
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        # Caso base: se una lista è vuota, ritorna l'altra
        if not list1:
            return list2
        if not list2:
            return list1

        # Scegli il nodo più piccolo e fondi ricorsivamente il resto
        if list1.val <= list2.val:
            list1.next = self.mergeTwoLists(list1.next, list2)
            return list1
        else:
            list2.next = self.mergeTwoLists(list1, list2.next)
            return list2
```

### Complessità
- **Tempo:** O(n + m)
- **Spazio:** O(n + m) — per lo stack di ricorsione

### Commento didattico

> Notate quanto è pulita la versione ricorsiva: solo 8 righe di logica! Il prezzo è lo spazio O(n+m) per lo stack. Questa soluzione mostra il lato più elegante della ricorsione: il codice rispecchia quasi letteralmente la definizione del problema ("prendi il più piccolo, poi fondi il resto").

---

## Esercizio R3 — Remove Linked List Elements (LeetCode #203)

**Difficoltà LeetCode:** Easy

### Traccia

Data la testa di una linked list e un intero `val`, rimuovere **tutti** i nodi con quel valore e restituire la nuova testa.

**Esempio:**
```
Input:  1 → 2 → 6 → 3 → 4 → 5 → 6,  val = 6
Output: 1 → 2 → 3 → 4 → 5
```

### Ragionamento

Per ogni nodo, decidiamo ricorsivamente:
- Se il nodo corrente ha il valore da eliminare → **saltalo** e restituisci il risultato della ricorsione sul resto.
- Altrimenti → **tienilo** e collega il suo `next` al risultato della ricorsione sul resto.

```
removeElements(1→2→6→3, val=6)
  1 ≠ 6 → tieni 1, 1.next = removeElements(2→6→3, val=6)
    2 ≠ 6 → tieni 2, 2.next = removeElements(6→3, val=6)
      6 == 6 → SALTA! → removeElements(3, val=6)
        3 ≠ 6 → tieni 3, 3.next = removeElements(None, val=6)
          None → caso base, ritorno None
        3.next = None → ritorno 3
      ritorno 3  (il 6 è stato saltato!)
    2.next = 3 → ritorno 2→3
  1.next = 2→3 → ritorno 1→2→3  ✓
```

### Soluzione

```python
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        # Caso base
        if not head:
            return None

        # Ricorsione: risolvi il problema per il resto della lista
        head.next = self.removeElements(head.next, val)

        # Decisione: tengo questo nodo o lo salto?
        if head.val == val:
            return head.next    # Salto: ritorno direttamente il resto
        else:
            return head         # Tengo: ritorno il nodo corrente
```

### Complessità
- **Tempo:** O(n)
- **Spazio:** O(n) — stack di ricorsione

### Commento didattico

> Questo esercizio è perfetto per capire il pattern "filtra ricorsivamente". La logica è cristallina:
> 1. Risolvi il sotto-problema (tutto il resto della lista).
> 2. Poi decidi per il nodo corrente: lo tieni o lo butti?
>
> **Confronto con la versione iterativa:** nella versione iterativa serviva un `previous` per "saltare" il nodo. Qui la ricorsione lo fa automaticamente grazie al `return head.next`.
>
> **Sfida:** Provate a scrivere la versione iterativa con dummy node e confrontatela.

---

## Esercizio R4 — Palindrome Linked List (LeetCode #234)

**Difficoltà LeetCode:** Easy (ma la versione ricorsiva è una vera sfida!)

### Traccia

Data la testa di una singly linked list, determinare se la lista è un **palindromo** (si legge uguale da sinistra a destra e da destra a sinistra).

**Esempio:**
```
Input:  1 → 2 → 2 → 1 → None
Output: True

Input:  1 → 2 → 3 → None
Output: False
```

### Ragionamento

Il problema: in una singly linked list non possiamo andare all'indietro. Come confrontiamo il primo nodo con l'ultimo?

**Trucco ricorsivo:** la ricorsione "scende" fino in fondo alla lista. Quando risale, visitiamo i nodi **in ordine inverso**. Intanto, un puntatore esterno (`self.front`) avanza dalla testa in ordine normale. Se ad ogni passo i valori coincidono, è un palindromo!

```
Lista: 1 → 2 → 2 → 1

La ricorsione scende:  1, 2, 2, 1 (→ None, caso base)
La ricorsione risale:  1, 2, 2, 1  ← ordine inverso!
self.front avanza:     1, 2, 2, 1  ← ordine normale

Confronto:  1==1 ✓  2==2 ✓  2==2 ✓  1==1 ✓  → Palindromo!
```

### Soluzione

```python
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        self.front = head   # Puntatore che parte dalla testa

        def check(node):
            if node is None:
                return True

            # Prima: scendi fino in fondo (ricorsione)
            if not check(node.next):
                return False

            # Poi: risalendo, confronta con il puntatore frontale
            if node.val != self.front.val:
                return False

            # Avanza il puntatore frontale
            self.front = self.front.next
            return True

        return check(head)
```

### Trace dettagliato per `1 → 2 → 2 → 1`:

```
check(1)  →  front punta a 1
  check(2)  →  front punta a 1
    check(2)  →  front punta a 1
      check(1)  →  front punta a 1
        check(None)  →  return True (caso base)
      node.val=1 == front.val=1 ✓  front avanza a 2  →  return True
    node.val=2 == front.val=2 ✓  front avanza a 2  →  return True
  node.val=2 == front.val=2 ✓  front avanza a 1  →  return True
node.val=1 == front.val=1 ✓  front avanza a None  →  return True

Risultato: True ✓
```

### Complessità
- **Tempo:** O(n)
- **Spazio:** O(n) — stack di ricorsione

### Commento didattico

> Questo è l'esercizio più difficile della sezione. Il concetto chiave è che **la ricorsione ci dà accesso ai nodi in ordine inverso durante la risalita**. Combinando questo con un puntatore che avanza in ordine normale, otteniamo un confronto "da entrambi i lati".
>
> `self.front` è necessario perché dobbiamo mantenere uno stato **tra le chiamate ricorsive**. In Python, una variabile locale non persiste tra le chiamate, ma un attributo dell'oggetto sì.
>
> **Approccio alternativo (più semplice):** Convertire la lista in un array Python e controllare `arr == arr[::-1]`. È O(n) in tempo e spazio ma molto più semplice da scrivere. La versione ricorsiva è un esercizio di comprensione profonda della ricorsione.
>
> **Sfida finale:** Esiste una soluzione O(n) tempo e O(1) spazio che usa la tecnica slow/fast per trovare il centro, inverte la seconda metà, e confronta le due metà. Provate a scriverla!

---

## Riepilogo: Iterativo vs Ricorsivo

| Problema | Iterativo | Ricorsivo |
|---|---|---|
| Reverse List | O(1) spazio, 3 variabili | O(n) spazio, più elegante |
| Merge Sorted | Dummy node + while | 8 righe, molto conciso |
| Remove Elements | Dummy node + previous | Pattern "filtra" naturale |
| Palindrome | Inverti metà + confronta | Sfrutta lo stack per l'ordine inverso |

**Regola pratica:**
- La **ricorsione** rende il codice più leggibile e vicino alla definizione matematica del problema.
- L'**iterazione** è più efficiente in termini di spazio (no stack overhead).
- In un colloquio o in una gara, scegliete l'approccio con cui vi sentite più sicuri — ma **conoscerli entrambi** vi rende programmatori migliori.

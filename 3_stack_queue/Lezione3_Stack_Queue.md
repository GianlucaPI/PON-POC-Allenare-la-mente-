# Lezione 3 — Stack e Queue (Pile e Code)

---

## 1. Cos'è uno Stack?

Uno **Stack** (pila) è una struttura dati che segue la politica **LIFO** — *Last In, First Out*: l'ultimo elemento inserito è il primo ad essere rimosso.

Pensate a una **pila di piatti**: potete aggiungere un piatto solo in cima e togliere solo quello in cima. Non potete prendere un piatto dal mezzo senza far cadere tutto!

### Operazioni principali

| Operazione | Descrizione | Complessità |
|---|---|---|
| `push(x)` | Aggiunge l'elemento `x` in cima allo stack | **O(1)** |
| `pop()` | Rimuove e restituisce l'elemento in cima | **O(1)** |
| `top()` / `peek()` | Restituisce l'elemento in cima **senza rimuoverlo** | **O(1)** |
| `is_empty()` | Controlla se lo stack è vuoto | **O(1)** |

### Rappresentazione visiva

```
push(3), push(7), push(1):

    ┌───┐
    │ 1 │  ← top (cima)
    ├───┤
    │ 7 │
    ├───┤
    │ 3 │
    └───┘

pop() → restituisce 1

    ┌───┐
    │ 7 │  ← nuovo top
    ├───┤
    │ 3 │
    └───┘
```

### Applicazioni reali degli Stack

- **Tasto "Annulla" (Ctrl+Z)** negli editor di testo — ogni azione viene "impilata", e "Annulla" fa il `pop` dell'ultima.
- **Gestione delle chiamate di funzione** — quando una funzione ne chiama un'altra, il sistema "impila" l'indirizzo di ritorno (call stack).
- **Navigazione del browser** — il pulsante "Indietro" è uno stack di pagine visitate.
- **Valutazione di espressioni** — controllare che le parentesi siano bilanciate, calcolare espressioni in notazione postfissa.

---

## 2. Cos'è una Queue?

Una **Queue** (coda) è una struttura dati che segue la politica **FIFO** — *First In, First Out*: il primo elemento inserito è il primo ad essere rimosso.

Pensate a una **fila al bar**: il primo che arriva è il primo che viene servito. Chi arriva dopo si mette in fondo.

### Operazioni principali

| Operazione | Descrizione | Complessità |
|---|---|---|
| `enqueue(x)` | Aggiunge l'elemento `x` in fondo alla coda | **O(1)** |
| `dequeue()` | Rimuove e restituisce l'elemento in testa | **O(1)** |
| `front()` / `peek()` | Restituisce l'elemento in testa **senza rimuoverlo** | **O(1)** |
| `is_empty()` | Controlla se la coda è vuota | **O(1)** |

### Rappresentazione visiva

```
enqueue(3), enqueue(7), enqueue(1):

  front                    rear
   ↓                        ↓
┌───┬───┬───┐
│ 3 │ 7 │ 1 │
└───┴───┴───┘
  ↑ esce da qui    entra da qui ↑

dequeue() → restituisce 3

      front       rear
       ↓           ↓
    ┌───┬───┐
    │ 7 │ 1 │
    └───┴───┘
```

### Applicazioni reali delle Queue

- **Gestione dei processi** nei sistemi operativi — i processi aspettano il loro turno di esecuzione.
- **BFS (Breadth-First Search)** — l'algoritmo di visita in ampiezza dei grafi usa una coda.
- **Code di stampa** — i documenti vengono stampati nell'ordine in cui sono stati inviati.
- **Buffer di messaggi** — i messaggi in arrivo vengono gestiti in ordine.

---

## 3. Stack vs Queue — confronto

| Caratteristica | Stack (LIFO) | Queue (FIFO) |
|---|---|---|
| Politica | Ultimo inserito = primo rimosso | Primo inserito = primo rimosso |
| Analogia | Pila di piatti | Fila al bar |
| Inserimento | In cima (`push`) | In fondo (`enqueue`) |
| Rimozione | Dalla cima (`pop`) | Dalla testa (`dequeue`) |
| Accesso | Solo alla cima | Solo alla testa |
| Uso tipico | Undo/Redo, ricorsione, DFS | Scheduling, BFS, buffer |

---

## 4. Implementazione in Python

### 4.1 Stack — implementazione con lista Python

In Python, le liste (`list`) supportano già `append()` e `pop()` in O(1), quindi sono perfette per implementare uno stack.

```python
class Stack:
    def __init__(self):
        self.stack = []

    def push(self, x):
        self.stack.append(x)        # Aggiunge in cima (fine della lista)

    def pop(self):
        if self.is_empty():
            raise RuntimeError("Stack vuoto!")
        return self.stack.pop()     # Rimuove e restituisce l'ultimo elemento

    def top(self):
        if self.is_empty():
            raise RuntimeError("Stack vuoto!")
        return self.stack[-1]       # Restituisce l'ultimo senza rimuoverlo

    def is_empty(self):
        return len(self.stack) == 0
```

**Esempio d'uso:**

```python
s = Stack()
s.push(10)
s.push(20)
s.push(30)

print(s.top())     # 30
print(s.pop())     # 30
print(s.pop())     # 20
print(s.top())     # 10
```

> **Nota:** in Python, `list.append()` aggiunge alla fine e `list.pop()` toglie dalla fine. Entrambe le operazioni costano **O(1) ammortizzato** grazie al meccanismo di array dinamico interno.

### 4.2 Stack — implementazione con Linked List

Possiamo anche usare una Linked List, facendo `push` e `pop` sulla **testa** (esattamente come `add_node` nella lezione precedente).

```python
class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next

class StackLinkedList:
    def __init__(self):
        self.head = None

    def push(self, x):
        new_node = Node(x)
        new_node.next = self.head   # Il nuovo nodo punta al vecchio top
        self.head = new_node        # Il nuovo nodo diventa il top

    def pop(self):
        if self.is_empty():
            raise RuntimeError("Stack vuoto!")
        data = self.head.data       # Salvo il valore in cima
        self.head = self.head.next  # La testa diventa il nodo successivo
        return data

    def top(self):
        if self.is_empty():
            raise RuntimeError("Stack vuoto!")
        return self.head.data

    def is_empty(self):
        return self.head is None
```

```
push(3), push(7), push(1):

head ──▶ [1 | ●] ──▶ [7 | ●] ──▶ [3 | None]
          top

pop() → restituisce 1, head si sposta:

head ──▶ [7 | ●] ──▶ [3 | None]
          nuovo top
```

### 4.3 Queue — implementazione con lista Python

```python
class Queue:
    def __init__(self):
        self.queue = []

    def enqueue(self, x):
        self.queue.append(x)        # Aggiunge in fondo

    def dequeue(self):
        if self.is_empty():
            raise RuntimeError("Coda vuota!")
        return self.queue.pop(0)    # Rimuove dal fronte (indice 0)

    def front(self):
        if self.is_empty():
            raise RuntimeError("Coda vuota!")
        return self.queue[0]

    def is_empty(self):
        return len(self.queue) == 0
```

> **Attenzione:** `list.pop(0)` costa **O(n)** perché deve spostare tutti gli elementi! Per una coda efficiente, usiamo `collections.deque` oppure un array circolare.

### 4.4 Queue — implementazione efficiente con `deque`

```python
from collections import deque

class QueueDeque:
    def __init__(self):
        self.queue = deque()

    def enqueue(self, x):
        self.queue.append(x)        # O(1) — aggiunge in fondo

    def dequeue(self):
        if self.is_empty():
            raise RuntimeError("Coda vuota!")
        return self.queue.popleft() # O(1) — rimuove dal fronte

    def front(self):
        if self.is_empty():
            raise RuntimeError("Coda vuota!")
        return self.queue[0]

    def is_empty(self):
        return len(self.queue) == 0
```

> `collections.deque` (double-ended queue) è ottimizzata per inserimenti e rimozioni da **entrambe le estremità** in O(1).

### 4.5 Queue — implementazione con Array Circolare

L'array circolare risolve il problema dello spreco di memoria: quando `head` avanza, le posizioni liberate all'inizio vengono riutilizzate grazie all'operatore **modulo** (`%`).

```python
class CircularQueue:
    def __init__(self, capacity):
        self.buf = [None] * capacity
        self.size = 0
        self.head = 0
        self.tail = 0

    def enqueue(self, x):
        if self.size == len(self.buf):
            raise RuntimeError("Coda piena!")
        self.buf[self.tail] = x
        self.tail = (self.tail + 1) % len(self.buf)   # Torna a 0 dopo la fine
        self.size += 1

    def dequeue(self):
        if self.is_empty():
            raise RuntimeError("Coda vuota!")
        x = self.buf[self.head]
        self.head = (self.head + 1) % len(self.buf)   # Torna a 0 dopo la fine
        self.size -= 1
        return x

    def front(self):
        if self.is_empty():
            raise RuntimeError("Coda vuota!")
        return self.buf[self.head]

    def is_empty(self):
        return self.size == 0
```

**Come funziona l'operatore modulo?**

```
Array di capacità 5:  indici 0, 1, 2, 3, 4

Se tail = 4:  (4 + 1) % 5 = 0  →  tail "torna" all'inizio!
Se tail = 2:  (2 + 1) % 5 = 3  →  tail avanza normalmente

   head           tail
    ↓               ↓
┌──────┬──────┬──────┬──────┬──────┐
│  7   │  12  │  5   │ None │ None │
└──────┴──────┴──────┴──────┴──────┘
  [0]    [1]    [2]    [3]    [4]
```

---

## 5. Come usare Stack e Queue su LeetCode (in Python)

Su LeetCode non serve implementare la classe: si usano direttamente le strutture native di Python.

### Stack → usa una `list`

```python
stack = []
stack.append(10)     # push
stack.append(20)     # push
top = stack[-1]      # peek → 20
val = stack.pop()    # pop → 20
empty = len(stack) == 0
```

### Queue → usa `collections.deque`

```python
from collections import deque
queue = deque()
queue.append(10)         # enqueue
queue.append(20)         # enqueue
front = queue[0]         # peek → 10
val = queue.popleft()    # dequeue → 10
empty = len(queue) == 0
```

---

## 6. Pattern fondamentali

### Pattern 1 — "Lo stack come memoria temporanea"

Molti problemi usano lo stack per ricordare elementi precedenti e confrontarli con quelli correnti:

```python
stack = []
for elemento in sequenza:
    while stack and condizione(stack[-1], elemento):
        stack.pop()     # Rimuovo elementi "superati"
    stack.append(elemento)
```

### Pattern 2 — "Matching di coppie" (parentesi, tag, ecc.)

Quando apri qualcosa → `push`. Quando chiudi qualcosa → `pop` e verifica che corrisponda.

```python
stack = []
for char in stringa:
    if char è di apertura:
        stack.append(char)
    elif char è di chiusura:
        if stack vuoto o non corrisponde:
            return False
        stack.pop()
return len(stack) == 0
```

### Pattern 3 — "Usa una Queue per elaborare livello per livello"

Tipico del BFS e di problemi che richiedono elaborazione a "ondate":

```python
queue = deque([elemento_iniziale])
while queue:
    size = len(queue)           # Elementi del livello corrente
    for _ in range(size):
        elem = queue.popleft()
        # ... elabora elem ...
        # ... aggiungi i "vicini" alla queue ...
```

---

# Esercizi LeetCode — Stack

---

## Esercizio 1 — Valid Parentheses (LeetCode #20)

**Difficoltà LeetCode:** Easy

### Traccia

Data una stringa `s` contenente solo i caratteri `'('`, `')'`, `'{'`, `'}'`, `'['` e `']'`, determinare se la stringa è **valida**.

Una stringa è valida se:
1. Ogni parentesi aperta è chiusa con lo stesso tipo.
2. Le parentesi sono chiuse nell'ordine corretto.
3. Ogni parentesi chiusa ha una corrispondente parentesi aperta.

**Esempi:**
```
Input:  "()"        → True
Input:  "()[]{}"    → True
Input:  "(]"        → False
Input:  "([)]"      → False
Input:  "{[]}"      → True
```

### Ragionamento

Questo è il problema classico per gli stack! L'idea è:
- Quando incontri una **parentesi aperta** → `push` sullo stack.
- Quando incontri una **parentesi chiusa** → `pop` dallo stack e verifica che corrisponda.

```
Stringa: "{[]}"

Carattere '{'  → push → stack: ['{']
Carattere '['  → push → stack: ['{', '[']
Carattere ']'  → pop '[', corrisponde a ']' ✓ → stack: ['{']
Carattere '}'  → pop '{', corrisponde a '}' ✓ → stack: []

Stack vuoto alla fine → VALIDA ✓
```

```
Stringa: "([)]"

Carattere '('  → push → stack: ['(']
Carattere '['  → push → stack: ['(', '[']
Carattere ')'  → pop '[', NON corrisponde a ')' ✗

→ NON VALIDA ✗
```

### Soluzione

```python
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        # Mappa: ogni chiusura → la sua apertura corrispondente
        match = {')': '(', ']': '[', '}': '{'}

        for char in s:
            if char in match:
                # È una parentesi chiusa
                if not stack or stack[-1] != match[char]:
                    return False
                stack.pop()
            else:
                # È una parentesi aperta
                stack.append(char)

        return len(stack) == 0    # Lo stack deve essere vuoto alla fine
```

### Complessità
- **Tempo:** O(n) — scorriamo la stringa una volta.
- **Spazio:** O(n) — nel caso peggiore (tutte parentesi aperte) lo stack contiene n/2 elementi.

### Commento didattico

> Questo è IL problema sugli stack. Se capite questo, capite quando e perché usare uno stack.
>
> **Per le terze:** L'idea chiave è che lo stack "ricorda" cosa abbiamo aperto. Quando chiudiamo, verifichiamo che l'ultimo aperto corrisponda. È come le scatole cinesi: l'ultima scatola aperta è la prima che devi chiudere.
>
> **Per le quarte/quinte:** Notate l'uso del dizionario `match` per rendere il codice pulito. Senza di esso, servirebbero 3 `if-elif`. Pensate anche: perché controlliamo `len(stack) == 0` alla fine? (Perché una stringa come `"((("` non ha errori di matching, ma non è valida!)

---

## Esercizio 2 — Min Stack (LeetCode #155)

**Difficoltà LeetCode:** Medium (ma concettualmente Easy)

### Traccia

Progettare uno stack che supporti `push`, `pop`, `top` e il recupero dell'**elemento minimo** in tempo **O(1)**.

- `push(val)` — inserisce `val` nello stack
- `pop()` — rimuove l'elemento in cima
- `top()` — restituisce l'elemento in cima
- `getMin()` — restituisce l'elemento minimo nello stack

**Esempio:**
```
MinStack s = new MinStack()
s.push(-2)    → stack: [-2]
s.push(0)     → stack: [-2, 0]
s.push(-3)    → stack: [-2, 0, -3]
s.getMin()    → -3
s.pop()       → stack: [-2, 0]
s.top()       → 0
s.getMin()    → -2
```

### Ragionamento

Il problema è: se usiamo una sola variabile `min` per tracciare il minimo, quando facciamo `pop` del minimo, come sappiamo qual è il **nuovo** minimo senza scorrere tutto lo stack?

**Soluzione:** usiamo **due stack** in parallelo:
1. Lo **stack principale** per i valori.
2. Uno **stack dei minimi** che traccia il minimo corrente a ogni livello.

```
Operazioni:          stack      min_stack
push(-2)            [-2]        [-2]
push(0)             [-2, 0]     [-2, -2]      ← il min resta -2
push(-3)            [-2, 0, -3] [-2, -2, -3]  ← nuovo min: -3
getMin() → -3                    top di min_stack
pop()               [-2, 0]     [-2, -2]      ← pop da entrambi
getMin() → -2                    top di min_stack
```

### Soluzione

```python
class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []     # Stack parallelo che traccia i minimi

    def push(self, val: int) -> None:
        self.stack.append(val)
        # Il minimo è il più piccolo tra val e il minimo corrente
        current_min = min(val, self.min_stack[-1] if self.min_stack else val)
        self.min_stack.append(current_min)

    def pop(self) -> None:
        self.stack.pop()
        self.min_stack.pop()    # Pop da entrambi gli stack!

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min_stack[-1]
```

### Complessità
- **Tempo:** O(1) per **tutte** le operazioni.
- **Spazio:** O(n) — lo stack dei minimi usa spazio aggiuntivo.

### Commento didattico

> Questo problema insegna un concetto potente: **usare spazio extra per guadagnare tempo**. Invece di cercare il minimo ogni volta (O(n)), lo "precalcoliamo" e lo teniamo aggiornato con uno stack parallelo.
>
> **Per le terze:** Pensate al `min_stack` come a un registro che ad ogni momento dice "qual è il minimo **fino a questo punto**". Quando togliamo un elemento, togliamo anche la sua informazione sul minimo.
>
> **Per le quarte/quinte:** Riuscite a ottimizzare lo spazio? Suggerimento: il `min_stack` può avere meno elementi se inserite un nuovo minimo solo quando cambia (ma dovete gestire i duplicati con attenzione).

---

## Esercizio 3 — Baseball Game (LeetCode #682)

**Difficoltà LeetCode:** Easy

### Traccia

State tenendo il punteggio di una partita di baseball con operazioni particolari. Ricevete una lista di operazioni `ops` dove:

- Un **intero** `x` — registra un nuovo punteggio di `x`.
- `"+"` — registra un nuovo punteggio che è la **somma** dei due punteggi precedenti.
- `"D"` — registra un nuovo punteggio che è il **doppio** del punteggio precedente.
- `"C"` — **annulla e rimuove** il punteggio precedente.

Restituire la **somma** di tutti i punteggi rimasti.

**Esempio:**
```
Input:  ops = ["5", "2", "C", "D", "+"]
Output: 30

Spiegazione:
"5" → aggiungi 5         → stack: [5]
"2" → aggiungi 2         → stack: [5, 2]
"C" → annulla il 2       → stack: [5]
"D" → doppio di 5 = 10   → stack: [5, 10]
"+" → 5 + 10 = 15        → stack: [5, 10, 15]

Somma: 5 + 10 + 15 = 30
```

### Ragionamento

Lo stack è perfetto qui perché:
- I punteggi vengono "impilati" uno sopra l'altro.
- `"C"` è esattamente un `pop`.
- `"D"` e `"+"` hanno bisogno degli ultimi 1-2 punteggi → basta guardare `stack[-1]` e `stack[-2]`.

### Soluzione

```python
class Solution:
    def calPoints(self, operations: list[str]) -> int:
        stack = []

        for op in operations:
            if op == "C":
                stack.pop()                         # Annulla l'ultimo
            elif op == "D":
                stack.append(stack[-1] * 2)         # Doppio dell'ultimo
            elif op == "+":
                stack.append(stack[-1] + stack[-2])  # Somma degli ultimi due
            else:
                stack.append(int(op))               # Nuovo punteggio

        return sum(stack)
```

### Complessità
- **Tempo:** O(n) — una passata sulle operazioni.
- **Spazio:** O(n) — lo stack può contenere fino a n elementi.

### Commento didattico

> Questo è un esercizio "applicativo" molto accessibile che mostra come lo stack serva per gestire una **cronologia con possibilità di annullamento**. È simile alla funzione "Annulla" di un editor di testo.
>
> **Per le terze:** L'esercizio è molto diretto: seguite le operazioni una per una e disegnate lo stack su carta. Non c'è trucco, solo pratica con `append` e `pop`.
>
> **Per le quarte/quinte:** Notate che `stack[-1]` e `stack[-2]` permettono di "sbirciare" senza rimuovere. In altri linguaggi (Java, C++) dovreste fare `pop`, salvare, e poi `push` di nuovo. Python qui è più comodo!

---

## Esercizio 4 — Implement Queue using Stacks (LeetCode #232)

**Difficoltà LeetCode:** Easy

### Traccia

Implementare una **Queue** (FIFO) usando solo **due Stack** (LIFO).

La queue deve supportare:
- `push(x)` — aggiunge l'elemento x in fondo alla coda
- `pop()` — rimuove l'elemento dal fronte della coda
- `peek()` — restituisce l'elemento al fronte senza rimuoverlo
- `empty()` — restituisce `True` se la coda è vuota

**Esempio:**
```
queue.push(1)     → coda: [1]
queue.push(2)     → coda: [1, 2]
queue.peek()      → 1
queue.pop()       → 1, coda: [2]
queue.empty()     → False
```

### Ragionamento

Il problema è: lo stack dà gli elementi in ordine **inverso** (LIFO), ma la queue li vuole in ordine **diretto** (FIFO). Come facciamo?

**Trucco:** se rovesci uno stack **due volte**, torni all'ordine originale. Quindi usiamo due stack:

- `stack_in` — dove facciamo push dei nuovi elementi.
- `stack_out` — da cui facciamo pop/peek. Quando `stack_out` è vuoto, "trasferiamo" tutto da `stack_in`, invertendo l'ordine!

```
push(1), push(2), push(3):
  stack_in:  [1, 2, 3]    stack_out: []

pop():
  stack_out è vuoto → trasferisci!
  pop da stack_in e push in stack_out: 3, 2, 1
  stack_in:  []            stack_out: [3, 2, 1]

  pop da stack_out → 1 ✓ (il primo inserito!)
  stack_in:  []            stack_out: [3, 2]

pop() → 2 ✓
pop() → 3 ✓
```

### Soluzione

```python
class MyQueue:
    def __init__(self):
        self.stack_in = []      # Stack per gli inserimenti
        self.stack_out = []     # Stack per le rimozioni

    def push(self, x: int) -> None:
        self.stack_in.append(x)

    def pop(self) -> int:
        self._transfer()
        return self.stack_out.pop()

    def peek(self) -> int:
        self._transfer()
        return self.stack_out[-1]

    def empty(self) -> bool:
        return not self.stack_in and not self.stack_out

    def _transfer(self):
        """Trasferisce elementi da stack_in a stack_out solo se stack_out è vuoto."""
        if not self.stack_out:
            while self.stack_in:
                self.stack_out.append(self.stack_in.pop())
```

### Complessità
- **push:** O(1)
- **pop/peek:** O(1) **ammortizzato** — ogni elemento viene trasferito al massimo una volta.
- **Spazio:** O(n)

### Commento didattico

> Questo è un esercizio concettualmente bellissimo: mostra come una struttura dati possa essere costruita sopra un'altra cambiandone il comportamento. Due LIFO possono fare un FIFO!
>
> **Per le terze:** Immaginate due scatole. Nella prima mettete le lettere una sopra l'altra (1, 2, 3 → la 3 è in cima). Poi ribaltate la scatola nella seconda: ora la 1 è in cima! Leggendo dalla seconda scatola, ottenete l'ordine originale.
>
> **Per le quarte/quinte:** La chiave dell'efficienza è il trasferimento **lazy** — trasferiamo da `stack_in` a `stack_out` solo quando `stack_out` è vuoto. Questo garantisce che ogni elemento venga spostato al massimo una volta, dando costo O(1) ammortizzato. Confrontate con il metodo "naïf" dove si trasferisce ad ogni operazione (sarebbe O(n) per ogni pop).

---

# Esercizi LeetCode — Queue

---

## Esercizio 5 — Number of Recent Calls (LeetCode #933)

**Difficoltà LeetCode:** Easy

### Traccia

Implementare una classe `RecentCounter` che conta il numero di richieste ricevute negli ultimi **3000 millisecondi**.

- `ping(t)` — aggiunge una nuova richiesta al tempo `t` e restituisce il numero di richieste avvenute nell'intervallo `[t - 3000, t]` (estremi inclusi).

È garantito che `t` è strettamente crescente ad ogni chiamata.

**Esempio:**
```
counter = RecentCounter()
counter.ping(1)      → 1     (richieste in [-2999, 1]: solo la 1)
counter.ping(100)    → 2     (richieste in [-2900, 100]: 1, 100)
counter.ping(3001)   → 3     (richieste in [1, 3001]: 1, 100, 3001)
counter.ping(3002)   → 3     (richieste in [2, 3002]: 100, 3001, 3002)
                                la 1 è fuori dalla finestra!
```

### Ragionamento

Usiamo una **queue** perché le richieste arrivano in ordine cronologico e quelle troppo vecchie vengono scartate dalla testa — esattamente il comportamento FIFO!

```
ping(1):     queue: [1]            → conta 1
ping(100):   queue: [1, 100]       → conta 2
ping(3001):  queue: [1, 100, 3001] → conta 3  (1 è ancora in [1, 3001])
ping(3002):  1 < 3002-3000 = 2 → dequeue!
             queue: [100, 3001, 3002] → conta 3
```

### Soluzione

```python
from collections import deque

class RecentCounter:
    def __init__(self):
        self.queue = deque()

    def ping(self, t: int) -> int:
        self.queue.append(t)
        # Rimuovi tutte le richieste troppo vecchie
        while self.queue[0] < t - 3000:
            self.queue.popleft()
        return len(self.queue)
```

### Complessità
- **Tempo:** O(1) ammortizzato per ogni `ping` — ogni elemento viene aggiunto e rimosso al massimo una volta.
- **Spazio:** O(n) — al massimo 3001 elementi nella finestra.

### Commento didattico

> Questo problema illustra perfettamente il concetto di **sliding window** (finestra scorrevole): manteniamo solo gli elementi "recenti" e scartiamo quelli obsoleti. La queue è la struttura ideale perché gli elementi più vecchi sono in testa e vengono rimossi per primi.
>
> **Per le terze:** Pensate alla queue come una fila di persone ad un concerto. Ogni minuto entra gente nuova (in fondo). Chi è arrivato troppo tempo fa se ne va (dalla testa). `ping` conta quante persone sono ancora in fila.
>
> **Per le quarte/quinte:** Perché il costo ammortizzato è O(1)? Perché ogni timestamp viene inserito e rimosso dalla queue **esattamente una volta**. Se facciamo n chiamate a `ping`, il numero totale di operazioni sulla queue è al massimo 2n.

---

## Esercizio 6 — Implement Stack using Queues (LeetCode #225)

**Difficoltà LeetCode:** Easy

### Traccia

Implementare uno **Stack** (LIFO) usando solo **Queue** (FIFO).

Operazioni da supportare: `push(x)`, `pop()`, `top()`, `empty()`.

**Esempio:**
```
stack.push(1)     → [1]
stack.push(2)     → [1, 2]
stack.top()       → 2
stack.pop()       → 2
stack.empty()     → False
```

### Ragionamento

La queue dà elementi dal fronte (il primo inserito), ma lo stack vuole l'ultimo inserito. L'idea: quando facciamo `push`, **riordiniamo** la queue in modo che il nuovo elemento sia sempre al fronte.

```
push(1):
  queue: [1]

push(2):
  1. Aggiungi 2 in fondo → queue: [1, 2]
  2. Ruota: sposta tutti gli elementi prima di 2 alla fine
     dequeue 1, enqueue 1 → queue: [2, 1]
  Ora 2 (ultimo inserito) è al fronte ✓

push(3):
  1. Aggiungi 3 in fondo → queue: [2, 1, 3]
  2. Ruota: sposta 2 e 1 alla fine
     → queue: [1, 3, 2] → queue: [3, 2, 1]
  Ora 3 (ultimo inserito) è al fronte ✓

pop() → dequeue → 3 ✓
```

### Soluzione

```python
from collections import deque

class MyStack:
    def __init__(self):
        self.queue = deque()

    def push(self, x: int) -> None:
        self.queue.append(x)
        # Ruota tutti gli elementi precedenti dopo il nuovo
        for _ in range(len(self.queue) - 1):
            self.queue.append(self.queue.popleft())

    def pop(self) -> int:
        return self.queue.popleft()

    def top(self) -> int:
        return self.queue[0]

    def empty(self) -> bool:
        return len(self.queue) == 0
```

### Complessità
- **push:** O(n) — dobbiamo ruotare n-1 elementi.
- **pop/top:** O(1)
- **Spazio:** O(n)

### Commento didattico

> Questo è il problema "fratello" dell'Esercizio 4 (Queue con Stack), ma al contrario! Insieme, questi due esercizi mostrano che Stack e Queue sono **equivalenti in potenza espressiva**: ognuno può simulare l'altro.
>
> **Per le terze:** L'idea della "rotazione" è come una giostra: quando entra un nuovo passeggero, facciamo fare un giro completo alla giostra finché il nuovo passeggero non è davanti all'uscita.
>
> **Per le quarte/quinte:** Notate l'asimmetria: la Queue con Stack (Es. 4) ha push O(1) e pop O(1) ammortizzato, ma lo Stack con Queue ha push O(n). Perché? Perché il trasferimento lazy non funziona qui — un singolo stack riversato una volta basta, ma una queue non può essere "invertita" senza costo lineare. Esiste un modo per ottenere O(1) ammortizzato anche qui? (Spoiler: sì, con due queue, ma è più complesso.)

---

## 7. Riepilogo dei pattern chiave

| Pattern | Dove lo usiamo |
|---|---|
| Stack come "memoria dell'ordine" | Valid Parentheses (Es. 1) |
| Stack parallelo per metadati | Min Stack (Es. 2) |
| Stack per cronologia/undo | Baseball Game (Es. 3) |
| Due stack per simulare una queue | Implement Queue (Es. 4) |
| Queue come finestra scorrevole | Recent Calls (Es. 5) |
| Queue per simulare uno stack | Implement Stack (Es. 6) |

---

## 8. Consigli per lo studio

1. **Se il problema richiede di elaborare nell'ordine inverso → pensate Stack.**
2. **Se il problema richiede di elaborare nello stesso ordine di arrivo → pensate Queue.**
3. **"Annulla l'ultima operazione"** → Stack.
4. **"Chi è arrivato prima viene servito prima"** → Queue.
5. Su LeetCode, usate `list` per gli stack e `collections.deque` per le queue — non serve implementare le classi.

---

## 9. Esercizi extra

Chi vuole approfondire può provare questi problemi su LeetCode:

| # | Problema | Struttura | Difficoltà | Hint |
|---|---|---|---|---|
| 1047 | Remove All Adjacent Duplicates In String | Stack | Easy | Push e pop quando trovi un duplicato |
| 496 | Next Greater Element I | Stack | Easy | Stack monotono |
| 71 | Simplify Path | Stack | Medium | Split su "/" e gestisci ".." con pop |
| 739 | Daily Temperatures | Stack | Medium | Stack monotono decrescente |
| 622 | Design Circular Queue | Queue | Medium | Array circolare con head/tail |
| 346 | Moving Average from Data Stream | Queue | Easy | Sliding window con deque |

---

# Bonus — Stack, Queue e Ricorsione

> **Questa sezione è pensata come challenge per gli studenti più avanzati (quarte e quinte).**
> C'è un legame profondo tra Stack e ricorsione: ogni chiamata ricorsiva viene gestita dal sistema usando uno **stack di chiamate** (call stack). Capire questo legame aiuta a trasformare soluzioni ricorsive in iterative e viceversa.

## Il legame: ricorsione = stack implicito

Quando scrivete una funzione ricorsiva, il computer usa automaticamente uno stack interno per tenere traccia di:
- I **parametri** di ogni chiamata
- Le **variabili locali**
- Il **punto di ritorno**

```python
def fattoriale(n):
    if n <= 1:
        return 1
    return n * fattoriale(n - 1)
```

Il call stack durante `fattoriale(4)`:

```
┌───────────────────┐
│ fattoriale(1) = 1 │  ← caso base, inizia a tornare
├───────────────────┤
│ fattoriale(2) = ? │  → 2 * 1 = 2
├───────────────────┤
│ fattoriale(3) = ? │  → 3 * 2 = 6
├───────────────────┤
│ fattoriale(4) = ? │  → 4 * 6 = 24
└───────────────────┘

Risultato: 24
```

> Ogni ricorsione può essere convertita in un ciclo con uno stack esplicito. Questo è utile quando la ricorsione è troppo profonda e causa un **stack overflow**.

---

## Esercizio R1 — Valid Parentheses (versione ricorsiva)

Normalmente si risolve con uno stack (Es. 1). Possiamo risolverlo ricorsivamente?

Sì, ma la versione ricorsiva è meno diretta. Semplifichiamo: consideriamo una stringa con solo `(` e `)`.

### Soluzione ricorsiva (solo parentesi tonde)

```python
def isValid(s: str, index: int = 0, count: int = 0) -> bool:
    # Caso base: fine della stringa
    if index == len(s):
        return count == 0       # Tutte le parentesi chiuse?

    # Troppe chiusure
    if count < 0:
        return False

    if s[index] == '(':
        return isValid(s, index + 1, count + 1)  # Aperta: conta +1
    else:
        return isValid(s, index + 1, count - 1)  # Chiusa: conta -1
```

### Commento didattico

> La variabile `count` fa le veci dello stack: conta quante parentesi aperte sono "in sospeso". Aprire una parentesi = push (+1), chiuderla = pop (-1). Se count diventa negativo, abbiamo chiuso una parentesi senza averla aperta.
>
> Con parentesi miste `()[]{}`, la versione ricorsiva diventa molto più complessa — lo stack esplicito è la soluzione naturale per quel caso.

---

## Esercizio R2 — Invertire una stringa con la ricorsione (senza stack esplicito)

### Traccia

Data una stringa, invertirla usando la ricorsione.

```
Input:  "hello"
Output: "olleh"
```

### Soluzione

```python
def reverse_string(s: str) -> str:
    # Caso base
    if len(s) <= 1:
        return s
    # Passo ricorsivo: ultimo carattere + inversione del resto
    return s[-1] + reverse_string(s[:-1])
```

### Trace per `"abc"`:

```
reverse_string("abc")
  = "c" + reverse_string("ab")
  = "c" + "b" + reverse_string("a")
  = "c" + "b" + "a"          ← caso base
  = "cba" ✓
```

### Commento didattico

> Questo esercizio mostra come la ricorsione "usi lo stack implicito" per invertire l'ordine. Ogni chiamata ricorsiva contribuisce con un carattere dalla fine, costruendo la stringa invertita "risalendo" dallo stack. È lo stesso principio per cui `pop` da uno stack inverte l'ordine di `push`.

---

## Esercizio R3 — Ordinare uno Stack usando la ricorsione

### Traccia

Dato uno stack di interi, ordinarlo in ordine crescente (il più grande in cima) usando **solo la ricorsione** e le operazioni `push`/`pop`. Nessuna altra struttura dati è permessa.

```
Input:  stack: [5, 1, 4, 2, 3]  (3 in cima)
Output: stack: [1, 2, 3, 4, 5]  (5 in cima)
```

### Ragionamento

L'idea si divide in due funzioni:

1. **`sort_stack(stack)`** — svuota lo stack ricorsivamente, poi reinserisce ogni elemento nella posizione corretta.
2. **`sorted_insert(stack, val)`** — inserisce `val` nella posizione giusta nello stack (assumendo che il resto sia già ordinato).

```
sort_stack([3, 1, 2]):  (2 in cima)

1. pop 2, sort_stack([3, 1])
   1. pop 1, sort_stack([3])
      1. pop 3, sort_stack([])
         → caso base, stack vuoto
      2. sorted_insert([], 3) → [3]
   2. sorted_insert([3], 1)
      1 < 3 → pop 3, sorted_insert([], 1) → [1], push 3 → [1, 3]
2. sorted_insert([1, 3], 2)
   2 < 3 → pop 3, sorted_insert([1], 2)
   2 > 1 → push 2 → [1, 2], push 3 → [1, 2, 3] ✓
```

### Soluzione

```python
def sort_stack(stack):
    if not stack:
        return
    # 1. Rimuovi l'elemento in cima
    top = stack.pop()
    # 2. Ordina ricorsivamente il resto
    sort_stack(stack)
    # 3. Inserisci l'elemento nella posizione corretta
    sorted_insert(stack, top)

def sorted_insert(stack, val):
    # Caso base: stack vuoto o val >= cima → push
    if not stack or val >= stack[-1]:
        stack.append(val)
        return
    # Altrimenti: togli la cima, inserisci val, rimetti la cima
    top = stack.pop()
    sorted_insert(stack, val)
    stack.append(top)
```

### Complessità
- **Tempo:** O(n²) — ogni inserimento può richiedere O(n) operazioni.
- **Spazio:** O(n) — per lo stack di ricorsione.

### Commento didattico

> Questo è l'esercizio più sfidante della sezione. L'idea è un **Insertion Sort ricorsivo** sullo stack: si svuota lo stack pezzo per pezzo, e si reinserisce ogni pezzo nella posizione giusta.
>
> È un ottimo esercizio per capire la ricorsione "a doppio livello": sia `sort_stack` che `sorted_insert` sono ricorsive, e si chiamano a vicenda.
>
> **Sfida:** Questo algoritmo è O(n²). Esiste un modo per ordinare uno stack in O(n log n)? (Suggerimento: sì, simulando un Merge Sort, ma è molto più complesso.)

---

## Esercizio R4 — BFS iterativa vs ricorsiva (Queue e ricorsione)

### Concetto

Il BFS (Breadth-First Search) usa naturalmente una **Queue**. Ma possiamo simulare un approccio "per livelli" usando la ricorsione?

Sì! Possiamo fare una ricorsione "livello per livello", processando tutti i nodi di un livello prima di passare al successivo.

### Esempio: stampa livello per livello di un albero "simulato"

Usiamo un grafo semplice rappresentato come dizionario:

```python
grafo = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [], 'E': [], 'F': []
}
```

```
        A
       / \
      B   C
     / \   \
    D   E   F
```

### Soluzione BFS ricorsiva

```python
from collections import deque

def bfs_ricorsiva(queue, visited):
    if not queue:
        return      # Caso base: nessun nodo da visitare

    next_queue = deque()
    while queue:
        node = queue.popleft()
        print(node, end=' ')
        for neighbor in grafo[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                next_queue.append(neighbor)

    print()     # A capo dopo ogni livello
    bfs_ricorsiva(next_queue, visited)  # Ricorsione sul prossimo livello

# Avvio
grafo = {'A': ['B', 'C'], 'B': ['D', 'E'], 'C': ['F'], 'D': [], 'E': [], 'F': []}
start = 'A'
bfs_ricorsiva(deque([start]), {start})
```

**Output:**
```
A
B C
D E F
```

### Commento didattico

> Questo esercizio è un ponte verso i **grafi** (che vedremo più avanti). Mostra un concetto importante: la BFS è **intrinsecamente iterativa** (usa una Queue), mentre la DFS è **intrinsecamente ricorsiva** (usa uno Stack / call stack). Qui "forziamo" la BFS ad essere ricorsiva, ma ogni livello usa comunque una queue.
>
> La versione puramente iterativa con una singola queue è più naturale e più efficiente. Questo esercizio serve a capire la relazione profonda tra le strutture dati e i tipi di attraversamento.

---

## Riepilogo: Stack, Queue e Ricorsione

| Concetto | Relazione |
|---|---|
| Ricorsione | Usa uno **stack implicito** (call stack) |
| DFS (Depth-First Search) | Stack esplicito **oppure** ricorsione |
| BFS (Breadth-First Search) | Queue (la ricorsione non è naturale) |
| Convertire ricorsione → iterazione | Sostituire il call stack con uno stack esplicito |

**Regola pratica:**
- Se vedete un problema che si risolve con uno **Stack**, spesso si può risolvere anche con la **ricorsione** (e viceversa).
- Se vedete un problema che si risolve con una **Queue**, la ricorsione non è la scelta naturale — meglio iterativo.

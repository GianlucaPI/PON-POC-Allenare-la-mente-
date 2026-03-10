# LeetCode Exercises - Allenare la Mente

Raccolta di 10 esercizi ispirati a LeetCode che coprono i tre argomenti del corso:
- **Complessità computazionale** (array, hash map, analisi di complessità)
- **Linked List** (liste concatenate, puntatori, tecniche two-pointer)
- **Stack & Queue** (LIFO, FIFO, pattern fondamentali)

| # | Esercizio | Argomento | Difficoltà |
|---|-----------|-----------|------------|
| 1 | Two Sum | Complessità / HashMap | 🟢 Easy |
| 2 | Remove Duplicates from Sorted Array | Complessità / Two Pointers | 🟢 Easy |
| 3 | Palindrome Linked List | Linked List | 🟢 Easy |
| 4 | Remove Linked List Elements | Linked List / Dummy Node | 🟢 Easy |
| 5 | Next Greater Element I | Stack (Monotonic Stack) | 🟢 Easy |
| 6 | Backspace String Compare | Stack | 🟢 Easy |
| 7 | Time Needed to Buy Tickets | Queue | 🟢 Easy |
| 8 | Odd Even Linked List | Linked List / Puntatori | 🟡 Medium |
| 9 | Daily Temperatures | Stack (Monotonic Stack) | 🟡 Medium |
| 10 | Merge k Sorted Lists | Linked List / Complessità | 🔴 Hard |

---
---

## Esercizio 1 — Two Sum *(LeetCode #1)*

**Difficoltà:** 🟢 Easy  
**Argomento:** Complessità computazionale, HashMap  

### Traccia

Dato un array di interi `nums` e un intero `target`, restituisci gli **indici dei due numeri** tali che la loro somma sia uguale a `target`.

Puoi assumere che ogni input abbia **esattamente una soluzione**, e non puoi usare lo stesso elemento due volte. Puoi restituire la risposta in qualsiasi ordine.

**Esempio 1:**
```
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Spiegazione: nums[0] + nums[1] = 2 + 7 = 9
```

**Esempio 2:**
```
Input: nums = [3, 2, 4], target = 6
Output: [1, 2]
```

**Esempio 3:**
```
Input: nums = [3, 3], target = 6
Output: [0, 1]
```

**Vincoli:**
- `2 <= len(nums) <= 10⁴`
- `-10⁹ <= nums[i] <= 10⁹`
- Esiste esattamente una soluzione

---

### Soluzione

```python
#  Approccio 1: Brute Force - O(n²)
# Per ogni coppia di elementi, controlla se la somma è uguale al target.
# Funziona, ma è troppo lento per input grandi.

def twoSum_brute(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []


#  Approccio 2: HashMap - O(n)
# Idea chiave: se cerco due numeri a + b = target, allora b = target - a.
# Per ogni numero, controllo se il suo "complemento" è già stato visto.

def twoSum(nums, target):
    seen = {}  # dizionario: valore → indice
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:       # il complemento è già stato incontrato?
            return [seen[complement], i]
        seen[num] = i                 # memorizzo il numero corrente
    return []
```

### Commenti didattici

> **Perché questo esercizio è importante?**
> - È il classico esempio di **tradeoff spazio-tempo**: la soluzione brute force usa O(1) di spazio ma O(n²) di tempo; la soluzione con HashMap usa O(n) di spazio ma O(n) di tempo.
> - Insegna a ragionare al contrario: invece di cercare *due* numeri, per ogni numero cerco *il suo complemento*.
> - Il dizionario (`dict`) in Python funziona come un **HashMap**: la ricerca `in` costa O(1) in media, ed è per questo che l'intera soluzione è O(n).
> - Questo pattern ("ho già visto il valore che mi serve?") ricorre in moltissimi problemi.

---
---

## Esercizio 2 — Remove Duplicates from Sorted Array *(LeetCode #26)*

**Difficoltà:** 🟢 Easy  
**Argomento:** Complessità computazionale, Two Pointers  

### Traccia

Dato un array di interi `nums` ordinato in ordine **non decrescente**, rimuovi i duplicati **in-place** (senza creare un nuovo array) in modo che ogni elemento appaia **una sola volta**. L'ordine relativo degli elementi deve rimanere lo stesso.

Restituisci `k`, il numero di elementi unici. I primi `k` elementi di `nums` devono contenere i valori unici nell'ordine originale.

**Esempio 1:**
```
Input: nums = [1, 1, 2]
Output: k = 2, nums = [1, 2, _]
```

**Esempio 2:**
```
Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
Output: k = 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
```

**Vincoli:**
- `1 <= len(nums) <= 3 * 10⁴`
- `-100 <= nums[i] <= 100`
- `nums` è ordinato in ordine non decrescente

---

### Soluzione

#### Idea intuitiva

Immagina di avere una fila di carte ordinate sul tavolo, alcune ripetute:

```
[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
```

Vuoi tenere solo **una copia** di ogni carta, **senza usare un secondo tavolo** (in-place).

La strategia è usare **due dita** (puntatori):
- Il **dito lento** (`slow`) segna dove mettere la prossima carta unica.
- Il **dito veloce** (`fast`) scorre tutte le carte una per una.

Ogni volta che `fast` trova una carta **diversa** da quella sotto `slow`, la copia nella posizione successiva a `slow`.

#### Perché funziona solo su array ordinati?

Poiché l'array è **ordinato**, i duplicati sono sempre **adiacenti**. Questo significa che:
- Non dobbiamo cercare duplicati "sparsi" in tutto l'array
- Basta confrontare il valore corrente (`fast`) con l'ultimo unico trovato (`slow`)

Se l'array **non** fosse ordinato (es. `[3, 1, 3, 2, 1]`), questa tecnica **non funzionerebbe** — servirebbe un approccio diverso (es. un `set`).

```python
#  Two Pointers - O(n) tempo, O(1) spazio
# Usiamo due puntatori:
#   - `slow` segna la posizione dell'ultimo valore unico inserito
#   - `fast` scorre l'intero array alla ricerca di nuovi valori

def removeDuplicates(nums):
    # Caso limite: array vuoto, nessun elemento unico
    if len(nums) == 0:
        return 0

    # `slow` parte da 0: il primo elemento è sempre unico (non ha predecessori)
    slow = 0

    # `fast` parte da 1: confrontiamo ogni elemento con l'ultimo unico trovato
    for fast in range(1, len(nums)):

        # Il cuore dell'algoritmo: confronto tra fast e slow
        if nums[fast] != nums[slow]:
            # nums[fast] è un NUOVO valore, diverso dall'ultimo unico!
            # 1. Avanziamo slow di una posizione (facciamo spazio)
            slow += 1
            # 2. Copiamo il nuovo valore nella posizione di slow
            nums[slow] = nums[fast]
            # Ora nums[slow] contiene il nuovo valore unico

        # Se nums[fast] == nums[slow], è un duplicato → non facciamo nulla.
        # `fast` avanza automaticamente col for, `slow` resta fermo.

    # `slow` è l'indice dell'ultimo elemento unico (0-indexed)
    # Il numero totale di elementi unici è slow + 1
    return slow + 1
```

#### Esempio 1 — passo passo: `nums = [1, 1, 2]`

```
Stato iniziale: nums = [1, 1, 2],  slow = 0

fast=1: nums[1]=1  ==  nums[0]=1  →  è un duplicato, skip!
        nums = [1, 1, 2],  slow = 0

fast=2: nums[2]=2  !=  nums[0]=1  →  nuovo valore unico!
        slow = 0+1 = 1
        nums[1] = 2
        nums = [1, 2, 2],  slow = 1

Fine: return slow + 1 = 2
Risultato: k = 2, i primi 2 elementi sono [1, 2] ✓
```

#### Esempio 2 — passo passo: `nums = [0, 0, 1, 1, 2]`

```
Stato iniziale: nums = [0, 0, 1, 1, 2],  slow = 0

fast=1: nums[1]=0  ==  nums[0]=0  →  duplicato, skip
        nums = [0, 0, 1, 1, 2],  slow = 0

fast=2: nums[2]=1  !=  nums[0]=0  →  nuovo valore!
        slow = 1, nums[1] = 1
        nums = [0, 1, 1, 1, 2],  slow = 1

fast=3: nums[3]=1  ==  nums[1]=1  →  duplicato, skip
        nums = [0, 1, 1, 1, 2],  slow = 1

fast=4: nums[4]=2  !=  nums[1]=1  →  nuovo valore!
        slow = 2, nums[2] = 2
        nums = [0, 1, 2, 1, 2],  slow = 2

Fine: return slow + 1 = 3
Risultato: k = 3, i primi 3 elementi sono [0, 1, 2] ✓
```

> **Nota:** gli elementi dopo la posizione `slow` (cioè `[1, 2]` nell'esempio sopra) non ci interessano — il problema chiede solo che i primi `k` siano corretti.

#### Esempio 3 — caso senza duplicati: `nums = [1, 3, 5]`

```
Stato iniziale: nums = [1, 3, 5],  slow = 0

fast=1: nums[1]=3  !=  nums[0]=1  →  nuovo valore!
        slow = 1, nums[1] = 3 (era già 3, nessun cambiamento reale)
        nums = [1, 3, 5],  slow = 1

fast=2: nums[2]=5  !=  nums[1]=3  →  nuovo valore!
        slow = 2, nums[2] = 5 (era già 5)
        nums = [1, 3, 5],  slow = 2

Fine: return slow + 1 = 3
Risultato: k = 3, tutti gli elementi sono unici → l'array non cambia ✓
```

#### Esempio 4 — caso tutti uguali: `nums = [7, 7, 7, 7]`

```
Stato iniziale: nums = [7, 7, 7, 7],  slow = 0

fast=1: nums[1]=7  ==  nums[0]=7  →  duplicato, skip
fast=2: nums[2]=7  ==  nums[0]=7  →  duplicato, skip
fast=3: nums[3]=7  ==  nums[0]=7  →  duplicato, skip

Fine: return slow + 1 = 1
Risultato: k = 1, l'unico elemento unico è [7] ✓
```

> In questo caso `slow` non si muove mai: resta a `0` per tutto il ciclo.

#### Visualizzazione grafica del meccanismo

```
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
        S                                  S = slow, F = fast
           F

→ 0 == 0 → skip                           slow non si muove

        S
              F
→ 1 != 0 → slow avanza, copia!

        ·  S
              F
nums = [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]

           S
                 F
→ 1 == 1 → skip

           S
                    F
→ 1 == 1 → skip

           S
                       F
→ 2 != 1 → slow avanza, copia!

              S
                       F
nums = [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]

... e così via fino alla fine:
nums = [0, 1, 2, 3, 4, _, _, _, _, _]   k = 5
```

### Commenti didattici

> **Tecnica: Two Pointers (su array)**
> - La tecnica dei **due puntatori** non si usa solo sulle linked list! Qui `slow` e `fast` lavorano sullo stesso array.
> - `fast` esplora, `slow` costruisce. Questo pattern è molto comune in problemi che richiedono modifiche **in-place**.
> - La complessità è **O(n)** perché scorriamo l'array una sola volta.
> - Lo spazio è **O(1)**: non creiamo strutture dati aggiuntive, modifichiamo `nums` direttamente.
> - L'assunzione che l'array sia **ordinato** è cruciale: i duplicati sono per forza adiacenti, quindi basta confrontare `nums[fast]` con `nums[slow]`.
>
> **Perché `return slow + 1` e non `return slow`?**
> - `slow` è un **indice** (parte da 0), non un contatore.
> - Se ci sono 3 elementi unici, `slow` alla fine vale 2 (indici 0, 1, 2).
> - Quindi il **numero** di elementi è `slow + 1`.
>
> **Perché non usare un `set` per eliminare i duplicati?**
> - Un `set` funzionerebbe (`list(set(nums))`), ma userebbe **O(n) spazio extra**.
> - Il problema chiede esplicitamente una soluzione **in-place** con O(1) spazio.
> - Inoltre il `set` non preserva l'ordine (in Python 3.7+ il `dict` sì, ma non è il punto).
>
> **Confronto con il brute force:**
> - Un approccio ingenuo sarebbe rimuovere i duplicati con `nums.pop(i)`, ma ogni `pop` in mezzo all'array costa **O(n)** (deve spostare tutti gli elementi successivi). Nel caso peggiore: **O(n²)**.
> - La soluzione con two pointers evita qualsiasi spostamento: sovrascrive direttamente nella posizione giusta.

---
---

## Esercizio 3 — Palindrome Linked List *(LeetCode #234)*

**Difficoltà:** 🟢 Easy  
**Argomento:** Linked List, Two Pointers, Reverse  

### Traccia

Data la `head` di una singly linked list, restituisci `True` se la lista è un **palindromo**, `False` altrimenti.

Una lista è palindroma se si legge uguale dall'inizio alla fine e dalla fine all'inizio.

**Esempio 1:**
```
Input: head = [1, 2, 2, 1]
Output: True
```

**Esempio 2:**
```
Input: head = [1, 2]
Output: False
```

**Vincoli:**
- Il numero di nodi è nell'intervallo `[1, 10⁵]`
- `0 <= Node.val <= 9`

---

### Soluzione

```python
class Node:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def isPalindrome(head):
    # STEP 1: Trova il punto medio con slow/fast pointers
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    # Ora 'slow' è al centro della lista

    # STEP 2: Inverti la seconda metà della lista
    prev = None
    curr = slow
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    # Ora 'prev' è la testa della seconda metà invertita

    # STEP 3: Confronta le due metà
    left = head
    right = prev
    while right:  # la seconda metà è più corta o uguale
        if left.val != right.val:
            return False
        left = left.next
        right = right.next

    return True
```

### Commenti didattici

> **Tre tecniche in un esercizio!**
> Questo problema combina tre concetti fondamentali delle linked list:
>
> 1. **Slow/Fast Pointers** — Per trovare il punto medio di una lista in O(n), senza conoscerne la lunghezza. `fast` si muove a doppia velocità: quando arriva alla fine, `slow` è al centro.
>
> 2. **Reverse Linked List** — Invertire una lista cambiando la direzione dei puntatori (esercizio #206, già visto a lezione). Serve per poter "leggere" la seconda metà al contrario.
>
> 3. **Confronto lineare** — Una volta che abbiamo le due metà (la prima normale, la seconda invertita), basta confrontarle nodo per nodo.
>
> **Complessità:**
> - **Tempo: O(n)** — ogni step scorre la lista una volta.
> - **Spazio: O(1)** — non usiamo strutture dati extra, modifichiamo la lista stessa.
>
> **Nota:** In un colloquio, potresti voler ripristinare la lista originale re-invertendo la seconda metà alla fine.

---
---

## Esercizio 4 — Remove Linked List Elements *(LeetCode #203)*

**Difficoltà:** 🟢 Easy  
**Argomento:** Linked List, Dummy Node  

### Traccia

Data la `head` di una linked list e un intero `val`, rimuovi **tutti i nodi** della lista che hanno `Node.val == val`, e restituisci la nuova `head`.

**Esempio 1:**
```
Input: head = [1, 2, 6, 3, 4, 5, 6], val = 6
Output: [1, 2, 3, 4, 5]
```

**Esempio 2:**
```
Input: head = [], val = 1
Output: []
```

**Esempio 3:**
```
Input: head = [7, 7, 7, 7], val = 7
Output: []
```

---

### Soluzione

```python
class Node:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def removeElements(head, val):
    # Creiamo un nodo "finto" (dummy) che punta alla head.
    # Questo elimina il caso speciale di dover rimuovere la head stessa.
    dummy = Node(0)
    dummy.next = head
    
    current = dummy
    while current.next:
        if current.next.val == val:
            # Bypass: saltiamo il nodo da rimuovere
            current.next = current.next.next
        else:
            # Il nodo è ok, avanziamo
            current = current.next
    
    return dummy.next  # la nuova head (potrebbe essere diversa dall'originale)
```

### Commenti didattici

> **Pattern: Dummy Node**
> - Il **nodo fittizio** (dummy) è una tecnica fondamentale nelle linked list. Lo abbiamo già visto nella lezione sulle linked list nel problema "Merge Two Sorted Lists".
> - **Perché serve?** Senza dummy, eliminare il primo nodo della lista richiederebbe un `if` separato (caso speciale). Il dummy *unifica* tutti i casi: la head diventa un nodo "come gli altri".
> - Il risultato è sempre `dummy.next`, perché `dummy` è il vero inizio della lista (anche se è finto).
>
> **L'operazione di bypass:**
> ```
> Prima:   current → [6] → [3]     (vogliamo rimuovere il nodo con valore 6)
> Dopo:    current -------→ [3]     (il nodo 6 viene "saltato")
> ```
> - Nota che NON avanziamo `current` quando rimuoviamo: dobbiamo controllare anche il *nuovo* `current.next` (potrebbe essere un altro nodo da eliminare).
>
> **Complessità:** O(n) tempo, O(1) spazio.

---
---

## Esercizio 5 - Next Greater Element I *(LeetCode #496)*

**Difficoltà:** 🟢 Easy  
**Argomento:** Stack (Monotonic Stack), HashMap  

### Traccia

Dati due array di interi **senza duplicati**: `nums1` e `nums2`, dove `nums1` è un sottoinsieme di `nums2`.

Per ogni elemento `nums1[i]`, trova il **next greater element** in `nums2`: cioè il primo numero a destra di `nums1[i]` (nella posizione in cui appare in `nums2`) che è **più grande** di `nums1[i]`. Se non esiste, il risultato è `-1`.

**Esempio 1:**
```
Input: nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]
Output: [-1, 3, -1]
Spiegazione:
  - 4 → in nums2 è all'indice 2: a destra c'è solo [2], nessuno > 4 → -1
  - 1 → in nums2 è all'indice 0: a destra c'è [3, 4, 2], il primo > 1 è 3 → 3
  - 2 → in nums2 è all'indice 3: nessun elemento a destra → -1
```

**Esempio 2:**
```
Input: nums1 = [2, 4], nums2 = [1, 2, 3, 4]
Output: [3, -1]
```

---

### Soluzione

```python
def nextGreaterElement(nums1, nums2):
    # STEP 1: Calcola il "next greater" per ogni elemento di nums2
    #         usando uno stack monotonico decrescente.
    stack = []
    next_greater = {}  # mappa: valore → il suo next greater element

    for num in nums2:
        # Finché il numero corrente è più grande del top dello stack,
        # abbiamo trovato il "next greater" per quell'elemento.
        while stack and stack[-1] < num:
            val = stack.pop()
            next_greater[val] = num
        stack.append(num)
    
    # Gli elementi rimasti nello stack non hanno un next greater
    while stack:
        next_greater[stack.pop()] = -1

    # STEP 2: Per ogni elemento di nums1, cerca il risultato nella mappa
    return [next_greater[num] for num in nums1]
```

### Commenti didattici

> **Pattern: Stack Monotonico (Monotonic Stack)**
> - Questo è il pattern "stack come memoria temporanea" visto a lezione.
> - Lo stack mantiene una sequenza **decrescente** di elementi "in attesa" del loro next greater.
> - Quando arriva un numero più grande, "risolve" tutti gli elementi in cima allo stack che sono più piccoli.
>
> **Visualizzazione con nums2 = [1, 3, 4, 2]:**
> ```
> num=1: stack=[] → push 1        → stack=[1]
> num=3: 3 > 1 → pop 1, next_greater[1]=3, push 3  → stack=[3]
> num=4: 4 > 3 → pop 3, next_greater[3]=4, push 4  → stack=[4]
> num=2: 2 < 4 → push 2           → stack=[4, 2]
> Fine:  pop 2 → next_greater[2]=-1
>        pop 4 → next_greater[4]=-1
> ```
>
> **Complessità:**
> - **Tempo: O(n + m)** dove n = len(nums2), m = len(nums1). Ogni elemento entra ed esce dallo stack al massimo una volta.
> - **Spazio: O(n)** per lo stack e il dizionario.
>
> **Perché non brute force?** Il brute force sarebbe O(n × m): per ogni elemento di nums1, scorrere nums2 dalla sua posizione in poi. Lo stack monotonico pre-calcola tutti i risultati in un solo passaggio.

---
---

## Esercizio 6 - Backspace String Compare *(LeetCode #844)*

**Difficoltà:** 🟢 Easy  
**Argomento:** Stack  

### Traccia

Date due stringhe `s` e `t`, restituisci `True` se sono uguali dopo aver processato i caratteri **backspace** (`'#'`).

Un carattere backspace `'#'` cancella il carattere precedente (se esiste). Una stringa vuota dopo i backspace resta vuota.

**Esempio 1:**
```
Input: s = "ab#c", t = "ad#c"
Output: True
Spiegazione: Entrambe diventano "ac"
```

**Esempio 2:**
```
Input: s = "ab##", t = "c#d#"
Output: True
Spiegazione: Entrambe diventano ""
```

**Esempio 3:**
```
Input: s = "a#c", t = "b"
Output: False
Spiegazione: s diventa "c", t resta "b"
```

---

### Soluzione

```python
def backspaceCompare(s, t):
    
    def build(string):
        """Simula la digitazione con backspace usando uno stack."""
        stack = []
        for char in string:
            if char != '#':
                stack.append(char)      # carattere normale → push
            elif stack:
                stack.pop()             # backspace → cancella l'ultimo
            # se '#' e stack vuoto → ignora (niente da cancellare)
        return stack
    
    return build(s) == build(t)


# Esempio: s = "ab#c"
# 'a' → stack=['a']
# 'b' → stack=['a', 'b']
# '#' → stack=['a']         ← backspace cancella 'b'
# 'c' → stack=['a', 'c']
# Risultato: "ac"
```

### Commenti didattici

> **Lo Stack come simulatore di editing**
> - Il backspace è esattamente l'operazione di **Undo** (annulla), e la struttura perfetta per Undo è lo **stack**.
> - Ogni carattere digitato è un `push`, ogni `#` è un `pop`.
> - Questo è lo stesso concetto dell'operazione `"C"` nel Baseball Game (LeetCode #682) visto a lezione.
>
> **La funzione helper `build()`:**
> - Abbiamo incapsulato la logica in una funzione interna per evitare duplicazione di codice (DRY — Don't Repeat Yourself).
> - Python permette di confrontare due liste con `==`, che confronta elemento per elemento.
>
> **Complessità:**
> - **Tempo: O(n + m)** dove n e m sono le lunghezze di `s` e `t`.
> - **Spazio: O(n + m)** per i due stack.
>
> **Sfida bonus:** Risolvi in O(1) spazio extra! (Suggerimento: scorri le stringhe dalla fine, contando i backspace.)

---
---

## Esercizio 7 - Time Needed to Buy Tickets *(LeetCode #2073)*

**Difficoltà:** 🟢 Easy  
**Argomento:** Queue (simulazione)  

### Traccia

Ci sono `n` persone in fila per comprare biglietti. La persona in posizione `i` vuole comprare `tickets[i]` biglietti.

Ogni persona in testa alla coda compra **1 biglietto** e poi:
- Se ha ancora bisogno di biglietti, torna in **fondo alla coda**.
- Se ha finito, **esce** dalla coda.

Restituisci il **tempo** necessario (numero di operazioni) affinché la persona alla posizione `k` finisca di comprare tutti i suoi biglietti.

**Esempio 1:**
```
Input: tickets = [2, 3, 2], k = 2
Output: 6
Spiegazione:
  Turno 1: [2,3,2] → persona 0 compra → [3,2,1] (tickets rimanenti, persona 0 va in fondo)
  Turno 2: [3,2,1] → persona 1 compra → [2,1,2]
  Turno 3: [2,1,2] → persona 2 compra → [1,2,1]
  Turno 4: [1,2,1] → persona 0 compra → [2,1,0]
  Turno 5: [2,1,0] → persona 1 compra → [1,0,1]
  Turno 6: [1,0,1] → persona 2 compra → [0,0,0] (persona 2 ha finito!)
```

**Esempio 2:**
```
Input: tickets = [5, 1, 1, 1], k = 0
Output: 8
```

---

### Soluzione

```python
#  Approccio 1: Simulazione completa con coda — O(sum(tickets))
# Simula esattamente il processo descritto nella traccia.

from collections import deque

def timeRequiredToBuy_simulation(tickets, k):
    queue = deque()
    for i in range(len(tickets)):
        queue.append((i, tickets[i]))  # (indice originale, biglietti rimanenti)
    
    time = 0
    while queue:
        idx, remaining = queue.popleft()
        remaining -= 1
        time += 1
        if idx == k and remaining == 0:
            return time
        if remaining > 0:
            queue.append((idx, remaining))
    
    return time


#  Approccio 2: Soluzione matematica — O(n)
# Osservazione: non serve simulare! Per ogni persona, calcola quanti turni fa.

def timeRequiredToBuy(tickets, k):
    time = 0
    for i in range(len(tickets)):
        if i <= k:
            # Le persone PRIMA di k (incluso k) fanno al massimo tickets[k] turni
            time += min(tickets[i], tickets[k])
        else:
            # Le persone DOPO k fanno al massimo tickets[k] - 1 turni
            # (perché k finisce prima che loro facciano l'ultimo giro)
            time += min(tickets[i], tickets[k] - 1)
    return time
```

### Commenti didattici

> **Simulazione vs. Osservazione Matematica**
> - L'approccio 1 usa una **coda** (deque) per simulare esattamente il processo. È intuitivo e corretto, ma ha complessità O(sum(tickets)), che può essere molto grande.
> - L'approccio 2 è un salto di qualità: **osservando il pattern**, possiamo calcolare il risultato in O(n) senza simulare.
>
> **Perché la formula funziona?**
> - La persona `k` farà esattamente `tickets[k]` turni.
> - Ogni persona **prima di k** (i ≤ k) compra un biglietto in ogni giro *prima* di k. Quindi fa `min(tickets[i], tickets[k])` turni.
> - Ogni persona **dopo k** (i > k) nell'ultimo giro di k non ha ancora comprato. Quindi fa `min(tickets[i], tickets[k] - 1)` turni.
>
> **Lezione importante:** Spesso la simulazione è il primo passo per capire il problema, ma la soluzione ottimale richiede di **trovare il pattern matematico** sottostante. Questo è lo stesso principio visto nel Missing Number con la formula di Gauss.

---
---

## Esercizio 8 — Odd Even Linked List *(LeetCode #328)*

**Difficoltà:** 🟡 Medium  
**Argomento:** Linked List, manipolazione puntatori  

### Traccia

Data la `head` di una singly linked list, raggruppa tutti i nodi in posizione **dispari** (1°, 3°, 5°, ...) seguiti da tutti i nodi in posizione **pari** (2°, 4°, 6°, ...), e restituisci la lista riordinata.

Il primo nodo è considerato **dispari** (posizione 1), il secondo **pari** (posizione 2), ecc.

Lo spazio extra deve essere **O(1)** e la complessità temporale **O(n)**.

**Esempio 1:**
```
Input:  1 → 2 → 3 → 4 → 5
Output: 1 → 3 → 5 → 2 → 4
```

**Esempio 2:**
```
Input:  2 → 1 → 3 → 5 → 6 → 4 → 7
Output: 2 → 3 → 6 → 7 → 1 → 5 → 4
```

---

### Soluzione

```python
class Node:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def oddEvenList(head):
    if not head or not head.next:
        return head
    
    odd = head          # primo nodo (dispari)
    even = head.next    # secondo nodo (pari)
    even_head = even    # salviamo l'inizio della catena pari
    
    while even and even.next:
        # odd salta il pari e punta al prossimo dispari
        odd.next = even.next
        odd = odd.next
        
        # even salta il dispari e punta al prossimo pari
        even.next = odd.next
        even = even.next
    
    # Collega la fine dei dispari con l'inizio dei pari
    odd.next = even_head
    
    return head


# Visualizzazione con [1, 2, 3, 4, 5]:
#
# Stato iniziale:
#   odd=1, even=2, even_head=2
#   1 → 2 → 3 → 4 → 5
#
# Iterazione 1:
#   odd.next = 3 (salta 2)    → catena dispari: 1 → 3
#   odd = 3
#   even.next = 4 (salta 3)   → catena pari: 2 → 4
#   even = 4
#
# Iterazione 2:
#   odd.next = 5 (salta 4)    → catena dispari: 1 → 3 → 5
#   odd = 5
#   even.next = None           → catena pari: 2 → 4
#   even = None
#
# Collegamento finale:
#   odd.next = even_head       → 1 → 3 → 5 → 2 → 4
```

### Commenti didattici

> **Manipolazione simultanea di due catene**
> - Questo è un esercizio di livello **medio** perché richiede di gestire **due sotto-liste** contemporaneamente senza perdere riferimenti.
> - La chiave è salvare `even_head` all'inizio: senza di esso, perderemmo il punto di partenza della catena pari.
>
> **Pattern ricorrente: "separa e ricollega"**
> - Molti problemi su linked list seguono questo schema:
>   1. Separare i nodi in due o più catene
>   2. Manipolare ciascuna catena indipendentemente
>   3. Ricollegare le catene alla fine
>
> **Attenzione ai puntatori!**
> - L'ordine delle operazioni è fondamentale. Se aggiorniamo `odd.next` prima di `even.next`, potremmo sovrascrivere un riferimento che ci serve ancora.
> - Per esercitarsi: disegnare lo stato dei puntatori su carta ad ogni passo.
>
> **Complessità:** O(n) tempo, O(1) spazio — scorriamo la lista una volta e usiamo solo variabili ausiliarie.

---
---

## Esercizio 9 — Daily Temperatures *(LeetCode #739)*

**Difficoltà:** 🟡 Medium  
**Argomento:** Stack (Monotonic Stack)  

### Traccia

Dato un array di interi `temperatures` che rappresenta le temperature giornaliere, restituisci un array `answer` tale che `answer[i]` è il numero di giorni che devi aspettare dopo il giorno `i` per avere una temperatura **più alta**. Se non c'è un giorno futuro con temperatura più alta, `answer[i] = 0`.

**Esempio 1:**
```
Input:  temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
Output:                [ 1,  1,  4,  2,  1,  1,  0,  0]
```

**Esempio 2:**
```
Input:  temperatures = [30, 40, 50, 60]
Output:                [ 1,  1,  1,  0]
```

**Esempio 3:**
```
Input:  temperatures = [30, 60, 90]
Output:                [ 1,  1,  0]
```

---

### Soluzione

```python
#  Approccio Brute Force — O(n²)
# Per ogni giorno, scorri tutti i giorni successivi fino a trovarne uno più caldo.

def dailyTemperatures_brute(temperatures):
    n = len(temperatures)
    answer = [0] * n
    for i in range(n):
        for j in range(i + 1, n):
            if temperatures[j] > temperatures[i]:
                answer[i] = j - i
                break
    return answer


#  Monotonic Stack — O(n)
# Idea: manteniamo uno stack di INDICI dei giorni per cui non abbiamo
# ancora trovato un giorno più caldo.

def dailyTemperatures(temperatures):
    n = len(temperatures)
    answer = [0] * n
    stack = []  # stack di indici (non di temperature!)

    for i in range(n):
        # Finché la temperatura corrente è più alta di quella in cima allo stack,
        # abbiamo trovato la risposta per quei giorni.
        while stack and temperatures[i] > temperatures[stack[-1]]:
            prev_day = stack.pop()
            answer[prev_day] = i - prev_day  # distanza in giorni
        stack.append(i)
    
    # I giorni rimasti nello stack non hanno mai avuto un giorno più caldo → restano 0
    return answer


# Visualizzazione con [73, 74, 75, 71, 69, 72, 76, 73]:
#
# i=0 (73): stack vuoto → push 0.                   stack=[0]
# i=1 (74): 74>73 → pop 0, answer[0]=1-0=1, push 1  stack=[1]
# i=2 (75): 75>74 → pop 1, answer[1]=2-1=1, push 2  stack=[2]
# i=3 (71): 71<75 → push 3.                          stack=[2, 3]
# i=4 (69): 69<71 → push 4.                          stack=[2, 3, 4]
# i=5 (72): 72>69 → pop 4, answer[4]=5-4=1
#           72>71 → pop 3, answer[3]=5-3=2, push 5   stack=[2, 5]
# i=6 (76): 76>72 → pop 5, answer[5]=6-5=1
#           76>75 → pop 2, answer[2]=6-2=4, push 6   stack=[6]
# i=7 (73): 73<76 → push 7.                          stack=[6, 7]
# Fine: answer = [1, 1, 4, 2, 1, 1, 0, 0] ✓
```

### Commenti didattici

> **Monotonic Stack: il pattern più potente dello Stack**
> - Questo problema è la versione "classica" del **Next Greater Element** (esercizio 5), ma qui dobbiamo calcolare la **distanza** anziché il valore.
> - Per questo motivo salviamo **indici** nello stack (non valori): ci servono per calcolare `i - prev_day`.
>
> **Perché O(n) e non O(n²)?**
> - Anche se c'è un `while` dentro il `for`, ogni indice viene inserito (`push`) e rimosso (`pop`) dallo stack **al massimo una volta**.
> - In totale: al massimo `n` push + `n` pop = **2n operazioni** → O(n).
> - Questo ragionamento sulla complessità ammortizzata è lo stesso visto per la Queue con due Stack (LeetCode #232) a lezione.
>
> **Quando usare il Monotonic Stack?**
> - Ogni volta che per ogni elemento devi trovare il **prossimo elemento maggiore/minore** (a destra o a sinistra).
> - Problemi correlati: LeetCode #496 (Next Greater Element), #503 (versione circolare), #84 (Largest Rectangle in Histogram).

---
---

## Esercizio 10 — Merge k Sorted Lists *(LeetCode #23)*

**Difficoltà:** 🔴 Hard  
**Argomento:** Linked List, Divide and Conquer, Complessità  

### Traccia

Dato un array di `k` linked list, ognuna **ordinata** in ordine crescente, unisci tutte le liste in **una sola lista ordinata** e restituiscila.

**Esempio 1:**
```
Input: lists = [[1, 4, 5], [1, 3, 4], [2, 6]]
Output: [1, 1, 2, 3, 4, 4, 5, 6]
```

**Esempio 2:**
```
Input: lists = []
Output: []
```

**Esempio 3:**
```
Input: lists = [[]]
Output: []
```

**Vincoli:**
- `k == len(lists)`
- `0 <= k <= 10⁴`
- `0 <= len(lists[i]) <= 500`
- Le liste sono ordinate in ordine crescente

---

### Soluzione

```python
class Node:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# STEP 1: Riusiamo la funzione "Merge Two Sorted Lists" vista a lezione (LeetCode #21)
def mergeTwoLists(l1, l2):
    dummy = Node(0)
    current = dummy
    
    while l1 and l2:
        if l1.val <= l2.val:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next
    
    current.next = l1 if l1 else l2
    return dummy.next


#  Approccio 1: Merge una alla volta - O(k × N)
# Unisci la prima con la seconda, poi il risultato con la terza, ecc.
# Dove N = numero totale di nodi.

def mergeKLists_sequential(lists):
    if not lists:
        return None
    
    result = lists[0]
    for i in range(1, len(lists)):
        result = mergeTwoLists(result, i)  # O(lunghezza_crescente) ogni volta
    return result
# Problema: le prime liste vengono ri-percorse molte volte → O(k × N)


#  Approccio 2: Divide and Conquer - O(N × log k)
# Invece di unire sequenzialmente, uniamo a coppie come in un torneo.
# Ad ogni "round", il numero di liste si dimezza.

def mergeKLists(lists):
    if not lists:
        return None
    
    while len(lists) > 1:
        merged = []
        for i in range(0, len(lists), 2):
            l1 = lists[i]
            l2 = lists[i + 1] if i + 1 < len(lists) else None
            merged.append(mergeTwoLists(l1, l2))
        lists = merged
    
    return lists[0]


# Visualizzazione con 4 liste [A, B, C, D]:
#
# Round 1: merge(A, B) → AB,  merge(C, D) → CD    → [AB, CD]
# Round 2: merge(AB, CD) → ABCD                    → [ABCD]
#
# Solo 2 round (log₂4 = 2) invece di 3 merge sequenziali!
```

### Commenti didattici

> **Dal facile al difficile: costruire sulla conoscenza pregressa**
> - Questo problema **riusa** `mergeTwoLists` (LeetCode #21), già risolto nella lezione sulle linked list. La funzione non cambia di una riga!
> - La difficoltà non sta nel merge di due liste, ma nella **strategia** per combinare k liste.
>
> **Analisi della complessità — perché Divide and Conquer vince:**
>
> | Approccio | Numero di merge | Costo per merge | Totale |
> |-----------|----------------|-----------------|--------|
> | Sequenziale | k - 1 | O(N) nel caso peggiore | O(k × N) |
> | Divide & Conquer | log₂(k) round | O(N) per round | **O(N × log k)** |
>
> Dove N = numero totale di nodi in tutte le liste.
>
> **Perché la differenza?**
> - Nel merge sequenziale, la lista risultato cresce ad ogni passo, e viene ri-percorsa interamente al passo successivo.
> - Nel Divide & Conquer, ad ogni round **tutte le liste hanno dimensione simile**: il lavoro è distribuito equamente.
>
> **Divide and Conquer è lo stesso principio del Merge Sort!**
> - Dividere il problema a metà → risolvere le sotto-parti → combinare i risultati.
> - Il numero di "livelli" è log₂(k), e ad ogni livello il lavoro totale è O(N).
>
> **Connessione con la complessità computazionale (Lezione 1):**
> - O(k × N) vs O(N × log k) è la stessa differenza tra ricerca lineare e ricerca binaria.
> - Quando k è grande (es. 10.000 liste), log₂(k) ≈ 13, un risparmio enorme.
>
> **Sfida bonus:** Risolvi usando un min-heap (priority queue) con `heapq`. La complessità sarà la stessa O(N log k), ma l'implementazione è diversa.

---
---

##  Riepilogo delle tecniche

| Tecnica | Esercizi |
|---------|----------|
| **HashMap / Dizionario** | #1 Two Sum, #5 Next Greater Element |
| **Two Pointers** | #2 Remove Duplicates, #3 Palindrome LL, #8 Odd Even LL |
| **Dummy Node** | #4 Remove Elements, #10 Merge k Lists |
| **Stack (classico)** | #6 Backspace String Compare |
| **Stack Monotonico** | #5 Next Greater Element, #9 Daily Temperatures |
| **Queue (simulazione)** | #7 Time Needed to Buy Tickets |
| **Reverse Linked List** | #3 Palindrome LL |
| **Divide and Conquer** | #10 Merge k Sorted Lists |
| **Tradeoff spazio-tempo** | #1 Two Sum, #7 Tickets (simulazione vs. formula) |

> **Come affrontare un problema LeetCode:**
> 1. **Leggi** la traccia con attenzione, guarda gli esempi.
> 2. **Pensa** alla soluzione brute force — è un buon punto di partenza.
> 3. **Identifica** la struttura dati giusta (array? linked list? stack? queue?).
> 4. **Applica** il pattern appropriato (two pointers? monotonic stack? dummy node?).
> 5. **Analizza** la complessità: tempo e spazio.
> 6. **Testa** con gli esempi forniti e con casi limite (lista vuota, un solo elemento, ecc.).

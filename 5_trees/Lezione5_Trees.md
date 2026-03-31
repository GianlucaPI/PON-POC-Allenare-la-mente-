# Lezione 5 — Alberi (Trees)

---

## 1. Cos'è un Albero?

Un **Albero (Tree)** è una struttura dati non lineare e gerarchica costituita da nodi collegati tra loro da archi (edges). A differenza degli array, delle linked list o delle code che sono strutture lineari, gli alberi organizzano i dati all'interno di una gerarchia.

### Nomenclatura base:
* **Nodo (Node):** L'unità fondamentale che contiene il dato e i riferimenti ai nodi figli.
* **Radice (Root):** Il nodo principale in cima all'albero. È l'unico nodo senza un genitore.
* **Figlio (Child) / Genitore (Parent):** Un nodo subordinato a un altro è detto figlio. Il nodo superiore è il suo genitore.
* **Foglia (Leaf):** Un nodo che non ha figli (si trova alla fine dell'albero).
* **Altezza (Height):** La lunghezza del percorso più lungo dalla radice a una foglia.
* **Profondità (Depth):** La lunghezza del percorso dalla radice a quel nodo specifico.

### Rappresentazione visiva

```text
        [A]  <-- Radice (Root)
       /   \
     [B]   [C] <-- Nodi Interni
    /  \     \
  [D]  [E]   [F] <-- Foglie (Leaves)
```

---

## 2. Alberi Binari e BST (Binary Search Tree)

Un **Albero Binario** è un albero in cui ogni nodo ha **al massimo due figli**, convenzionalmente chiamati *figlio sinistro* (left child) e *figlio destro* (right child).

Il tipo più famoso in ambito algoritmico è il **Binary Search Tree (BST) - Albero Binario di Ricerca**.
Regola fondamentale del BST:
1. Tutti i nodi nel sotto-albero *sinistro* hanno un valore **minore** rispetto al genitore.
2. Tutti i nodi nel sotto-albero *destro* hanno un valore **maggiore** rispetto al genitore.

Questa proprietà garantisce operazioni di ricerca estremamente efficienti, simili alla ricerca binaria.

### Struttura base in Python

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

---

## 3. Algoritmi di Attraversamento (Visita)

Esistono due approcci principali per esplorare un albero: esplorarlo livello per livello (BFS) o esplorare un ramo fino in fondo prima di tornare indietro (DFS).

### 3.1 BFS (Breadth-First Search) — Visita in Ampiezza
La BFS esplora l'albero "orizzontalmente", livello dopo livello, partendo dalla radice.
Per implementare la BFS, si usa tipicamente una **Coda (Queue)** (approccio FIFO - First In, First Out).

* **Scopo principale:** Trovare il percorso più breve, esplorazioni a "raggi concentrici".
* **Complessità di Tempo:** **O(N)** (ogni nodo viene visitato esattamente una volta).
* **Complessità di Spazio:** **O(W)** dove W è la larghezza massima dell'albero (numero massimo di nodi in un livello). Nel caso peggiore O(N).

**Implementazione BFS:**
```python
from collections import deque

def bfs_traversal(root):
    if not root:
        return []
    
    queue = deque([root])
    risultato = []
    
    while queue:
        nodo = queue.popleft() # Estraggo il primo inserito
        risultato.append(nodo.val) # Visito il nodo
        
        # Aggiungo i figli in coda
        if nodo.left:
            queue.append(nodo.left)
        if nodo.right:
            queue.append(nodo.right)
            
    return risultato
```

### 3.2 DFS (Depth-First Search) — Visita in Profondità
La DFS esplora un percorso "verticalmente" spingendosi sempre più in profondità fino a raggiungere una foglia, per poi risalire (backtracking).
Si implementa tipicamente in modo **Ricorsivo** o usando uno **Stack** (approccio LIFO - Last In, First Out).

Ci sono 3 varianti principali relative all'ordine con cui visitiamo (processiamo) il nodo corrente rispetto ai suoi discendenti. 
Per comprenderle al meglio, immaginiamo un mini-albero composto da tre nodi: `[Genitore = A, Figlio Sinistro = B, Figlio Destro = C]`.

1. **Pre-order (Genitore ➔ Sinistra ➔ Destra):**
   * **Ordine di Visita:** `A ➔ B ➔ C`
   * **Come funziona:** Si elabora prima il nodo su cui ci troviamo, poi ci si tuffa in profondità nel ramo di sinistra ed infine in quello di destra.
   * **Caso d'uso:** Ideale per "clonare" o duplicare un albero. Intercettando prima il nodo genitore è facile instanziarlo subito come nuova radice nella nostra copia strutturale.

2. **In-order (Sinistra ➔ Genitore ➔ Destra):**
   * **Ordine di Visita:** `B ➔ A ➔ C`
   * **Come funziona:** Prima si scende il più in fondo possibile verso i figli sinistri, poi si elabora il genitore appena raggiunto e solo alla fine ci si sposta a destra.
   * **Caso d'uso:** È il *Sacro Graal* del Binary Search Tree (BST). Poiché a sinistra ci sono i minori e a destra i maggiori, una visita In-Order di un BST restituisce i valori in **perfetto ordine crescente**.

3. **Post-order (Sinistra ➔ Destra ➔ Genitore):**
   * **Ordine di Visita:** `B ➔ C ➔ A`
   * **Come funziona:** Il genitore è l'ultimo ad essere processato. Si controllano ed esauriscono prima entrambi i rami (sinistro e destro).
   * **Caso d'uso:** Usato specificamente per cancellare l'albero dalla memoria (Garbage Collection in C++ ad esempio) o per esplorare cartelle da svuotare. Non possiamo cancellare un genitore se prima non abbiamo assicurato la cancellazione dei figli!

* **Complessità di Tempo:** **O(N)** (ogni nodo viene visitato).
* **Complessità di Spazio:** **O(H)** dove H è l'altezza dell'albero (dovuta allo stack delle chiamate ricorsive). Nel caso peggiore di un albero sbilanciato è O(N), nel caso bilanciato è O(log N).

**Implementazione DFS (Ricorsiva In-Order):**
```python
def dfs_inorder(root, risultato=None):
    if risultato is None:
        risultato = []
        
    if root:
        dfs_inorder(root.left, risultato)   # Esploro Sinistra
        risultato.append(root.val)          # Visito il nodo (Genitore)
        dfs_inorder(root.right, risultato)  # Esploro Destra
        
    return risultato
```

---

## 4. Complessità Computazionale nei BST

Come per tutte le strutture, l'analisi gravita attorno alle operazioni primarie in un Albero di Ricerca: Ricerca, Inserimento, Cancellazione.

| Operazione | BST (Caso Medio, Bilanciato) | BST (Caso Peggiore, Sbilanciato)* |
|---|---|---|
| Inserimento | **O(log N)** | **O(N)** |
| Ricerca     | **O(log N)** | **O(N)** |
| Cancellazione| **O(log N)** | **O(N)** |

*\*Il caso peggiore O(N) si verifica se gli elementi vengono inseriti in ordine (es. 1, 2, 3, 4, 5). L'albero degenera in una Linked List. Esistono alberi autobilancianti come gli AVL o Red-Black Trees che garantiscono geometricamente O(log N) anche nel caso peggiore.*

---

## 5. Esercizi LeetCode

Gran parte delle challenge adoperano logiche BFS/DFS.

### Esercizio 1 — Maximum Depth of Binary Tree (LeetCode #104)

**Difficoltà LeetCode:** Easy

**Traccia:**
Dato il nodo radice (root) di un albero binario, calcola la sua profondità massima. La profondità massima è il numero di nodi lungo il percorso più lungo dalla radice alla foglia più lontana.

**Ragionamento (DFS):**
La profondità di un nodo è la profondità maggiore tra i suoi figli sinistro e destro, più 1 (se stesso). Possiamo usare la ricorsione per scandagliare il fondo. Se il nodo è nullo, la profondità è 0.

**Soluzione (DFS):**
```python
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
            
        left_depth = self.maxDepth(root.left)
        right_depth = self.maxDepth(root.right)
        
        return max(left_depth, right_depth) + 1
```
*(Complessità: Tempo O(N), Spazio O(H) per lo stack della ricorsione)*


### Esercizio 2 — Invert Binary Tree (LeetCode #226)

**Difficoltà LeetCode:** Easy (Famosa per un meme di colloquio a Google)

**Traccia:**
Dato un albero binario, invertilo (specchialo, scambiando il figlio sinistro con il figlio destro per tutti i nodi) e restituisci la sua radice.

**Ragionamento (DFS / Pre-Order):**
Partendo dalla radice, per ogni nodo visitato scambiamo il figlio di destra con il figlio di sinistra. Successivamente scendiamo ricorsivamente a sinistra e a destra per fare lo stesso.

**Soluzione:**
```python
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return None
        
        # Scambia i due figli
        temp = root.left
        root.left = root.right
        root.right = temp
        
        # Inverti ricorsivamente i sotto-alberi
        self.invertTree(root.left)
        self.invertTree(root.right)
        
        return root
```
*(Complessità: Tempo O(N), Spazio O(H) a causa delle chiamate)*

### Commento didattico
> Nota come per esplorare un intero strato gerarchico ci si debba sempre affidare ad un approccio. **Usa BFS** quando cerchi l'elemento più vicino e o calcoli livelli. **Usa DFS** quando vuoi esplorare un percorso nella sua interezza prima di passare al prossimo (es. verificare l'appartenenza o invertire l'intero albero fino alle foglie).

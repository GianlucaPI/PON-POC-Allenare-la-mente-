# Scheda Esercizio: Concatenation of Array

| Informazione | Dettagli |
| :--- | :--- |
| **Fonte** | LeetCode #1929 |
| **Difficoltà** | Easy |
| **Prerequisiti** | Array, Cicli For, Operatori base |

## 1. La Traccia (Il Problema)

### Descrizione
Dato un array di interi `nums` di lunghezza $n$, devi creare un array `ans` di lunghezza $2n$ tale che:

- `ans[i] == nums[i]` (per i primi $n$ elementi)
- `ans[i + n] == nums[i]` (per i successivi $n$ elementi)

> **In parole povere:** devi creare un nuovo array formato da due copie dell'array originale, una dopo l'altra.

### Esempi

#### Esempio 1:
- **Input:** `nums = [1, 2, 1]`
- **Output:** `[1, 2, 1, 1, 2, 1]`
- **Spiegazione:** L'array è `[1, 2, 1]` + `[1, 2, 1]`.

#### Esempio 2:
- **Input:** `nums = [1, 3, 2, 1]`
- **Output:** `[1, 3, 2, 1, 1, 3, 2, 1]`
- **Spiegazione:** L'array è `[1, 3, 2, 1]` + `[1, 3, 2, 1]`.

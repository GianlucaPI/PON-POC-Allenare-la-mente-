#Leetcode268
'''
Hai un array nums che contiene $n$ numeri distinti presi dall'intervallo [0, n]. Manca un solo numero. Trovalo.
Esempio: input = [3, 0, 1] (n=3) -> Manca il 2.

'''
#Controlliamo numero per numero. C'è lo 0? Sì. C'è l'1? Sì. C'è il 2? No. Trovato.
'''
Tempo: O(n^2) (Ciclo dentro ciclo).
Spazio: O(1).
Difetto: Se n=100.000, il programma non finisce più.
'''
def missingNumber(nums):
    n = len(nums)
    # Per ogni numero teorico 'i' da 0 a n
    for i in range(n + 1):
        found = False
        # Cerchiamo 'i' dentro l'array nums (scansione completa)
        for num in nums:
            if num == i:
                found = True
                break
        if not found:
            return i

'''
Tempo: O(n \log n) (Costo dell'ordinamento).
Spazio: O(1) o O(n) (dipende dall'algoritmo di sort).
'''
def missingNumber2(nums):
    nums.sort() # Il collo di bottiglia è qui
    
    # Controlliamo se indice == valore
    for i in range(len(nums)):
        if nums[i] != i:
            return i
            
    return len(nums) # Se tutto è ok, manca l'ultimo numero (n)

'''
Soluzione C: Matematica di Gauss (Ottimale - O(n))
La somma dei numeri da 0 a $n$ è data dalla formula di Gauss: n(n+1)/2.
Basta sottrarre la somma dei numeri che abbiamo dalla somma teorica.

Esempio Spiegato:
Immagina n=3, quindi i numeri dovrebbero essere [0, 1, 2, 3].
L'array di input è [3, 0, 1]. Manca il 2.

1. Calcoliamo la somma che dovremmo avere se ci fossero tutti i numeri:
   Somma Teorica = 0 + 1 + 2 + 3 = 6
   Formula di Gauss: (n * (n + 1)) / 2  => (3 * 4) / 2 = 6

2. Calcoliamo la somma dei numeri che abbiamo davvero:
   Somma Reale = 3 + 0 + 1 = 4

3. La differenza è il numero che manca:
   6 - 4 = 2

Tempo: O(n) (Scorriamo l'array solo per sommare).
Spazio: O(1).
'''

def missingNumber(nums):
    n = len(nums)
    somma_teorica = n * (n + 1) // 2
    somma_reale = sum(nums) # Scorre l'array una volta sola
    
    return somma_teorica - somma_reale

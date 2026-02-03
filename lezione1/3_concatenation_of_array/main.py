'''
Analisi Big O:
Tempo: O(n) (Scorriamo l'array due volte, quindi 2n, che asintoticamente è O(n)).
Spazio: O(n) (Creiamo un nuovo array che contiene 2n elementi).
'''
def getConcatenation(nums):
    # 1. Creiamo una lista vuota per il risultato
    ans = []
    
    # 2. Primo passaggio: copiamo i numeri originali
    for num in nums:
        ans.append(num)
        
    # 3. Secondo passaggio: copiamo i numeri di nuovo
    for num in nums:
        ans.append(num)
        
    return ans

'''
Analisi Big O:
Tempo: O(n) (Un solo ciclo che fa due assegnazioni).
Spazio: O(n).

Commento didattico: 
Questa è la soluzione più formativa per capire come funziona la RAM.
Mostra che la seconda copia non è altro che la prima copia spostata (offset) di n posizioni.
'''
def getConcatenation2(nums):
    n = len(nums)
    # 1. Pre-allochiamo un array di zeri della dimensione finale (2n)
    #    Questo evita che Python debba ridimensionare la lista dinamicamente
    ans = [0] * (2 * n)
    
    # 2. Un solo ciclo per riempire entrambe le metà contemporaneamente
    for i in range(n):
        ans[i] = nums[i]       # Prima metà
        ans[i + n] = nums[i]   # Seconda metà (spostata di n posizioni)
        
    return ans

'''
Analisi Big O:
Tempo: O(n). Attenzione! Anche se è una sola riga, Python "sotto il cofano" deve comunque copiare tutti gli elementi uno per uno. Non è magia, è astrazione.
Spazio: O(n).
'''
def getConcatenation3(nums):
    # L'operatore '+' tra liste crea una nuova lista unendo le due
    return nums + nums
    
    # Variante alternativa con moltiplicazione:
    # return nums * 2

'''
Domanda: "Perché la Soluzione B potrebbe essere leggermente più efficiente della Soluzione A in linguaggi come C++?"
Risposta: Perché nella Soluzione A (append), l'array dinamico potrebbe doversi espandere e riallocare memoria più volte mentre cresce. Nella Soluzione B, allochiamo la memoria esatta subito ([0] * 2n), evitando overhead di ridimensionamento.
'''
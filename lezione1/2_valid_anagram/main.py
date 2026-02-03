def isAnagram(s, t):
    if len(s) != len(t): return False
    
    # In Python possiamo usare Counter, ma facciamolo a mano per capire
    conteggio = {} # Hash Map
    
    for char in s:
        conteggio[char] = conteggio.get(char, 0) + 1
        
    for char in t:
        if char not in conteggio or conteggio[char] == 0:
            return False
        conteggio[char] -= 1
        
    return True
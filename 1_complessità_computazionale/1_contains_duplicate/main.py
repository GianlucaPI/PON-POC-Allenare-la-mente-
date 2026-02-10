# Soluzione O(n^2) - Time Limit Exceeded su LeetCode
def containsDuplicate(nums):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)): # Confronto con tutti i successivi
            if nums[i] == nums[j]:
                return True
    return False

# Soluzione O(n log n) - Accettata
# E se ordinassimo i numeri prima?" (Idea per studenti 4° anno). 
# [1, 5, 2, 1, 9] -> [1, 1, 2, 5, 9] 
# Se ci sono duplicati, saranno vicini!

def containsDuplicate2(nums):
    nums.sort() # Costo del sorting
    for i in range(len(nums) - 1):
        if nums[i] == nums[i+1]:
            return True
    return False

# Soluzione O(n) Time / O(n) Space - Ottimale
# Fase C: HashSet (Ottimale) 
# Possiamo farlo in un solo passaggio? Usiamo la memoria per guadagnare tempo (Space-Time Tradeoff).
# Usiamo un set (insieme).

def containsDuplicate3(nums):
    visti = set()
    for n in nums:
        if n in visti: # La ricerca nel set è O(1)!
            return True
        visti.add(n)
    return False


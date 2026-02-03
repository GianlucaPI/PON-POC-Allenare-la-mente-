#Circular Linked List implementation

class Node():
    def __init__(self, data = None, prev = None, next = None):
        self.data = data
        self.prev = prev
        self.next = next

    def __repr__(self):
        return str(self.data)

class CircularQueue():

    def __init__(self, head = None):
        self.head = head

    def printQ(self):
        head = self.head
        print(head)
        current = head.next
        while current != head:
            print(current)
            current = current.next

    def enqueue(self, data):
        head = self.head
        tail = head.prev
        newTail = Node(data, prev=tail, next=head)
        tail.next = newTail #vincoliamo la vecchia coda alla nuova
        head.prev = newTail

    def dequeue(self):
        head = self.head
        tail = head.prev
        tail.next = head.next
        head.next.prev = tail
        self.head = head.next


if __name__ == '__main__':
    n = Node(3)
    n.next = n
    n.prev = n

    q = CircularQueue(n)
    q.enqueue(5)
    q.enqueue(8)
    q.printQ()

    print()

    q.dequeue()
    q.printQ()
class Node():
    def __init__(self, data=None, prev=None, next=None):
        self.data = data
        self.prev = prev
        self.next = next

    def __repr__(self):
        return str(self.data)


class QueueD():
    def __init__(self, head=None, tail=None):
        self.head = head
        self.tail = tail

    def printQ(self):
        '''Theta(n)'''
        current = self.head
        while (current):
            print(current)
            current = current.next

    def enqueue(self, data):
        '''
        Insert a new element at the tail of the list
        Theta(1)
        '''
        if not self.tail:  # if there's not a tail, the queue has just one node
            head = self.head
            self.tail = Node(data, prev=head, next=None)  # we define the tail as the new node
            head.next = self.tail  # we connect the head
        else:
            new_tail = Node(data, prev=self.tail, next=None)  # if there is a tail, we bind the new node to it
            self.tail.next = new_tail
            self.tail = new_tail  # and in the end we redefine the tail

    def dequeue(self):
        '''
        Removes the head of the list
        Theta(1)
        '''
        self.head = self.head.next  # redefine the head
        self.head.prev = None

if __name__ == '__main__':
    q = QueueD(Node("A"))
    q.enqueue("B")
    q.enqueue("C")
    q.printQ()

    print()
    q.dequeue()
    q.printQ()
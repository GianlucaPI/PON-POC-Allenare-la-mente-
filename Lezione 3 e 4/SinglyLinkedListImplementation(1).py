class Node():
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next

    def __repr__(self):
        return str(self.data)


class QueueS():
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
        new_tail = Node(data, next=None)

        if not self.tail:  # if there's not a tail, the queue has just one node
            head = self.head
            self.tail = new_tail  # we define the tail as the new node
            head.next = self.tail  # we connect the head
        else:
            new_tail = Node(data, next=None)  # if there is a tail, we bind the new node to it
            self.tail.next = new_tail
            self.tail = new_tail  # and in the end we redefine the tail

    def dequeue(self):
        '''
        Removes the head of the list
        Theta(1)
        '''
        self.head = self.head.next    #redefine the head

if __name__=='__main__':
    q = QueueS(Node(99))
    q.enqueue(49)
    q.enqueue(9)
    q.printQ()

    print()
    q.dequeue()
    q.printQ()
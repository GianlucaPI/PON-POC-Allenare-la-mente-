class MyCircularQueue():

    def __init__(self, lenght):
        self.lenght = lenght  # number of cells in the array
        self.size = 0  # number of elements in the array
        self.buf = [None] * lenght  # buffer, it's the array
        self.head = self.tail = -1  # head and tail pointers, at definition they point to -1

    # Insert an element into the circular queue
    def enqueue(self, data):

        if self.size == self.lenght:  # if the queue is full
            IndexError("Overflow!")

        elif (self.head == -1):  # if the head is not defined, the array is empty
            self.head = 0  # head and tail pointers will point to the 0 cell
            self.tail = 0
            self.buf[self.tail] = data  # we place the data in the first cell (will be the tail)
            self.size += 1

        else:  # else if the queue is not empty nor full
            self.tail = (
                                    self.tail + 1) % self.lenght  # I.e. if the array is not full, but the tail is in the last spot, the data is stored in the 0 cell.
            self.buf[self.tail] = data
            self.size += 1

    # Delete an element from the circular queue
    def dequeue(self):
        if self.size == 0:
            print("Underflow!")

        elif (self.head == self.tail):  # if there is only one element in the array
            temp = self.buf[self.head]
            self.head = -1
            self.tail = -1
            self.size -= 1
            return temp

        else:
            temp = self.buf[self.head]
            self.head = (self.head + 1) % self.lenght
            self.size -= 1
            return temp

    def printCQueue(self):
        if (self.head == -1):
            print("No element in the circular queue")

        elif (self.tail >= self.head):
            for i in range(self.head, self.tail + 1):
                print(self.buf[i], end=" ")
            print()

        # If the tail is behind the head
        else:
            for i in range(self.head, self.lenght):
                print(self.queue[i], end=" ")
            for i in range(0, self.tail + 1):
                print(self.queue[i], end=" ")
            print()

if __name__ == '__main__':
    obj = MyCircularQueue(5)
    obj.enqueue(1)
    obj.enqueue(2)
    obj.enqueue(3)
    obj.enqueue(4)
    obj.enqueue(5)
    print("Initial queue")
    obj.printCQueue()

    obj.dequeue()
    print("After removing an element from the queue")
    obj.printCQueue()
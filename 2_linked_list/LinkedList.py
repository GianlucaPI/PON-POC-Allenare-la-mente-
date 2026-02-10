class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None

    def add_node(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def search(self, data):
        current = self.head
        while current is not None:
            if current.data == data:
                return True
            current = current.next
        return False

    def delete(self, data):
        current = self.head
        previous = None
        while current is not None:
            if current.data == data:
                if previous is not None:
                    previous.next = current.next
                else:
                    self.head = current.next
                return
            previous = current
            current = current.next

    def print_list(self):
        current = self.head
        while current is not None:
            print(current.data)
            current = current.next

if __name__ == '__main__':

    LL = LinkedList()

    LL.add_node(2)
    LL.add_node(3)

    LL.print_list()
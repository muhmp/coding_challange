# given the head of a singly linked list, return middle node of the linked list
# if there is two middle nodes, return the second middle node

# example
# input : [1,2,3,4,5]
# output : [3,4,5]

# approach 1
def middle_node(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

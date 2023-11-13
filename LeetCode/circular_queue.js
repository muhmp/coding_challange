/**
 * MyCircularQueue(k) Initializes the object with the size of the queue to be k.
int Front() Gets the front item from the queue. If the queue is empty, return -1.
int Rear() Gets the last item from the queue. If the queue is empty, return -1.
boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
boolean isEmpty() Checks whether the circular queue is empty or not.
boolean isFull() Checks whether the circular queue is full or not.
 */

class ListNode {
    constructor(val, next=null) {
        this.val = val
        this.next = next
    }
}
class MyCircularQueue {
    constructor(k) {
        this.maxSize = k
        this.size = 0
        this.head = null
        this.tail = null
    }
    enQueue(val) {
        if (this.isFull()) return false
        let newNode = new ListNode(val)
        if (this.isEmpty()) this.head = this.tail = newNode
        else this.tail.next = newNode, this.tail = this.tail.next
        this.size++
        return true
    }
    deQueue() {
        if (this.isEmpty()) return false
        this.head = this.head.next
        this.size--
        return true
    }
    Front() {
        return this.isEmpty() ? -1 : this.head.val
    }
    Rear() {
        return this.isEmpty() ? -1 : this.tail.val
    }
    isEmpty() {
        return this.size === 0
    }
    isFull() {
        return this.size === this.maxSize
    };
};

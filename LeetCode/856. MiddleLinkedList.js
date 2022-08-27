// given the head of a singly linked list, return middle node of the linked list
// if there is two middle nodes, return the second middle node

//example
// input : [1,2,3,4,5]
// output : [3,4,5]


var middleNode = function(head) {
    //define variable for the head and 
    let slow = head;
    let fast = head;

    // while operation 
    while (fast){
        //if not fast 
        if (!fast.next)
        break;
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};
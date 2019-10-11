// Implement an algorthm to delete a node in the middle 
// (i.e., any node but the first and last node, not necessarily the exact middle) 
// of a single linked list, given only access to that node.

// EXAMPLE 
// Input: the node c from the linked list a -> b -> c -> d -> e -> f
// Result: nothing is returned, but the new linked list looks like a -> b -> d -> e -> f

function deleteMiddleNode() {
    if(!this.head) return;

    let linkedListLength = 0;
    let currentNode = this.head;

    while(currentNode) {
        linkedListLength++;
        currentNode = currentNode.next;
    }

    let midpoint = Math.floor((linkedListLength) / 2);

    currentNode = this.head;
    linkedListLength = 0;

    while(currentNode) {
        if(linkedListLength + 1 == midpoint) {
            currentNode.next = currentNode.next.next;
        }
        linkedListLength++;
        currentNode = currentNode.next;
    }
}
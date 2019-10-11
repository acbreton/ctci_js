// Implement an algorithm to find the kth to last element of a singly linked list

function returnKthToLast(k) {
    let count = 0;
    let currentNode = this.head;

    while(currentNode) {
        count++;
        currentNode = currentNode.next;
    }

    if(k > count) return 'K is larger than LinkedList';

    currentNode = this.head;

    while(currentNode) {
        if(count == k) {
            return currentNode;
        }
        count--;
        currentNode = currentNode.next;
    }

    return 'Node not found';
}
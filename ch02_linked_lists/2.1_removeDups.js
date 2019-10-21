// Write code to remove duplicates from an unsorted linked list.
//EXAMPLE
// INPUT: 3 -> 4 -> 4 -> 1
// OUTPUT: 3 -> 4 -> 1

function removeDups(linkedList) {
    let nodeMap = {};

    let currentNode = linkedList.head;
    let newList = new LinkedList();

    while(currentNode) {
        if(!nodeMap[currentNode.data]) {{
            nodeMap[currentNode.data] = currentNode;
            newList.insert(currentNode);
        }
        currentNode = currentNode.next;
    }
    return newList;
}

// FOLLOW UP:
// How would you solve this problem if a temporary buffer is not allowed?

function removeDups(linkedList) {
    let currentNode = linkedList.head;

    while(currentNode.next) {
        if(currentNode.next.data === currentNode.data) {
            linkedList.remove(currentNode.next);
        }
    }

    return linkedList;
}
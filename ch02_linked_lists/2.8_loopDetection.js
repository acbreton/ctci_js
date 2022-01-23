// Given a circular linked list, implement an algorthm that returns the node at the beginning of the loop. 
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, 
// so as to make a loop in the linked list.

// EXAMPLE
// Input: A -> B -> C -> D -> E -> C [the same C as earlier]
// Output: C

import Node from './node';
import LinkedList from './linkedList';

function loopDetection(ll) {
    let slow = ll.head;
    let fast = ll.head.next.next;

    while(slow.next && fast.next.next) {
        if(slow === fast) {
            return slow.next;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
}

let node1 = new Node("A");
let node2 = new Node("B");
let node3 = new Node("C");
let node4 = new Node("D");
let node5 = new Node("E", node3);
let linkedList = new LinkedList();

linkedList.insert(node1);
linkedList.insert(node2);
linkedList.insert(node3);
linkedList.insert(node4);
linkedList.insert(node5);

console.log(loopDetection(linkedList));
// You have two numbers represented by a linked list, where each node contains a single digit
// The digits are stored in reverse order, such that the 1's digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list

// EXAMPLE
// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.

function sumLists(l1, l2) {
    let l3 = new LinkedList();

    let currentNode = l1.head;  
    let currentNode2 = l2.head;

    while(currentNode && currentNode2) {
        let sum = currentNode.data + currentNode2.data;
        sum > 9 ? currentNode.next.data += 1 : undefined;

        l3.insert(new Node(sum % 10));
        
        currentNode = currentNode.next;
        currentNode2 = currentNode2.next;
    }

    return l3;
}

// TEST CASES
// let l1 = new LinkedList();
// let node1 = new Node(7);
// let node2 = new Node(1);
// let node3 = new Node(6);
// l1.insert(node1);
// l1.insert(node2);
// l1.insert(node3);

// let l2 = new LinkedList();
// let node4 = new Node(5);
// let node5 = new Node(9);
// let node6 = new Node(2);
// l2.insert(node4);
// l2.insert(node5);
// l2.insert(node6);

// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem.

// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).  That is, 617 + 295.
// Output: 9 -> 1 -> 2.  That is, 912.

function sumListsForward(l1, l2) {
    let currentNode = l1.head;  
    let currentNode2 = l2.head;
    let stack = [];

    while(currentNode && currentNode2) {
        let sum = currentNode.data + currentNode2.data;
        stack.push(sum);

        currentNode = currentNode.next;
        currentNode2 = currentNode2.next;
    }

    let l3 = new LinkedList();

    while(stack.length) {
        let nodeSum = stack.pop();

        if(nodeSum > 9) {
            stack[stack.length-1]++;
        }

        let newNode = new Node(nodeSum % 10);
        l3.insert(newNode);
    }

    return l3;
}

// TEST CASES
// let l1 = new LinkedList();
// let node1 = new Node(6);
// let node2 = new Node(1);
// let node3 = new Node(7);
// l1.insert(node1);
// l1.insert(node2);
// l1.insert(node3);

// let l2 = new LinkedList();
// let node4 = new Node(2);
// let node5 = new Node(9);
// let node6 = new Node(5);
// l2.insert(node4);
// l2.insert(node5);
// l2.insert(node6);
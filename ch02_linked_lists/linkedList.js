class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(node) {
        if(!this.head) {
            this.head = node;
            return;
        } 

        let currentNode = this.head;

        while(currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
    }

    remove(node) {
        if(!this.head) return;

        let currentNode = this.head;

        while(currentNode.next) {
            if((currentNode.next === node.next) && (currentNode.data === node.data)) {
                if(currentNode.next.next) {
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode.next = null;
                }
                return;
            } 
            currentNode = currentNode.next;
        }
    }

    returnKthToLast(k) {
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
}
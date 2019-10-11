class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(node) {
        if(!this.head) this.head = node;

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
}
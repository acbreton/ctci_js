// Implement a MyQueue class which implements a queue using two stacks. 

class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(data) {
        if(this.stack1.length) {
            this.stack1.push(data);
        } else {
            this.stack2.push(data);
        }
    }

    pop() {
        if(this.stack1.length) {
            while(this.stack1.length) {
                if(this.stack1.length == 1) {
                    return this.stack1.pop();
                }
                this.stack2.push(this.stack1.pop());
            }
        } else {
            while(this.stack2.length) {
                this.stack1.push(this.stack2.pop());
            }
            this.pop();
        }
    }
}
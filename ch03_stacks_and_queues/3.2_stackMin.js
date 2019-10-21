// How would you design a stack which, in addition to push and pop, has a function min
// which returns the minimum element? Push, pop and min should all operate in 0(1) time. 

class Stack {
    constructor() {
        this.data = [];
        this.min = null;
    }

    push(data) {
        if(data < this.min) {
            this.min = data;
        }

        this.data = this.data.concat(data); 
    }

    pop() {
        let result = this.data[this.data.length - 1];
        this.data = this.data.slice(0, this.data.length - 1);

        if(this.data.length && result == this.min) {
            for(let num of this.data) {
                if(num < result) {
                    this.min = num;
                }
            }
        }
        return result;
    }

    min() {
        return this.min;
    }
}
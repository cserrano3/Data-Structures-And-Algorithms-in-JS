let Stack = (function() { //making use of closure for encapsulation
    const _items = new WeakMap(); //private properties can be simulated with a WeakMap
    class Stack {
        constructor() {
            this.items = _items.set(this, []);
        }

        isEmpty(stack){
            return !stack.length ? true : false;
        }

        get_Items(){
            let stack = this.items.get(this)
            return stack;
        }

        set_Items(items) {
            let stack = this.items.get(this);
            stack = items;
            return stack;
        }

        push(element){
            let stack = this.items.get(this);
            stack.push(element);
        }

        pop(stack) {
            if(this.isEmpty(stack)) {
                return 'The stack is already empty';
            } else {
                let removedItem = stack.pop();
                return removedItem;
            }
        }

        clear(){
            let stack = this.items.get(this);
            stack = new WeakMap();
            return stack;
        }

        size(stack) {
            return stack.length;
        }

        peek(stack){
            return stack[stack.length - 1];
        }
    }

    return Stack;
})();

module.exports = Stack;

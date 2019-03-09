const Queue = (function() {
    const _items = new WeakMap();

    class Queue {
        constructor() {
            this.items = _items.set(this, []);
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

        isEmpty(queue) {
            return !queue.length ? true : false;
        }

        enqueue(items) {
            let queue = this.items.get(this);
            queue.push(items);
            return;
        }

        size(queue) {
            return queue.length;
        }

        dequeue(queue) {
                if(this.isEmpty(queue)) {
                    return 'The queue is already empty';
                } else {
                    let removedItem = queue.shift();
                    return removedItem;
                }
        }

        front(queue) {
            return queue[0];
        }

        dequeue_complete(queue) {
            if(this.isEmpty(queue)) {
                return 'This queue is already empty';
            } else {
                queue = [];
                return queue;
            }
        }
    }

    return Queue;
})();

module.exports = Queue;

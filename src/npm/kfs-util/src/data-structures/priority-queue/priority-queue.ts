import PriorityNode from './priority-node';

/**
 * Implementation of a FIFO queue w/ priority sorting
 * @complexity
 *  - add => O(n)
 *  - remove => O(1)
 *  - search => O(n)
 */
export class PriorityQueue<T> {
    private queue: PriorityNode[] = [];

    /**
     * Adds item to the queue and sorts priority
     * TODO return index of inserted item
     */
    enqueue(item: T, priority: number = 0) {
        const { queue } = this;
        const element = new PriorityNode(item, priority);

        // tracks if new item is higher or lower priority
        let lowerPriority = false;

        // loop through queue and insert prioritized item
        for (let i = 0, len = queue.length; i < len; i++) {
            if (queue[i].priority > element.priority) {
                queue.splice(i, 0, element);
                lowerPriority = true;
                break;
            }
        }

        // add item to front of queue
        if (!lowerPriority) {
            queue.push(element);
        }
    }

    /**
     * Fetches and removes item from front of the queue
     */
    dequeue(): PriorityNode {
        if (this.isEmpty) {
            return null;
        }
        return this.queue.shift();
    }

    /**
     * Peeks element at the front of the queue
     */
    peekFront(): PriorityNode {
        if (this.isEmpty) {
            return null;
        }
        return this.queue[0];
    }

    /**
     * Peeks element at the back of the queue
     */
    peekBack(): PriorityNode {
        if (this.isEmpty) {
            return null;
        }
        return this.queue[this.queue.length - 1];
    }

    /**
     * Finds the index of the specified item
     */
    seek(item: T): number {
        const { queue } = this;
        for (let i = 0, len = queue.length; i < len; i++) {
            if (queue[i].value === item) {
                return i;
            }
        }
        return -1;
    }

    /**
     * Removes all elements from queue
     */
    clear() {
        this.queue = [];
    }

    /**
     * Prints-out all items, in order, from the queue
     */
    toString(): string {
        return JSON.stringify(this.queue);
    }

    /**
     * Current size of the queue
     */
    get size(): number {
        return this.queue.length;
    }

    /**
     * Determines if queue is empty (no items)
     */
    get isEmpty(): boolean {
        return this.queue.length === 0;
    }
}

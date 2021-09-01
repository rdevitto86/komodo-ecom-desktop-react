import ListNode from './list-node';

/**
 * Creates a doublely linked list
 * @complexity
 *  - add: [best case] => O(1), [worst case] => O(n)
 *  - remove: [best case] => O(1), [worst case] => O(n)
 *  - search => [best case] => O(1), [worst case] => O(n)
 */
export class LinkedList<T> {
    /**
     * First node in list
     */
    head: ListNode | null = null;

    /**
     * Last node in list
     */
    tail: ListNode | null = null;

    /**
     * Size of linked list
     */
    size: number = 0;

    /**
     * @param {T} [data] data used in first list node
     */
    constructor(data?: T) {
        if (data) {
            this.head = new ListNode(data);
        }
    }

    /**
     * Searches for the first node with a given value
     */
    getValue(item: T): ListNode {
        if (!item) {
            return null;
        }

        let node = this.head;

        while (node) {
            if (node.value === item) {
                return node;
            }
            node = node.next;
        }
        return null;
    }

    /**
     * Searches for the first node with a given value
     * @param {number} index array index syntax
     */
    getAt(index: number): ListNode {
        if (typeof index !== 'number') {
            return null;
        }

        let i = 0;
        let node = this.head;

        while (node) {
            if (i++ === index) {
                return node;
            }
            node = node.next;
        }
        return null;
    }

    /**
     * Adds a new leading node
     */
    insertHead(item: T) {
        if (!item) {
            return -1;
        }

        const newNode = new ListNode(item, this.head);

        // adjust list after insertion
        if (this.head) {
            this.head.prev = newNode;
        } else {
            this.tail = newNode;
        }

        this.head = newNode;
        this.size++;
    }

    /**
     * Adds a new trailing node
     */
    insertTail(item: T): number {
        if (!item) {
            return -1;
        }

        const newNode = new ListNode(item, null, this.tail);

        // adjust list after insertion
        if (this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }

        this.tail = newNode;
        this.size++;

        // return index of node
        return this.size - 1;
    }

    /**
     * Adds a new node at a specific index
     * @param {number} index array index syntax
     */
    insertAt(item: T, index: number): number {
        if (!item || typeof index !== 'number') return -1;

        let i = 0;
        let inserted = false;
        let current = this.head;

        while (current) {
            if (i++ === index) {
                // TODO
                inserted = true;
                break;
            }
            current = current.next;
        }
        if (!inserted) {
            return -1;
        }

        this.size++;
        return this.size - 1; // return index of node
    }

    /**
     * Sorts the linked list
     */
    sort(): void {}

    /**
     * Reverses the linked list
     */
    reverse(): void {
        // new starting point of list
        let reversed = this.tail;
        let current = this.tail;

        // TODO set new class head
        // TODO set new class tail
        // TODO reverse through nodes and set the prev/next values
    }

    /**
     * Removes first node and adjusts list
     */
    removeHead(): ListNode {
        if (!this.head) {
            return null;
        }

        const oldHead = this.head;

        // set new head to removed head's next
        this.head = oldHead.next;

        // adjust list after removal
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }

        this.size--;
        return oldHead;
    }

    /**
     * Removes last node and adjusts list
     */
    removeTail(): ListNode {
        if (!this.tail) {
            return null;
        }

        const oldTail = this.tail;

        // set new tail to removed tail's next
        this.tail = oldTail.prev;

        // adjust list after removal
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }

        this.size--;
        return oldTail;
    }

    /**
     * Removes a node at a specific list index
     * @param {number} index array index syntax
     */
    removeAt(index: number) {}
}

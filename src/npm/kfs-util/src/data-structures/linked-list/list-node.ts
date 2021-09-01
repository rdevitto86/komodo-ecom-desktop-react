/**
 * Data structure used in linked lists
 */
export default class ListNode {
    value: any = null;
    next: ListNode = null;
    prev: ListNode = null;

    /**
     * @param {any} value node data
     * @param {ListNode} [next] next node in linked list
     * @param {ListNode} [prev] previous node in linked list
     */
    constructor(value: any, next: ListNode = null, prev: ListNode = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

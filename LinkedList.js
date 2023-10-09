import Node from './Node.js';

/**
 * @module LinkedList
 */
export default class LinkedList {
  /**
   * Create empty linked list
   */
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * Insert first node (head)
   * @param {*} value data
   */
  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }
  /**
   * Insert last node (tail)
   * @param {*} value data
   */
  append(value) {
    const node = new Node(value);
    let current;

    // If there is no head (empty list) make it head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = node;
      this.size++;
    }
  }
  // Insert at index

  // Get at index

  // Remove at index

  // Clear list

  // Print list data
}

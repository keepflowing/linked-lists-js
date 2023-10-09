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
   * @param {*} value
   */
  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }
  /**
   * Insert last node (tail)
   * @param {*} value
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

  /**
   * Get node at index
   * @param {int} index
   * @return {*} node or null if index doesn't exist
   */
  at(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current;
      }
      count++;
      current = current.nextNode;
    }
    return null;
  }

  /**
   * @return {*} last node in list
   */
  tail() {
    return this.at(this.size-1);
  }
  // Insert at index

  // Remove at index

  // Clear list

  // Print list data
}

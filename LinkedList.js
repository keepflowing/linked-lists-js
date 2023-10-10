import Node from './Node.js';

/**
 * @module LinkedList
 */
export default class LinkedList {
  /** Create empty linked list */
  constructor() {
    this.head = null;
  }

  /**
   * @return {int} the size of the list
   */
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  /**
   * Insert first node (head)
   * @param {*} value
   */
  prepend(value) {
    this.head = new Node(value, this.head);
  }

  /**
   * Insert last node (tail)
   * @param {*} value
   */
  append(value) {
    const node = new Node(value);
    // If there is no head (empty list) make it head
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = node;
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
   * Calls function 'at' with length of list - 1
   * @return {*} last node in list
   */
  tail() {
    return this.at(this.size()-1);
  }

  /**
   * Removes last Node
   */
  pop() {
    let prev;
    let current = this.head;
    while (current.nextNode) {
      prev = current;
      current = current.nextNode;
    }
    prev.nextNode = null;
  }
  // Insert at index

  // Remove at index

  // Clear list

  /**
   * Format list data to a string
   * @return {string}
   */
  toString() {
    if (!this.head) {
      return '( )';
    } else {
      let str = '';
      let current = this.head;
      while (current) {
        str += `( ${current.value} ) -> `;
        current = current.nextNode;
      }
      str += 'null';
      return str;
    }
  }
}

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
    if (!this.head) {
      return;
    }
    let prev;
    let current = this.head;
    while (current.nextNode) {
      prev = current;
      current = current.nextNode;
    }
    prev.nextNode = null;
  }

  /**
   * Check if list contains a Node with value
   * @param {*} value
   * @return {bool}
   */
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  /**
   * Find index of first Node containing value
   * @param {*} value
   * @return {int}
   */
  find(value) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  /**
   * Insert a new node with value at index
   * @param {*} value
   * @param {int} index
   */
  insertAt(value, index) {
    const before = this.at(index-1);
    const after = this.at(index);

    if (after) {
      const node = new Node(value, after);
      if (!before) {
        this.prepend(value);
      } else {
        before.nextNode = node;
      }
    } else {
      this.append(value);
    }
  }

  /**
   * Remove this Node at index
   * @param {int} index
   */
  removeAt(index) {
    const before = this.at(index-1);
    const after = this.at(index+1);

    if (after) {
      if (!before) {
        this.head = this.at(1);
      } else {
        before.nextNode = after;
      }
    }
  }
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

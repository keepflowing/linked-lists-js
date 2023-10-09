/**
 * @module Node
 *
 */
export default class Node {
  /**
   * @param {*} data data for the node
   * @param {*} next pointer to next node
   */
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

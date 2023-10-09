/**
 * @module Node
 *
 */
export default class Node {
  /**
   * @param {*} value data for the node
   * @param {*} nextNode pointer to next node
   */
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

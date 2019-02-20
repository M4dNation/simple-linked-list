const LinkedListNode = require("./linked-list-node");

class LinkedList {
  /**
   * Build a new linked list structure.
   */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Add a node to the head of the list.
   * @param {LinkedListNode} node The node to add
   */
  addToHead(node) {
    if (!(node instanceof LinkedListNode)) {
      throw new TypeError("node must be an instance of LinkedListNode");
    }

    if (this.head === null) {
      this.tail = node;
    } else {
      this.head.prev = node;
    }

    node.next = this.head;
    node.previous = null;
    this.head = node;
  }

  /**
   * Add a node to the head of the list.
   * @param {LinkedListNode} node   The node to add
   */
  addToTail(node) {
    if (!(node instanceof LinkedListNode)) {
      throw new TypeError("node must be an instance of LinkedListNode");
    }

    if (this.tail === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    node.previous = this.tail;
    node.next = null;
    this.tail = node;
  }

  /**
   * Remove a node from the head of the list.
   * @return {LinkedListNode}  The removed node from the list
   */
  removeHead() {
    if (this.head === null) {
      return this.head;
    }

    const previousHead = this.head;
    this.head = this.head.next;

    if (this.head instanceof LinkedListNode) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    return previousHead;
  }

  /**
   * Remove a node from the tail of the list.
   * @return {LinkedListNode}  The removed node from the list
   */
  removeTail() {
    if (this.tail === null) {
      return this.tail;
    }

    const previousTail = this.tail;
    this.tail = this.tail.previous;

    if (this.tail instanceof LinkedListNode) {
      this.tail.next = null;
    } else {
      this.head = null;
    }

    return previousTail;
  }
}

module.exports = LinkedList;

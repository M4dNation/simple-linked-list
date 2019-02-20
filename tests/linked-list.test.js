const LinkedList = require("../src/linked-list");
const LinkedListNode = require("../src/linked-list-node");

describe("LinkedList related tests", () => {
  test("it should instanciate a LinkedList", () => {
    const list = new LinkedList();

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  test("it should not add a wrong node to the head", () => {
    const list = new LinkedList();

    const node = 6;

    expect(() => {
      list.addToHead(node);
    }).toThrow("node must be an instance of LinkedListNode");
    expect(list.head).toBe(null);
  });

  test("it should add a node to the head", () => {
    const list = new LinkedList();

    const node = new LinkedListNode();

    list.addToHead(node);
    expect(list.head).toMatchObject(node);
  });

  test("it should return null when no node can be removed from the head", () => {
    const list = new LinkedList();

    expect(list.removeHead()).toBe(null);
  });

  test("it should remove a node from the head", () => {
    const list = new LinkedList();

    const node = new LinkedListNode();
    const nodeBis = new LinkedListNode();

    list.addToHead(node);
    list.addToHead(nodeBis);
    const removedNode = list.removeHead();
    expect(removedNode).toMatchObject(nodeBis);
    expect(list.head).toMatchObject(node);
  });

  test("it should remove last node from the head", () => {
    const list = new LinkedList();

    const node = new LinkedListNode();

    list.addToHead(node);
    const removedNode = list.removeHead();
    expect(removedNode).toMatchObject(node);
    expect(list.head).toBe(null);
  });

  test("it should not add a wrong node to the tail", () => {
    const list = new LinkedList();

    const node = 6;

    expect(() => {
      list.addToTail(node);
    }).toThrow("node must be an instance of LinkedListNode");
    expect(list.tail).toBe(null);
  });

  test("it should add a node to the tail", () => {
    const list = new LinkedList();

    const node = new LinkedListNode();

    list.addToTail(node);
    expect(list.tail).toMatchObject(node);
  });

  test("it should return null when no node can be removed from the tail", () => {
    const list = new LinkedList();

    expect(list.removeTail()).toBe(null);
  });

  test("it should remove a node from the tail", () => {
    const list = new LinkedList();

    const node = new LinkedListNode();
    const nodeBis = new LinkedListNode();

    list.addToTail(node);
    list.addToTail(nodeBis);
    const removedNode = list.removeTail();
    expect(removedNode).toMatchObject(nodeBis);
    expect(list.tail).toMatchObject(node);
  });

  test("it should remove last node from the tail", () => {
    const list = new LinkedList();

    const node = new LinkedListNode();

    list.addToTail(node);
    const removedNode = list.removeTail();
    expect(removedNode).toMatchObject(node);
    expect(list.tail).toBe(null);
  });
});

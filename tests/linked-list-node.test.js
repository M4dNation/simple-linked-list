const LinkedListNode = require("../src/linked-list-node");

describe("LinkedListNode related tests", () => {
  test("it should instanciate a LinkedListNode", () => {
    const node = new LinkedListNode();

    expect(node.next).toBe(null);
    expect(node.previous).toBe(null);
  });
});

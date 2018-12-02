const LinkedListNode = require("./LinkedListNode");

class LinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }

    addToHead(node)
    {
        if (!(node instanceof LinkedListNode))
        {
            throw new TypeError("node must be an instance of LinkedListNode");
        }

        if (this.head !== null)
        {
            this.head.prev = node;
        }
        else
        {
            this.tail = node;
        }

        node.next = this.head;
        node.previous = null;
        this.head = node;
    }

    addToTail(node)
    {
        if (!(node instanceof LinkedListNode))
        {
            throw new TypeError("node must be an instance of LinkedListNode");
        }

        if (this.tail !== null)
        {
            this.tail.next = node;
        }
        else
        {
            this.head = node;
        }

        node.previous = this.tail;
        node.next = null;
        this.tail = node;
    }

    removeHead()
    {
        if (this.head === null)
        {
            return this.head;
        }

        const previousHead = this.head;
        this.head = this.head.next;
        
        if (this.head instanceof LinkedListNode)
        {
            this.head.prev = null;
        }
        else
        {
            this.tail = null;
        }

        return previousHead;
    }

    removeTail()
    {
        if (this.tail === null)
        {
            return this.tail;
        }

        const previousTail = this.tail;
        this.tail = this.tail.previous;

        if (this.tail instanceof LinkedListNode)
        {
            this.tail.next = null;
        }
        else
        {
            this.head = null;
        }

        return previousTail;
    }
};

module.exports = LinkedList;
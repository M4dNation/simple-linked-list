# simple-linked-lists

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
[![npm version](https://badge.fury.io/js/simple-linked-lists.svg)](https://badge.fury.io/js/simple-linked-lists)
[![Build Status](https://travis-ci.com/M4dNation/simple-linked-lists.svg?branch=master)](https://travis-ci.com/M4dNation/simple-linked-lists) ![](https://david-dm.org/M4dNation/simple-linked-lists.svg) [![codecov](https://codecov.io/gh/M4dNation/simple-linked-lists/branch/develop/graph/badge.svg)](https://codecov.io/gh/M4dNation/simple-linked-lists)

## About

`simple-linked-lists` is a package for creating a linked list structure.  
It provides one `LinkedList` class you can instanciate and populate with `LinkedListNode` instances.

## Install

`npm install --save simple-linked-lists`  
`yarn add simple-linked-lists`

## Usage

`simple-linked-lists` exports a `LinkedList` and a `LinkedListNode` classes you can import :

```javascript
// ES6
import { LinkedList, LinkedListNode } from "simple-linked-lists";

// ES5
const LinkedList = require("simple-linked-lists").LinkedList;
const LinkedListNode = require("simple-linked-lists").LinkedListNode;
```

Once imported, you just have to instanciate nodes and add them to the list to have an usable linked list.

```javascript
import { LinkedList, LinkedListNode } from "simple-linked-lists";

const node = new LinkedListNode();
const list = new LinkedList();

list.addToHead(node); // Add the node to the head of the list
list.addToTail(node); // Add the node to the tail of the list
list.removeHead(); // Remove the head node of the list
list.removeTail(); // Remove the tail node of the list
```

You can extend the `LinkedListNode` to create your own data set you can put in the list.

## Authors

`simple-linked-lists` is maintained by M4dNation Company.  
First version written by [axelvaindal](https://github.com/axelvaindal).

## Contributors

There is actually no other contributors for this project.
If you want to contribute, feel free to make any suggestions or to contact us.

### Contributing to the package

We try to keep `simple-linked-lists` as simple as possible.  
Before proposing a PR or opening an issue, please keep in mind :

    - This package is meant to be as simple as possible
    - This package tries to respect the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)
    - This package tries to use the minimum of dependencies possible

Taking into account the previous points leads us to **NOT** merge proposed pull-request if those :

    - Integrate changes that are too far from the initial purpose of the package
    - Integrate changes that are adding additional dependencies
    - Integrate changes that are not unit tested and motivationated

This being said, we **really** welcome pull-request and bug report, so feel free to start a contribution.

Moreover, Pull Requests should always come with related unit tests, and won't be considered if tests aren't included.

### Testing

`simple-linked-lists` uses jest for unit testing.  
If you don't know about jest yet, you can check out their [documentation](https://jestjs.io/en/).

To run the tests, just run :

`yarn test`

Note that we are using [codecov](https://codecov.io) to keep track of code coverage related to our tests and you shouldn't affect negatively the current coverage of the code by removing tests or not covering new features with new unit tests.

## Licence

`simple-linked-lists` is available under the terms of the MIT LICENSE.  
Check the licence file for more information.

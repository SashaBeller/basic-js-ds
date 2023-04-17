const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this._root) {
      this._root = newNode;
    } else {
      let currentNode = this._root;

      while (currentNode) {
        if (newNode.data < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else if (newNode.data > currentNode.data) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          break;
        }
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let currentNode = this._root;

    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data === node.data) {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      let tempNode = node.right;

      while (tempNode.left) {
        tempNode = tempNode.left;
      }

      node.data = tempNode.data;
      node.right = this._removeNode(node.right, tempNode.data);

      return node;
    } else if (data < node.data) {
      node.left = this._removeNode(node.left, data);

      return node;
    } else {
      node.right = this._removeNode(node.right, data);

      return node;
    }
  }

  min() {
    if (!this._root) {
      return null;
    }

    let currentNode = this._root;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (!this._root) {
      return null;
    }

    let currentNode = this._root;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}


module.exports = {
  BinarySearchTree
};
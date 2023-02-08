"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {
    let leftDepth = this.left ? this.left.minDepthToIncompleteNode(): 0;
    let rightDepth = this.right ? this.right.minDepthToIncompleteNode(): 0;

    return Math.min(leftDepth, rightDepth) + 1;
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {
    let leftDepth = this.left ? this.left.maxDepth(): 0;
    let rightDepth = this.right ? this.right.maxDepth(): 0;

    return Math.max(leftDepth, rightDepth) + 1;
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
   minDepth() {
    if (this.left === null && this.right === null) return 1;

    let leftDepth = this.left ? this.left.minDepth(): Infinity;
    let rightDepth = this.right ? this.right.minDepth(): Infinity;

    return Math.min(leftDepth, rightDepth) + 1;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    if (this.root === null) {
      return 0;
    }

    return this.root.minDepthToIncompleteNode();
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    if (this.root === null) {
      return 0;
    }

    return this.root.maxDepth();
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {
    if (this.root === null) {
      return 0;
    }

    return this.root.minDepth();
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root === null) {
      return null;
    }

    let stack = [this.root];
    let closest = Infinity;

    while (stack.length) {
      let currentNode = stack.pop();

      if (currentNode.val > lowerBound && currentNode.val < closest) {
        closest = currentNode.val;
      }

      if (currentNode.right) {
        stack.push(currentNode.right)
      }
      if (currentNode.left) {
        stack.push(currentNode.left);
      }
    }

    return closest !== Infinity ? closest : null;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };

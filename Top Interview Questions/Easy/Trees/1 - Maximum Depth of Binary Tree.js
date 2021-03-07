// Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 
var maxDepth = function(root) {
    if (root === null){return 0;}
    else if (root.left === null &&  root.right === null){return 1;}
    // else if (root.left !== null &&  root.right === null){return maxDepth(root.left);}
    // else if (root.left === null &&  root.right !== null){return maxDepth(root.right);}
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1; 
};
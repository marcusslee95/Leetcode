// Validate Binary Search Tree path from the root node down to the farthest leaf node.

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let arr = []; 
    inOrderTraversal(root, arr);
    console.log(arr);
    for (var i = 0; i < arr.length - 1; i++){
        if (arr[i] >= arr[i+1]){return false;}
    }
    return true;
    
};
var inOrderTraversal = function(root, array) {
    if (root === null){return;}
    inOrderTraversal(root.left, array);
    // visit(root);
    array.push(root.val);
    // console.log(array);
    inOrderTraversal(root.right, array);
    
};
// using the fact that an in order traversal of a binary search tree should return ascending order.
// Doing this because even if let's say the whole left branch is a binary search tree you can't just compare that left branch route to the root node and determine if the entire thing is a binary search tree because the bottom right of that left branch might be some huge number if that's the larger than the roots

//create an array from in order traversal. see if its ascending itas bst. 
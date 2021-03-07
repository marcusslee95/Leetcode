Symmetric Tree 

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

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

var isSymmetric = function(root) {
    if (root === null){return true;}
    //how to know if two trees are mirrors of each other -> if each right branch is mirror of other's left branch
    return twoTreesAreMirror(root.left,root.right);
};
var twoTreesAreMirror = function(node1, node2) {
    if (node1 == null && node2 == null) return true;
    if (node1 == null || node2 == null) return false; //aka. if just one side exists then can't bemirror of the other which doesn't exist
    //how to know if two trees are mirrors of each other -> if each right branch is mirror of other's left branch
    if (twoTreesAreMirror(node1.right, node2.left) && twoTreesAreMirror(node1.left, node2.right) && node1.val === node2.val){return true;}
    else return false;
};


// //my sol: did not work
// var isSymmetric = function(root) {
//     const arrLeftBranch = isSymmetricHelper(root.left, []);
//     console.log(arrLeftBranch);
//     const arrRightBranch = isSymmetricHelper(root.right, []);
//      console.log(arrRightBranch);
//     // if (arrLeftBranch === arrRightBranch.reverse()){return true;} //doesn't work cuz no array comparison function in js unlike in java
//     if (arrLeftBranch.length !== arrRightBranch.length){return false;}
//     const rvsRight = arrRightBranch.reverse();
//     console.log(rvsRight);
//     for (var i = 0; i < arrLeftBranch.length; i++){
//         if (arrLeftBranch[i] !== rvsRight[i]){return false;}
//     }
//     return true;
    
// };
// var isSymmetricHelper = function(node, arr) {
//     //pretty much this function is executing in order traversal: left branch first then current node then right branch
//     if (node === null){ arr.push(null); return;}
//     isSymmetricHelper(node.left, arr);
//     arr.push(node.val);
//     isSymmetricHelper(node.right, arr);
//     return arr;
// };
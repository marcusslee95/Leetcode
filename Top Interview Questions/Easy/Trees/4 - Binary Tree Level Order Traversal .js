// Binary Tree Level Order Traversal 

// Given the root of a binary tree, return the level order traversal of its nodes' values. 
// (i.e., from left to right, level by level).

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
        // //Attempt3: Using BFS / iterative after watching
    if (root === null){return [];}
    let returnArr = [];
    let queue = [];
    queue.push(root);
    while(queue.length !== 0){
        const size = queue.length; //key point
        let nodesOnCurrentLvl = [];
         for (var i = 0; i < size; i++){
            const nodeToPushChildrenOf = queue.shift();
            nodesOnCurrentLvl.push(nodeToPushChildrenOf.val);
            if (nodeToPushChildrenOf.left !== null){queue.push(nodeToPushChildrenOf.left);}
            if (nodeToPushChildrenOf.right !== null){queue.push(nodeToPushChildrenOf.right);}
        }
        returnArr.push(nodesOnCurrentLvl);
    }
    return returnArr;
    
    
    
    // //Attempt2: Using recursive thinking
//     if (root === null){return null;}
//     let combinationOfTheTwo = [];
//     combinationOfTheTwo.push([root.val]);
//     if (root.left == null && root.right == null){
//         return combinationOfTheTwo;
//     }
//     if (root.left == null){
//         const lvlOrderOfRight = levelOrder(root.right);
//         // console.log(lvlOrderOfRight);
//         console.log(combinationOfTheTwo);
//         combinationOfTheTwo.push(...lvlOrderOfRight);
//         return combinationOfTheTwo;
//     }
//     if (root.right == null){
//         const lvlOrderOfLeft = levelOrder(root.left);
//         combinationOfTheTwo.push(...lvlOrderOfLeft)
//         return combinationOfTheTwo;
//     }
    
//     const lvlOrderOfLeft = levelOrder(root.left);
//      const lvlOrderOfRight = levelOrder(root.right);
//     //combine the two array of arrays
//      console.log(lvlOrderOfLeft);
//     if (lvlOrderOfLeft.length > lvlOrderOfRight.length){
//         for (var i = 0; i < lvlOrderOfLeft.length; i++){
//             combinationOfTheTwo.push([...lvlOrderOfLeft[i], ...lvlOrderOfRight[i]])
//         }
//     }
//     else if (lvlOrderOfRight.length > lvlOrderOfLeft.length){
//         for (var i = 0; i < lvlOrderOfRight.length; i++){
//             combinationOfTheTwo.push([...lvlOrderOfLeft[i], ...lvlOrderOfRight[i]])
//         }
//     }
//     return combinationOfTheTwo;
    
    // //Attempt1: Using BFS / iterative
    //let returnArr = [];
    // let queue = [];
    // queue.push(root);
    // let lvlArr = [];
    // while(queue.length !== 0){
    //     nodeToPushChildrenOf = queue.shift();
    //     lvlArr.push(nodeToPushChildrenOf.val);
    //     returnArr.push(nodeToPushChildrenOf.val);
    //     if (nodeToPushChildrenOf.left !== null){queue.push(nodeToPushChildrenOf.left);}
    //     if (nodeToPushChildrenOf.right !== null){queue.push(nodeToPushChildrenOf.right);}
    // }
    // return returnArr;
};
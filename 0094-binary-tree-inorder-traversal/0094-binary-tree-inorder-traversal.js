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
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//     let result = [];
    
//     function traverse (node) {
//         if (node.left) {
//             traverse(node.left);
//         }
        
//         result.push(node.val);
        
//         if (node.right) {
//             traverse(node.right);
//         }
//     }
    
//     if (root) {
//         traverse(root);
//     }
    
//     return result;
// };

var inorderTraversal = function (root) {
    const result = [];
    
    function traverse (node) {
        if (!node) {
            return;
        }
        
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }
    
    traverse(root);
    
    return result;
}
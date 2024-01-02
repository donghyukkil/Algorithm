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
var countNodes = function(root) {
    if (!root) {
        return 0;
    }
    
    if (!root.left && !root.right) {
        return 1;
    }
    
    let count = 0;
    
    function traverse (node) {
        count++;
        
        if (node.left) {
            traverse(node.left);
        }
        
        if (node.right) {
            traverse(node.right);
        }
    }
    
    traverse(root);
    
    return count;
};
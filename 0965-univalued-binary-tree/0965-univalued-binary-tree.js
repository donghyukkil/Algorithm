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
var isUnivalTree = function(root) {
    function isSame (node, value) {
        if (node === null) {
            return true;
        }
        
        if (node.val !== value) {
            return false;
        }
        
        return isSame(node.left, value) && isSame(node.right, value);
    }
    
    if (root === null) {
        return true;
    }
    
    return isSame(root, root.val);
};
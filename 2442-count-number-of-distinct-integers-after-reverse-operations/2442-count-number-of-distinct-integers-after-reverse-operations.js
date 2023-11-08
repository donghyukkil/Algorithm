/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    const answer = [...nums];
    
    for (let i = 0; i < nums.length; i++) {
        let string = "";
        
        for (let j = nums[i].toString().length - 1; j >= 0; j--) {
            string += nums[i].toString()[j];
            
        }
        
        answer.push(Number(string));
    }
    
    return new Set(answer).size;
};
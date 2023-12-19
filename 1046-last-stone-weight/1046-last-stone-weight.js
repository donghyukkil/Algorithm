/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const array = [...stones];
    
    if (stones.length === 1) {
        return stones;
    }
    
    if (stones.length === 2) {
        return [Math.abs(stones[0] - stones[1])];
    }
    
    const maxStone = Math.max(...array);
    
    const maxStoneIndex = stones.indexOf(maxStone);
    
    array.splice(maxStoneIndex, 1);
    
    const secondStone = Math.max(...array);
    
    const secondStoneIndex = array.indexOf(secondStone);
    
    array.splice(secondStoneIndex, 1);
    
    if (maxStone !== secondStone) {
        array.push(Math.abs(maxStone - secondStone));
    }
    
    return lastStoneWeight(array);
};
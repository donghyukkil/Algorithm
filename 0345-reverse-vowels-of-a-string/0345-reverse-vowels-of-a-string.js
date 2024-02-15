/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = "aeiouAEIOU";
	const array = [...s];
	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		while (left < right && !vowels.includes(array[left])) {
			left++;
		}

		while (left < right && !vowels.includes(array[right])) {
			right--;
		}

		if (left < right) {
			[array[left], array[right]] = [array[right], array[left]];
			left++;
			right--;
		} 
    }
    
    return array.join("");
};

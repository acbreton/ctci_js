// Palindrome Permutation: Given a string, write a function to check if it
// is a permutation of a palindrome.
// Example:
// 		input: 'Tact Coa'
// 		output: True (permutations: 'taco cat', 'atco cta')

// Time complexity = O(n);
// Space complexity = O(n);
function isPalindromePermutation(str) {
	let charMap = {};

	str = str.replace(/[^\w]/ig, "").toLowerCase();

	for(let char of str) {
		if(charMap[char]){
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}

	let foundMid = false;

	for(let char of str) {
		if(charMap[char] === 1) {
			if(foundMid) {
				return false;
			} else {
				foundMid = true;
			}
		} else {
			if(charMap[char] % 2 !== 0) {
				return false;
			}
		}
	}

	return true;
}

// TEST CASE
let str1 = 'Tact Coa';
let str2 = 'racerac';
let str3 = 'asdffdsz4a';
console.log(isPalindromePermutation(str1)); // true
console.log(isPalindromePermutation(str2)); // true
console.log(isPalindromePermutation(str3)); // false
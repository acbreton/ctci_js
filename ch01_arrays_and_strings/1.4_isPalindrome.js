// Palindrome Permutation: Given a string, write a function to check if it
// is a permutation of a palindrome.
// Example:
//input: 'Tact Coa'
//output: True (permutations: 'taco cat', 'atco cta')

function isPalindrome(str) {
	str = str.replace(/[^\w]/ig, "").toLowerCase();
}
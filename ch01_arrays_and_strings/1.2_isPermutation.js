// Check Permutation: Given two strings, write a method to decide if one is a
// permutation of the other

// Time complexity = O(n * log(n));
// Space complexity = O(1);
function isPermutation(str1, str2) {
    let sortStr1 = str1.split("").sort().join("");
    let sortStr2 = str2.split("").sort().join("");

    return sortStr1 === sortStr2;
}

// TEST CASES
console.log(isPermutation('moving', 'omvngi') ? 'Test 1 Passed' : 'Test 1 Failed');
console.log(isPermutation('wow world', 'world how') ? 'Test 2 Failed' : 'Test 2 Passed');
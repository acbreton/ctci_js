// There are three types of edits that can be performed on strings: 
// insert a character, remove a character, or replace a character
// Given two strings, write a function to check if they are one edit (or zero edits) away

// Time complexity = O(N * log(n))
// Space complexity = 0(1);
function oneAway(str1, str2) {
    let edits = charsReplaced(str1, str2) + charsRemoved(str1, str2) + charsInserted(str1, str2);

    return edits <= 1;
}

// char replaced
function charsReplaced(str1, str2) {
    if(str1.length !== str2.length) {
        return 0;
    }

    let replacements = 0;
    for(let char in str1) {
        if(str1.charAt(char) !== str2.charAt(char)) {
            replacements += 1;
        }
    }
    return replacements;
}
// char removed
function charsRemoved(str1, str2) {
    return (str2.length < str1.length) ? str1.length - str2.length : 0;
}
// char inserted
function charsInserted(str1, str2) {
    return (str2.length > str1.length) ? str2.length - str1.length : 0;
}

// TEST CASES
console.log(oneAway('edit this plz', 'edit this plez')); // true
console.log(oneAway('hello world', 'hello world')); // true
console.log(oneAway('edit this plz', 'is this correct')); // false
console.log(oneAway('pale', 'pal')); // true
console.log(oneAway('pales', 'pale')); // true
console.log(oneAway('pale', 'bale')); // true
console.log(oneAway('pale', 'bake')); // false


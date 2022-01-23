// Assume you have a method isSubstring which checks if one word is a substring of another.  
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call
// to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat").

function stringRotation(s1, s2) {
    if (s1.length > s2.length) return false;
    
    let firstChar = s1[0];
    let indexOfChar = undefined;
    // find first char of s1 in s2 
    for (let char in s1) {
        if (s2[char] === firstChar) {
            indexOfChar = char;
        }
    }

    if (indexOfChar !== undefined) {
        // use that index to slice string
        let slicedString = s2.slice(indexOfChar) + s2.slice(0, indexOfChar);
    
        // verify equality
        return slicedString.indexOf(s1) > -1;
    }

    return false;
}

console.log(stringRotation('boat', 'atbo')); // true
console.log(stringRotation('boat', 'atxbo')); // true
console.log(stringRotation('waterbottle', 'erbottlewat')); // true
console.log(stringRotation('waterbottle', 'erbottlewerwer234234wat')); // true
console.log(stringRotation('waterbottle', 'erbotxxtlewerwer234234wat')); // false
console.log(stringRotation('waterbottle', '')); // false
console.log(stringRotation('waterbottle', '123')); // false
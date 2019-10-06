// Implement a method to perform basic string compression using the counts
// of repeated characters.  For example, the string aabcccccaaa would be come a2b1c5a3.
// If the "compressed" string would not become smaller than the original string, your method should return the original string. 
// You can assume the string has only uppercase and lowercase letters (a-z)

function stringCompression(str) {
    let charLibrary = [];
    let charCount = 0;

    for(let i = 0; i < str.length; i++) {
        charCount += 1;

        if(str[i] !== str[i+1]) {
            charLibrary.push({ [str[i]]: charCount })
            charCount = 0;
        }
    }

    let compressedString = "";
    for(let charObj of charLibrary) {
        for (let [key, value] of Object.entries(charObj)) {
            compressedString += (key + value);
        }
    }

    return compressedString.length < str.length ? compressedString : str;
}

// TEST CASES
console.log(stringCompression("aabcccccaaa") === "a2b1c5a3"); // true
console.log(stringCompression("aaaeeeerrrrraa") === "a3e4r5a2"); // true
console.log(stringCompression("aae") === "a2e1"); // false
console.log(stringCompression("aae") === "aae"); // true
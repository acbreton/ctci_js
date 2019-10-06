// URLify: Write a method to replace all spaces in a string with %20.
// Function takes two arguments, the str and the length of the string

// Time complexity = O(n);
// Space complexity = O(1);
function generateURL(str) {
    let URL = "";

    for(let char of str) {
        URL = URL + ((char === " ") ? "%20" : char);
    }
    return URL;
}

let str1 = 'welcome to the url generator';
let str2 = 'url generated';
let str3 = ' I d oNt seE it';
console.log(generateURL(str1) === 'welcome%20to%20the%20url%20generator' ? 'Test 1 Passed' : 'Test 1 Failed');
console.log(generateURL(str2) === 'url%20generated' ? 'Test 2 Passed' : 'Test 2 Failed');
console.log(generateURL(str3) === '%20I%20d%20oNt%20seE%20it' ? 'Test 3 Passed' : 'Test 3 Failed');
function main() {  
    // Implement an algorithm to determine if a string has all unique characters.
    // What if you cannot use additional data structures?

    // Time complexity = O(n);
    // Space complexity = O(n);
    function uniqueChar_dataStructure(str) {
        let charMap = {};

        for(let char of str) {
            if(charMap[char]) {
                return false;
            }

            charMap[char] = 1;
        }

        return true;
    }

    // Time complexity = O(n * log(n));
    // Space complexity = O(1);
    function uniqueChar_noDS(str) {
        let sortStr = str.split("").sort().join("");
        for(let i = 0; i < sortStr.length; i++) {
            if(sortStr[i] === sortStr[i+1]) {
                return false;
            }
        }
        return true;
    }

    // TEST CASES
    const tests = ['karate','superfluous','sugarr','tigers','learning','racecar'];
    const answers = [false, false, true, true, false, false];

    for(let test in tests) {
        if(test % 2 === 0) {
            if(uniqueChar_noDS(tests[test]) !== answers[test]) {
                return `Tests failed on test #${test}`;
            }
        } else {
            if(uniqueChar_dataStructure(tests[test]) !== answers[test]) {
                return `Tests failed on test #${test}`;
            }

        }
    }


    return 'Tests passed!';
}

main();
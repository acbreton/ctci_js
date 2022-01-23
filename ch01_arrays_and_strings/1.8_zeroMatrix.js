// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

function zeroMatrix(matrix) {
    //loop through array of arrays
    if(!matrix.length) return 'No Matrix Found';

    for(let array of matrix) {
        for(let i = 0; i < array.length; i++) {
            if(array[i] === 0) {
                array = turnArrayToZeroes(array);
                break;
            }
        }
    }
    return matrix;
}

const turnArrayToZeroes = (array) => array.fill(0);

//TEST CASES
//Input:
console.log(zeroMatrix([
    [0,3,4,5],
    [1,2,3],
    [4,5,6,0,3,2,2],
    [90,2,31,2,3,4,15,2,3,4,2]
]));

//Expected Output:
// [0,0,0,0],
// [1,2,3],
// [0,0,0,0,0,0,0,0],
// [90,2,31,2,3,4,15,2,3,4,2]

//Input:
console.log(zeroMatrix([
    [0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [4,5,23,23456],
    [0,31,2,3,4,15,2,3,4,2],
    ["hello", 8934, 10, 23, 6]
]));

//Expected Output:
// [0],
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// [4,5,23,23456],
// [0,0,0,0,0,0,0,0,0,0,0],
// ["hello", 8934, 10, 23, 6]
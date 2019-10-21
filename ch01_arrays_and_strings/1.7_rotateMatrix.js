// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
// Write a method to rotate the image by 90 degrees.  Can you do this in place?

// Input:
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];
// Output: 
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ];

function rotateMatrix(image) {
	const newImage = [];

	for(let column = 0; column < image.length; column++) {
		const arr = [];

		for(let row = image.length - 1; row >= 0; row--) {
			arr.push(image[row][column]);
		}

		newImage.push(arr);
	}

	return newImage;
}

// TEST CASES
console.log(rotateMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
])) // [7,4,1],[8,5,2],[9,6,3]

console.log(rotateMatrix([
    [1,2],
    [3,4],
])) // [3,1],[4,2]
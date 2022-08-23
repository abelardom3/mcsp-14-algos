// Write the splitter function that: 

// Takes in an array and a num
// returns an array of subarray of length num

// notes:

// Subarrays cannot have a length of > num
// sub array CAN have a length that is <= num

// function splitter(arr, num) {
//     // your code here

// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const num = 3

// // should return [[1,2,3], [4,5,6], [7,8,9], [10]]

// console.log(splitter(arr, num))



function splitter(arr, num) {
    // your code here
    var array = [];
    var subArray = [];
    var index = 1;

    for (var i = 0; i < arr.length; i++) {
        var current = arr[i]
        // console.log(current)
        while (current <= num) {
            subArray.push(current);
            current++
        }

        array.push(subArray)
        return array

    }

}



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const num = 3

// should return [[1,2,3], [4,5,6], [7,8,9], [10]]

console.log(splitter(arr, num))

















// String Manipulation Functions:

// Reverse a String: Write a function that reverses a given string.

function reverse(str){

 return str.split("").reverse().join("");//split(), separates string into substring
}
console.log(reverse("Ngesa"));

//Way 2 of reversing
function reverse1(str1){
    return str1.split("").reverse().toString();
}
console.log(reverse1('Daphine'));


// Count Characters: Create a function that counts the number
// of characters in a string.

function count(str){
    return str.length;
}
console.log(count("What is going on"));

// Capitalize Words: Implement a function that capitalizes the
// first letter of each word in a sentence.

function capital(alph){
    return alph.charAt(0).toUpperCase() + alph.slice(1);
}
console.log(capital("welcome"));

// Array Functions:

// Find Maximum and Minimum: Write functions to find the maximum
// and minimum values in an array of numbers.

function maxMin(num){
    return num.sort((a,b) => a-b );
}
console.log(maxMin([12, 7, 27, 4, 9 ,43]));

// Sum of Array: Create a function that calculates the sum of all
// elements in an array.

function sum(arr){
    return arr.reduce((a,b) => a + b);
}
console.log(sum([10, 62, 2, 56]))

// Filter Array: Implement a function that filters out elements from
// an array based on a given condition.
function sumNum(fil){
   return fil.filter((n) => n === 24).toString();
}
console.log(sumNum([3,6,8, 7, 24]));
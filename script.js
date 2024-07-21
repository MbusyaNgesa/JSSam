// String Manipulation Functions:

// Reverse a String: Write a function that reverses a given string.

function reverse(str){

 return str.split("").reverse().join("");
}
console.log(reverse("Ngesa"));

//Way 2 of reversing
function reverse1(str1){
    return str1.split("").reverse().toString();
}
console.log(reverse1('Daphine'));
// Count Characters: Create a function that counts the number
// of characters in a string.
// Capitalize Words: Implement a function that capitalizes the
// first letter of each word in a sentence.
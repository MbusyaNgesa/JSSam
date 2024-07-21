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
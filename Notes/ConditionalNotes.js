// Write a function that takes in a string and splits it
// in half then appends " yahoo!" to the first half.
// Return that new string.

// function splitString (half, addString){
//     let firstHalf = half.slice(0, half.length/2);
//     let newString = firstHalf + addString;
//     return newString;
//     // return half.slice(0, half.length/2).concat('yahoo!')
// }
// console.log(splitString('TestingThis', 'MyOtherString'))
// // console.log("somestring".length/2)
// function splitString2(){
//     let firstHalf = "yahoo".slice(0, "yahoo".length/2);
//     let secondHalf = "second half!";
//     return firstHalf + secondHalf;
// }

// console.log(splitString2())

// Write a function that takes in an array of numbers and returns 
// the value at the 3rd index ONLY IF that value is 
// greater than 30

// function takeArray(arrayValue){
    // console.log(Array.isArray(), "<-- what's this?!" )  
    // we want to return arrayValue[3] only if that's greater
    // than 30...

    // this code checks to see if our input is in fact 
    // an array
    // if(Array.isArray(arrayValue)){
        // this code checks to see if the value at the
        // 3rd index of our input array is greater than 30
        // if (arrayValue[3] > 30){
            // this returns the value at the 3rd index of our
            // array
            // return arrayValue[3]
        // } 
    // } else {
        // return 'Wrong Type of input / not an array!'
    // }
// }
// console.log(takeArray(['10', '20', '30', '40', '50']))
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

// Create a function that takes in a string and returns 
// the reverse of it

// let practice = 'Watermelon'

// function takeIn (string){
//     let output = '';

//     for (let i = string.length - 1; i >= 0; i--){
//         output = output + string[i];
//     }
//     return output
// }
// console.log(takeIn(practice));

// let testStr = "hi "
// let testStr2 = "Anitria"
// // given these two variables, save a new string that evaluates to
// // "hi Anitria"

// console.log(testStr.concat(testStr2))

// let testStr3 = testStr.concat(testStr2)

// // Now add a period to your new string, then log it
// testStr3 = testStr3 + '.'
// console.log(testStr3)

// Create a function that checks to see if a string contains
// the letter 'e'. If it does, return the index of 'e'.
// (you only need to find the first occurence of e)
// (also, DON'T USE ANY METHODS)

// let letterString = 'session'

// function doesEAppear(string){
//     let stringer = ['e']

//     for (let i = 0; i < string.length; i++){
//         console.log(string[i])
//     } if (stringer === ['e']){
//         // index of e
//         return letterString 
//     }
// }
// console.log(doesEAppear.indexOf(letterString[e]));



//ATTEMPT TWO
// Create a function that checks to see if a string contains
// the letter 'e'. If it does, return the index of 'e'.
// (you only need to find the first occurence of e)
// (also, DON'T USE ANY METHODS)

let letterString = 'session'

function doesEAppear(string){

    for (let i = 0; i < string.length; i++){
        if (string[i] === 'e') {
        return i
    }
}    
}
console.log(doesEAppear(letterString));
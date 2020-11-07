//LOOP INTRO
//loops continue until the condition isn't met anymore

// when you want to create a "for loop" you start with "for"
//ex: let iterateString = 'nebula'
//console.log(iterateString.length) // 6 


// let iterateString = 'nebula'

// console.log(iterateString.length)

// for (let i = 0; i < iterateString.length; i++){
//     console.log(iterateString[i])
// }

// // using the i-- method will make the log come out backwards.

// for (let i = iterateString.length - 1; i >= 0; i--){
//     console.log(iterateString[i])
// }

// do not run this.
//stack over flow
//ctrl C to stop your loop from continuing
// for (let i = 0; i >=0; i++){
//     console.log(i)
// }

// function iterateChars (string){
    // 1st call where you want to start;
    //then invoke the string mthod;
    //then i++ makes the argument log
    // each index in order from beginning
    // index to the last index
    // i-- makes argument log from last index
    // to first index 
//     for (let i = 0; i <= string.length - 1; i++){
//         console.log(string[i])
//     }
//     return 'we are done'// logs at the end of iteration
// }
// console.log(iterateChars('Chelsea'))// logs Chelsea
// C
// h
// e
// l
// s
// e
// a
// we are done
// console.log(iterateChars('Eddy')) // logs Eddy
// E
// d
// d
// y
// we are done

// let stringArray = ['Jasmine', 'Eddy', 'Anitria']

// function iterateArrays (array){
//     for (let i = 0; i < array.length; i++){
//         console.log(array[i]) // array[0] is 'Jasmine'
//     }
//     return 'We done!!'
// }
// console.log(iterateArrays(stringArray));


//WHILE INTRO
//while(condition) has to be true
//while loops continue until the condition isn't met anymore
function whileTrue (num){
    let counter = 0
    while(counter <= num){
        
        console.log(counter)
        counter ++ // adding 1 everytime you log and reassigning that number to counter
    }
    return 'it works'
}
console.log(whileTrue(5));

// DO-WHILE Loop//
// Opposite pattern for regular 'while' loop

// do{

// } while(condition)

function doWhile(){
    let counter = 0
    do {
        console.log(counter)
        counter ++
}
    while (counter <= num)
    return 'loop works'
}
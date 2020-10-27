//Problem 1

//Define a variable name and assign your name to it
// let name = "Jasmine Dyson"

//Create a function that returns your name
// function myName (firstName, lastName){
//     return firstName + " " + lastName
// }
// console.log(myName('Jasmine', 'Dyson'));

// function myName (fullName){
//     return fullName
// }
// console.log(myName(name));

// //Problem 2

// //Create a function that accepts 2 parameters, both of which are numbers, and returns the sum of those two numbers
// function adding (num1, num2){
//     return num1 + num2
// }
// console.log(adding(95, 96))

// //Problem 3

// //Create a function that returns the type of any argument that is being called in the function
// let randomNames = ['Anitria', 'Chels', 'D Aja'];

// function namesRandom(names){
//     // console.log(typeof 'Jasmine')
//     return typeof names
// } 
// console.log(namesRandom('Jasmine'));
// console.log(namesRandom(19));
// console.log(namesRandom(true));

// //example:
// //type(400) //=> 'number'
// //type('hi') //=> 'string'


// //Problem 4

// //var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];

// //Using the array above, create a funciton that returns the 4th element in the array.
// let fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
// function fourthElement (individualFruit){
//     return individualFruit
// }
// console.log(fourthElement(fruits[3]));

// // //Create a function that returns only the last element in the fruits array
// function lastFruit (juice){
//     console.log(juice)
//     return juice[juice.length-1]
// }
// console.log(lastFruit(fruits));

// // //Create a function that returns [peach', 'lemon', 'plum', 'grape']
// function removeFirstElement (fruits){
    // fruits.shift()
    // return fruits.splice(2, 4)
// }
// console.log(removeFirstElement(fruits));

// function section (fruitSlice){
//     return fruitSlice.slice(2, 6)
// }
// console.log(section(fruits))


//Create a function that adds another fruit to the end of the array and returns the new array
// let fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
// function addFruit (fruit){
//     fruits.push('pineapple')
//     return fruits
// }
// console.log(addFruit(fruits))

// //Create a funciton that returns the string, 'apple and orange and peach and lemon and plum and grape and watermelon'
// function joinTheString (fruits){
//     console.log(fruits.join(' and '))
//     return fruits
// }
// console.log(joinTheString(fruits))


// //Problem 5

let names = ['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy']

// //Using the array above, create a function that returns the string, 'Hello Maurice and Chelsea!'
// function welcome (name1, name2){
//     // console.log(welcome)
//     return `Hello ${name1} and ${name2}`
// }
// console.log(welcome('Maurice', 'Chelsea'))

// function hiMaurice(studentNames){
//     console.log(studentNames)
//     console.log(studentNames[1]) //Maurice
//     console.log(studentNames[2]) // Chelsea
    
//     return 'Hello ' + studentNames[1] + ' and ' + studentNames[2] 

// }
// console.log(hiMaurice(names))


// //Create a funciton that returns the string, 'Hi Jasmine and Daja!'
function stringBack (names){
    console.log(names[0])
    console.log(names[5])

    return `Hi ${names[0]} and ${names[5]}!`
}
console.log(stringBack(names))

// //Create a function that returns the string, 'Howdy Eddy!'
function howdyEd(name){
    console.log(name[6])
    return `Howdy ${name[6]}!`
}
console.log(howdyEd(names))

// //Create a function that returns the string, 'Happy Monday, Anitria!'
// function happyMonday(name){
//     return `Happy Monday, ${name}!`
// }
// console.log(happyMonday('Anitria'))


// //Create a function that returns the string, 'Hey Tauseef!'
// function heyT(name){
//     return `Hey ${name}!`
// }
// console.log(heyT('Tauseef'))
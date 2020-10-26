//Problem 1

//Define a variable name and assign your name to it
//Create a function that returns your name
let fullName = "Jasmine Dyson"
function myName (firstName, lastName){
    return firstName + " " + lastName
}
console.log(myName('Jasmine', 'Dyson'));

//Problem 2

//Create a function that accepts 2 parameters, both of which are numbers, and returns the sum of those two numbers
function adding (num1, num2){
    return num1 + num2
}
console.log(adding(95, 96))

//Problem 3

//Create a function that returns the type of any argument that is being called in the function
let randomNames= ['Anitria', 'Chels', 'D Aja', 'Maurice', 'Eddy', 'Tauseef'];
function namesRandom (random1, random5){
    return random1, random2
} 
console.log(typeof(randomNames));

//example:
//type(400) //=> 'number'
//type('hi') //=> 'string'


//Problem 4

//var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];

//Using the array above, create a funciton that returns the 4th element in the array.
let fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
function fourthElement (individualFruit){
    return individualFruit
}
console.log(fourthElement(fruits[4]));

// //Create a function that returns only the last element in the fruits array
console.log(fourthElement(fruits[6]));


// //Create a function that returns [peach', 'lemon', 'plum', 'grape']
function removeFirstElement (fruits){
    fruits.shift()
    return fruits
    
}
console.log(removeFirstElement(fruits));

function removeFirstElementAgain (fruits){
    fruits.shift()
        return fruits
}
console.log(removeFirstElementAgain(fruits))

function removeLastElement (fruits){
    fruits.pop()
    return fruits
}
console.log(removeLastElement(fruits))


//Create a function that adds another fruit to the end of the array and returns the new array
let fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
function addFruit (fruits){
    fruits.push('pineapple')
    return fruits
}
console.log(addFruit(fruits))

//Create a funciton that returns the string, 'apple and orange and peach and lemon and plum and grape and watermelon'
function joinTheString (fruits){
    console.log(fruits.join(' and '))
    return fruits
}
console.log(joinTheString(fruits))


//Problem 5

// let names = ['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy']

//Using the array above, create a function that returns the string, 'Hello Maurice and Chelsea!'
function welcome (name1, name2){
    // console.log(welcome)
    return `Hello ${name1} and ${name2}`
}
console.log(welcome('Maurice', 'Chelsea'))

//Create a funciton that returns the string, 'Hi Jasmine and Daja!'
function stringBack (name1, name2){
    // console.log(stringBack)
    return `Hi ${name1} and ${name2}!`
}
console.log(stringBack('Jasmine', 'Daja'))

//Create a function that returns the string, 'Howdy Eddy!'
function howdyEd(name){
    return `Howdy ${name}!`
}
console.log(howdyEd('Eddy'))

//Create a function that returns the string, 'Happy Monday, Anitria!'
function happyMonday(name){
    return `Happy Monday, ${name}!`
}
console.log(happyMonday('Anitria'))


//Create a function that returns the string, 'Hey Tauseef!'
function heyT(name){
    return `Hey ${name}!`
}
console.log(heyT('Tauseef'))
let studentObject1 = {
    name: 'Tim',
    id: 1,
    age: 22
}
    
let studentObject2 = {
    name: 'Lisa',
    id: 2,
    age: 19
}
    
//Problem #1
//Using the first studentObject1 above, create a function
// that returns the string, 'Tim is 22 years old'

// function studentTwo (object){
//     for (let key in object){
//         let name = object.key
//         let age = object.age
    
//     return `${name} is ${age} years old` 
//     }   
// }
// console.log(studentTwo(studentObject1))

//Problem #2
//Create a function that takes in the two objects above, 
//check to see if the person is above the age of 21 or 
//not. If they are 21+, return the string, 
//'welcome, (name)!'
//if not, return the string, 'try again in a couple years'
// Ask about to params for this problem

// function twoStudents(object){
//     let name = object.name
//     let age = object.age
//     if (age >= 21){
//         return `welcome, ${name}!`
//     } else {
//         return `try again in a couple years`
//     }

// }
// console.log(twoStudents(studentObject1))
// console.log(twoStudents(studentObject2))

//Problem #3
//create a function that returns the keys in an array
// function keyReturn (objects){
//     return Objects.keys(studentObject1)

// }
// console.log(Object.keys(studentObject1));

//create a funciton that return the values in an array
// function valueReturn (objects){
//     return Object.values(studentObject2)
// }
// console.log(valueReturn(studentObject2))

//Problem #4
//Create a function that deletes the 'id' key value pairs

// function idDelete (objects){
//    delete objects.id
//     return objects
// }
// console.log(idDelete(studentObject1))


//Problem #5
//create a function that takes in the student objects
// above and their birthdates (come up with their birthdates)
// as parameters.
function birthDates (object){
      object['Birth'] = '7/3/89'
            return object
}
console.log(birthDates(studentObject1))

// function birthDates (object){
//     for (let key in object){
//        studentObject1['Birthdate'] = 'July 3, 1989'
//             console.log(studentObject1)
//         studentObject2['Birthdate'] = 'March 8, 2019'
//             console.log(studentObject2)
//     }
// }
// console.log(birthDates(studentObject1, studentObject2))
// console.log(studentObject2)


//This function will add a new birthdate key value pair
//to the object

// studentObject1['birthdate'] = 'May 26, 1988'
// console.log(studentObject1)
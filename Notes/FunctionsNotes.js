// write a function called fullName that takes in the parameters: your first name and last name
// return the string: 'my name is (firstName) (lastName)'

// function fullName (firstName, lastName){
//     return 'my name is ' + firstName + " " + lastName
// }

// console.log(fullName('Jasmine', 'Dyson'));

//Declare a function called myInitials, it takes in  two paramets: your firstname and latname
//return your initials
// function myIntials (firstName, lastName){
//     return firstName[0] + lastName[0]
// }
// console.log(myIntials('Jasmine', 'Dyson'))


//Declare a function called removeTheLastElement that takes in a parameter: array
//remove the last element and return the new array 

let houseSize = ['big', 'small', 'mansion', 'shack', 'trailer']
function removeFirstElement (houseSize){
    houseSize.pop()
    return houseSize
}

console.log(removeFirstElement(houseSize));
// objects only use curly brackets
// use : when dealing with object key value pairs
// when using [] you need '' around the keys

// Practice Problems

// create your own object with these key-value pairs: name, age, city
let personal = {
    name: 'Jasmine Dyson',
    age: 31, 
    city: 'Southampton'
}
console.log(personal)

// create a funciton that adds 1 to your age
function loopObjKeys(object){
   console.log(object.age) 
     object.age++  
        return object
}
console.log(loopObjKeys(personal))

// create a function that returns the keys in an array
console.log(Object.keys(personal))

// create a funciton that returns the values in an array format
console.log(Object.values(personal))

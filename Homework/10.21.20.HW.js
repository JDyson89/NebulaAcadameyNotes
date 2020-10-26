// using this array: let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// log the length of the array
console.log(days.length);

// log the 4th element in the array
console.log(days [4]);

// remove the first element in the array. Log the new array and the element removed from the array
console.log(days.shift()); // Sunday
console.log(days);

// Add 'Sunday' at the beginning of the array and log the new array
days.unshift('Sunday');
console.log(days);

// Remove the last element in the array. Log the new array and log the element removed
console.log(days.pop());
console.log(days);

// Add 'Saturday' to the end of the array and log the new array
days.push('Saturday');
console.log(days);

// replace 'Thursday' with 'Friday Junior'
days.splice(4,1, 'Friday Junior');
days.splice(-3,1, 'Friday Junior');
console.log(days);

// extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
let favoriteDay = "Friday"
console.log('My favorite day of the week is ' + favoriteDay);
console.log(`My favorite day of the week is ${favoriteDay}`);// backtick when doing $ method

// // combine these two arrays together
let phone = ['iphone', 'android'];
let laptop = ['MacBook', 'HP', 'Dell'];
console.log(phone.concat(laptop));
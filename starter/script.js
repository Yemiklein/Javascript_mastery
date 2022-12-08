'use strict';

// function logger () {console.log('my name is yemicoder');}

// logger();
// logger();
// logger();
// logger();

// const calcAge = birthYear => 2037 - birthYear;
// calcAge();
//Add Element
const friends = [ 'Dele', 'Kunle', 'Yemi', 'Bola', 'Tolu' ];
const newFriends = friends.push('James', 'Bond')

console.log(friends);
console.log(newFriends);

friends.unshift('Adeyemi', 'Raji');
console.log(friends);

//Remove Element

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Yemi'));
'use strict';

// function logger () {console.log('my name is yemicoder');}

// logger();
// logger();
// logger();
// logger();

// const calcAge = birthYear => 2037 - birthYear;
// calcAge();
//Add Element
// const friends = [ 'Dele', 'Kunle', 'Yemi', 'Bola', 'Tolu' ];
// const newFriends = friends.push('James', 'Bond')

// console.log(friends);
// console.log(newFriends);

// friends.unshift('Adeyemi', 'Raji');
// console.log(friends);

// //Remove Element

// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Yemi'));

// const yemi = {
//     firstName: 'Yemi',
//     lastName: 'Adeyemi',
//     email: 'yemiklein@yahoo.com',
//     birthYear: 1988,
//     job: 'Software Developer',
//     friends: ['Dele', 'Kunle', 'Yemi', 'Bola', 'Tolu'],
//     hasDriversLicense: true,

//     //  calcAge: function (birthYear) {
//     //     return 2022 - birthYear;

//     calcAge: function () {
//         return 2022 - this.birthYear;
//     },
// };

// console.log(yemi.calcAge())
//console.log(yemi['calcAge'](1988))


// for(let rep = 1; rep <= 10; rep++) {console.log(`lifting weights repetion ${rep}`)}

// const yemi = {
//     firstName: 'Yemi',
//     lastName: 'Adeyemi',
//     email: 'yemiklein@yahoo.com',
//     birthYear: 1988,
//     job: 'Software Developer',
//     friends: ['Dele', 'Kunle', 'Yemi', 'Bola', 'Tolu'],
// };

// const yemi = [
//     'Yemi',
//     'Adeyemi',
//     2022 - 1988,
//     'Software Developer',
//     ['Dele', 'Kunle', 'Yemi', 'Bola', 'Tolu'],

// ];

// for ( let i = 0; i < yemi.length; i++ ) { 
//     if (typeof yemi[i] !== 'string' || Boolean) continue;
    
//     console.log(yemi[i], typeof yemi[i]);

// }

// const years = [ 
//     1991,
//     2007,
//     1969,
//     2020,
// ];

// const ages = [];

// for ( let i = 0; i < years.length; i++ ) {
//     ages.push(2022 - years[i]);
// }
// console.log(ages);

// for ( let i = 0; i < yemi.length; i++ ) { 
//     if (typeof yemi[i] !== 'string') continue;
    
//     console.log(yemi[i], typeof yemi[i]);

// }

// const yemi = [
//     'Yemi',
//     'Adeyemi',
//     2022 - 1988,
//     'Software Developer',
//     ['Dele', 'Kunle', 'Yemi', 'Bola', 'Tolu'],
// ];

// for ( let i = yemi.length - 1; i >= 0; i-- ) {
//     console.log(i, yemi[i]);
// }

for ( let exercise = 1; exercise < 4; exercise++ ) {
    console.log(`-------- Starting exercise ${exercise}`);

    for ( let rep = 1; rep < 6; rep++ ) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }

    
}
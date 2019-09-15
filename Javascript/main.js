// Console stuff
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

// variable types: var (global), let (block), const (constant)
const name = 'John';
const age = 69;
const rating = 4.20; //no real float, decimals also considered as a 'number' type
const isCool = true;
const x = null; //the typeof of null is an object cause js is weird
const y = undefined;
let z;

console.log(typeof name); // checking the type of a variable

// Concatenation
console.log('My name is ' + name + ' and I am ' + age); //old way
// Template String
const intro = `My name is ${name} and I am ${age}` //use ` (tilde key, the symbol under ~)
console.log(intro);

// String methods
const s = 'Hello World!';

console.log(s.length);
console.log(s.toUpperCase()); //s.toLowerCase() also works
console.log(s.substring(0, 5)); //gets substring using start and end index
console.log(s.split(' '))

/* multi
line
comments */

// Arrays
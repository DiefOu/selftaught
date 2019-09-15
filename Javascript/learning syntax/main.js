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
const numbers = new Array(1,4,6,7,10); //using a constructor to make arrays
const fruits = ['apples', 'oranges', 'pears', 10, true]; //multiple data types in same array is allowed

fruits[3] = 'grapes'; //array const can be modified, but not reassigned
fruits.push('mangos'); //.append() is .push() in js
fruits.unshift('strawberries'); //add to beginning of array
const last = fruits.pop(); //removes last object of array
Array.isArray(fruits); //check to see is object is an array

console.log(fruits[1]); //nuff said
console.log(fruits.indexOf('oranges')); //also nuff said

// Object Literals
const person = {
    firstName: 'John', //notice the syntax; don't use '=' for assigning things
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: { // Objects inside objects
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName, person.lastName); //multiple calls separated by a space
console.log(person.hobbies[1]);
console.log(person.address.city);

// Destructuring
const {firstName, lastName, address:{city}} = person; //'pulling out' the firstName and lastName variables for use outside the object
console.log(firstName, city);

person.email = 'john@gmail.com'; //add attributes to the object

// Arrays of Objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3 ,
        text: 'dentist appt',
        isCompleted: false
    }
];

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos); //convert the array of objects into JSON
console.log(todoJSON);

// For
for(let i = 0; i < 10; i++){
    console.log(i);
}

// While
let i = 0;
while(i < 10) {
    console.log(i);
    i++;
}

// ForOf
for(let todo of todos) { //similar to 'for todo in todos' in python
    console.log(todo.text);
}

// ForEach - similar to forOf i guess?
todos.forEach(function(todo) {
    console.log(todo.text);
});

// map - outputs an array
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

// filter - outputs filtered list of object from array
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true; //triple equals
});
console.log(todoCompleted);

// combinations of these loops
const todoCompletedName = todos.filter(function(todo){
    return todo.isCompleted;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompletedName);

// if statements
const a = 10;
if(a === 10){ //double equals doesn't compare datatypes ('10' vs 10), triple equals does
    console.log('a is 10');
} else if (a > 10) {
    console.log('a is greater than 10');
} else {
    console.log('a is less than 10');
} // '||' for boolean OR, '&&' for boolean AND

// Ternary operators
const b = 10;

const colour = x > 10 ? 'red' : 'blue'; // var = (condition) ? (if true) : (if false)
console.log(colour); // returns blue cause b not > 10

// switches
switch(colour) {
    case 'red':
        console.log('colour is red');
        break;
    case 'blue':
        console.log('colour is blue');
        break;
    default:
        console.log('colour is not red of blue');
        break;
}

// Functions
function addNums(num1 = 1, num2 = 1) { //setting both default values to 1
    return num1 + num2;
}
console.log(addNums(2, 3));

// Arrow functions - used for 1-line return functions
const subtractNums = (num1 = 1, num2 = 1) => num1 - num2;
const addFive = num1 => num1 + 5;
console.log(subtractNums(), addFive(4));

todos.forEach((todo) => console.log(todo)); //can be combines with forEach loops

// Objects with a Constructor function
function Person(firstName, lastName, dob) { // must start with a capital letter
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // Date objects exist in js
    // Hide object functions from log output with prototyping (see below)
    //this.getBirthYear = function() {
    //    return this.dob.getFullYear();
    //}
    //this.getFullName = function() {
    //    return `${this.firstName} ${this.lastName}`;
    //}
}

// Prototyping object methods
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Jane', '2-1-1990');

console.log(person1);
console.log(person2.dob); //Accessing date from object
console.log(person1.getBirthYear());
console.log(person1.getFullName());

// Classes (added in ES6)
class CoolPerson {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


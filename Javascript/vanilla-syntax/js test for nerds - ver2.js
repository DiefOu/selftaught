// This is version 2 after feedback

/* MC portion of the test
1. c
2. b
3. b
4. d
*/

// Coding Portion
// Q1
const arr = ['h', 'e', 'l', 'l', 'o', ' ', 't', 'h', 'e', 'r', 'e', ' ', 'q', 't'];
function whaleTranslator(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 'p' || arr[i] === 'q') {
			arr.splice(i, 1);
		} else if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
			arr.splice(i, 0, arr[i]);
			i++;
		}
	}
	return arr.join('');
}
console.log(whaleTranslator(arr));

// Q2 - revised
// Hope you're ok with me stealing this function from the MDN
function getRandomInt7to34() {
	return Math.floor(Math.random() * Math.floor(28) + 7);
}

let x;
for (let i = 0; i < 94; i++) {
	x = getRandomInt7to34();
    console.log(x);
}
for (let i = 0; i < 2; i++) {
	console.log(x)
}

// Q3
let str = 'hello hello and goodbye everyone!';
let arr = ['world', 'hello'];

function func1(arr, str) {
	strArr = str.split(' ');
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < strArr.length; j++) {
			if (arr[i] === strArr[j]) {
				strArr.splice(j, 1);
				j--;
			}
		}
	}
	return strArr.join(' ');
}

console.log(func1(arr, str));

// Q4 - copy pasted your suggested answer
// Is there a better way that is completely different
let obj = {
    crew: {
        dennis: {
            role: 'Driver'
        },
        david: {
            role: 'Navigator'
        },
        peter: {
            role: 'Engineer'
        }
    }
}

for (member in obj.crew) {
    console.log(obj.crew[member.role]); // this line returns undefined for everyone's roles
}

// Q5 - copy pasted your suggested answer
let people = {
	alumni: {
		david: {
			age: 34,
			program: 'Gender Studies'
		},
		dennis: {
			age: 99,
			program: 'History of Modern Pop Dance'
		}
	},
	students: {
		peter: {
			age: 12,
			program: 'Ecological Distribution of Gender Studies'
		}
	}
}

// Loop through alumni names
for (alumni in people.alumni) {
	console.log(alumni)
}

// Looping through everyone's program and age
for (uoft in people) {
	for (person in people[uoft]) {
		console.log(people[uoft][person].age, people[uoft][person].program);
	}
}

// Q6
let func1 = name => console.log(`hello ${name}!`)
func1('john');
/* Arrow functions can make one line functions more compact by having
 the entire declaration and what the function does in one line. Not sure
 if it's more memory efficient or anything though; less lines of code = less
 things stores in ram?
*/

// Q7
// To be transparent, I had to google constructing a object with inheritance
class Animals {
	constructor(name, type, energy=30) {
		this.name = name;
		this.type = type;
		this.energy = energy;
	}
	play(hours) {
		this.energy -= hours;
	}
}
class Dog extends Animals {
	constructor(name, type, energy=30, sound) {
		super(name, type, energy);
		this.sound = sound;
	}
	bark(sound) {
		for (let i = 0; i < 3; i++) {
			console.log(this.sound);
		}
	}
}
let dogo = new Dog('bob', 'chihuahua', 50, 'meow');
dogo.bark()


// Q8
// Incomplete, doesn't give desired output but I don't know how to do it anyway else.
// UPDATE: forgot array.includes() exists, made life easier
const arr1 = [1,2,3,4,5];
const arr2 = [3,1,2];

function func1(arr1, arr2) {
    let noOverlap = arr1.filter(function(e){
        return !(arr2.includes(e));
    });
    return noOverlap;
}
console.log(func1(arr1, arr2));

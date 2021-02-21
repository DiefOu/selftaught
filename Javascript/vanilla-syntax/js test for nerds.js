/* MC portion of the test
1. c
2. b
3. a
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

// Q2
// Hope you're ok with me stealing this function from the MDN
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

let x;
for (let i = 0; i < 94; i++) {
	x = getRandomInt(28) + 7;
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

// Q4
// I think this should theoretically work but I have no idea why
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
    console.log(member.role); // this line returns undefined for everyone's roles
}

// Q5
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

// Looping through eveyrone's program and age
for (alumni in people.alumni) {
    console.log(alumni.program, alumni.age)
}
for (student in people.students) {
    console.log(student.program, student.age)
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
function func1(arr1, arr2) {
	arr2.forEach(function (f) {
		arr1.forEach(function (e) {
			if (e === f) {
				arr1.splice(arr1.indexOf(f), 1);
			}
		});
	});
}
const arr1 = [1,2,3,4,5];
const arr2 = [3,1,2];
console.log(func1(arr1, arr2));

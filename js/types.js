/**
 * var -> put the variable in global scope, not recommended in modern JS
 * let -> block scope, can be reassigned
 * const -> block scope, once assigned can't be changed
 */

var one = 'one';
let two = 'two';
two = 2; // can be reassigned
const three = 'three'; // can't be re-assigned

/**
 * types in javascript
 * number
 * string
 * object
 * boolean
 * symbol
 */

// use typeof for checking or determining the type of values at runtime
console.log("1:",typeof 12 === 'number');
console.log("2:", typeof '12' === 'string');
console.log("3:", typeof { name: 'John Doe' } === 'object');
console.log("4:", typeof true === 'boolean');
console.log("5:", typeof Symbol() === 'symbol');

/**
 * functions
 */
let john = "John";
function printJohn() {
    john = `${john} Doe`;
    let age = 30;
    let typeOfJohn = typeof john;
    console.log("6:", john,age, typeOfJohn);
}
printJohn();

try {
    // this will break
    console.log("7:",age)
} catch (error) {
    console.log("7:", "age not accessible here:");
}


/**
 * functions with args and return value
 */

function printMessage(message) {
    console.log("8:", message);
}
printMessage("Javascript is Awesome!!");

function sum(a, b) {
    return a + b;
}

const result = sum(2, 3);
console.log("9:", result);


/**
 * objects
 *
 * arrow function will not have this context, hence normal function is used for fullName
 */
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: '22',
    fullName: function () { return `${this.firstName} ${this.lastName}`; }
}

const fullName = user.fullName();
console.log("10:", fullName);

/**
 * Objects can be iterated through Object.keys or Object.values
 */
Object.keys(user).forEach(key => {
    const value = user[key]; // dynamically accessing the value using key
    console.log("11:", key, value);
});

Object.values(user).forEach(value => {
    // doesn't make sense to log function
    if (typeof value !== 'function')
        console.log("12:", value);
});

/**
 * object property can be extended or deleted
 */

user.address = 'India';
console.log("13:", user);

delete user.age;
console.log("14:", user);
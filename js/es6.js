class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class AdminPerson extends Person {
    constructor(name, age, adminId) {
        super(name, age);
        this.adminId = adminId;
    }
}

let obj1 = new Person('arvind', 30);
let obj2 = new AdminPerson('arvind', 30, 12);

// arrow func will not access of this key
let person = {
    firstName: 'arvind',
    lastName: 'kumar',
    age: 30,
    adminId: 12,
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};


if (person.hasOwnProperty('firstName')) {
        // access obj property
    person.firstName
    person['firstName'];// this will helpful when access property with property name at run time
}

// spread operator -> spread elem of arr or object into new array or obj
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6, [7, 8, 9]];
let all = [...arr1, ...arr2, 10, 11]; // [1, 2, 3, 4, 5, 6, [7, 8, 9], 10, 11];
// deflate -> lodash

let o1 = { k1: 'v1', k2: 'v2' };
let o2 = { k3: 'v3', k4: 'v4' };
let finalObj = { ...o1, ...o2 }; // an obj with all key values
// {k1: 'v1', k2: 'v2', k3: 'v3', k4: 'v4'}

let newO1 = { ...o1, k2: 'new value' }; // {k1: 'v1', k2: 'new value'}

//default func params
function sum(a, b = 2) {
    return a + b;
}

sum(1); // 3
sum(1, 5); // 6

// destrcturing and assign to variable
function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

fullName({ firstName: 'arvind', lastName: 'kumar' });


function fullName1(obj) {
    const { firstName, lastName } = obj;
    return `${firstName} ${lastName}`;
}

fullName1({ firstName: 'arvind', lastName: 'kumar' });


// template leterals
let val = 5;
console.log(`value is ${val}`);


// async, await, generator funcs
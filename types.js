// var, let or const

// var -> its  gonna be  on global scope

var name = 'arvind';
let name1 = 'anurag';
const name2 = 'dilip';

name1 = 'anurag1';
// name2 = 'dilip2';

console.log(typeof 12 === 'number');
console.log(typeof '12' === 'string');
console.log(typeof { a: 'arvind' } === 'object');
console.log(typeof true === 'boolean');
console.log(typeof new Symbol() === 'symbol');
// 'function'

let age = 30;
function printer() {
    age = 31;
    console.log(age, typeof age === 'number');
}

printer();

const userData = {
    name: 'arvind',
    age: '30',
    printAge: () => console.log(30, 40)
}

// JS function can return another function or accepts a func as argument


const express = {
    use: () => { },
    get: () => {},
}

function express() {
    return {
        use: function (middleware) { },
        get: function (path, fn) {
            fn('req', 'res');
        }
    }
}

const app = express();
app.use(cookieParser);
app.get('/help', function (req, res) {
    // access cookie here
    // api related stuffs
});

// collection
let arr = [];
arr = [1, 2, 'three', { itme: 'four', name: 'arvind' }, { isnumberArray: false }, function(){}];
console.log(arr[0], arr[3]);

if (typeof arr[3] === 'object') {
    if (arr[3].hasOwnProperty('name')) {
        const myName = arr[3].name;
    }
}

push, pop, shift, unshift
arr.push(10);
arr.pop();

arr.unshift('Zero');
arr.shift();

arr[2] = 3;
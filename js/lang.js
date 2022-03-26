// array -> collection with zero based index

let arr = [1, 2, 3, 4, 5];

// index of 1 is 0, index of 2 is 1,

const indexOf3 = arr.indexOf(3); // 2

arr.indexOf(13); // -1

// length of arr
arr.length;

//push, pop -> operated at the end of array
// shift and unshift -> operated at the start of array

arr.concat([6, 7, 8]);
// [1, 2, 3, 4, 5, 6, 7, 8];

// for, map, forEach

function sum(a, b) {
    return a + b;
}

// es6 -> arrow function // functional don't have any state
(a, b) => a + b;

a => a * 2;

(a, b) => {
    console.log(a, b)
    return a + b;
}

// forEach will loop through each array element and it will not return anything;
// syntatic sugar of for loop

// create an array of arr with twice the value

let newArray = [];
arr.forEach((value, index) => {
    console.log(value, index);
    newArray.push(2 * value);
});

// map func will return the arr with same number of elems
const resultArr = arr.map(val => {
    console.log(val);
    return 2 * val;
});



// filter -> it will filter the arr, output num of elems can be less than actual arr

const oddArr = arr.filter(elem => elem % 2);

// we can chain multiple arr func
const twiceOfOddElems = arr.filter(elem => elem % 2).map(elem => elem * 2);

//  resultArr -> twice of arr

// sorting the arr

// return the new sorted array
let arr1 = ['aa', 'cc', 'bb'];
arr1.sort((a, b) => a - b);
// ['aa', 'bb', 'cc']

let arr2 = [5, 1, 2];
arr2.sort((a, b) => a - b);
// [1, 2, 5]

// Array in es6
let namesEs6 = Array(3); // create an array of size 3 and initialise array with undefined
// [undefined, undefined, undefined];

let namesEs61 = Array.of('arvind');
// create an array with one element 'arvind'

// Array.form(arr, arrowFn, thisArgs);
let prices = [100, 200, 300];
let priceWistGst = Array.from(prices, (price) => price + price * 0.10);

let priceWistGst1 = Array.from(prices, (price) => price + price * this.gst, { gst: 0.10 });

arr.includes(3); // true

 arr = [1, 2, 3, 4, 5];
arr.find(elem => elem === 3); // elem 3 is present or not, same you can do with includes
arr.findIndex(elem => elem === 3); // 2

let c = 5;
// some other fn which changes value c

// FB -> for same input -> it should always return same output
// function
(a, b) => a + b + c;

1, 2



// let arr = [];
// arr = [1, 2, 'three', { item: 'four', name: 'arvind' }, { isnumberArray: false }, function(){}];
// console.log(arr[0], arr[3]);

// if (typeof arr[3] === 'object') {
//     if (arr[3].hasOwnProperty('name')) {
//         const myName = arr[3].name;
//     }
// }

// push, pop, shift, unshift
// arr.push(10);
// arr.pop();

// arr.unshift('Zero');
// arr.shift();

// arr[2] = 3;









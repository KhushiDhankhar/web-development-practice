/*

    ->  Iterable - object where you can use the for-of loop
    -> Array-like object - Any object with length property and use indexes to access items

    -> Arrays as Objects: Arrays in JavaScript are a specific type of object that has numeric keys
    (indices) and a length property. The indices are automatically maintained, and the length property is
    utomatically updated when you add or remove elements from the array.

    -> typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and regular
    objects.
*/

// array 
let arr = [];
console.log(typeof(arr));  // object

// object 
let obj = {};
console.log(typeof(obj));  // object

//methods of creating array

//1 . using array constructor 
let cars = new Array('audi' , 'BMW' , "Porsche" , "swift");
console.log(cars);  // [ 'audi', 'BMW', 'Porsche', 'swift' ]

//2 . using array literal
let fruits = ["apple" , "mango" , "cherry" , "blueberry"];
console.log(fruits);   // [ 'apple', 'mango', 'cherry', 'blueberry' ]


// accessing values by 0-based index from array , cannot access by values 
console.log( fruits.at(2) );    // cherry
console.log(fruits[3]);   // blueberry
console.log(cars[0]);  // audi
console.log(cars.at(-1));  // swift


//modifying values
cars[2] = "toyoto";
console.log(cars);   // [ 'audi', 'BMW', 'toyoto', 'swift' ]


// array traversal / iterating over array

let arr1 = ["hello" , "hi" , "hiii" , "hellooo" , "helooo jii"];

// 1. for..of loop -> also known as iterable
// for ... of Loop: The for ... of loop is used to iterate over the values of an iterable
// object, such as arrays, strings, or other iterable objects.

console.log();
console.log( "for of loop " );
for(let items of arr1){
    console.log(items);
}

for(let i = 0;i < arr1.length ;i++){
    console.log(arr1[i]);
}

// 2: for in loop
// for ... in Loop: The for ... in loop is used to iterate over the properties (including
//indices) of an object.  ... return index 

console.log();
console.log( "for in loop " );
for(let items in arr1){
    console.log(items);
}

//3. forEach loop 
// The arr. forEach() method calls the provided function once for each element of the
// array. The provided function may perform any kind of operation on the elements of the
// given array.  doenot return value , change original array ,, cannot changed with array methods

/*
    Syntax - forEach

        array. forEach(function
            callback(currentValue, index, array) {
            // Your logic here
        }, thisValue);

    array: The array on which the foreach method is called.
    callback: A function that will be called once for each element in
    the array.
    currentValue: The current element being processed in the array.
    index (optional): The index of the current element being
    processed.
    array (optional): The array foreach was called upon.
    thisValue (optional): A value to use as this when executing the
    callback function.

    array. forEach((currentValue, index, array)
        => { // Your logic here }, thisValue);

*/

console.log();
console.log( "forEach loop " );
fruits.forEach( (currEl , idx , fruits) => {
    console.log(` ${idx} -> ${currEl}`); 
    }
);

// show  m times whole array
fruits.forEach( (currEl , idx , fruits) => {
    console.log(fruits); 
    }
);


// for each does not return anything for ex 
const newarr = fruits.forEach( (currEl , idx , fruits) => {
    return (` ${idx} -> ${currEl}`);
    }
);

console.log(newarr);   // undefined

//4 . for map function 
// map() creates a new array from calling a function for every array element. map()
// does not change the original array.
// return value , doenot change og array

/*
    Syntax - Map()

    array.map(function callback(currentValue, index, array) {
        // Your logic here
    }, thisValue);

    fat arrow method 
    array. map((currentValue, index, array)
        => { // Your logic here }, thisValue);


*/


console.log();
console.log( "map function " );
fruits.map( (currEl , idx , fruits) => {
    console.log(` ${idx} -> ${currEl}`); 
    }
);

const newarr1 = fruits.map( (currEl , idx , fruits) => {
    return (` ${idx} -> ${currEl}`);
    }
);

console.log(newarr1);   // [ ' 0 -> apple', ' 1 -> mango', ' 2 -> cherry', ' 3 -> blueberry' ]

// to do practice 
//multiply each element of array by 2

const arr3 = [1,2,3,4,5,6];
const mult = arr3.map( (currEl) =>{
    return (currEl * 2);
});

console.log(mult);

/*
 How to Insert, Add, Replace and Delete Elements in Array(CRUD)

    1: push(): Method that adds one or more elements to the end of an array. , return new length
    2: pop(): Method that removes the last element from an array.
    3: unshift(): Method that adds one or more elements to the beginning of an array.
    4: shift(): Method that removes the first element from an array.
*/

let person = ['khushi' , 'siya' , 'nia'];
console.log(person);

console.log(person.push('Gita'));  // return new size 
console.log(person);

console.log(person.push('newname' ,'oldname'));
console.log(person);

console.log(person.unshift('great'));  // return newsize
console.log(person);

console.log(person.pop()); // return what is removed 
console.log(person);

console.log(person.shift());
console.log(person);

/*
    The splice() method of Array instances changes the contents of an array by
    removing or replacing existing elements and/or adding new elements in place

    syntax
     splice(start, deleteCount, item1, item2, ... ,  itemN)

*/


console.log(person.splice());  //[]
//console.log(person.splice(1)); // [ 'siya', 'nia', 'Gita', 'newname' ]  , first ko choddke baki sab return kiya 

console.log(person.splice(2));  // [ 'nia', 'Gita', 'newname' ] if above statement reains commented

console.log(person);  // [ 'khushi', 'siya' ]

console.log(person.splice(1,1,"siri"));  // [ 'siya' ]
console.log(person);  // [ 'khushi', 'siri' ]

// what if you want to add the element before last element
    person.splice(-1,0,"taehyung");  
    console.log(person);   // [ 'khushi', 'taehyung', 'siri' ]

// at end
     person.splice(person.length,0,"puriii");
     console.log(person);  //  [ 'khushi', 'taehyung', 'siri', 'puriii' ]


// searching 
// for search we have - indexOf , lastIndexOf & includes

const num = [1,2,3,4,5,6,7,8,4,5,6,6,9];

/*
    indexOf()
        indexOf Method: The indexOf method returns the first index at which a
        given element can be found in the array, or -1 if it is not present.

        Syntax: indexOf(searchElement, fromIndex)
                indexOf(searchElement)
*/

console.log(person.indexOf("khushi")); //0

console.log(num.indexOf(7));  // 6
console.log(num.indexOf(3,5));  // -1 cuz it is not in that index

console.log(num.indexOf(6));  // 5
console.log(num.lastIndexOf(6));  //12

console.log(num.lastIndexOf(12));  // -1
console.log(num.lastIndexOf(6,8));  // 5 -> check from backward in that range 0 to 8

console.log(person.includes("taehyung"));  // true

// todo challenge 

const months = ["jan" ,"feb" , "march" ,"apr" ,"june" ,"july"];

months.push("dec");
console.log(months.splice());  //[]

var indexToUpdate = months.indexOf("march");
months.splice(indexToUpdate, 1, "March");  // updated march , have to delete 1 item prev march

console.log(months);

// delete june

var idx = months.indexOf("june");
months.splice(idx,1);

console.log(months);

// filter in an array

const num1 = [1,2,10,3,4,5,3,4,2,6,3,8,9,6];

/* 1: find Method: The find method is used to find the first element in an array
    that satisfies a provided testing function. It returns the first matching element or
    undefined if no element is found.

        same syntax as of map function
*/

const res = num1.find((currEl) =>{
    return currEl > 5;
});

console.log(res);  //10 return a larger no than 5 
console.log(typeof(res));  // number


/* 2: findIndex.Method: The findIndex() method of TypedArray instances returns the
    index of the first element in a typed array that satisfies the provided testing
    function. If no elements satisfy the testing function, -1 is returned.
*/

const res1 = num1.findIndex((currEl) =>{
    return currEl > 5;
});

console.log(res1);  //10 return index of larger no than 5 
console.log(typeof(res1));  // number


/* 3: filter Method: The filter method creates a new array with all elements that
    pass the test implemented by the provided function.
    syntax:
        filter(callbackFn)
        filter(callbackFn, thisArg)

*/

const res3 = num1.filter((currEl) =>{
    return currEl > 5;
});

console.log(res3);  // return an array no. larger than 5 
console.log(typeof(res3));  // object

/* usecase 1 : In E-commerce website when we want to Remove or delete any product from
addToCart page.
*/

//1 Ex. le'ts say user wants to delete value 6.

let value = 6;
const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

let updatedCart = numbers.filter((currel) => {
    return currel != value;
});

console.log(updatedCart);  //  [ 1, 2, 3, 4, 5, 7, 8, 9 ]

/*  Q: Given an array of products where each product has a name and a
    price, write a function that uses the filter method to return an
    array containing only the products with a price less than or
    equal to 500.
*/

const products = [
{ name: "Laptop", price: 1200 },
{ name: "Phone", price: 800 },
{ name: "Tablet", price: 300 },
{ name: "Smartwatch", price: 150 },

];

const result = products.filter((currel) => {
    console.log(currel);
    return currel.price <= 500;
});

console.log(result);

// filter unique values
let unique = numbers.filter((currel , idx,arr) =>{
    // console.log(idx);  // tell index in array 
    // console.log(arr.indexOf(currel)); //tell the first occuarnce idx of an element
    return arr.indexOf(currel) === idx;  // if they are equal only then they are unique
});

console.log(unique);

// 2nd method using set
console.log(new Set(numbers));  //Set(9) { 1, 2, 3, 4, 6, 5, 7, 8, 9 }

console.log([new Set(numbers)]);  // [ Set(9) { 1, 2, 3, 4, 6, 5, 7, 8, 9 } ]
console.log([...new Set(numbers)]); //spread method
// [1, 2, 3, 4, 6, 5, 7, 8, 9 ]


// How to Sort and Compare an Array
/* Sorting an Array: The sort method sorts the elements of an array in place and returns
   the sorted array. By default, it sorts elements as strings.
*/

const biscuits = ["parle-G" , "sunfeast" , "tiger" , "bounce" , "jim-jam" , "good-day"];

biscuits.sort();
console.log(biscuits);

// biscuits.sort(-1);  //error
// console.log(biscuits); 

numbers.sort();
console.log(numbers);

// to sort them in desc order : use compare callback function

const sorted = numbers.sort((a,b) => {
    if(a > b) return -1;
    if(b > a) return 1;
});

// a-b :  a>b  return 1 => switch the order
// a < b return -1 => keep the order

console.log(numbers);


//square using map

const n = [1,2,3,4,5,16,34,23,56,78,90,76];
let res5 = n.map((currel) => currel * currel);

console.log(res5);

// sqaure only those who is even

let res4 = n.map((currel) => {
    if(currel % 2 == 0){
        return currel * currel;
    }
    return currel;
});

console.log(res4);

//if want only those no. who are even and square them

const numm = n.map((currel) => {
    if(currel % 2 == 0){
        return currel * currel;
    }
}) . filter((currel) => currel != undefined);

console.log("if want only those no. who are even and square them")
console.log(numm);

// another way of writing same thing 
const evensq = n
                .map((curr) => (curr % 2 === 0 ? curr*curr : undefined) )
                .filter((curr) => curr != undefined );

console.log(evensq);


// return array where each string is capitalized
const word = ["apple" , "banana" ," cherry" ,"date"];

const ress = word.map((currel) => {
    return currel.toUpperCase();
});

console.log(ress);  // [ 'APPLE', 'BANANA', ' CHERRY', 'DATE' ]


// return array with prefix ms.
const names = ["khushi" , "puriii" , "tanya" , "dipshi" , "khevya"];

const result1 = names.map((currel) => {
    return `ms. ${currel}`;
});

console.log(result1);
// [ 'ms. khushi', 'ms. puriii', 'ms. tanya', 'ms. dipshi', 'ms. khevya' ]


/*
    Reduce method :
        The reduce method in JavaScript is used to accumulate or reduce an array to
        a single value. It iterates over the elements of an array and applies a
        callback function to each element, updating an accumulator value with the
        result. The reduce method takes a callback function as its first argument and
        an optional initial value for the accumulator as the second argument.

            syntax:
                array.reduce(function callback(accumulator , currVal , idx , array){
                    // your logic here 
                    // return updated accumulator value
                } , initialValue);

*/

// ex : add product prices

const productprices = [100,200,300,700,800,9887];

const sum = productprices.reduce((accum , el) =>{
    return accum + el;
},0);

console.log(sum); //11987
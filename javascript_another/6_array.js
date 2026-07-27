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

const num = [1,2,3,4,5,6,7,8,,4,5,6,6,9];

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

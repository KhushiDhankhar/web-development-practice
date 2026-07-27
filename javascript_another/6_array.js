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
// given array.

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


//4 . for map function 
// map() creates a new array from calling a function for every array element. map()
// does not change the original array.
/*
    Syntax - Map()

    array.map(function callback(currentValue, index, array) {
        // Your logic here
    }, thisValue);

    fat arrow method 
    array. map((currentValue, index, array)
        => { // Your logic here }, thisValue);


*/




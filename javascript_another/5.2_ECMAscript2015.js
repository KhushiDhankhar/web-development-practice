// Ecma script 2015 : 
// let and const , template strings , default arguments , arrow functions
// deconstructing , object properties , rest operators, spread operators 

//let and const 
// let = block scope , mutuable values , can reassign its values
let a = 10;
console.log(a);

a = 20;
console.log(a);

// cosnt = block scope , immutuable ,cannot reassign 
const b = 20;
console.log(b); 

// b = 30;   // cannot change b again as it is const 
console.log(b);

// diff btw let and var 

// let = block level scope , if declared inside a block cannot access it outside the block 
// but with var = we can access it outside block too 

let msg = "heloo";

if(true){
    msg = "hello ji  , how are u ?";
    console.log(msg);   //hello ji  , how are u ?
}

msg = "hii, i hoope u are doing great";
console.log(msg);  // hii, i hoope u are doing great


var msg2 = "good";
if(true){
    msg2 = "hello ji  , how are u ?";
    console.log(msg2);   // hello ji  , how are u ?
}

msg2 = "hii, i hoope u are doing great";
console.log(msg2);  // hii, i hoope u are doing great


// now iff not defining var and let ouside , lets defiine them in if block only and try to access it outside if block

// var
if(true){
    var msg3 = "hello ji  , how are u ?";
    console.log(msg3);   // hello ji  , how are u ?
}

console.log(msg3);   // hello ji  , how are u ?

//let 
if(true){
    let msg4 = "hello ji  , how are u ?";
    console.log(msg4);  // hello ji  , how are u ?
}

//console.log(msg4);  // ReferenceError: msg4 is not defined


// const
if(true){
    const hi = "hello ji";
    console.log(hi);  // hello ji
}

//console.log(hi);  // Uncaught ReferenceError: hi is not defined

// In ECMAScript 6 (ES6), template strings, also known as template literals, provide a convenient and
// flexible way to create strings in JavaScript. Template strings are enclosed in backticks (``) rather than
// single or double quotes.

let firstName = "Khushi";
let lastName = "Dhankhar";

let fullName = firstName + lastName;  // earlier method
console.log(fullName);  //KhushiDhankhar

let FullName = `${firstName} ${lastName}`;  // latest
console.log(FullName);  // Khushi Dhankhar


// String Interpolation: Template strings support string interpolation, allowing you to embed
// expressions directly within the string. Interpolated expressions are enclosed in ${}


//example 
let age = 21;

console.log(`hii , i am ${age} years old.`);  //hii , i am 21 years old.

// multi line string
let multiLine = `
    Hello guys ,this is an example of multiline string
    I hope you are doing good in life , 
    I am also doing doing good.
    Nice meeting you.
    `

console.log(multiLine);
/*
    Hello guys ,this is an example of multiline string
    I hope you are doing good in life , 
    I am also doing doing good.
    Nice meeting you.
*/

// Expression Evaluation: Template expressions can
// include any valid JavaScript expression.

var i = 8;
console.log("5 * " + i + " = " + 5*i);  // earlier method 5 * 8 = 40
console.log(`5 * ${i} = ${5*i}`);  // with template  5 * 8 = 40

/* In ECMAScript 6 (ES6), default parameters were introduced, providing a more concise way to handle
function parameter defaults. Default parameters allow you to specify default values for function
parameters in the function declaration itself. If a parameter is not provided when the function is
called, the default value is used.

Default function parameters allow named parameters to be initialized with default values if no value
or undefined is passed.
*/


// Write a function to find sum of two numbers? What if during function call user only passed one
// argument?

function sum(a , b = 10){
    return a+b;
}

console.log( sum(5,5) );  //10
console.log( sum(7) );   //17

// fat arrow function or arrow func = concise way to write anonymous func

// earlier method of anonymous function
const mult = function(a = 10, b = 10){
    let res = `The multiplication of ${a} and ${b} = ${a*b}`;
    console.log(res);
}

mult(5,19);  // The multiplication of 5 and 19 = 95
mult(7);   // The multiplication of 7 and 10 = 70
mult();  // The multiplication of 10 and 10 = 100


// fat arrow method remove function and write => after parameter list
const add = (a = 10 , b = 10) => {
    let res = `The sum of ${a} and ${b} is ${a+b}`;
    console.log(res);
}

add(5,5);  // The sum of 5 and 5 is 10
add(8); // The sum of 8 and 10 is 18
add();  // The sum of 10 and 10 is 20


// more simplified , in one line ; with 1 line = no need of curly braces
const sub = (a = 10 , b = 80) => console.log(`The difference of ${a} and ${b} is ${a-b}`);

sub(9,6);  // The difference of 9 and 6 is 3
sub();  //The difference of 10 and 80 is -70



//traditional function me without return , kisi aur variable me assign hi nhi kr paenge 
// but in fat arrow single line , can do

// if there is only one parameter , can omit paranthesis , but without parantheseis can make it default parameter 
const square = a => console.log(`the square of ${a} = ${a*a}`); 
square(5);   // the square of 5 = 25

// if there are no parameters , use empty set set of parantheseis
const greet = () => console.log("I hope u have a great day");
greet();   // I hope u have a great day

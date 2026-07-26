// functions

// function functionName(parameters){
//     // code 
//     return res;
// }


// table 
function table(a){
    for(var i=1;i<=10;i++){
        console.log(`${a} * ${i} = ${a*i}`);
    }
}

table(5);

//  sum of two numbers

function sum(a,b){
    var ans = a+b;
    return ans;
}

console.log(sum(5,10));
console.log(sum(15,110));
console.log(sum(58,108));

// func def 
function greet(name){
    console.log(`hello ${name} , I hope you are doing good.`)
}

// func call

greet("user");
greet("khushi");

//function expression : we can write function as a expression , it can be either named or anonymous , 
// if its named it is func exp 

// func as a variable
var sayBye = function func(name){
    console.log(`Byeee ${name} , Thanks for Visiting  `)
}

sayBye("khushi");
// func("khushi");   // ->  give reference error 

// anonymous function -> function which has no name , can access them by assigning it to variable
var body = function (name){
    console.log(`hii ${name} , this is to tell u that the text u are reading now is from anonymous function`);
}

body("khushi");

// function returning values 
function sub(a , b){
    if(a > b){
        return a-b;
    }
    return b-a;
    console.log("This is a function");  // it will never run bcz a function exit after return 
}

var ans1 = sub(5,10);
console.log("The sum of two number is " + ans1);


// IIFE -- immediately invoked function exp
// it is javscript func that is defined and executed immediately after its creation , it is a way to create 
// self contained block of code that doesnot interfere with surrounding code and executes immediately

// dont write its name , and call it immediately
var tell = (function (a,b){
    console.log(a+b);
    return a+b;
})(5,10);

console.log("sum of two number is : " + tell );

// questions

// 1 func to reverse a string

function rev(a){
    var str = "";
    for(var i = a.length-1; i >= 0;i--){
        str += a[i];
    }

    return str;
}

function isPalindrome(a){
    var b = rev(a);
    return (a === b);
}

console.log(rev("hello"));  // olleh
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("Madam"));  // false

// calculator -> support add, sub, mult , div
function calculator(a,b,c){  // c = operator
    switch(c){
        case "+":
            console.log("addition of two num is :");
            return (a+b);

        case "-":
            console.log("subtraction of two num is :");
            return a-b;

        case "*":
            console.log("multiplication of two num is :");
            return (a*b);

        case "/": 
            console.log("division of two num is :");
            if(b == 0){
                alert("cannot divide by 0");  // cannot work in vscode , will get reference error  , they are supported by browser DOM 
                return ;
            }

            return a/b;
            
        default:
            alert("Invalid operator");

        
    }

}


console.log(calculator(5,10,"+"));
console.log(calculator(5,10,"-"));
console.log(calculator(5,10,"*"));
console.log(calculator(5,10,"/"));
console.log(calculator(5,0,"/"));
console.log(calculator(5,10,"7"));


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

b = 30;
console.log(b);
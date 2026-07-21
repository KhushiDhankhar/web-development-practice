// here we will know about datatypes in javavscript 

// 1 number
var num = 5;
console.log(num);
console.log(typeof(num));

//2 string 
var myName = " khushi";
console.log(myName);
console.log(typeof(myName));

//3 boolean
var isRaining = true;
console.log(isRaining);
console.log(typeof(isRaining));

//4 null
var box = null;
console.log(box);
console.log(typeof(box));   //object 

//5 undefined
var box2;
console.log(box2);
console.log(typeof(box2));

//6 bigint 
var mynumm = 134n;
console.log(mynumm);
console.log(typeof(mynumm));

//7 symbol 
var mysymbol = Symbol("u r taetae");
console.log(mysymbol);
console.log(typeof(mysymbol));

// str -> num 
let str =  "123";
console.log(str);
console.log(typeof(str))
console.log(typeof(+str));
console.log(typeof(Number(str)));


// num -> str
let num1 = 123;
console.log(num1);
console.log(typeof(num1));
console.log(typeof(String(num1)));
console.log(typeof(num1 + ""));


// checking if non empty string is truty or falsy 
var mystr = "taetae";
if(mystr){
    console.log("this is truthy");
}
else{
    console.log("this is falsy");
}


// parseInt and parseFloat

//parseInt will convert string to int 

var mystr = "123.56";
console.log(mystr);
console.log(typeof(mystr));

var mystr1 = parseInt(mystr);
console.log(mystr1);
console.log(typeof(mystr1));

// parseFloat will convert string to float
var mystr2 = "123.56";
console.log(mystr2);
console.log(typeof(mystr2))

var mystr3 = parseFloat(mystr2);
console.log(mystr3);
console.log(typeof(mystr3));


// some more examples of what parseInt and parseFloat will do 
parseInt("$123.56");  // nan
parseFloat("$123.56");

parseInt("123.56abc");  //123
parseFloat("123.56abc");  //123.56

parseInt("abc");   //NaN not a number
parseFloat("abc");  

// isNaN() function 
console.log(isNaN("abc")); //true
console.log(isNaN("123")); //false
console.log(isNaN("123abc")); // true


//equal
if(5 == 5){
    console.log("they are equal");
}
else{
    console.log("they are not equal");
}


// not equal cuz NaN can be derived from any number and the both no. will not be qual to each other
if(NaN == NaN){
    console.log("they are equal");
}
else{
    console.log("they are not equal");
}

// equal because type coercion will happen and 5 will be converted to string and then both will be compared
if(5 == "5"){
    console.log("they are equal");
}
else{
    console.log("they are not equal");
}

// some operations

10 + "20";  // '1020'  string 
9 - "5";  // 4 number
"java" + "script";  // 'javascript'
" " + " ";  // '  '
" " + 0 ; // 0 but a string
" " + o;  // Reference error cuz o is not defined
"vinod" - "thapa";  //NaN
true + true;   // 2  number
true + false;  //1 




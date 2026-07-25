// types of operators

//1 assignment op
var num = 10;
var name = "unknown";

//2 arithmetic 
var a = 10;
var b = 20;

var mul = a*b;
var div = b/a;
var add = a+b;
var sub = b-a;
var modulo = b%a;

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
console.log(modulo);

console.log('hello'/2); //NaN

var res = 0.1 + 0.2;
console.log(res.toFixed(2));  // print ans only upto 2 decimal points-> 0.30
console.log(res);  // 0.30000000000000004 due to binary to decimal rep 

console.log(0.2 + 0.2);  // 0.4
console.log('hello' * 2);  // NaN


//3 comparison
// equal to ==  -> it will check value , if both side values are equal or not

console.log(5 == '5');  // true
console.log(5 == 10);  // false
console.log(5 == 5.0); // true
console.log(5 == -5);  // false



// strict equal to ===  it will check data type too 

console.log(5 === 5); // true
console.log(5 === '5');  // false
console.log(5 === 5.0);  //true
console.log(5 === -5);  // false

//not equal to 
console.log(5 != 5); // false
console.log(5 != '5');  // false
console.log(5 != 5.0);  //false
console.log(5 != -5);  // true

// greater than ( > )

console.log(5 > 6);  // false
console.log( 5 > 5);  // false
console.log( 7 > 6);  // true
console.log(5.7 > 5); // true
console.log(-5 > 5);  // false
console.log(5 > "hello"); //false

// less than 
console.log(5 < 6);  // true
console.log( 5 < 5);  // false
console.log( 7 < 6);  // false
console.log(5.7 < 5); // false
console.log(-5 < 5);  // true
console.log(5 < "hello"); //false

//greater than or equal to 
console.log(5 >= 6);  // false
console.log( 5 >= 5);  // true

//less thn or equal to 
console.log(5 <= 6);  // true
console.log( 5 <= 5);  // true

if(5 == '5'){
    console.log("they are equal");
}
else{
    console.log("they are not equal");
}

if(5 === '5'){
    console.log("they are strictly equal");
}
else{
    console.log("they are not strictly equal");
}

//4 logical -> and && , or || , not !

// and --> return true only if both statemnets are true 
var x = 5;
var y = 23;

console.log(x > 0 && y > 0);   //true
console.log(x < 10 && y > 30);  // false

// or -> return false only if both statements are false
console.log(x < 0 || y > 0);   //true
console.log(x < 3 || y < 10);  //false
console.log(x > 3 || y > 10);  //true


// not -> invert the answers true -> false and vice versa
console.log(!(x != 3)); //false
console.log( !(x < 3 && y > 10) );    //true


// question -> if age >=18 && valid_DrivingLicence return true

var age = 18;
var haveLicence = true;

if(age >= 18 && haveLicence){
    console.log("you are allowed to drive");
}
else{
    console.log("you are not allowed to drive");
}

//5 string op

//string concatenation 
var a1 = 'hello ';
var a2 = 'world';
var a3 = a1 + a2;
console.log(a3);

// console.log(a1+a4);   // a4 is not defined so reference error
console.log("5" + 3);


//6 unary op


// 7 ternary op / conditional
// condition ? true : false

(age >= 18) ? console.log("can drive") : console.log("cannot drive");

var marks = 90;
var res = (marks >= 60) ? "pass"  : "not pass";
console.log(res);   // pass


//8 type op

typeof("hello")

// interview ques 
console.log("5"- 3); // 2 -> number
console.log(2 < 12 < 5);  // l-> r 2<12 = 1 < 5 = true
console.log('20' + 10 + 10); //201010
console.log("90" + '20' + 10 + 10);  //90201010
console.log(10 + '20' + 10);  // 102010
console.log(10 + '2-0' + 10 + '10');  // 102-01010


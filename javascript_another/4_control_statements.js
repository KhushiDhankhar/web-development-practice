// vote 

var age = 19;
var citizen = "American";
var isRegistered = true;


if(age >= 18 && citizen == "Indian" && isRegistered){
    console.log("Eligible to vote ")
}
else if(age >= 18 && citizen != "Indian" ){
    console.log("Not eligible due to citizenship status")
}
else if(age >= 18 && citizen == "Indian" && !isRegistered){
    console.log("Not eligible due to registration status")
}
else{
    console.log("not eligible to vote")
}

// odd even
var num = '-69';
if(num % 2 == 0){
    console.log("even");
}
else{
    console.log("odd");
}

// if positive , neg , 0
if(num > 0){
    console.log("positive");
}
else if(num == 0){
    console.log("zero");
}
else{
    console.log("negative");
}

// if a number is prime or not 
var num1 = 5;
var c = 0;
for(var i = 2;i < num1;i++){
    if(num1 % i == 0){
        console.log("non - prime");
        c = 1;
        break;
    }
}

if(c == 0){
    console.log("prime");
}


//switch
var day = "Monday";

switch(day){
    case "Monday" : 
        console.log("today is monday");
        break;

    case "Tuesday" : 
        console.log("today is tuesday");
        break;

    case "Wednesday" : 
        console.log("today is wednesday");
        break;

    case "Thursday" : 
        console.log("today is thursday");
        break;

    case "Friday" : 
        console.log("today is friday");
        break;

    case "Saturday" : 
        console.log("today is saturday");
        break;

    case "Sunday" : 
        console.log("let's go to movie");


    default : 
        console.log("no condition matched");
}

// area of shapes

let shape = "Square";

switch(shape){
    case "Rectangle":
        let a = 10;
        let b = 20;
        var area = a*b;
        console.log("area of rectangle = " , area);
        break;

    case "Circle":
        let r = 18;
        var area = 22/7 * r * r;
        console.log("area of circle = " , area);
        break;

    case "Square":
        let side = 5;
        var area = side*side;
        console.log("area of square = ", area);
        break;

    default:
        console.log("sorry the shape is not available");

}

// // area of shapes  work on browser console

// let shape = prompt("enter shape : ");

// switch(shape){
//     case "Rectangle":
//         let a = Number(prompt("enter length of rectangle : "));
//         let b = Number(prompt("enter breadth of rectangle : "));
//         var area = a*b;
//         console.log("area of rectangle = " , area);
//         break;

//     case "Circle":
//         let r = Number(prompt("enter radius of circle : "));
//         var area = 22/7 * r * r;
//         console.log("area of circle = " , area);
//         break;

//     case "square":
//         let side = Number(prompt("enter side of square : "));
//         var area = side*side;
//         console.log("area of square = ", area);
//         break;

//     default:
//         console.log("sorry the shape is not available");

// }


//looops

// while loop
var i = 1;
while(i <= 10){
    console.log(i);
    i++;
}

// do while loop
i = 1;
do{
    console.log(i);
    i++;
}
while(i <= 10);

// for loop 
for(var i=0;i<=10;i++){
    console.log('2 * ' + i + ' = ' + 2*i);
}


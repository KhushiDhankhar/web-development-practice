// strings : represent seq of char , created with single or double quotes
// no diff btw these two

// string properties 
// 1. length => tell size of string 

let str = "hello , have a good day";
console.log(str.length); //23

// escape characters 
 /*
    Escape Character: In JavaScript, the backslash \ is used as an escape character.
    It allows you to include special characters in a string.

Code            Result             Description
 \'               '               Single quote
 \"               "               Double quote
 \\               \               Backslash
 
  */

let text = "My Name is \" Khushi \" & \nI am a \'backend developer\'. ";
console.log(text);

// search
// indexOf () : return index of first occurance of string in a string , or return -1 if ot found 

// syntax : indexOf(searchString , position)

let value = "Great Day , Have a Good morning , Good Night too"
console.log(value.indexOf("Good")); //19
console.log(value.indexOf("g")); //30
console.log(value.indexOf("Day")); //6
console.log(value.indexOf('M'));  // -1

// converting string into array
let name1 = "khushi";
let strArr = Array.from(name1);
console.log(strArr);

let strMap = strArr.map( (curr ,idx) => `${curr} - ${idx}`);
console.log(strMap);

// lastIndexOf() : tells idx of first letter of last occurance of word
value.lastIndexOf("Good");


/*
    search(): The search() method searches
    string for a string (or a regular expression) and
    returns the position of the match.

    Returns the index number where the first match is
    found. Returns -1 if no match is found.

*/


let text1 = "Hello JavaScript, welcome to our Javascript course";

let a = text1.search("javascript");  //-1 case sensitive 
let b = text1.search(/javascript/); //-1 
let c = text1.search( /javascript/i);  //6 -> removes case sensitive
let d = text1.search( /javaScript/g); //-1
let e = text1.search( /Javascript/ ); //33

console.log(` a = ${a} , b = ${b} , c = ${c} , d = ${d} , e = ${e}`);

/*
    Important Tips
    - The search() method cannot take a second start position
        argument.
    - The indexOf() method cannot take powerful search values
        (regular expressions).
    - They accept the same arguments (parameters), and return
        the same value
*/

// match() : Returns an array of the matched values or null if no match is found.

let re = text1.match("javascript");  // null
console.log(re);

let r = text1.match(/javascript/);  // null
console.log(r);


/*
    output for net three commands
    [
        'JavaScript',
        index: 6,
        input: 'Hello JavaScript, welcome to our Javascript course',
        groups: undefined
    ]
*/

let rep = text1.match("JavaScript");  
console.log(rep);

let rl = text1.match(/JavaScript/); 
console.log(rl);

let rt = text1.match(/javascript/i); 
console.log(rt);


let text2 = 'Hello JavaScript, welcome to our JavaScript course';
let rtt = text2.match(/JavaScript/g); 
console.log(rtt);   // [ 'JavaScript', 'JavaScript' ]

//todo here the js converts the normal text into regular
// expression text.match(/JavaScript/); without the g flag


//  matchAll() : Returns an iterator of all matches, providing
// detailed information about each match. Returns an empty iterator
// if no match is found.

let matchResult = text2.matchAll("javascript");
console.log(matchResult);  // Object [RegExp String Iterator] {}

//todo here the js converts the normal text into regular
// expression text.match(/JavaScript/g); add the g flag at the end


let matchResult1 = text2.matchAll("JavaScript");
console.log(matchResult1);

//console.log(...matchResult1);  //spread

/*
    Nothing will be printed. for for ..of 
        Why?
        Because iterators are one-time use. The spread operator already consumed every value.
*/

for(let item of matchResult1){ 
    console.log(item[0]);  // print only javascript
}

for(let index of matchResult1){
    console.log(index.index);  // 6 , 33 
}

for(let {index} of matchResult1){
    console.log(index);
}

/*
    [
  'JavaScript',
  index: 6,
  input: 'Hello JavaScript, welcome to our JavaScript course',
  groups: undefined
] [
  'JavaScript',
  index: 33,
  input: 'Hello JavaScript, welcome to our JavaScript course',
  groups: undefined
]

*/

// includes(): Returns true if the string contains the
// specified value, and false otherwise.  case sensitive , es6 feature 

let includeResult = text2.includes("Java");
console.log(includeResult); // true

// here cannot use regulr exp 

let includeResult1 = text2.includes("Javac");
console.log(includeResult1); // false


/*
    startsWith(): The startsWith() method returns true if a
    string begins with a specified value.Otherwise it returns false

    start position for the search can be specified
    let result= text.startsWith("welcome", 18);
    let result = text.startsWith("welcome", 17);


*/

let result1 = text2.startsWith("welcome");
console.log(result1);  // false

let result2 = text2.startsWith("Hello");
console.log(result2); // true

let result3 = text2.startsWith("welcome", 18);
console.log(result3);  // true

/*
    endsWith(): The endsWith() method returns true if a string
        ends with a specified value. Otherwise it returns false
*/


let result5 = text2.endsWith("welcome");
console.log(result5);  // false

let result6 = text2.endsWith("course");
console.log(result6);  // true

let result7 = text2.endsWith("welcome", 25);
console.log(result7);  // true

// Extracting string parts

    // String.prototype.substr() it is deprecated

// slice() extracts a part of a string and returns the
// extracted part in a new string.

// syntax : str.slice(start, end)  endindex is exclusive 

let na = "khushi , you are doing great";
console.log(na.slice(4,10));  // hi , y

console.log(na.slice(7));  // , you are doing great


/*
    substring: Extracts a portion of the string based on
    starting and ending indices.

syntax
    substring(indexStart) // index starts with 0
    substring(indexStart, indexEnd)

substring() is similar to slice(). The difference is that
start and end values less than 0 are treated as 0 in substring().
*/

console.log(na.slice(-1));  // t
console.log(na.substring(-1));  // khushi , you are doing great

console.log(na.substring(-9));  // khushi , you are doing great
console.log(na.slice(-9));  // ing great
console.log(na.slice(-9,-1));  // ing grea


/*at()

The at() method returns the character at a specified index (position)
in a string
1: It allows the use of negative indexes while charAt() do not.
*/

console.log(na.at(-10));  //o


//questions

/*
    //! What is the output for the following code?

let text2 = "Hello JavaScript, welcome to our world best JavaScript
course";
    // let result = text2.slice(1);
    //let result = text2.replace("H", "");
    // let result = text2.substring(1);
    console.log(result);
*/

let resuult = text2.substring(1);
    console.log(resuult); // ello JavaScript, welcome to our JavaScript course

// replace 
let resultt = text2.replace("JavaScript", "Khushi");
console.log(resultt);   // Hello Khushi, welcome to our JavaScript course


// for replacing all occurances
let resultt1 = text2.replaceAll("JavaScript", "Khushi");
console.log(resultt1);   // Hello Khushi, welcome to our Khushi course


// extracting string characters 

/*
 Extracting String Characters
    There are 3 methods for extracting string characters:

    ? The charAt(position) Method
    ? The charCodeAt(position) Method
    ? The at(position) Method

charAt() : The charAt() method returns the character at a
specified index (position) in a string


charCodeAt() : The charCodeAt() method returns the code of the
character at a specified index in a string. The method returns a
UTF-16 code (an integer between 0 and 65535).   -> code denga char ka


todo ES2022 introduced the string method at():
The at() method returns the character at a specified index
(position) in a string. The at() method returns the same as carAt().

*/

let cat = text2.charAt(6);
console.log(cat);  // J

let cat1 = text2.charAt(-10);
console.log(cat1);   // empty

let cat2 = text2.charCodeAt(6);
console.log(cat2);  // 74

let cat5 = text2.charCodeAt(-6);
console.log(cat5);  // NaN

let cat3 = text2.at(6);
console.log(cat3);  // J

let cat4 = text2.at(-6);
console.log(cat4);  // c


/*
    Case-Insensitive Replacement: To perform a case-insensitive
replacement, you can use the i flag in the regular expression.

*/

let originalString = "Hello, World! How are you, World?";
let replacedString = originalString. replace('world' , 'khushi');

console.log(replacedString);  // Hello, World! How are you, World? - no change

let replacedString1 = originalString. replace(/world/i , 'khushi');
console.log(replacedString1);  // Hello, khushi! How are you, World?

// for all : add g infront of i
let replacedString2 = originalString. replace(/world/gi , 'khushi');
console.log(replacedString2);  // Hello, khushi! How are you, khushi?


// trim()  - to remove leading and trailing zeroes
var hi = "    jiii   ";
var hii = "HIII";

console.log(hi.trim());  // jiii
// toUpperCase() , toLowerCase() 

console.log(hi.toUpperCase());  //     JIII   
console.log(hii.toLowerCase());  // hiii

// split() -  split string into array of substrings based on specified delimiter

console.log(text2.split(' '));
/*
    [
  'Hello',
  'JavaScript,',
  'welcome',
  'to',
  'our',
  'JavaScript',
  'course'
]
*/


// arary ko reverse krna h to use reverse()
console.log(text2.split(' ').reverse());

/*
    [
  'course',
  'JavaScript',
  'our',
  'to',
  'welcome',
  'JavaScript,',
  'Hello'
]
*/

// join() ==> to convert array into string
console.log(text2.split(' ').join(' '));  // Hello JavaScript, welcome to our JavaScript course

// questions

/*1: Write a JavaScript function that prints the letters 'a' through
'z' in the console. You should use a loop to iterate through the
letters and print each one on a new line.
*/

const printLetters = (() => {
    let start = "a".charCodeAt();
    let end = "z".charCodeAt();

    for(var i = start; i<= end;i++){
        console.log(String.fromCharCode(i));   // to get char from ascii code
    }
});

printLetters();

// 2: Write a function to count the number of vowels in a string?

let wordd = "hEllo , hope so , you are doing good and will not stop working hard ";
const countVowel = ((wordd) => {

    wordd = wordd.toLowerCase();
    var accum = 0;
    for(let i = 0;i<wordd.length ;i++ ){
        var currel = wordd[i];
        if(currel == 'a' || currel =='e' || currel == 'i' || currel == 'o' || currel =='u'){
            accum = accum + 1;
        }
    }

    return accum;
});

console.log(countVowel(wordd));  //20

// 3: Write a function to check if all the vowels presents in a string
// or not?

const checkVowels = ((word) =>{
    word = word.toLowerCase();
    return (word.includes('a') && word.includes('e') && word.includes('i') && word.includes('o') && word.includes('u') );
});

if(checkVowels(wordd)){
    console.log(`${wordd} : It contains all vowels`);
}
else{
    console.log(`${wordd} : It doesnot contains all vowels`);
}

/*
    Write a JavaScript function isPangram that takes a string as input
    and returns true if the string is a pangram (contains all letters of
    the alphabet) and false otherwise. The function should be case-
    insensitive and ignore spaces.

    Constraints:

    1: The input string will consist of alphabetic characters and spaces.
    2: The function should handle both uppercase and lowercase letters
    3: Consider the English alphabet with 26 letters.
*/

var sentence = "The Quick Brown Fox Jumps over the lazy dog";

const pangram = ((word) =>{

    if(word.length < 26){  // early check
        return false;
    }

    word = word.toLowerCase();
    let start = "a".charCodeAt();
    let end = "z".charCodeAt();

    for(var i = start; i<= end;i++){
        var ch = String.fromCharCode(i);   // to get char from ascii code

        if(!word.includes(ch)){
            return false;
        }
    }

    return true;
  
});


console.log((pangram(sentence) ? `yes, the sentence \" ${sentence} \" contains all alphabets , so it is a pangram` : `No, the sentence \" ${sentence} \"doesnot contains all alphabets , so it is not a pangram` ))

//second method using filter

const pangramChecker = ((str) => {
    let arr = str.toLowerCase().split("");

    const values = arr.filter( (currel) => {
        currel.charCodeAt() >= "a".charCodeAt() &&
        currel.charCodeAt()<= "z".charCodeAt()
    });

    return new Set(values).size == 26;
});


console.log((pangramChecker(sentence) ? `yes, the sentence \" ${sentence} \" contains all alphabets , so it is a pangram` : `No, the sentence \" ${sentence} \"doesnot contains all alphabets , so it is not a pangram` ))

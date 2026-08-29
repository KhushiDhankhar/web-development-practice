
// Date & Time Objects in JavaScript

//Date() constructor: The Date() constructor creates Date objects. when called as a function, 
// it returns a string representing the current time

// Creating a Date Object:
// You can create a new Date object using the new keyword. It can be done in severat ways:
// todo There are 9 ways to create a new date object:


// syntax:

// new Date();
// new Date(datestring);
// new Date(year,month);
// new Date(year,month,day);
// new Date(year,month,day,hours);
// new Date(year,month,day,hours,minutes);
// new Date(year,month,day ,hours,minutes , seconds);
// new Date(year,month,day , hours, minutes , seconds, milliseconds);
// new Date(milliseconds);


// Current date and time

// 1. new Date(): Creates a Date object representing the current date and time.

    console.log("using new Date() : ");
    const currentDate1 = new Date();
    console.log(currentDate1);
    console.log();

//todo This is the ISO 8601 format, which is a standard for representing dates and times.
// In this format, the date and time are represented together, separated by the letter "T".
// The "Z" at the end indicates that the time is in UTC (Coordinated Universal Time).

// But the same when you run on browser it will return more human-readable format.

// in js : 0 -> jan , 1 -> feb , 2 -> march ... so on 

// 2: new Date(dateString): Creates a Date object based on the provided date string.

    console.log("using datestring : ");
    const dateString = "2024-02-19T10:44:09.274Z";
    const dateFromString = new Date(dateString);
    console.log(dateFromString);
    console.log();


// 3: new Date(year, month): Creates a Date object with the specified year and month.
    
    console.log("using Date(year, month): ");
    const date1 = new Date(2024, 1);
    console.log(date1);
    console.log();

// 4: new Date(year, month, day): Creates a Date object with the specified year, mon
// and day.

    console.log("Date(year, month, day):");
    const date2 = new Date(2024, 1,19);
    console.log(date2);
    console.log();

// 5: new Date(year, month, day, hours): Creates a Date object with the specified year , mon, day , hours 
    
    console.log("Date(year, month, day, hours):");
    const date3 = new Date(2026, 7, 26, 10);
    console.log(date3);
    console.log();

// 6. new Date(year, month, day, hours, minutes)

    console.log("Date(year, month, day, hours, minutes) : ");
    const date4 = new Date(2026, 7, 26, 10, 30);
    console.log(date4);
    console.log();

// 7. new Date(year, month, day, hours, minutes, seconds)

    console.log(" Date(year, month, day, hours, minutes, seconds) : ");
    const date5 = new Date(2026, 7, 26, 10, 30, 45);
    console.log(date5);
    console.log();

// 8. new Date(year, month, day, hours, minutes, seconds, milliseconds)

    console.log(" Date(year, month, day, hours, minutes, seconds, milliseconds) : ");
    const date6 = new Date(2026, 7, 26, 10, 30, 45, 500);
    console.log(date6);
    console.log();

// 9. new Date(milliseconds) : Creates a Date object
// representing the number of milliseconds since the Unix
// epoch (January· 1,1970, 00:00:00 UTC).

    console.log("getting the date and time for starting");
    const date7 = new Date(0);  // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
    console.log(date7);
    console.log(); 

    console.log("getting date and time from milliseconds");
    const date8 = new Date(1000000000);
    console.log(date8);
    console.log();

    console.log("getting date and time from currmilliseconds");
    const currmilliseconds = new Date().getTime();
    const date9 = new Date(currmilliseconds);
    console.log(date9);
    console.log();


    /*
        FINDING CURMILLISECONDS

        const curMilliSeconds = new Date();
            undefined
        curMilliSeconds
            Fri Aug 28 2026 18:55:56 GMT+0530 (India Standard Time)
        const curMilliSeconds = new Date().getTime();
            undefined
        customElements
            CustomElementRegistry {}[[Prototype]]: CustomElementRegistry
        curMilliSeconds
            1787923683846
    */

    /*
        const date3 = new Date(2026, 13, 8);
        console.log(date3);
        console.log();

    VM110:2 Mon Feb 08 2027 00:00:00 GMT+0530 (India Standard Time)

    in js months just got wrapped up like 0 - 12 - 24 are same jan
                                          1 - 13 - 25 are feb ...so on

    */

                                          
// todo Note:
// 1: JavaScript. counts.months. from 0 to 11:
// January = 0, December = 11

// 2: JavaScript Stores Dates as Milliseconds: JavaScript stores dates as number of
// milliseconds since January 01, 1970.

// Date String Format: If the dateString is in a recognizable format, the Date object will
// be created accordingly.
// new Date(date string) creates a date object from a date string
// const date1 = new Date("2024-01-05"); // Year-Month-Day
// const date2 = new Date("January 5, 2024"); // Month Day, Year
// console.log(date1);
// console.log(date2);


/*
    JavaScript Get Date Methods / Getting Components:
*/

// You can get various components of a date using the methods of the Date object:
const currentDate = new Date();
// In a date object, the time is static.
const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // 0-based index
const date = currentDate.getDate();
const day = currentDate.getDay();
// In JavaScript, the first day of the week (day 0) is Sunday.
// day of the week (0 for Sunday, 1 for Monday, ... , 6 for Saturday)

console.log(year);
console.log(month);
console.log(date);
console.log(day);


//JavaScript Set Date Methods / Setting Components:

const dater = new Date();
console.log(dater);

// setFullYear(yearValue[, monthValue[, dayValue]]):
// Sets the full year for a specified date according to
// local time.
dater.setFullYear(2025);
console.log(dater); // Date object with the year set to
2025

// setMonth(monthValue[, dayValue]): Sets the month
// for a specified date according to local time.
dater.setMonth(5); // June (months are zero-based)
console.log(dater); // Date object with the month set

//setDate(dayValue): Sets the day of the month for a
// specified date according to local time.
dater.setDate(15);
console.log(dater);
// Date object with the day of the month set to 15


// JavaScript Get Time Methods / Getting Components:

const currentTime = new Date();
console.log(`current time : ${currentTime}`);

const hours = currentTime.getHours();
console.log(`current hours : ${hours}`);

const minutes = currentTime.getMinutes();
console.log(`current minutes : ${minutes}`);

const seconds = currentTime.getSeconds();
console.log(`current seconds : ${seconds}`);

const time = currentTime.getTime(); // in milliseconds
console.log(time);

// JavaScript Set Time Methods / Getting Components:

// const date = new Date();

// setHours(hourValue[, minuteValue[, secondValue[,
// millisecondValue]]]): Sets the hours for a specified
// date according to local time.

date.setHours(10);
console.log(date); // Date object with the hours set to 10

// setMinutes(minuteValue[, secondValue[,millisecondValue]]): Sets the minutes for a specified
// date according to local time.

date.setMinutes(30);

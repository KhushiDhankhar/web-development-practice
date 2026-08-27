
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
    const currentDate = new Date();
    console.log(currentDate);
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

// 9. new Date(milliseconds)

    console.log();
    const date7 = new Date(0);
    console.log(date7);
    console.log();

    console.log();
    const date8 = new Date(1000000000);
    console.log(date8);
    console.log();

    /*
        const date3 = new Date(2026, 13, 8);
        console.log(date3);
        console.log();

    VM110:2 Mon Feb 08 2027 00:00:00 GMT+0530 (India Standard Time)

    in js months just got wrapped up like 0 - 12 - 24 are same jan
                                          1 - 13 - 25 are feb ...so on

    */
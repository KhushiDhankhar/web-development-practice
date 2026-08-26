
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

// new Date(): Creates a Date object representing the current date and time.

    const currentDate = new Date();
    console.log(currentDate);

//todo This is the ISO 8601 format, which is a standard for representing dates and times.
// In this format, the date and time are represented together, separated by the letter "T".
// The "Z" at the end indicates that the time is in UTC (Coordinated Universal Time).

// But the same when you run on browser it will return more human-readable format.


// 2: new Date(dateString): Creates a Date object based on the provided date string.

    const dateString = "2024-02-19T10:44:09.274Z";
    const dateFromString = new Date(dateString);
    console.log(dateFromString);

// 3: new Date(year, month): Creates a Date object with the specified year and month.

    // const date1 = new Date(2024, 1);
    // console.log(date1);

// 4: new Date(year, month, day): Creates a Date object with the specified year, mon
// and day.

    // const date2 = new Date(2024, 1,19);
    // console.log(date2);

// 5: new Date(year, month, day, hours): Creates a Date object with the specified y
    const date1 = new Date(2026, 7, 26, 10);
    console.log(date1);

// 6. new Date(year, month, day, hours, minutes)

const date2 = new Date(2026, 7, 26, 10, 30);

console.log(date2);

// 3. new Date(year, month, day, hours, minutes, seconds)

const date3 = new Date(2026, 7, 26, 10, 30, 45);

console.log(date3);

// 4. new Date(year, month, day, hours, minutes, seconds, milliseconds)

const date4 = new Date(2026, 7, 26, 10, 30, 45, 500);

console.log(date4);

// 5. new Date(milliseconds)

const date5 = new Date(0);

console.log(date5);

const date6 = new Date(1000000000);

console.log(date6);
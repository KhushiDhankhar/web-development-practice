/* list of timing based events :
        1. setTimeout()  --> The setTimeout function is used to execute a function or
            code block after a specified delay in milliseconds.

        2. clearTimeout() -->

        4. setInterval() --> The setInterval function is used to repeatedly execute a
            function or code block at a specified interval in milliseconds

        5. clearInterval()

*/

// Syntax - setTimeout()

// function myCallback(x) {
//     console.log(" It schedule the callback function after a delay of 2000 milliseconds (2sec)" , x);
// };

// setTimeout(myCallback,2000); 
// setTimeout(() => myCallback(5),2000);
// setTimeout(() => myCallback(10),2000);



// Syntax - setInterval() :
// ex- mind game of counting seconds on mind and
// after every 5secs we need to draw a straight line on
// paper.
// and it will continue till I told you to stop


// function repeatedFunction() {
//     console. log("This function will be repeated every 1000 milliseconds (1 second)." );
// }

// setInterval(repeatedFunction, 1000);



// 3. Clearing Timeout with clearTimeout:
// If you want to cancel a scheduled timeout before it occurs, you can use the
// clearTimeout function.

// The global clearTimeout() method cancels a timeout previously established by
// calling setTimeout().

// Syntax:
// clearTimeout(timeoutID);

// function delayedFunction() {
//     console.log("This function was delayed by 2000 milliseconds (2 seconds).");
// }

// const myWork = setTimeout(delayedFunction, 2000);
// clearTimeout(myWork);

//todo Cancel the timeout before it occurs

// 4. Clearing Interval with clearInterval:
// If you want to cancel a scheduled interval
// before it occurs, you can use the clearInterval
// function.

// The global clearInterval() method cancels a
// timeout previously established by calling setInterval().

// Syntax:
// clearInterval(intervalID);


// function repeatedFunction(){
//     console.log("This function repeats.every 1000 milliseconds.(1.second).");
// }
// const intervalID = setInterval(repeatedFunction, 1000);
// clearInterval(intervalID);

/// the above code doesnot work why -->
                                    
//todo Cancel the interval

/*
Challenge Time

Write a JavaScript program that defines a function called repeatedFunction. This
function should log the message "This function repeats every 1000 milliseconds (1
second)" to the console. Then, set up an interval using setInterval() to call
repeatedFunction every 1000 milliseconds. Additionally, after 5 seconds have elapsed.
use setTimeout() to clear the interval previously set up. Make sure to log the me
"Interval cleared after 5 seconds." when the interval is cleared.

*/

const repFunc = () => {
    console.log("This function repeats every 1000 milliseconds (1 second)");
};

repFunc();

const interval = setInterval(repFunc , 1000);
setTimeout( () => { clearInterval(interval); } , 5000);



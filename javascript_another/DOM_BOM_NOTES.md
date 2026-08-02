JavaScript DOM and BOM Complete Notes
1. BOM (Browser Object Model)
What is BOM?

BOM (Browser Object Model) allows JavaScript to interact with the browser window and browser features.

BOM is used for:

Browser window information
URL manipulation
Browser history
Screen information
Browser navigation
Timers

The main object of BOM is:

window

Everything in BOM is a property or method of the window object.

Example:

window.alert("Hello");

You can also write:

alert("Hello");

because window is the global object.

WINDOW OBJECT
1. window.innerWidth
Description:

Returns the width of the browser viewport (visible area).

console.log(window.innerWidth);

Example output:

1280
2. window.innerHeight
Description:

Returns the height of the browser viewport.

console.log(window.innerHeight);

Example:

720
3. window.outerWidth
Description:

Returns the total width of the browser window including borders, toolbar, etc.

console.log(window.outerWidth);
4. window.outerHeight
Description:

Returns the total height of the browser window.

console.log(window.outerHeight);
WINDOW METHODS
1. window.alert()
Description:

Displays an alert box.

Syntax:

window.alert(message);

Example:

alert("Login successful");
2. window.confirm()
Description:

Shows a confirmation box with OK and Cancel buttons.

Returns:

true → OK clicked
false → Cancel clicked

Example:

let result = confirm("Are you sure?");

console.log(result);

Output:

true
3. window.prompt()
Description:

Takes input from the user.

Example:

let name = prompt("Enter your name");

console.log(name);
4. window.open()
Description:

Opens a new browser window/tab.

Example:

window.open("https://google.com");
5. window.close()
Description:

Closes the current window.

window.close();

(Note: Usually works only for windows opened using JavaScript.)

6. window.setTimeout()
Description:

Executes a function after a specified delay.

Syntax:

setTimeout(function, milliseconds);

Example:

setTimeout(()=>{
    console.log("Hello");
},3000);

Runs after 3 seconds.

7. window.setInterval()
Description:

Runs a function repeatedly after a fixed interval.

Example:

setInterval(()=>{
    console.log("Running");
},1000);

Runs every second.

8. clearTimeout()

Stops a timeout.

Example:

let id = setTimeout(()=>{
    console.log("Hello");
},5000);

clearTimeout(id);
9. clearInterval()

Stops an interval.

Example:

let id = setInterval(()=>{
    console.log("Hello");
},1000);

clearInterval(id);
WINDOW.LOCATION

The location object contains information about the current URL.

Access:

window.location

or

location
window.location.href
Description:

Returns the complete URL of the current page.

Example:

console.log(location.href);

Output:

https://example.com/home
window.location.hostname
Description:

Returns the domain name.

Example:

console.log(location.hostname);

Output:

google.com
window.location.pathname
Description:

Returns the path after the domain.

Example:

URL:

https://abc.com/products/mobile

Code:

console.log(location.pathname);

Output:

/products/mobile
window.location.protocol
Description:

Returns the protocol used.

Example:

console.log(location.protocol);

Output:

https:
window.location.port
Description:

Returns port number.

Example:

console.log(location.port);
window.location.assign()
Description:

Loads a new page.

Example:

location.assign("https://google.com");
window.location.replace()
Description:

Replaces current page without storing history.

Example:

location.replace("https://google.com");

Difference:

assign():

page1 → page2 → back button works

replace():

page1 replaced by page2
back button does not return page1
window.location.reload()
Description:

Reloads current page.

Example:

location.reload();
SCREEN OBJECT

The screen object provides information about the user's screen.

Access:

window.screen
1. screen.width
Description:

Returns total screen width.

Example:

console.log(screen.width);

Output:

1920
2. screen.height
Description:

Returns total screen height.

Example:

console.log(screen.height);
3. screen.availWidth
Description:

Returns available screen width excluding taskbars.

Example:

console.log(screen.availWidth);
4. screen.availHeight
Description:

Returns available screen height excluding system bars.

Example:

console.log(screen.availHeight);
5. screen.colorDepth
Description:

Returns the number of bits used to represent colors.

Example:

console.log(screen.colorDepth);

Common values:

8
16
24
32

Most modern displays:

24 or 32
6. screen.pixelDepth
Description:

Returns pixel depth of the screen.

Example:

console.log(screen.pixelDepth);

Usually same as colorDepth.

NAVIGATOR OBJECT

Provides browser information.

Access:

navigator
navigator.appName

Returns browser name.

console.log(navigator.appName);
navigator.appVersion

Returns browser version.

console.log(navigator.appVersion);
navigator.userAgent
Description:

Returns browser and operating system information.

console.log(navigator.userAgent);

Example:

Mozilla/5.0 Chrome Windows
navigator.language

Returns browser language.

console.log(navigator.language);

Output:

en-US
navigator.onLine

Checks internet connection.

console.log(navigator.onLine);

Returns:

true

or

false
HISTORY OBJECT

Used for browser history.

Access:

history
history.length

Number of pages in history.

console.log(history.length);
history.back()

Goes back one page.

history.back();

Equivalent to:

Browser Back button
history.forward()

Moves forward.

history.forward();
history.go()

Moves specific number of pages.

Example:

history.go(-2);

Goes two pages back.

DOM (Document Object Model)
What is DOM?

DOM represents an HTML document as a tree of objects.

JavaScript can:

Change HTML
Change CSS
Add/remove elements
Handle events

Main object:

document
Selecting Elements
1. getElementById()

Selects element by id.

HTML:

<h1 id="title">Hello</h1>

JavaScript:

let x = document.getElementById("title");
2. getElementsByClassName()

Selects elements by class.

document.getElementsByClassName("box");

Returns HTMLCollection.

3. getElementsByTagName()

Selects by tag name.

Example:

document.getElementsByTagName("p");
4. querySelector()

Returns first matching element.

document.querySelector(".box");
5. querySelectorAll()

Returns all matching elements.

document.querySelectorAll(".box");
Changing HTML
innerHTML

Changes HTML content.

element.innerHTML="Hello";
innerText

Changes visible text.

element.innerText="Hello";
textContent

Gets/sets all text including hidden text.

element.textContent="Hello";
Changing CSS
element.style.color="red";

element.style.backgroundColor="black";
Attributes
getAttribute()
element.getAttribute("src");
setAttribute()
element.setAttribute("class","box");
removeAttribute()
element.removeAttribute("class");
Creating Elements
let div = document.createElement("div");
Adding Elements
document.body.appendChild(div);
Removing Elements
element.remove();
Events
addEventListener()
button.addEventListener("click",()=>{
    console.log("Clicked");
});

Common events:

click
mouseover
mouseout
keydown
keyup
submit
change
load
DOM Traversal
parentElement
element.parentElement;

Gets parent.

children
element.children;

Gets child elements.

firstElementChild
element.firstElementChild;
lastElementChild
element.lastElementChild;
Important Difference
DOM	BOM
Works with webpage content	Works with browser
document object	window object
Changes HTML/CSS	Controls browser features
Example: getElementById	Example: location.href
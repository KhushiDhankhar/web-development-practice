J# JavaScript DOM and BOM Complete Notes

---

# 1. BOM (Browser Object Model)

## What is BOM?

**BOM (Browser Object Model)** allows JavaScript to interact with the browser window and browser features.

BOM is used for:

- Browser window information
- URL manipulation
- Browser history
- Screen information
- Browser navigation
- Timers

The main object of BOM is:

```javascript
window
```

Everything in BOM is a property or method of the `window` object.

Example:

```javascript
window.alert("Hello");
```

You can also write:

```javascript
alert("Hello");
```

because `window` is the global object.

---

# WINDOW OBJECT

## 1. window.innerWidth

### Description

Returns the width of the browser viewport (visible area).

### Example

```javascript
console.log(window.innerWidth);
```

Output:

```
1280
```

---

## 2. window.innerHeight

### Description

Returns the height of the browser viewport.

### Example

```javascript
console.log(window.innerHeight);
```

Output:

```
720
```

---

## 3. window.outerWidth

### Description

Returns the total width of the browser window including:

- Browser borders
- Toolbar
- Other window areas

Example:

```javascript
console.log(window.outerWidth);
```

---

## 4. window.outerHeight

### Description

Returns the total height of the browser window.

Example:

```javascript
console.log(window.outerHeight);
```

---

# WINDOW METHODS

---

# 1. window.alert()

## Description

Displays an alert box.

## Syntax

```javascript
window.alert(message);
```

## Example

```javascript
alert("Login successful");
```

---

# 2. window.confirm()

## Description

Shows a confirmation box with:

- OK button
- Cancel button

## Return Value

| User Action | Return Value |
|------------|--------------|
| Click OK | true |
| Click Cancel | false |

Example:

```javascript
let result = confirm("Are you sure?");

console.log(result);
```

Output:

```
true
```

---

# 3. window.prompt()

## Description

Takes input from the user.

Example:

```javascript
let name = prompt("Enter your name");

console.log(name);
```

---

# 4. window.open()

## Description

Opens a new browser window or tab.

Example:

```javascript
window.open("https://google.com");
```

---

# 5. window.close()

## Description

Closes the current browser window.

Example:

```javascript
window.close();
```

**Note:**  
Usually works only for windows opened using JavaScript.

---

# 6. window.setTimeout()

## Description

Executes a function after a specified delay.

## Syntax

```javascript
setTimeout(function, milliseconds);
```

## Example

```javascript
setTimeout(()=>{
    console.log("Hello");
},3000);
```

Runs after:

```
3 seconds
```

---

# 7. window.setInterval()

## Description

Runs a function repeatedly after a fixed interval.

Example:

```javascript
setInterval(()=>{
    console.log("Running");
},1000);
```

Runs:

```
Every second
```

---

# 8. clearTimeout()

## Description

Stops a timeout.

Example:

```javascript
let id = setTimeout(()=>{
    console.log("Hello");
},5000);

clearTimeout(id);
```

---

# 9. clearInterval()

## Description

Stops an interval.

Example:

```javascript
let id = setInterval(()=>{
    console.log("Hello");
},1000);

clearInterval(id);
```

---

# WINDOW.LOCATION OBJECT

## What is Location Object?

The `location` object contains information about the current URL.

Access:

```javascript
window.location
```

or

```javascript
location
```

---

## location.href

### Description

Returns the complete URL of the current page.

Example:

```javascript
console.log(location.href);
```

Output:

```
https://example.com/home
```

---

## location.hostname

### Description

Returns the domain name.

Example:

```javascript
console.log(location.hostname);
```

Output:

```
google.com
```

---

## location.pathname

### Description

Returns the path after the domain.

Example URL:

```
https://abc.com/products/mobile
```

Code:

```javascript
console.log(location.pathname);
```

Output:

```
/products/mobile
```

---

## location.protocol

### Description

Returns the protocol used.

Example:

```javascript
console.log(location.protocol);
```

Output:

```
https:
```

---

## location.port

### Description

Returns port number.

Example:

```javascript
console.log(location.port);
```

---

## location.assign()

### Description

Loads a new page and stores it in browser history.

Example:

```javascript
location.assign("https://google.com");
```

---

## location.replace()

### Description

Replaces current page without storing history.

Example:

```javascript
location.replace("https://google.com");
```

### Difference

| assign() | replace() |
|----------|-----------|
| Previous page is saved | Previous page is removed |
| Back button works | Back button does not work |

---

## location.reload()

### Description

Reloads the current page.

Example:

```javascript
location.reload();
```

---
# SCREEN OBJECT

## What is Screen Object?

The `screen` object provides information about the user's screen.

Access:

```javascript
window.screen
```

---

# 1. screen.width

## Description

Returns the total width of the user's screen.

Example:

```javascript
console.log(screen.width);
```

Output:

```
1920
```

---

# 2. screen.height

## Description

Returns the total height of the user's screen.

Example:

```javascript
console.log(screen.height);
```

---

# 3. screen.availWidth

## Description

Returns the available screen width excluding taskbars and browser UI.

Example:

```javascript
console.log(screen.availWidth);
```

---

# 4. screen.availHeight

## Description

Returns the available screen height excluding system bars.

Example:

```javascript
console.log(screen.availHeight);
```

---

# 5. screen.colorDepth

## Description

Returns the number of bits used to represent colors on the screen.

Example:

```javascript
console.log(screen.colorDepth);
```

Common values:

```
8
16
24
32
```

Most modern displays:

```
24 or 32
```

---

# 6. screen.pixelDepth

## Description

Returns the pixel depth of the screen.

Example:

```javascript
console.log(screen.pixelDepth);
```

Usually the same as:

```
screen.colorDepth
```

---

# NAVIGATOR OBJECT

## What is Navigator Object?

The `navigator` object provides information about the browser and operating system.

Access:

```javascript
navigator
```

---

# 1. navigator.appName

## Description

Returns the browser name.

Example:

```javascript
console.log(navigator.appName);
```

---

# 2. navigator.appVersion

## Description

Returns browser version information.

Example:

```javascript
console.log(navigator.appVersion);
```

---

# 3. navigator.userAgent

## Description

Returns information about:

- Browser
- Operating system
- Device

Example:

```javascript
console.log(navigator.userAgent);
```

Example Output:

```
Mozilla/5.0 Chrome Windows
```

---

# 4. navigator.language

## Description

Returns the language preference of the browser.

Example:

```javascript
console.log(navigator.language);
```

Output:

```
en-US
```

---

# 5. navigator.onLine

## Description

Checks whether the browser is connected to the internet.

Example:

```javascript
console.log(navigator.onLine);
```

Returns:

```
true
```

or

```
false
```

---

# HISTORY OBJECT

## What is History Object?

The `history` object allows JavaScript to interact with the browser history.

Access:

```javascript
history
```

---

# 1. history.length

## Description

Returns the number of pages stored in the browser history.

Example:

```javascript
console.log(history.length);
```

---

# 2. history.back()

## Description

Moves the browser one page backward.

Example:

```javascript
history.back();
```

Equivalent to clicking:

```
Browser Back Button
```

---

# 3. history.forward()

## Description

Moves the browser one page forward.

Example:

```javascript
history.forward();
```

---

# 4. history.go()

## Description

Moves a specific number of pages in browser history.

Example:

```javascript
history.go(-2);
```

Meaning:

```
Move two pages backward
```

---

# DOM (Document Object Model)

---

# What is DOM?

DOM stands for:

```
Document Object Model
```

DOM represents an HTML document as a tree structure of objects.

Using DOM, JavaScript can:

- Change HTML content
- Change CSS styles
- Add new elements
- Remove elements
- Handle events

The main object of DOM is:

```javascript
document
```

---

# DOM Tree Example

HTML:

```html
<html>

    <body>

        <h1>Hello</h1>

        <p>Welcome</p>

    </body>

</html>
```

DOM Representation:

```
Document
    |
    HTML
    |
    Body
   /    \
 h1      p
```

---

# Selecting Elements in DOM

---

# 1. getElementById()

## Description

Selects an element using its id.

HTML:

```html
<h1 id="title">
    Hello
</h1>
```

JavaScript:

```javascript
let element = document.getElementById("title");
```

Returns:

```
Single Element
```

---

# 2. getElementsByClassName()

## Description

Selects elements using class name.

Example:

```javascript
document.getElementsByClassName("box");
```

Returns:

```
HTMLCollection
```

---

# 3. getElementsByTagName()

## Description

Selects elements using tag name.

Example:

```javascript
document.getElementsByTagName("p");
```

Example:

```javascript
document.getElementsByTagName("div");
```

---

# 4. querySelector()

## Description

Returns the first matching element.

Example:

```javascript
document.querySelector(".box");
```

Examples:

Class selector:

```javascript
document.querySelector(".container");
```

ID selector:

```javascript
document.querySelector("#title");
```

Tag selector:

```javascript
document.querySelector("p");
```

---

# 5. querySelectorAll()

## Description

Returns all matching elements.

Example:

```javascript
document.querySelectorAll(".box");
```

Returns:

```
NodeList
```

---

# Changing HTML Content

---

# 1. innerHTML

## Description

Changes or returns HTML content inside an element.

Example:

```javascript
element.innerHTML = "<h1>Hello</h1>";
```

It can add HTML tags.

---

# 2. innerText

## Description

Changes or returns only visible text.

Example:

```javascript
element.innerText = "Hello";
```

---

# 3. textContent

## Description

Gets or sets all text content including hidden text.

Example:

```javascript
element.textContent = "Hello";
```

---

# Difference Between innerHTML, innerText and textContent

| Property | Works With |
|----------|------------|
| innerHTML | HTML tags + text |
| innerText | Visible text only |
| textContent | All text including hidden text |

---

# Changing CSS Using DOM

Example:

```javascript
element.style.color = "red";

element.style.backgroundColor = "black";
```

More examples:

```javascript
element.style.fontSize = "20px";

element.style.border = "1px solid black";
```

---
# DOM Attributes

Attributes provide additional information about HTML elements.

Examples of attributes:

- id
- class
- src
- href
- type
- value

---

# 1. getAttribute()

## Description

Used to get the value of an attribute.

Syntax:

```javascript
element.getAttribute("attributeName");
```

Example:

HTML:

```html
<img id="image" src="photo.jpg">
```

JavaScript:

```javascript
let img = document.getElementById("image");

console.log(img.getAttribute("src"));
```

Output:

```
photo.jpg
```

---

# 2. setAttribute()

## Description

Used to add or change an attribute value.

Syntax:

```javascript
element.setAttribute("attributeName","value");
```

Example:

```javascript
let heading = document.querySelector("h1");

heading.setAttribute("class","title");
```

HTML becomes:

```html
<h1 class="title">
```

---

# 3. removeAttribute()

## Description

Removes an attribute from an element.

Example:

```javascript
element.removeAttribute("class");
```

---

# Creating New Elements

## document.createElement()

### Description

Creates a new HTML element using JavaScript.

Syntax:

```javascript
document.createElement("tagName");
```

Example:

```javascript
let div = document.createElement("div");
```

Creates:

```html
<div></div>
```

---

# Adding Elements to DOM

## appendChild()

### Description

Adds a new element as the last child of another element.

Syntax:

```javascript
parent.appendChild(child);
```

Example:

```javascript
let div = document.createElement("div");

document.body.appendChild(div);
```

Result:

```html
<body>

    <div></div>

</body>
```

---

# append()

## Description

Adds elements or text at the end.

Example:

```javascript
element.append("Hello");
```

Difference:

| appendChild() | append() |
|---|---|
| Adds only nodes | Adds nodes and text |
| Returns added node | Returns undefined |

---

# Removing Elements

---

# 1. remove()

## Description

Removes an element directly.

Example:

```javascript
element.remove();
```

---

# 2. removeChild()

## Description

Removes a child element from a parent.

Syntax:

```javascript
parent.removeChild(child);
```

Example:

```javascript
let parent = document.body;

let child = document.querySelector("div");

parent.removeChild(child);
```

---

# DOM Events

## What are Events?

Events are actions performed by the user or browser.

Examples:

- Clicking a button
- Moving mouse
- Pressing keyboard keys
- Submitting a form
- Loading a page

JavaScript can respond to these events.

---

# addEventListener()

## Description

Used to attach an event handler to an element.

Syntax:

```javascript
element.addEventListener(event, function);
```

Example:

```javascript
let button = document.querySelector("button");

button.addEventListener("click",()=>{

    console.log("Button Clicked");

});
```

---

# Common DOM Events

---

## 1. click

Occurs when an element is clicked.

Example:

```javascript
button.addEventListener("click",()=>{
    console.log("Clicked");
});
```

---

## 2. mouseover

Occurs when mouse enters an element.

Example:

```javascript
element.addEventListener("mouseover",()=>{
    console.log("Mouse Entered");
});
```

---

## 3. mouseout

Occurs when mouse leaves an element.

Example:

```javascript
element.addEventListener("mouseout",()=>{
    console.log("Mouse Left");
});
```

---

## 4. keydown

Occurs when a keyboard key is pressed.

Example:

```javascript
document.addEventListener("keydown",()=>{
    console.log("Key Pressed");
});
```

---

## 5. keyup

Occurs when a keyboard key is released.

Example:

```javascript
document.addEventListener("keyup",()=>{
    console.log("Key Released");
});
```

---

## 6. submit

Occurs when a form is submitted.

Example:

```javascript
form.addEventListener("submit",()=>{
    console.log("Form Submitted");
});
```

---

## 7. change

Occurs when the value of an input changes.

Example:

```javascript
input.addEventListener("change",()=>{
    console.log("Value Changed");
});
```

---

## 8. load

Occurs when a webpage finishes loading.

Example:

```javascript
window.addEventListener("load",()=>{
    console.log("Page Loaded");
});
```

---

# DOM Traversal

DOM traversal means moving between elements in the DOM tree.

---

# 1. parentElement

## Description

Returns the parent element.

Example:

HTML:

```html
<div>

    <p>Hello</p>

</div>
```

JavaScript:

```javascript
let p = document.querySelector("p");

console.log(p.parentElement);
```

Output:

```
div
```

---

# 2. children

## Description

Returns all child elements.

Example:

```javascript
let div = document.querySelector("div");

console.log(div.children);
```

Output:

```
HTMLCollection
```

---

# 3. firstElementChild

## Description

Returns the first child element.

Example:

```javascript
element.firstElementChild;
```

---

# 4. lastElementChild

## Description

Returns the last child element.

Example:

```javascript
element.lastElementChild;
```

---

# 5. nextElementSibling

## Description

Returns the next sibling element.

Example:

```javascript
element.nextElementSibling;
```

---

# 6. previousElementSibling

## Description

Returns the previous sibling element.

Example:

```javascript
element.previousElementSibling;
```

---

# DOM vs BOM

| DOM | BOM |
|---|---|
| Document Object Model | Browser Object Model |
| Works with webpage content | Works with browser features |
| Main object is `document` | Main object is `window` |
| Used to manipulate HTML/CSS | Used to control browser window |
| Changes webpage structure | Controls URL, history, screen, navigation |
| Example: `getElementById()` | Example: `location.href` |

---

# Complete DOM and BOM Summary

## BOM Handles:

- Browser window
- URL
- History
- Screen details
- Browser information
- Timers

Main object:

```javascript
window
```

---

## DOM Handles:

- HTML elements
- CSS changes
- Events
- Creating/removing elements
- Page manipulation

Main object:

```javascript
document
```

---

# End of JavaScript DOM and BOM Notes
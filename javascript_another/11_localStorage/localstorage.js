// LocalStorage

//The localStorage object allows you to save key/value pairs in the browser.

// How to add the data from localStorage
localStorage.setItem("jsCourseTest", "addingData");  //key - value

// How to get the data from localStorage
localStorage.getItem("jsCourseTest");

// How to remove the data from localStorage
localStorage.removeItem("jsCourseTest");

// todo Local Storage can only store strings, so when you want to store a
// complex data structure like an array or an object, you need to convert it to a string using JSON.stringify:
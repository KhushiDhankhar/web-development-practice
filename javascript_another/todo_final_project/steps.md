# Creating a Basic Todo List with Local Storage

## 1. HTML Structure

- Create an HTML structure with an input field, a button, and a container to hold the todo items.
- Add a class to the container (e.g., 'todo-lists-elem').

## 2. JavaScript Setup

- Select the necessary DOM elements and store references (e.g., 'mainTodoElem' and inputValue').

## 3. Add Click Event

- Add a click event listener to the "Add Todo" button ( 'btn').
- In the event listener, call a function (e.g., 'addTodoList' ) to handle adding a new todo list element

## 4. Add Todo Function

- In the 'addTodoList' function, prevent the default form submission.
- Create a new todo element (e.g., a 'div' with a class main_todo_div ) with the
input value and a delete button.
- Append the new todo element to the container ( mainTodoElem').
- Store the todo data in an array (localTodoLists') and update Local Stor;
using 'localStorage.setItem'.

## 5. Get Todo from Local Storage
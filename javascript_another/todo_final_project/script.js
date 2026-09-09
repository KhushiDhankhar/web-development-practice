const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

const taskCount = document.getElementById("taskCount");
const clearCompleted = document.getElementById("clearCompleted");

const filters = document.querySelectorAll(".filter");


// ------------------------------------
// Get todos from LocalStorage
// ------------------------------------

const getTodosFromLocalStorage = () => {

    try {

        const data = localStorage.getItem("youtubeTodoList");

        if (!data) {
            return [];
        }

        return JSON.parse(data);

    } catch (error) {

        console.log("Error reading LocalStorage:", error);

        return [];

    }
};


let todos = getTodosFromLocalStorage();


// ------------------------------------
// Save todos to LocalStorage
// ------------------------------------

const saveTodos = () => {

    try {

        localStorage.setItem(
            "youtubeTodoList",
            JSON.stringify(todos)
        );

    } catch (error) {

        console.log("Error saving to LocalStorage:", error);

    }

};


// ------------------------------------
// Current filter
// ------------------------------------

let currentFilter = "all";


// ------------------------------------
// Render Todo List
// ------------------------------------

const renderTodos = () => {

    // Remove old displayed todos
    todoList.innerHTML = "";


    // Start with all todos
    let filteredTodos = todos;


    // Show only active
    if (currentFilter === "active") {

        filteredTodos = todos.filter(
            todo => !todo.completed
        );

    }


    // Show only completed
    if (currentFilter === "completed") {

        filteredTodos = todos.filter(
            todo => todo.completed
        );

    }


    // Create each todo
    filteredTodos.forEach(todo => {

        const li = document.createElement("li");

        li.classList.add("todo-item");


        // Add completed class
        if (todo.completed) {

            li.classList.add("completed");

        }


        // --------------------------------
        // Checkbox
        // --------------------------------

        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = todo.completed;


        checkbox.addEventListener("change", () => {

            todo.completed = checkbox.checked;

            saveTodos();

            renderTodos();

        });


        // --------------------------------
        // Todo text
        // --------------------------------

        const span = document.createElement("span");

        span.classList.add("todo-text");

        span.textContent = todo.text;


        // --------------------------------
        // Edit button
        // --------------------------------

        const editBtn = document.createElement("button");

        editBtn.type = "button";

        editBtn.classList.add("edit-btn");

        editBtn.textContent = "Edit";


        editBtn.addEventListener("click", () => {

            const newText = prompt(
                "Edit your todo:",
                todo.text
            );


            if (
                newText !== null &&
                newText.trim() !== ""
            ) {

                let updatedText = newText.trim();


                // Capitalize first letter

                updatedText =
                    updatedText.charAt(0).toUpperCase()
                    +
                    updatedText.slice(1);


                todo.text = updatedText;


                saveTodos();

                renderTodos();

            }

        });


        // --------------------------------
        // Delete button
        // --------------------------------

        const deleteBtn = document.createElement("button");

        deleteBtn.type = "button";

        deleteBtn.classList.add("delete-btn");

        deleteBtn.textContent = "Delete";


        deleteBtn.addEventListener("click", () => {

            todos = todos.filter(
                item => item.id !== todo.id
            );


            saveTodos();

            renderTodos();

        });


        // --------------------------------
        // Put everything inside <li>
        // --------------------------------

        li.appendChild(checkbox);

        li.appendChild(span);

        li.appendChild(editBtn);

        li.appendChild(deleteBtn);


        // Add <li> to <ul>

        todoList.appendChild(li);

    });


    updateTaskCount();

};


// ------------------------------------
// Add Todo
// ------------------------------------

const addTodo = () => {

    let text = todoInput.value.trim();


    // Don't allow empty todo

    if (text === "") {

        return;

    }


    // Capitalize first letter

    text =
        text.charAt(0).toUpperCase()
        +
        text.slice(1);


    // Check duplicate

    const alreadyExists = todos.some(
        todo =>
            todo.text.toLowerCase()
            ===
            text.toLowerCase()
    );


    if (alreadyExists) {

        todoInput.value = "";

        return;

    }


    // Create new todo

    const newTodo = {

        id: Date.now(),

        text: text,

        completed: false

    };


    // Add to array

    todos.push(newTodo);


    // Save

    saveTodos();


    // Clear input

    todoInput.value = "";


    // Display

    renderTodos();

};


// ------------------------------------
// Add button
// ------------------------------------

addBtn.addEventListener("click", addTodo);


// ------------------------------------
// Enter key
// ------------------------------------

todoInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        addTodo();

    }

});


// ------------------------------------
// Filters
// ------------------------------------

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        // Remove active from all

        filters.forEach(button => {

            button.classList.remove("active");

        });


        // Make clicked filter active

        filter.classList.add("active");


        // Get filter name

        currentFilter =
            filter.dataset.filter;


        // Render filtered todos

        renderTodos();

    });

});


// ------------------------------------
// Update remaining task count
// ------------------------------------

const updateTaskCount = () => {

    const remaining =
        todos.filter(
            todo => !todo.completed
        ).length;


    if (remaining === 1) {

        taskCount.textContent =
            "1 task remaining";

    } else {

        taskCount.textContent =
            `${remaining} tasks remaining`;

    }

};


// ------------------------------------
// Clear completed
// ------------------------------------

clearCompleted.addEventListener("click", () => {

    todos = todos.filter(
        todo => !todo.completed
    );


    saveTodos();

    renderTodos();

});


// ------------------------------------
// Initial render
// ------------------------------------

renderTodos();
const mainTodoElem = document.querySelector('.todo-lists-elem');
const inputValue = document.getElementById('inputValue');

// --- Safe localStorage wrappers ---
// On some deployed hosts (sandboxed preview iframes, browsers with strict
// privacy/storage settings, etc.) localStorage.getItem/setItem can THROW
// instead of just failing quietly. If that happens at the top of the file,
// the whole script stops running and none of the buttons work at all.
// Wrapping in try/catch means the app still works (just without saving)
// instead of silently breaking.

const getTodoListFromLocal = () => {
    try {
        const data = localStorage.getItem("youtubeTodoList");
        return data ? JSON.parse(data) : [];
    } catch (err) {
        console.warn("localStorage read failed, continuing without saved data:", err);
        return [];
    }
};


const addTodoListLocalStorage = () => {
    try {
        localStorage.setItem('youtubeTodoList', JSON.stringify(localTodoLists));
    } catch (err) {
        console.warn("localStorage save failed:", err);
    }
};


let localTodoLists = getTodoListFromLocal() || [];

// adding add to list dynamically
const addTodoDynamicElement = (todo) => {

    const divElem = document.createElement("div");
    divElem.classList.add("main_todo_div");
    divElem.innerHTML = `<li> ${todo} </li> <button class = "deletebtn"> Delete </button>`;
    mainTodoElem.append(divElem);

};

const addTodoList = (e) => {
    e.preventDefault(); // to prevent submission
    
    let todoListValue = inputValue.value.trim();
    todoListValue = todoListValue.charAt(0).toUpperCase() + todoListValue.slice(1);
    
    inputValue.value = "";

    if( todoListValue != "" && !localTodoLists.includes(todoListValue)){

        localTodoLists.push(todoListValue);
        localTodoLists = [...new Set(localTodoLists)];
        //console.log(todoListValue);
        console.log(localTodoLists);
        localStorage.setItem("youtubeTodoList" , JSON.stringify(localTodoLists));
    
        addTodoDynamicElement(todoListValue);
    }

};

const showTodoList = () => {
    console.log(localTodoLists);
    localTodoLists.forEach( (currelem) => {
        addTodoDynamicElement(currelem);
    });

};

showTodoList();

// remove data
const removeTodoElem = (e) => {
    const todoToRemove = e.target;
 
    // Only act when a delete button was actually clicked, not any click
    // inside the list container.
    if (!todoToRemove.classList.contains("deletebtn")) return;
 
    let todoListContent = todoToRemove.previousElementSibling.innerText.trim();
    let parentElem = todoToRemove.parentElement;
 
    localTodoLists = localTodoLists.filter((curTodo) => curTodo != todoListContent);
 
    addTodoListLocalStorage();
    parentElem.remove();
};


mainTodoElem.addEventListener("click" , (e) => {
    e.preventDefault();
    removeTodoElem(e);
});

document.querySelector(".btn").addEventListener("click" , (e) => {
    addTodoList(e);
});


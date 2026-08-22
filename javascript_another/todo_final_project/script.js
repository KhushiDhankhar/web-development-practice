const mainTodoElem = document.querySelector('.todo-lists-elem');
const inputValue = document.getElementById('inputValue');


const getTodoListFromLocal = () => {
    return JSON.parse(localStorage.getItem("youtubeTodoList"));
};

const addTodoListLocalStorage = () =>{
    return localStorage.setItem('youtubeTodoList' ,localTodoLists );
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

//remove data
const removeTodoElem = (e) => {
    console.log(e.target);
    const todoToRemove = e.target;
    let todoListContent = todoToRemove.previousElementSibling.innerText;
    console.log(todoListContent);

    let parentElem = todoToRemove.parentElement;

    localTodoLists = localTodoLists.filter((curTodo) => {
        console.log(curTodo);
        return curTodo != todoListContent;
    });

    addTodoListLocalStorage(localTodoLists);
    parentElem.remove();

    console.log(localTodoLists);

};


mainTodoElem.addEventListener("click" , (e) => {
    e.preventDefault();
    removeTodoElem(e);
});

document.querySelector(".btn").addEventListener("click" , (e) => {
    addTodoList(e);
});


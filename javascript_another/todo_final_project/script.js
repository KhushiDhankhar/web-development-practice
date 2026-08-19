const mainTodoElem = document.querySelector('.todo-lists-elem');
const inputValue = document.getElementById('inputValue');

const addTodoList = (e) => {
    e.preventDefault(); // to prevent submission
    const divElem = document.createElement("div");
    divElem.classList.add("main_todo_div");
    divElem.innerHTML = `<li> ${inputValue.value} </li> <button class = "deletebtn"> Delete </button>`;
    mainTodoElem.append(divElem);

    divElem.querySelector(".deletebtn").addEventListener("click", () => {
        divElem.remove();
    });

    inputValue.value = "";

    //console.log("testing");
};

document.querySelector(".btn").addEventListener("click" , (e) => {
    addTodoList(e);
});


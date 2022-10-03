//Seleção de Elementos

const todoForm = document.querySelector("#form-principal");
const inputTask = document.querySelector("#tarefa-input");
const toList = document.querySelector("#to-list");
const formEdit = document.querySelector("#tarefa-input");

const btnCancel = document.querySelector("#cancel-edit");
const editInput = document.querySelector("#edit-input");
//Funções
const saveDeveto = (text) =>{
    const todo = document.createElement("div");
    todo.classList.add("to-do")

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);
}



//Eventos
todoForm.addEventListener("submit", (e) =>{
    const input = inputTask.value ; 
    if(input != null){
        console.log(input)
    }
})
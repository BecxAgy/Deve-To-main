//Seleção de Elementos

const todoForm = document.querySelector("#form-principal");
const inputTask = document.querySelector("#tarefa-input");
const toList = document.querySelector("#to-list");
const formEdit = document.querySelector("#form-edit");

const btnCancel = document.querySelector("#cancel-edit");
const editInput = document.querySelector("#edit-input");
let oldInputValue;

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

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-todo");
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(removeBtn);

    toList.appendChild(todo);
    inputTask.value = "";
    inputTask.focus();
    
}

const toggleForm = ()=>{
    todoForm.classList.toggle("hide");
    formEdit.classList.toggle("hide");
    toList.classList.toggle("hide");


}

const updateForm = (text)=>{
    //pegar meu to-do e fazer um foreach com um if que compara o valor antigo com o valor pego no todotitle
    const todos = document.querySelectorAll(".to-do")

    todos.forEach((todo)=>{
        todoTitle = todo.querySelector("h3");

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text;
        }
    })

    
}


//Eventos
todoForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const input = inputTask.value ; 
    if(input){
        saveDeveto(input);
    }
});

document.addEventListener("click", (e) => {
    const element = e.target;
    const parentElement = element.closest("div"); 
    let todoTitle;

    if(parentElement && parentElement.querySelector("h3")){//se parentElement existe e se parent element contém um elemento h3
        todoTitle =  parentElement.querySelector("h3").innerText;   //Reservando o que está dentro de h3
    }
    if(element.classList.contains("finish-todo")){
        parentElement.classList.toggle("done")
        
    }
    if(element.classList.contains("remove-todo")){
        parentElement.remove();
    }
    if(element.classList.contains("edit-todo")){
        toggleForm();
        editInput.value = todoTitle;
        oldInputValue = todoTitle;
             

    }
})

btnCancel.addEventListener("click", (e)=>{
    e.preventDefault();
    toggleForm();
})

formEdit.addEventListener("submit", (e)=>{
    e.preventDefault();

    const editInputValue = editInput.value;

    if(editInputValue){
        updateForm(editInputValue);

    }

    toggleForm();
})
const todoInput = document.getElementById('todo_input');
const addTodoBtn = document.getElementById('add_todo_btn');
const todoList = document.getElementById('todo_list');
const todoCount = document.getElementById('todo_count');

let count = 0;
let todos = [];

addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter'){
      addTodo();
    }
});

function addTodo() {
    if (todoInput.value === "" || todoInput.value.count > 40) {
        alert("Kérlek adj meg egy teendőt!");
        return;
    }

    let todoText = todoInput.value;

    let newTodo = { text: todoText, completed: false };
    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
    createTodos();

    todoInput.value = "";
}

function createTodos() {
    todoList.innerHTML = "";
    
    todos.forEach((todo, id) => {
        if(todo.completed === true){
            todoList.innerHTML += 
            `<div id=${id} class="todos ${todo.completed ? "completed":""}">
                <h3 class="fw-bold">${todo.text}</h3>
                <div class="todo_actions">
                    <i onclick="completeTodo(${id})" id="complete_btn" class="fa-solid fa-times"></i>
                </div>
            </div>`;
        }else{
            count++;
            todoList.innerHTML += 
            `<div id=${id} class="todos">
                <h3 class="fw-bold">${todo.text}</h3>
                <div class="todo_actions">
                    <i onclick="completeTodo(${id})" id="complete_btn" class="fa-solid fa-check"></i>
                    <i onclick="deleteTodo(${id})" id="delete_btn" class="fa-solid fa-trash"></i>
                </div>
            </div>`;
        }
    });

    todoCount.innerText = count;
    count = 0;
}

function completeTodo(id) {
    todos[id].completed = !todos[id].completed;
    localStorage.setItem("todos", JSON.stringify(todos));
    createTodos();
}

function deleteTodo(id) {
    todos.splice(id, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    createTodos();
}

(() => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    createTodos();
})();
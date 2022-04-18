//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteItem);

//Functions
function addTodo(event){
    // Prevent form from submitting
    event.preventDefault();
    // Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-button');
    todoDiv.appendChild(completedButton);
    // Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);
    // Append to list
    todoList.appendChild(todoDiv);
    // Clear input
    todoInput.value = "";
}

function deleteItem(event){
    console.log(event.target);
    const item = event.target;
    // Delete
    if(item.classList[0] === 'trash-button'){
        const todo = item.parentElement;
        // Delete Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove()
        });
    }

    // Check Todo
    if(item.classList[0] === 'completed-button'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

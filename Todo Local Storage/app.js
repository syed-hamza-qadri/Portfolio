function saveEmail() {
    const emailInput = document.getElementById('email').value;
    if (emailInput) {
        localStorage.setItem('userEmail', emailInput);
        checkUserLogin();
    }
}

function checkUserLogin() {
    const email = localStorage.getItem('userEmail');
    if (email) {
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('homePage').classList.remove('hidden');
        displayTodos();
    } else {
        document.getElementById('loginPage').classList.remove('hidden');
        document.getElementById('homePage').classList.add('hidden');
    }
}

function addTodo() {
    const todoInput = document.getElementById('todoInput').value;
    if (todoInput) {
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(todoInput);
        localStorage.setItem('todos', JSON.stringify(todos));
        displayTodos();
        document.getElementById('todoInput').value = '';
    }
}

function displayTodos() {
    const todoList = document.getElementById('todoList');
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todoList.innerHTML = ''; 
    todos.forEach((todo, index) => {
        todoList.innerHTML += `<li class="todo-item">${todo} <button onclick="deleteTodo(${index})">Delete</button></li>`;
    });
}

function deleteTodo(index) {
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos();
}

function logout() {
    localStorage.removeItem('userEmail');
    checkUserLogin();
}

checkUserLogin();


const todoList = [];

function addTodo() {
    const inputElement = document.querySelector('.mainInput');
    const dateElement = document.querySelector('.dateInput');
    const todoText = inputElement.value.trim();
    const dueDate = dateElement.value;

    if (todoText !== '') {
        const formattedDate = formatDate(dueDate);
        todoList.push({ task: todoText, date: formattedDate });
        inputElement.value = ''; // Clear input field
        dateElement.value = ''; // Clear date field
        renderTodoList();
    } else {
        alert('Please enter a valid task!');
    }
}

function formatDate(dateString) {
    if (!dateString) return ''; // If no date is selected
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Ensure 2-digit format
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function renderTodoList() {
    const todoContainer = document.querySelector('.todoContainer');
    todoContainer.innerHTML = ''; // Clear existing list

    for (let i = 0; i < todoList.length; i++) {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todoItem');

        const todoDetails = document.createElement('div');
        todoDetails.classList.add('todoDetails');

        const taskText = document.createElement('span');
        taskText.classList.add('todoText');
        taskText.innerText = todoList[i].task;

        const dueDateText = document.createElement('span');
        dueDateText.classList.add('todoDate');
        dueDateText.innerText = todoList[i].date ? `📅 ${todoList[i].date}` : '';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerText = '❌ Delete';
        deleteBtn.onclick = () => deleteTodo(i);

        todoDetails.appendChild(taskText);
        todoDetails.appendChild(dueDateText);
        todoItem.appendChild(todoDetails);
        todoItem.appendChild(deleteBtn);

        todoContainer.appendChild(todoItem);
    }
}

function deleteTodo(index) {
    todoList.splice(index, 1); // Remove the selected item
    renderTodoList();
}
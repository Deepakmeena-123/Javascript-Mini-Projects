const input = document.querySelector('#todo-input');

const addBtn = document.querySelector('#add-btn');

const todoList = document.querySelector('#todo-list');

addBtn.addEventListener('click', function(){

    const taskText = input.value.trim();

    if(taskText === ''){
        alert('Please enter a task');
        return;
    }

    // Create li
    const li = document.createElement('li');

    li.classList.add('task');

    // Create span
    const span = document.createElement('span');

    span.innerText = taskText;

    // Create delete button
    const deleteBtn = document.createElement('button');

    deleteBtn.innerText = 'Delete';

    deleteBtn.classList.add('delete-btn');

    // Append elements
    li.appendChild(span);

    li.appendChild(deleteBtn);

    todoList.appendChild(li);

    // Clear input
    input.value = '';

    // Delete task
    deleteBtn.addEventListener('click', function(){

        li.remove();

    });

});
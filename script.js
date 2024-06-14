
const addTaskButton = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
const clearCompletedButton = document.getElementById('clear-completed');

addTaskButton.addEventListener('click', function() {
    const taskText = inputTask.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const task = document.createElement('div');
    task.classList.add('task');

    const li = document.createElement('li');
    li.innerText = taskText;
    task.appendChild(li);

    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    taskContainer.appendChild(task);
    inputTask.value = "";

    checkButton.addEventListener('click', function() {
        li.classList.toggle('completed');
        task.classList.toggle('completed');
    });

    deleteButton.addEventListener('click', function() {
        task.remove();
    });
});

clearCompletedButton.addEventListener('click', function() {
    const completedTasks = document.querySelectorAll('.task.completed');
    completedTasks.forEach(task => task.remove());
});
const taskList = document.getElementById('taskList');

function addTask() {
    const taskName = document.getElementById('taskName').value;
    const taskDeadline = document.getElementById('taskDeadline').value;
    const taskPriority = document.getElementById('taskPriority').value;
    const taskCategory = document.getElementById('taskCategory').value;

    if (taskName === '' || taskDeadline === '') {
        alert('Please enter a task name and deadline.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskName} - ${taskCategory} - ${taskPriority} - ${taskDeadline}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(taskItem);

    document.getElementById('taskName').value = '';
    document.getElementById('taskDeadline').value = '';
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}

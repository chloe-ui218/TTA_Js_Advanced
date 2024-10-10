let tasks = ["Buy milk", "Clean the room", "Go to the gym"];

const displayTasks = () => {
    let taskDisplay = document.querySelector('#taskDisplay');
    taskDisplay.innerHTML = '';
    tasks.forEach((task, index) => {

        // create the task container
        const taskItem = document.createElement('li');
        taskItem.classList.add('bg-blue-200', 'p-2', 'm-2', 'rounded-lg', 'flex', 'justify-between', 'list-none');


        // create the tasks title container
        const taskText = document.createElement('span');
        taskText.textContent = task;
        taskItem.appendChild(taskText);


        // create the tasks links container
        const taskLinks = document.createElement('div');
        taskLinks.classList.add('task-links');


        // create the update and delete buttons
        const updateButton = document.createElement('a');
        updateButton.href = '#';
        updateButton.textContent = 'Update';
        updateButton.classList.add('text-blue-500' , 'mr-4');
        updateButton.addEventListener('click', () => editTask(index));
        taskLinks.appendChild(updateButton);
        



        const deleteButton = document.createElement('a');
        deleteButton.href = '#';
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('text-red-500');
        deleteButton.addEventListener('click', () => deleteTask(index));
        taskLinks.appendChild(deleteButton);

        taskItem.appendChild(taskLinks)
        taskDisplay.appendChild(taskItem);
    })
}

const saveTaskToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const addTask = () => {
    const newTaskInput = document.querySelector('#newTask');
    const newTask = newTaskInput.value;

    if(newTask.trim() !== ""){
        tasks.push(newTask);
        newTaskInput.value = "";
        saveTaskToLocalStorage();
        displayTasks();
    }
    else{
        alert('Please enter a task')
    }
}

const editTask = (index) => {
    const updatedTask = prompt('Enter the updated task', tasks[index]);
    if (upddatedTask && updatedTask.trim() !== '') {
        tasks[index] = updatedTask.trim();
        saveTaskToLocalStorage();
       displayTasks();
    } else{
        alert('Please enter a valid task');
    }

}

const deleteTask = (index) => {
    if (confirm('Are you sure you want to delete this task?')){
        tasks.splice(index, 1);
        saveTaskToLocalStorage();
        displayTasks();
    }
}

const loadTaskFromLocalStorage = () => {
    const storedTasks = localStorage.getItem('tasks');

    if(storedTasks){
        tasks = JSON.parse(storedTasks);
        displayTasks();
    }
}


const addTaskButton = document.querySelector('#addTaskButton');
addTaskButton.addEventListener('click', addTask);

loadTaskFromLocalStorage();
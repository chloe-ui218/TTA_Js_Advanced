
let tasks = ["Buy milk", "Clean the room", "Go to the gym"];
let completedTasks = []

const displayTasks = () => {
    let taskDisplay = document.querySelector('#taskDisplay');
    taskDisplay.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('bg-blue-200', 'p-2', 'm-2', 'rounded-lg', 'flex', 'justify-between', 'list-none');

        const taskText = document.createElement('span');
        taskText.textContent = task;
        taskItem.appendChild(taskText);

        const taskLinks = document.createElement('div');
        taskLinks.classList.add('task-links');

        const doneLink = document.createElement('a');
        doneLink.href = "#";
        doneLink.textContent = 'Mark as Done';
        doneLink.classList.add('text-green-500', 'mr-4');
        doneLink.addEventListener('click', () => markAsDone(index));
        taskLinks.appendChild(doneLink);

        const updateButton = document.createElement('a');
        updateButton.href = '#';
        updateButton.textContent = 'Update';
        updateButton.classList.add('text-blue-500', 'mr-4');
        updateButton.addEventListener('click', () => editTask(index));
        taskLinks.appendChild(updateButton);

        const deleteButton = document.createElement('a');
        deleteButton.href = '#';
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('text-red-500');
        deleteButton.addEventListener('click', () => deleteTask(index));
        taskLinks.appendChild(deleteButton);

        taskItem.appendChild(taskLinks);
        taskDisplay.appendChild(taskItem);
    })
}

const saveTaskToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
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

const markAsDone = (index) => {
    const task = tasks.splice(index,1)[0];
    completedTasks.push(task);
    saveTaskToLocalStorage();
    displayTasks();
    displayCompletedTasks();
}

const displayCompletedTasks = () => {
    const completedTasksSection = document.querySelector('#completedTasks');
    const completedTaskDisplay = document.querySelector('#completedTaskDisplay');
    completedTaskDisplay.innerHTML = '';

    if (completedTasks.length > 0){
        completedTasksSection.classList.remove('hidden');
    }
    else{
        completedTasksSection.classList.add('hidden');
    }

    completedTasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('bg-green-200', 'p-2', 'm-2', 'flex', 'rounded-lg', 'justify-between', 'list-none');

        const taskText = document.createElement('span');
        taskText.textContent = task;
        taskText.classList.add('line-through');
        taskItem.appendChild(taskText);

        const taskLinks = document.createElement('div');
        taskLinks.classList.add('task-links');

        const undoLink = document.createElement('a');
        undoLink.href = '#';
        undoLink.textContent = 'Undo';
        undoLink.classList.add('text-blue-500', 'mr-4');
        undoLink.addEventListener('click', () => undoCompletedTask(index));
        taskLinks.appendChild(undoLink);

        const deleteButton = document.createElement('a');
        deleteButton.href = '#';
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('text-red-500');
        deleteButton.addEventListener('click', () => deleteCompletedTask(index));
        taskLinks.appendChild(deleteButton);

        taskItem.appendChild(taskLinks);
        completedTaskDisplay.appendChild(taskItem);

    })
}

const undoCompletedTask = (index) => {
    const task = completedTasks.splice(index, 1)[0];
    tasks.push(task);
    saveTaskToLocalStorage();
    displayTasks();
    displayCompletedTasks();
}

const deleteCompletedTask = (index) => {
    if (confirm('Are you sure you want to delete this task')){
        completedTasks.splice(index, 1);
        saveTaskToLocalStorage();
        displayCompletedTasks();
    }
}

const editTask = (index) => {
    const updatedTask = prompt('Update your task', tasks[index]);
    if(updatedTask && updatedTask.trim() !== ""){
        tasks[index] = updatedTask.trim();
        displayTasks();
    }
    else{
        alert('Please enter a task')
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
    const storedCompletedTasks = localStorage.getItem('completedTasks')

    if(storedTasks){
        tasks = JSON.parse(storedTasks);
        displayTasks();
    }

    if(storedCompletedTasks){
        completedTasks.JSON.parse(storedCompletedTasks);
        displayCompletedTasks();
    }
}


const addTaskButton = document.querySelector('#addTaskButton');
addTaskButton.addEventListener('click', addTask);

//loadTaskFromLocalStorage();
displayTasks();















//create
const User = ["12", "John", "excella"]
const Data = JSON.stringify(localStorage.setItem('Info', User));

// read: getting all items
const Data = JSON.parse(localStorage.getItem('Info'));

// update

const User = JSON.parse(localStorage.getItem('Info'));
User products = ["12", "John", "excella"];
const Updateproducts = User.push(products);
const newStorage = JSON.stringify(localStorage.setItem('Info', Updateproducts));

// delete
localStorage.getItem('Info');
localStorage.removeItem('Info');

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

let tasks: Task[] = [];


// 3. On récupère la chaîne de caractères
const texteRecupere = localStorage.getItem('tasks');
// 4. On transforme la chaîne de caractères en objet
if (texteRecupere) {
    tasks = JSON.parse(texteRecupere);
    console.log(tasks);
}
// 5. On peut les utiliser

function saveTasks(): void {
    // 6. On transforme l'objet en chaîne de caractères
    const texteAEnregistrer = JSON.stringify(tasks);
    // 7. On enregistre la chaîne de caractères
    localStorage.setItem('tasks', texteAEnregistrer);
}

function renderTasks(): void {
    const taskList = document.getElementById('todolist-list') as HTMLDivElement;
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = '<input type="checkbox" ' + (task.completed ? 'checked' : '') + '> ' + task.title +
            ' <button class="delete-btn">Delete</button>';

        const checkbox = taskItem.querySelector('input[type="checkbox"]') as HTMLInputElement;
        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
            renderTasks();
            saveTasks();
        });

        const deleteBtn = taskItem.querySelector('.delete-btn') as HTMLButtonElement;
        deleteBtn.addEventListener('click', () => {
            tasks = tasks.filter(t => t.id !== task.id);
            renderTasks();
            saveTasks();
        });

        taskList.appendChild(taskItem);
    })
}

const taskInput = document.getElementById('add-task-input-title') as HTMLInputElement;

const addTaskBtn = document.getElementById('add-task-btn') as HTMLButtonElement;
addTaskBtn.addEventListener('click', () => {
    const title = taskInput.value.trim();
    if (title) {
        const newTask: Task = {
            id: tasks.length + 1,
            title: title,
            completed: false
        };
        tasks.push(newTask);
        renderTasks();
        saveTasks();
        taskInput.value = '';
    }
});

const clearCompletedBtn = document.getElementById('clear-completed-btn') as HTMLButtonElement;
clearCompletedBtn.addEventListener('click', () => {
    tasks = tasks.filter(t => !t.completed);
    renderTasks();
    saveTasks();
})

renderTasks();

var tasks = [];
// 3. On récupère la chaîne de caractères
var texteRecupere = localStorage.getItem('tasks');
// 4. On transforme la chaîne de caractères en objet
if (texteRecupere) {
    tasks = JSON.parse(texteRecupere);
    console.log(tasks);
}
// 5. On peut les utiliser
function saveTasks() {
    // 6. On transforme l'objet en chaîne de caractères
    var texteAEnregistrer = JSON.stringify(tasks);
    // 7. On enregistre la chaîne de caractères
    localStorage.setItem('tasks', texteAEnregistrer);
}
function renderTasks() {
    var taskList = document.getElementById('todolist-list');
    taskList.innerHTML = '';
    tasks.forEach(function (task) {
        var taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = '<input type="checkbox" ' + (task.completed ? 'checked' : '') + '> ' + task.title +
            ' <button class="delete-btn">Delete</button>';
        var checkbox = taskItem.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', function () {
            task.completed = checkbox.checked;
            renderTasks();
            saveTasks();
        });
        var deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function () {
            tasks = tasks.filter(function (t) { return t.id !== task.id; });
            renderTasks();
            saveTasks();
        });
        taskList.appendChild(taskItem);
    });
}
var taskInput = document.getElementById('add-task-input-title');
var addTaskBtn = document.getElementById('add-task-btn');
addTaskBtn.addEventListener('click', function () {
    var title = taskInput.value.trim();
    if (title) {
        var newTask = {
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
var clearCompletedBtn = document.getElementById('clear-completed-btn');
clearCompletedBtn.addEventListener('click', function () {
    tasks = tasks.filter(function (t) { return !t.completed; });
    renderTasks();
    saveTasks();
});
renderTasks();

import './App.css'
import { useEffect, useState } from 'react';

interface toDoItem {
  id: number;
  task: string;
  description: string;
  completed: boolean;
}

function saveTasks(toDoItems: toDoItem[]) {
  var texteAEnregistrer = JSON.stringify(toDoItems);
  localStorage.setItem('tasks', texteAEnregistrer);
}

function App() {
  const [toDoItems, setToDoItems] = useState<toDoItem[]>([]);

  useEffect(() => {
    const texteRecupere = localStorage.getItem('tasks');
    if (texteRecupere) {
      setToDoItems(JSON.parse(texteRecupere));
    }
  }, []);
  return (
    <>
      {header()}
      {taskHeader(toDoItems, setToDoItems)}
      {toDoList(toDoItems, setToDoItems)}
    </>
  )
}

export default App


function header() {
  console.log("This is header function");
  return (
    <>
      <header className="app-header">
        <h1>Welcome to My React to do list</h1>
      </header>
    </>
  )
}

function addNewTask(task: string, description: string, toDoItems: toDoItem[], setToDoItems: React.Dispatch<React.SetStateAction<toDoItem[]>>) {
  const newTask: toDoItem = {
    id: toDoItems.length + 1,
    task: task,
    description: description,
    completed: false
  };
  saveTasks([...toDoItems, newTask]);
  setToDoItems([...toDoItems, newTask]);
}

function taskHeader(toDoItems: toDoItem[], setToDoItems: React.Dispatch<React.SetStateAction<toDoItem[]>>) {
  console.log("This is addTask function");
  return (
    <>
      <div className="add-task">
        <h2>Add a New Task</h2>
        <div className='add-task-inputs'>
          <input id="add-task-input" type="text" placeholder="Enter a new task" />
          <input id="add-task-description-input" type="text" placeholder="Enter a description" />
        </div>
        <button id="add-task-button" onClick={() => {
          const taskInput = (document.getElementById('add-task-input') as HTMLInputElement).value;
          const descriptionInput = (document.getElementById('add-task-description-input') as HTMLInputElement).value;
          addNewTask(taskInput, descriptionInput, toDoItems, setToDoItems);
        }}>Add Task</button>
        <button onClick={() => {
          const newTasks = toDoItems.filter(item => !item.completed);
          saveTasks(newTasks);
          setToDoItems(newTasks);
        }}>Clear completed tasks</button>
      </div>
    </>
  )
}


function toDoList(toDoItems: toDoItem[], setToDoItems: React.Dispatch<React.SetStateAction<toDoItem[]>>) {
  const toggleCompleted = (id: number) => {
    setToDoItems(items =>
      items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
    saveTasks(toDoItems);
  };

  console.log("This is toDoList function");
  return (
    <>
      <div className="to-do-list">
        <h2>My Tasks</h2>
        <ul className="task-list">
          {toDoItems.map(item => (
            <li key={item.id} className="task-item">
              <h3>{item.task}</h3>
              <p>{item.description}</p>
              <button onClick={() => toggleCompleted(item.id)}>
                {item.completed ? "Completed" : "Not Completed"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
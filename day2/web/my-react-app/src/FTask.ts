import type { ToDoItem } from "./IToDoItemsProps";

export function addNewTask(
  task: string,
  description: string,
  toDoItems: ToDoItem[],
  setToDoItems: React.Dispatch<React.SetStateAction<ToDoItem[]>>
) {
  const newTask: ToDoItem = {
    id: toDoItems.length + 1,
    task: task,
    description: description,
    completed: false,
  };
  saveTasks([...toDoItems, newTask]);
  setToDoItems([...toDoItems, newTask]);
}

export function saveTasks(toDoItems: ToDoItem[]) {
  var texteAEnregistrer = JSON.stringify(toDoItems);
  localStorage.setItem("tasks", texteAEnregistrer);
}

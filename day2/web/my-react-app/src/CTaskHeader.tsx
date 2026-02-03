import type { ToDoItemsProps } from "./IToDoItemsProps";
import { addNewTask } from "./FTask";
import { saveTasks } from "./FTask";

export function TaskHeader({ toDoItems, setToDoItems }: ToDoItemsProps) {
  ("This is addTask function");
  return (
    <>
      <div className="add-task">
        <h2>Add a New Task</h2>
        <div className="add-task-inputs">
          <input
            className="add-task-input"
            id="add-task-input"
            type="text"
            placeholder="Enter a new task"
          />
          <input
            className="add-task-input"
            id="add-task-description-input"
            type="text"
            placeholder="Enter a description"
          />
        </div>
        <button
          id="add-task-button"
          onClick={() => {
            const taskInput = (
              document.getElementById("add-task-input") as HTMLInputElement
            ).value;
            const descriptionInput = (
              document.getElementById(
                "add-task-description-input",
              ) as HTMLInputElement
            ).value;
            addNewTask(taskInput, descriptionInput, toDoItems, setToDoItems);
          }}
        >
          Add Task
        </button>
        <button
          id="clear-completed-tasks-button"
          onClick={() => {
            const newTasks = toDoItems.filter((item) => !item.completed);
            saveTasks(newTasks);
            setToDoItems(newTasks);
          }}
        >
          Clear completed tasks
        </button>
      </div>
    </>
  );
}

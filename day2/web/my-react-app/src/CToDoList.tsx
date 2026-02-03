import { saveTasks } from "./FTask";
import type { ToDoItemsProps } from "./IToDoItemsProps";

export function ToDoList({ toDoItems, setToDoItems }: ToDoItemsProps) {
  const toggleCompleted = (id: number) => {
    setToDoItems((toDoItems) =>
      toDoItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
    saveTasks(toDoItems);
  };

  ("This is toDoList function");
  return (
    <>
      <div className="to-do-list">
        <h2>My Tasks</h2>
        <ul className="task-list">
          {toDoItems.map((item) => (
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
  );
}

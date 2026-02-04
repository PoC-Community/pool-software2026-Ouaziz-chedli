import { saveTasks } from "./FTask";
import type { ToDoItemsProps, ToDoItem } from "./IToDoItemsProps";

export function ToDoItemComponent({
  item,
  toggleCompleted,
}: {
  item: ToDoItem;
  toggleCompleted: (id: number) => void;
}) {
  return (
    <li className="task-item">
      <h3>{item.task}</h3>
      <p>{item.description}</p>
      <button onClick={() => toggleCompleted(item.id)}>
        {item.completed ? "Completed" : "Not Completed"}
      </button>
    </li>
  );
}

interface ToggleCompletedProps extends ToDoItemsProps {
  id: number;
}
export function toggleCompleted({
  toDoItems,
  setToDoItems,
  id,
}: ToggleCompletedProps) {
  setToDoItems((toDoItems) =>
    toDoItems.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item,
    ),
  );
  saveTasks(toDoItems);
}

export function ToDoList({ toDoItems, setToDoItems }: ToDoItemsProps) {
  ("This is toDoList function");
  return (
    <>
      <div className="to-do-list">
        <h2>My Tasks</h2>
        <ul className="task-list">
          {toDoItems.map((item) => (
            <ToDoItemComponent
              key={item.id}
              item={item}
              toggleCompleted={() =>
                toggleCompleted({ toDoItems, setToDoItems, id: item.id })
              }
            />
          ))}
        </ul>
      </div>
    </>
  );
}

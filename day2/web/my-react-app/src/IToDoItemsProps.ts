export interface ToDoItem {
  id: number;
  task: string;
  description: string;
  completed: boolean;
}
// Props type
export interface ToDoItemsProps {
  toDoItems: ToDoItem[];
  setToDoItems: React.Dispatch<React.SetStateAction<ToDoItem[]>>;
}

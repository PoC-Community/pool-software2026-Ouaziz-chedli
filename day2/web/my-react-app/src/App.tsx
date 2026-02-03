import "./App.css";
import { useEffect, useState } from "react";
import type { ToDoItem } from "./IToDoItemsProps";
import { Header } from "./CHeader";
import { TaskHeader } from "./CTaskHeader";
import { ToDoList } from "./CToDoList";
import { Count } from "./CCount";
import { CatFacts } from "./CCatFacts";
import { Timer } from "./CTimer";
import { FormComponent } from "./CFormComponent";

function App() {
  const [toDoItems, setToDoItems] = useState<ToDoItem[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const texteRecupere = localStorage.getItem("tasks");
    if (texteRecupere) {
      setToDoItems(JSON.parse(texteRecupere));
    }
  }, []);
  return (
    <>
      <Header />
      <TaskHeader toDoItems={toDoItems} setToDoItems={setToDoItems} />
      <ToDoList toDoItems={toDoItems} setToDoItems={setToDoItems} />
      <Count Count={count} SetCount={setCount} />
      <CatFacts />
      <Timer />
      <FormComponent />
    </>
  );
}

export default App;

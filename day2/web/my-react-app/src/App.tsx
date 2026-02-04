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
import { Search } from "./Search";
import { Card, CardBody, CardFooter, CardHeader } from "./Card";
import { TemperatureConverter } from "./TemperatureConverter";

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
      <Search toDoItems={toDoItems} setToDoItems={setToDoItems} />
      <ToDoList toDoItems={toDoItems} setToDoItems={setToDoItems} />
      <Count Count={count} SetCount={setCount} />
      <CatFacts />
      <Timer />
      <FormComponent />
      <Card>
        <h1>Welcome to the Card Component</h1>
        <CardHeader>
          <h2>This is the Card Header.</h2>
        </CardHeader>
        <CardBody>
          <p>This is the body of the card.</p>
        </CardBody>
        <CardFooter>
          <p>This is the footer of the card.</p>
        </CardFooter>
      </Card>
      <TemperatureConverter />
    </>
  );
}

export default App;

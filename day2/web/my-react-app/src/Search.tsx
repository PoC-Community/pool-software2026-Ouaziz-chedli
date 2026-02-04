import React from "react";
import type { ToDoItemsProps } from "./IToDoItemsProps";
import { ToDoItemComponent } from "./CToDoList";
import { toggleCompleted } from "./CToDoList";

export function Search({ toDoItems, setToDoItems }: ToDoItemsProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredItems = toDoItems.filter((item) =>
    item.task.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <section className="search-section">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm.length == 0 && <></>}
        {!filteredItems.length && searchTerm.length > 0 && <p>Not found</p>}
        {filteredItems.length &&
          searchTerm.length > 0 &&
          filteredItems.map((item) => (
            <ToDoItemComponent
              key={item.id}
              item={item}
              toggleCompleted={() =>
                toggleCompleted({ toDoItems, setToDoItems, id: item.id })
              }
            ></ToDoItemComponent>
          ))}
      </section>
    </>
  );
}

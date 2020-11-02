import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import "./styles.css";
import TodoList from "./components/TodoList";
import storage from "./services/store";

function App() {
  const [toDo, setToDo] = useState([]);
  useEffect(() => {
    setToDo(storage.getAll());
  }, []);

  return (
    <center>
      <div className="head">
        <h1 className="head">ToDo list</h1>
      </div>
      <div className="block">
        <Form toDo={toDo} setToDo={setToDo} />
        <TodoList toDo={toDo} setToDo={setToDo} />
      </div>
    </center>
  );
}
export default App;

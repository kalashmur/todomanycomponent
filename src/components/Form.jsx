import React, { useState } from "react";
import { createTodo } from "../services/todoFactory";
import storage from "../services/store";

const Form = ({ setToDo, toDo }) => {
  const [inputText, setInputText] = useState("");

  const addBtnListener = (event) => {
    event.preventDefault();
    if (inputText) {
      setToDo([...toDo, storage.add(createTodo(inputText))]);
      setInputText("");
    }
  };

  const clearListBtnListener = (e) => {
    e.preventDefault();
    storage.removeAll(setToDo);
  };

  const handleInputChange = (e) => setInputText(e.target.value);

  return (
    <div>
      <form className="block__to" onSubmit={addBtnListener}>
        <input
          className="block__to-input"
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Что нужно сделать?"
        />
        <button className="block__to-button" type="submit">
          Добавить
        </button>
        <button className="block__to-allclear" onClick={clearListBtnListener}>
          Удалить все
        </button>
      </form>
    </div>
  );
};

export default Form;

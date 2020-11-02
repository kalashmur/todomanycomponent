import React from "react";
import storage from "../../services/store";
import cross from "../button/cross.svg";
import tick from "../button/tick.svg";
import pen from "../button/pen.svg";
import { Button } from "../button";
import "../listItem/style.css";

const Item = ({ setChange, item, setToDo }) => {
  const changeItemBtn = () => {
    setChange(item.id);
  };

  const removeItemBtnListener = (event) => {
    event.preventDefault();
    setToDo(storage.removeById(item));
  };
  const markAsDone = (e) => {
    e.preventDefault();
    setToDo(storage.markAsDone(item));
  };
  return (
    <div>
      <li
        className={`block__list-elem${item.done ? "-done" : ""}`}
        id={item.id}
      >
        <Button icon={pen} cla="block__list-btn" onPress={changeItemBtn} />
        <Button cla="block__list-btn" icon={tick} onPress={markAsDone} />
        <i className="block__list-elem-text">{item.text}</i>
        <Button
          cla="block__list-delete"
          icon={cross}
          onPress={removeItemBtnListener}
        />
      </li>
    </div>
  );
};

export default Item;

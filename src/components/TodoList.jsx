import React, { useState } from "react";
import Item from "./listItem/Item";
import ChangeItem from "./ChangeItem";

const TodoList = ({ toDo, setToDo }) => {
  const [change, setChange] = useState();

  return (
    <ul className="block__list">
      {toDo.map((item) =>
        item.id !== change ? (
          <Item
            setToDo={setToDo}
            setChange={setChange}
            key={item.id}
            item={item}
          />
        ) : (
          <ChangeItem item={item} setChange={setChange} key={item.id} />
        )
      )}
    </ul>
  );
};

export default TodoList;

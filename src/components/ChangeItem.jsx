import React, { useState } from "react";
import diskette from "./button/diskette.svg";
import storage from "../services/store";
import { Button } from "./button";

const ChangeItem = ({ item, setChange }) => {
  const [newText, setNewText] = useState(item.text);
  const saveChangeItem = () => {
    storage.createNewText(item, newText);
    setChange();
  };
  return (
    <div>
      <li className="block__list-elem">
        <Button
          cla="block__list-btn-change"
          onPress={saveChangeItem}
          icon={diskette}
        />
        <input
          className="block__list-input-change"
          type="text"
          value={newText}
          onChange={(e) => {
            setNewText(e.target.value);
          }}
        />
      </li>
    </div>
  );
};

export default ChangeItem;

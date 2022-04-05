import { MdCancel, BsPencil } from "./icons";
import { useState } from "react";
import "../styles/labels.css";
import { useNotes } from "../context/notes-context";

const Chips = () => {
  const { tags, setTags } = useNotes();

  const addTag = (e) => {
    e.key === "Enter" && e.target.value !== ""
      ? (setTags([...tags, e.target.value]), (e.target.value = ""))
      : setTags([...tags]);
  };

  const deleteTag = (indexToDelete) => {
    setTags(tags.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <div>
        <ul className="flex-row-start">
          {tags.map((tag, index) => (
            <li className="flex-row-sb mr-md p-sm chip" key={index}>
              <BsPencil size={15} className="mr-sm" />
              <span>{tag}</span>
              <MdCancel
                size={20}
                className="ml-sm"
                onClick={() => deleteTag(index)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="press enter to add label"
          className="chips-input p-sm my-sm"
          onKeyUp={addTag}
        />
      </div>
    </div>
  );
};

export { Chips };

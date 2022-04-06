import { useState } from "react";
import { useNotes } from "../context/notes-context";

const DowndownMenu = () => {
  return (
    <select name="tags" id="tags" className="select mx-sm text-bold">
      <option value="priority">priority</option>
      <option value="assigned">assigned</option>
      <option value="flagged">flagged</option>
      <option value="due date">due date</option>
    </select>
  );
};

const DowndownMenuTags = () => {
  const { input, setInput, tags } = useNotes();

  return (
    <select
      name="tags"
      id="tags"
      className="select mx-sm text-bold"
      value={input.tags}
      onChange={(e) => setInput({ ...input, tags: [e.target.value] })}
    >
      {tags?.map((tag) => (
        <option value={tag}>{tag}</option>
      ))}
    </select>
  );
};

export { DowndownMenu, DowndownMenuTags };

import { useState } from "react";
import { useNotes } from "../context/notes-context";
import "../styles/dropdownMenu.css";

const DowndownMenu = () => {
  const {
    noteState: { sortBy, filterCategories },
    noteDispatch,
  } = useNotes();

  const { urgent, intermediate, trivial } = filterCategories;

  return (
    <div className="filters-menu flex-col-start p-1">
      <div className="flex-col">
        <h5 className="mr-1">Sort By:</h5>
        <label htmlFor="sort-newest">
          <input
            type="radio"
            id="sort-newer"
            name="sort"
            className="input icon"
            checked={sortBy === "CREATION_TIME_NEWER"}
            onChange={() => noteDispatch({ type: "CREATION_TIME_NEWER" })}
          />
          Newer
        </label>
        <label>
          <input
            type="radio"
            id="sort-older"
            name="sort"
            className="input icon"
            checked={sortBy === "CREATION_TIME_OLDER"}
            onChange={() => noteDispatch({ type: "CREATION_TIME_OLDER" })}
          />
          Older
        </label>
      </div>
      <div className="flex-col">
        <h5 className="mr-1">Due In:</h5>
        <label htmlFor="sort-newest">
          <input
            type="checkbox"
            id="filter-1"
            name="filter"
            className="input icon"
            checked={urgent}
            onChange={() => noteDispatch({ type: "URGENT" })}
          />
          1 Day
        </label>
        <label>
          <input
            type="checkbox"
            id="filter-3"
            name="filter"
            className="input icon"
            checked={intermediate}
            onChange={() => noteDispatch({ type: "INTERMEDIATE" })}
          />
          2-3 Days
        </label>
        <label>
          <input
            type="checkbox"
            id="filter-7"
            name="filter"
            className="input icon"
            checked={trivial}
            onChange={() => noteDispatch({ type: "TRIVIAL" })}
          />
          A week
        </label>
      </div>
    </div>
  );
};

const DowndownMenuTags = () => {
  const { input, setInput, tags } = useNotes();

  return (
    <select
      name="tags"
      id="tags"
      className="select mx-sm text-bold"
      multiple={false}
      value={input.tags}
      onChange={(e) => setInput({ ...input, tags: [e.target.value] })}
    >
      {tags?.map((tag) => (
        <option value={tag} key={tag}>
          {tag}
        </option>
      ))}
    </select>
  );
};

export { DowndownMenu, DowndownMenuTags };

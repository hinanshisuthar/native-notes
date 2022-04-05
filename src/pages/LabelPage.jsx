import { Navbar } from "../components/Navbar";
import { Aside } from "../components/Aside";
import { NoteList } from "../components/NoteList";
import "../styles/labels.css";
import { Chips } from "../components/Chips";
import { useState } from "react";
import { useNotes } from "../context/notes-context";

const LabelPage = () => {
  const {
    noteState: { notes },
  } = useNotes();

  const getTagNames = notes.reduce((acc, curr) => {
    return acc.concat(
      curr.tags.filter((element) => {
        return !acc.some((item) => item === element);
      })
    );
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid grid-20-80">
        <Aside />
        <div>
          <div className="chips-con py-1 px-2">
            <fieldset className="px-2 py-1">
              <legend>
                <h4>Labels</h4>
              </legend>
              <Chips />
            </fieldset>
          </div>
          <div className="flex-row-start-wrap">
            {getTagNames?.map((tag) => (
              <NoteList notes={notes.filter((note) => note.tags[0] === tag)} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { LabelPage };

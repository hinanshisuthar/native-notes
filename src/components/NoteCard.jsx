import { BsPin, BsPalette, BsTrash, MdLabelOutline, MdOutlineArchive } from "./icons";
import "../styles/note-card.css";
import parse from "react-html-parser";

const NoteCard = ({notes}) => {
  return (
    <div className="note px-2 py-1 mx-2 my-1" key={notes._id}>
      <div className="note-header flex-row-start p-sm">
        <BsPin size={21} className="icon" />
        <small className="note-label ml-auto text-bold">Label 1</small>
      </div>
      <div className="p-sm">
        {parse(notes.value)}
      </div>
      <div className="flex-row-sb p-sm">
          <small className="text-bold">{new Date().toLocaleString()}</small>
          <div>
            <BsPalette size={22} className="icon" />
            <MdLabelOutline size={22} className="icon" />
            <MdOutlineArchive size={22} className="icon" />
            <BsTrash size={22} className="icon" />
          </div>
      </div>
      <div className="note-"></div>
      <div className="note-"></div>
    </div>
  );
};

export { NoteCard };

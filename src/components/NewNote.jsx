import { BsPin, BsPalette, BsTrash } from "react-icons/bs";
import "../styles/new-note.css";
import { MdLabelOutline, MdOutlineArchive } from "react-icons/md";

const NewNote = () => {
  return (
    <div className="note px-2 py-1 mx-2 my-1">
      <div className="note-header flex-row-start p-sm">
        <BsPin size={21} className="icon" />
        <h4 className="note-title ml-1">My Note 1</h4>
        <small className="note-label ml-auto text-bold">Work</small>
      </div>
      <div className="p-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        officiis! Lorem ipsum dolor sit amet.
      </div>
      <div className="flex-row-sb p-sm">
          <small className="text-bold">26-03-22</small>
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

export { NewNote };

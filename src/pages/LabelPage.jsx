import { Navbar } from "../components/Navbar";
import { Aside } from "../components/Aside";
import { NewNote } from "../components/NewNote";
import "../styles/labels.css";
import { Chips } from "../components/Chips";

const LabelPage = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-20-80">
        <Aside />
        <div>
          <div className="chips-con py-1 px-2">
            <fieldset className="px-2 py-1">
              <legend><h4>Labels</h4></legend>
              <Chips />
            </fieldset>
          </div>
          <div>
              <NewNote />
          </div>
        </div>
      </div>
    </>
  );
};

export { LabelPage };

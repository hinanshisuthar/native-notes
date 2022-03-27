import "../styles/aside.css";
import {BsPlusLg, BsHouse, BsArchive, BsTrash, MdLabelOutline, BiUserCircle} from './icons'

import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div className="aside">
      <Link className="router-link" to="/home">
        <div className="p-sm m-md flex-row-start">
          <BsHouse size={22} className="icon home-c" />
          Home <span className="count home ml-auto">01</span>
        </div>
      </Link>
      <Link className="router-link" to="/labels">
        <div className="p-sm m-md flex-row-start">
          <MdLabelOutline size={25} className="icon label-c" />
          Labels <span className="count label ml-auto">01</span>
        </div>
      </Link>
      <Link className="router-link" to="/archived">
        <div className="p-sm m-md flex-row-start">
          <BsArchive size={22} className="icon archive-c" />
          Archive <span className="count archive ml-auto">01</span>
        </div>
      </Link>
      <Link className="router-link" to="/trashed">
        <div className="p-sm m-md flex-row-start">
          <BsTrash size={22} className="icon trash-c" />
          Trash <span className="count trash ml-auto">01</span>
        </div>
      </Link>
      <Link className="router-link" to="/profile">
        <div className="p-sm m-md flex-row-start">
          <BiUserCircle size={25} className="icon profile" />
          Profile
        </div>
      </Link>
      <div className="p-sm m-md">
        <button className="btn btn-primary flex-row-sb">
          {" "}
          <BsPlusLg className="plus-icon" /> Add New Note
        </button>
      </div>
    </div>
  );
};

export { Aside };

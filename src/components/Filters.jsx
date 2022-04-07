import "../styles/filters.css";
import { DowndownMenu } from "./DropdownMenu";
import { useState } from "react";
import { BsFilterCircle } from "../components/icons";

const Filters = () => {
  const [filtersMenu, setFiltersMenu] = useState(false);
  const showFiltersMenu = () => {
    setFiltersMenu(!filtersMenu);
  };

  return (
    <div className="wrapper px-md">
      <fieldset className="p-sm px-md flex-col-start">
        <button
          className="btn btn-primary flex-row-start filters-btn"
          onClick={showFiltersMenu}
        >
          <BsFilterCircle size={20} className="icon ml-auto" /> Filters
        </button>
        <div className="flex-row-sb">
          <label htmlFor="tags" className="mr-2 dropdown-con flex-col-start">
            {filtersMenu ? <DowndownMenu /> : null}
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export { Filters };

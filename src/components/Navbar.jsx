import { BsSearch, BsPlusLg, BsFillMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navigation">
        <div className="flex-row-sb px-2 py-1">
          <Link to="/" className="logo">
            <div className="avatar avatar-sm flex-row-start">
              <img
                src="https://millionairedating.onluxy.com/wp-content/uploads/2018/12/woman-smilling-in-red-top-and-red-lipstick-square-e1544061815643.jpg"
                alt="avatar-img"
                className="img-responsive img-circular"
              />
              <small className="text-sm text-bold m-sm">Rachel Green</small>
            </div>
          </Link>
          <div className="flex-row-start nav-title">
            <div className="mx-2">
              <p className="text-md text-bold">All Notes</p>
            </div>
            <div htmlFor="search-field" className="flex-row-sb mx-2 search-field">
              <input
                type="text"
                className="text-sm p-sm"
                id="search-field"
                placeholder="Search notes"
              />
              <button type="submit" className="btn-icon pr-sm">
                <BsSearch size={20} />
              </button>
            </div>
            <div className="mx-2">
              <button className="btn btn-primary flex-row-sb">
                {" "}
                <BsPlusLg className="plus-icon" /> Add New Note
              </button>
            </div>
          </div>
          <div>
            <BsFillMoonFill size={22} />
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navbar };

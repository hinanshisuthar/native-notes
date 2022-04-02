import { Aside } from "../components/Aside";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-20-80">
        <Aside />
        <section className="px-1 py-2">
          <h3 className="px-2">My Profile</h3>
          <div className="px-2 my-1">
            <Link to="/">
              <button className="btn btn-primary">Log Out</button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export { ProfilePage };

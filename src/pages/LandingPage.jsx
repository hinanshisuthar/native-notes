import "../styles/landing-page.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="page-wrapper flex-col-sa p-1">
      <div className="page-content text-center px-1">
        <h1 className="mt-1">
          Meet your modern <span className="highlight">note taking app</span>
        </h1>
        <h4 className="mt-1">
          Manage your daily tasks and workflow in a modern way and boost your
          efficiency without any efforts.
        </h4>
      </div>
      <div className="page-image">
        <img
          src="https://res.cloudinary.com/do5ez3xws/image/upload/v1648312954/notes_1_tgrb5s.svg"
          className="img-responsive"
        />
      </div>
      <Link to="home">
      <button className="btn btn-primary">Join Now</button>
      </Link>
      <span className="highlight text-bold">Already have an account?</span>
    </div>
  );
};

export { LandingPage };

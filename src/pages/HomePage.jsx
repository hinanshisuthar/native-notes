import { Aside } from "../components/Aside";
import { Filters } from "../components/Filters";
import { Navbar } from "../components/Navbar";
import { NewNote } from "../components/NewNote";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-20-80">
        <Aside />
        <div>
          <Filters />
          <NewNote />
        </div>
      </div>
    </>
  );
};

export { HomePage };

import { Aside } from "../components/Aside";
import { Navbar } from "../components/Navbar";
import { HomeDisplay } from "./HomeDisplay";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-20-80">
        <Aside />
        <HomeDisplay />
      </div>
    </>
  );
};

export { HomePage };

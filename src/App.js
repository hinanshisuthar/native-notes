import "./App.css";
import {Routes, Route} from 'react-router-dom'
import { HomePage } from "./pages/HomePage";
import { LandingPage } from "./pages/LandingPage";
import { LabelPage } from "./pages/LabelPage";
import { ArchivePage } from "./pages/ArchivePage";
import { TrashPage } from "./pages/TrashPage";
import { ProfilePage } from "./pages/ProfilePage";
import { MockAPI } from "./pages/Mockman";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mock" element={<MockAPI />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/labels" element={<LabelPage />} />
        <Route path="/archived" element={<ArchivePage />} />
        <Route path="/trashed" element={<TrashPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from 'react-router-dom';
import { NoteProvider } from "./context/notes-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NoteProvider>
        <App />
      </NoteProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

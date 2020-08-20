import React, { Fragment } from "react";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Contactme from "./components/Contactme";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import CoverPage from "./components/CoverPage/CoverPage";

function App() {
  return (
    <Fragment>
      <div>
        <Navbar />
      </div>

      <div>
        <CoverPage />
      </div>

      <div>
        <Aboutme />
      </div>

      <div>
        <Projects />
      </div>
      <div>
        <Contactme />
      </div>
    </Fragment>
  );
}

export default App;

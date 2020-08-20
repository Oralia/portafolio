import React from "react";
import styles from "./style.module.css";
import datalovers from "../../images/datalovers.png";
import socialnetwork from "../../images/socialnetwork.png";

const Projects = () => {
  return (
    <section id="Projects">
      <div className="project">
        <div>
          <img src={datalovers} alt="Project1" />
          <p>Data Lovers</p>
        </div>
        <button>View project</button>
      </div>
      <div className="project2">
        <figure>
          <img src={socialnetwork} alt="Project2" />
          <p>Socialnetwork</p>
        </figure>
        <button>View project</button>
      </div>
    </section>
  );
};

export default Projects;

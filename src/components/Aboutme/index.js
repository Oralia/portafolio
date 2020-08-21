import React from "react";
import styles from "./style.module.css";

const Aboutme = () => {
  return (
    <section className={styles.container} id="Aboutme">
      <div className={styles.containertext}>
        <p className={styles.name}> Oralia Garrido</p>
        <p className={styles.text}>
          Front end -developer, Ing. en electrónica y exploradora del mundo
          Tech, dedicada, apasionada y enfocada en cumplir los objetivos.
        </p>
      </div>
      <div className={styles.containerskills}>
        <div className={styles.SoftSkills}>
          <h5>Softskills</h5>
          <p>Trabajo remoto</p>
          <p>Trabajo en equipo</p>
          <p>Autodidacta</p>
          <p>Comunicación</p>
        </div>
        <div className={styles.skills}>
          <h5>Skills</h5>
          <p>Git</p>
          <p>Github</p>
          <p>Js</p>
          <p>CSS</p>
          <p>HTML</p>
          <p>Node Js</p>
          <p>React</p>
          <p>Firebase</p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;

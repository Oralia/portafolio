import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

import github from "../../images/github.png";
import lin from "../../images/linkedin.png";
import mail from "../../images/gmail.png";

const Contactme = () => {
  return (
    <section id="Contactme" className={styles.container}>
      <div className={styles.lin}>
        <a href="https://www.linkedin.com/in/oralia-garrido-87b835106/">
          <img src={lin} alt="linkendIn" />
        </a>
      </div>
      <div className={styles.git}>
        <a href="https://github.com/Oralia">
          <img src={github} alt="Github" />
        </a>
      </div>

      <div className={styles.git}>
        <img src={mail} alt="Correo" />
        <a href="oraliagarrido@gmail.com">Correo</a>
      </div>
    </section>
  );
};

export default Contactme;

/*      

  <Link to="https://www.linkedin.com/in/oralia-garrido-87b835106/">
      <img src={lin} alt="linkendIn" className={styles.lin} />
    </Link>
*/

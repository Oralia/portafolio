import React from "react";
import styles from "./style.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.Container}>
        <header>
          <a className={styles.link} href="#Aboutme">
            Acerca de mi
          </a>

          <a className={styles.link} href="#Projects">
            Proyectos
          </a>

          <a className={styles.link} href="#Contactme">
            Contacto
          </a>
        </header>
      </div>
    </>
  );
};

export default Navbar;

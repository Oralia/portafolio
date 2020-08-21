import React from "react";
import styles from "./style.module.css";
import datalovers from "../../images/datalovers.png";
import vegan from "../../images/vegan.png";
import md from "../../images/md.png";

const Projects = () => {
  return (
    <section id="Projects" className={styles.Projects}>
      <div className={styles.Project1}>
        <img src={datalovers} alt="Project1" />
        <p className={styles.text}>
          <h4>La vida de la mujeres en latino Latinoamérica </h4>
          En esta pagina podrás conocer indicadores de desarrollo referente a
          las mujeres y a sus indicadores demográficos, económicos y
          comerciales. Basado en Indicadores de desarrollo del Banco Mundial de
          algunos países (Brasil, Chile, México y Perú)
          <a href="https://data-lovers.vercel.app/">Demo</a>
        </p>
      </div>
      <div className={styles.Project1}>
        <p className={styles.text}>
          <h4>Vegan queen </h4>
          Es una aplicación pensada para ipad, diseñada y desarrollada para un
          pequeño restaurante vegano con el objetivo tomar de una manera más
          ágil, eficaz y práctica las comandas y mandarlas a cocina y así
          mejorar el servicio en cuanto a tiempo de entrega, la cual tiene base
          de datos en tiempo real con los registros de las órdenes.
          <a href="https://burger-queen.vercel.app/">Demo</a>
        </p>
        <img src={vegan} alt="Project2" />
      </div>
      <div className={styles.Project1}>
        <img src={md} alt="Project3" />
        <p className={styles.text}>
          <h4>Markdown Links</h4>
          Es una librería desarrollada con Node.js, la cual lee y analiza
          archivos en formato `Markdown` (.md), para verificar los links que
          contienen y obtener estadísticas a partir de los links encontrados,
          los links funcionales y los links rotos.
          <a href="https://github.com/Oralia/CDMX009-MdLinks">Repo</a>
        </p>
      </div>
    </section>
  );
};

export default Projects;

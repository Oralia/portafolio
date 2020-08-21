import React from "react";
import style from "./style.module.css";

const CoverPage = () => {
  return (
    <div className={style.content}>
      <div className={style.content__container}>
        <p className={style.content__container__text}> Oralia</p>

        <ul className={style.content__container__list}>
          <li className={style.content__container__list__item}>portafolio</li>
          <li className={style.content__container__list__item}>Garrido</li>
          <li className={style.content__container__list__item}>Front end</li>
          <li className={style.content__container__list__item}>developer</li>
        </ul>
      </div>
    </div>
  );
};

export default CoverPage;

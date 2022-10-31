import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Page-Sections/General-Section-Styles/General.module.css";

const Knots_Ropes = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Header_Image_Container}>
        <img src={""} alt="" className={Styles.Section_Image} />
      </div>

      <h3 className={Styles.Section_Title}>Knots & Ropes</h3>

      <p className={Styles.Section_Description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae
        possimus amet beatae nihil accusamus laudantium architecto debitis saepe
        deserunt?
      </p>
    </div>
  );
};

export default Knots_Ropes;

import React from "react";
import image from "../../Assets/Img/check.svg";
import "./Finally.css";

export const Finally = () => (
  <section className="finally">
    <img className={"finally__mark"} src={image} alt="mark" />
    <button className="finally__button">Go to Dashboard</button>
  </section>
);

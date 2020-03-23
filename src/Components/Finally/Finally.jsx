import React from "react";
import image from "../../Assets/Img/check.svg";
import "./Finally.css";

export const FinallyWithProps = ({ getUserData }) => (
  <section className="finally">
    <img className={"finally__mark"} src={image} alt="mark" />
    <button className="finally__button" onClick={getUserData}>
      Go to Dashboard
    </button>
  </section>
);

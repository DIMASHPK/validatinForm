import React from "react";
import image from "../../Assets/Img/check.svg";
import "./Finally.css";
import { Preloader } from "../Preloader/Preloader";

export const FinallyWithProps = ({ getUserData, loadDone, load }) => (
  <section className="finally">
    {load ? (
      <img className={"finally__mark"} src={image} alt="mark" />
    ) : (
      <>
        <Preloader />
        <img src={image} alt="preload" onLoad={loadDone} />
      </>
    )}
    <button className="finally__button" onClick={getUserData}>
      Go to Dashboard
    </button>
  </section>
);

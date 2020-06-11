import React from "react";
import image from "../../Assets/Img/check.svg";
import { Preloader } from "../Preloader/Preloader";
import "./Finally.css";

export const Finally = () => {
  const [load, setLoad] = React.useState(false);
  const loadDone = () => setLoad(true);

  return (
    <section className="finally">
      {load ? (
        <img className={"finally__mark"} src={image} alt="mark" />
      ) : (
        <>
          <Preloader />
          <img src={image} alt="preload" onLoad={loadDone} />
        </>
      )}
      <button className="finally__button" type="submit">
        Go to Dashboard
      </button>
    </section>
  );
};

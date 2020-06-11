import React from "react";
import { Date } from "./Date/Date";
import { Gender } from "./Gender/Gender";
import { AboutUs } from "./AboutUs/AboutUs";
import "./SecondStep.css";

export const SecondStep = ({ error }) => (
  <section className="secondStep">
    <Date error={error} />
    <Gender />
    <AboutUs />
  </section>
);

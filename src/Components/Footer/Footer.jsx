import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export const FooterWithProps = ({ path, disabled }) => (
  <footer className={"footer"}>
    {path.includes("nextStep") ? (
      <button className="footer__button">
        <NavLink to="/" className={"footer__link footer__link_back"}>
          Back
        </NavLink>
      </button>
    ) : (
      <div></div>
    )}
    <button className={"footer__button"} disabled={disabled()}>
      {disabled() === true ? (
        <span className={"footer__link"}>Next</span>
      ) : (
        <NavLink
          to={path.includes("nextStep") ? "/finally" : "/nextStep"}
          className={"footer__link"}
        >
          Next
        </NavLink>
      )}
    </button>
  </footer>
);

import React from "react";
import { withRouter } from "react-router-dom";

import "./Header.css";

export const HeaderWithUrl = ({ location: { pathname } }) => (
  <header className={"header"}>
    <h1 className={"header__title"}>{`${
      pathname.includes("finally") ? "Thank you" : "Signup"
    }`}</h1>

    <div className={`header_progressLine `}>
      <div className={`header__progressElement blue`}></div>
      <div
        className={`header__progressElement ${
          pathname.includes("nextStep") || pathname.includes("finally")
            ? "blue"
            : ""
        }`}
      ></div>
      <div
        className={`header__progressElement ${
          pathname.includes("finally") ? "blue" : ""
        }`}
      ></div>
    </div>
  </header>
);

export const Header = withRouter(HeaderWithUrl);

import React from "react";
import { Header } from "./Components/Header/Header";
import { Container } from "./Container/Container";
import { FirstStep } from "./Container/FirstStepContainer";
import { SecondStep } from "./Container/SecondStepContainer";
import { Route, withRouter } from "react-router-dom";

import { Finally } from "./Container/FinallyContainer";
import { Footer } from "./Container/FooterContainer";
import "./Assets/Fonts/Fonts.css";
import "./App.css";

const App = ({ location: { pathname } }) => (
  <>
    <Header />
    {/* <Container /> */}
    <Route exact path="/nextStep">
      <SecondStep />
    </Route>
    <Route exact path="/finally">
      <Finally />
    </Route>
    <Route exact path="/">
      <FirstStep />
    </Route>
    {!pathname.includes("finally") && <Footer path={pathname} />}
  </>
);

export default withRouter(App);

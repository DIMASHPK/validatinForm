import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Header } from "./Components/Header/Header";
import { FirstStep } from "./Container/FirstStepContainer";
import { SecondStep } from "./Container/SecondStepContainer";
import { Finally } from "./Container/FinallyContainer";
import { Footer } from "./Container/FooterContainer";
import "./Assets/Fonts/Fonts.css";
import "./App.css";

const App = ({ location: { pathname } }) => (
  <>
    <Header />
    <div className="transitionWrap">
      <TransitionGroup className={"transitionWrap__relative"}>
        <CSSTransition
          key={pathname}
          timeout={{ enter: 500, exit: 500 }}
          classNames={"fade"}
        >
          <Switch>
            <Route exact path="/nextStep" component={() => <SecondStep />} />
            <Route exact path="/finally" component={() => <Finally />} />
            <Route exact path="/" component={() => <FirstStep />}></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>

    {!pathname.includes("finally") && <Footer path={pathname} />}
  </>
);

export default withRouter(App);

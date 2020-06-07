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

const App = ({ location: { pathname } }) => {
  const routes = [
    { path: "/nextStep", Component: SecondStep },
    { path: "/finally", Component: Finally },
    { path: "/", Component: FirstStep },
  ];

  return (
    <>
      <Header />
      <div className="transitionWrap">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({match}) =>(
              <CSSTransition
                in={match}
                timeout={{ appear: 300, enter: 300, exit: 300 }}
                classNames={`fade`}
                unmountOnExit
                appear={true}
              >
                <div className="fade">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
      {!pathname.includes("finally") && <Footer path={pathname} />}
    </>
  );
};

export default withRouter(App);

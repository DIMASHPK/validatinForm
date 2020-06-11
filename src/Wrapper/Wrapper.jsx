import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { SecondStep } from "../Components/SecondStep/SecondStep";
import { Finally } from "../Components/Finally/Finally";
import { FirstStep } from "../Components/FirstStep/FirstStep";
import { reduxForm } from "redux-form";
import { adult } from "../ValidationFunc/ValidationFunc";

const routes = [
  { path: "/nextStep", Component: SecondStep },
  { path: "/finally", Component: Finally },
  { path: "/", Component: FirstStep },
];

const Wrapper = ({ handleSubmit, error }) => (
  <form className="transitionWrap" onSubmit={handleSubmit}>
    {routes.map(({ path, Component }) => (
      <Route key={path} exact path={path}>
        {({ match }) => (
          <CSSTransition
            in={match}
            timeout={{ appear: 300, enter: 300, exit: 300 }}
            classNames={`fade`}
            unmountOnExit
            appear={true}
          >
            <div className="fade">
              <Component error={error} />
            </div>
          </CSSTransition>
        )}
      </Route>
    ))}
  </form>
);

export default reduxForm({
  form: "first page",
  validate: adult,
  initialValues: { gender: "male" },
})(Wrapper);

import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import {
  changeEmailAC,
  changePasswordAC,
  changeConfirmPasswordAC,
  validEmailAC,
  validPasswordAC,
  validConfirmAC
} from "../Redux/ValidationReducer";
import { FirstStep } from "../Components/FirstStep/FirstStep";
import { SecondStep } from "../Components/SecondStep/SecondStep";
import { Finally } from "../Components/Finally/Finally";
import { Footer } from "../Components/Footer/Footer";
import { connect } from "react-redux";

export const ContainerWithData = ({
  location: { pathname },
  changeEmailAC,
  changePasswordAC,
  changeConfirmPasswordAC,
  validEmailAC,
  validPasswordAC,
  validConfirmAC,
  email,
  password,
  confirm,
  emailError,
  passwordError,
  confirmError,
  validEmail,
  validPassword
}) => {
  const inputs = [
    {
      id: 1,
      name: "email",
      onChange: changeEmailAC,
      onBlur: validEmailAC,
      value: email,
      error: emailError
    },
    {
      id: 2,
      name: "password",
      onChange: changePasswordAC,
      onBlur: validPasswordAC,
      value: password,
      error: passwordError
    },
    {
      id: 3,
      name: "confirm password",
      label: "confirm",
      onChange: changeConfirmPasswordAC,
      onBlur: validConfirmAC,
      value: confirm,
      error: confirmError
    }
  ];

  const disabledLink = () => {
    if (pathname.includes("/") && validEmail && validPassword) {
      return false;
    }
    return true;
  };

  console.log(pathname.includes("nextStep") && validEmail && validPassword);

  return (
    <>
      <Route exact path="/nextStep">
        <SecondStep />
      </Route>
      <Route exact path="/">
        <FirstStep inputs={inputs} />
      </Route>
      <Route exact path="/finally">
        <Finally />
      </Route>
      {!pathname.includes("finally") && (
        <Footer path={pathname} disabled={disabledLink} />
      )}
    </>
  );
};

const mapStateToProps = ({
  ValiditionReducer: {
    email: { email, emailError, validEmail },
    password: { password, confirm, passwordError, confirmError, validPassword }
  }
}) => ({
  email,
  password,
  confirm,
  emailError,
  passwordError,
  confirmError,
  validEmail,
  validPassword
});

const mapDispatchToProps = {
  changeEmailAC,
  changePasswordAC,
  changeConfirmPasswordAC,
  validEmailAC,
  validPasswordAC,
  validConfirmAC
};

export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContainerWithData));

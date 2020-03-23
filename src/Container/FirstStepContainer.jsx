import React from "react";
import { connect } from "react-redux";
import {
  changeInputsAC,
  validEmailAC,
  validPasswordAC,
  validConfirmAC
} from "../Redux/ActionsCreater";
import { FirstStepWithProps } from "../Components/FirstStep/FirstStep";

const FirstStepContainer = ({
  email,
  password,
  confirm,
  emailError,
  passwordError,
  confirmError,
  changeInputsAC,
  validEmailAC,
  validPasswordAC,
  validConfirmAC
}) => {
  const inputs = [
    {
      id: 1,
      name: "email",
      onChange: changeInputsAC,
      onBlur: validEmailAC,
      value: email,
      error: emailError
    },
    {
      id: 2,
      name: "password",
      onChange: changeInputsAC,
      onBlur: validPasswordAC,
      value: password,
      error: passwordError
    },
    {
      id: 3,
      name: "confirm password",
      label: "confirm",
      onChange: changeInputsAC,
      onBlur: validConfirmAC,
      value: confirm,
      error: confirmError
    }
  ];
  return <FirstStepWithProps inputs={inputs} />;
};

const mapStateToProps = ({
  FirstValiditionReducer: {
    email,
    password,
    confirm,
    emailValid: { emailError },
    passwordValid: { passwordError, confirmError }
  }
}) => ({
  email,
  password,
  confirm,
  emailError,
  passwordError,
  confirmError
});

const mapDispatchToPtops = {
  changeInputsAC,
  validEmailAC,
  validPasswordAC,
  validConfirmAC
};

export const FirstStep = connect(
  mapStateToProps,
  mapDispatchToPtops
)(FirstStepContainer);

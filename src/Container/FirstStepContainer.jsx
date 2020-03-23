import React from "react";
import { connect } from "react-redux";
import {
  changeEmailAC,
  changePasswordAC,
  changeConfirmPasswordAC,
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
  changeEmailAC,
  changePasswordAC,
  changeConfirmPasswordAC,
  validEmailAC,
  validPasswordAC,
  validConfirmAC
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
  return <FirstStepWithProps inputs={inputs} />;
};

const mapStateToProps = ({
  FirstValiditionReducer: {
    email: { email, emailError, validEmail },
    password: { password, confirm, passwordError, confirmError, validPassword }
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
  changeEmailAC,
  changePasswordAC,
  changeConfirmPasswordAC,
  validEmailAC,
  validPasswordAC,
  validConfirmAC
};

export const FirstStep = connect(
  mapStateToProps,
  mapDispatchToPtops
)(FirstStepContainer);

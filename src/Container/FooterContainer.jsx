import React from "react";
import { connect } from "react-redux";
import { FooterWithProps } from "../Components/Footer/Footer";

const FooterContainer = ({
  path,
  validEmail,
  validPassword,
  dayValid,
  monthValid,
  yearValid,
  adult
}) => {
  const disabledLink = () => {
    if (
      path.includes("/nextStep") &&
      dayValid &&
      monthValid &&
      yearValid &&
      adult
    ) {
      return false;
    } else if (
      (path.includes("/nextStep") && !dayValid) ||
      (path.includes("/nextStep") && !monthValid) ||
      (path.includes("/nextStep") && !yearValid)
    ) {
      return true;
    } else if (path.includes("/nextStep") && validEmail && validPassword) {
      return true;
    } else if (path.includes("/") && validEmail && validPassword) {
      return false;
    }
    return true;
  };

  return <FooterWithProps path={path} disabled={disabledLink()} />;
};

const mapStateToProps = ({
  FirstValiditionReducer: {
    emailValid: { validEmail },
    passwordValid: { validPassword }
  },
  SecondValiditionReducer: {
    dateValid: {
      day: { dayValid },
      month: { monthValid },
      year: { yearValid }
    },
    adult
  }
}) => ({ validEmail, validPassword, dayValid, monthValid, yearValid, adult });

export const Footer = connect(mapStateToProps)(FooterContainer);

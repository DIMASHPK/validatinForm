import React from "react";
import { Route, withRouter } from "react-router-dom";
import {
  changeEmailAC,
  changePasswordAC,
  changeConfirmPasswordAC,
  validEmailAC,
  validPasswordAC,
  validConfirmAC,
  changeDayAC,
  changeMonthAC,
  changeYearAC,
  validDayAC,
  validMonthAC,
  validYearAC,
  changeGenderAC,
  changeAboutUsAC
} from "../Redux/ActionsCreater";
import { FirstStepWithProps } from "../Components/FirstStep/FirstStep";
import { SecondStepWithProps } from "../Components/SecondStep/SecondStep";
import { FinallyWithProps } from "../Components/Finally/Finally";
import { FooterWithProps } from "../Components/Footer/Footer";
import { connect } from "react-redux";

export const ContainerWithData = ({
  location: { pathname },
  changeEmailAC,
  changePasswordAC,
  changeConfirmPasswordAC,
  changeDayAC,
  changeMonthAC,
  changeYearAC,
  validEmailAC,
  validPasswordAC,
  validConfirmAC,
  validDayAC,
  validMonthAC,
  validYearAC,
  email,
  password,
  confirm,
  day,
  month,
  year,
  adult,
  gender,
  aboutUs,
  emailError,
  passwordError,
  confirmError,
  validEmail,
  validPassword,
  dayError,
  monthError,
  yearError,
  dayValid,
  monthValid,
  yearValid,
  changeGenderAC,
  changeAboutUsAC
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
  const dateInputs = [
    {
      id: 1,
      name: "day",
      min: 1,
      max: 31,
      placeholder: "DD",
      value: day,
      onChange: changeDayAC,
      onBlur: validDayAC,
      error: dayError
    },
    {
      id: 2,
      name: "month",
      min: 1,
      max: 12,
      placeholder: "MM",
      value: month,
      onChange: changeMonthAC,
      onBlur: validMonthAC,
      error: monthError
    },
    {
      id: 3,
      name: "year",
      min: 0,
      placeholder: "YYYY",
      value: year,
      onChange: changeYearAC,
      onBlur: validYearAC,
      error: yearError
    }
  ];

  const genderInputs = [
    { id: 1, value: "male", onChange: changeGenderAC, gender: gender },
    { id: 2, value: "female", onChange: changeGenderAC, gender: gender },
    { id: 3, value: "unspecified", onChange: changeGenderAC, gender: gender }
  ];

  const disabledLink = () => {
    if (
      pathname.includes("/nextStep") &&
      dayValid &&
      monthValid &&
      yearValid &&
      adult
    ) {
      return false;
    } else if (
      (pathname.includes("/nextStep") && !dayValid) ||
      (pathname.includes("/nextStep") && !monthValid) ||
      (pathname.includes("/nextStep") && !yearValid)
    ) {
      return true;
    } else if (pathname.includes("/nextStep") && validEmail && validPassword) {
      return true;
    } else if (pathname.includes("/") && validEmail && validPassword) {
      return false;
    }
    return true;
  };

  return (
    <>
      <Route exact path="/nextStep">
        <SecondStepWithProps
          dateInputs={dateInputs}
          genderInputs={genderInputs}
          changeAboutUsAC={changeAboutUsAC}
          aboutUs={aboutUs}
          adult={adult}
        />
      </Route>
      <Route exact path="/">
        <FirstStepWithProps inputs={inputs} />
      </Route>
      <Route exact path="/finally">
        <FinallyWithProps
          email={email}
          password={password}
          day={day}
          month={month}
          year={year}
          gender={gender}
          aboutUs={aboutUs}
        />
      </Route>
      {!pathname.includes("finally") && (
        <FooterWithProps path={pathname} disabled={disabledLink} />
      )}
    </>
  );
};

const mapStateToProps = ({
  FirstValiditionReducer: {
    email: { email, emailError, validEmail },
    password: { password, confirm, passwordError, confirmError, validPassword }
  },
  SecondValiditionReducer: {
    date: {
      day: { day, dayValid, dayError },
      month: { month, monthValid, monthError },
      year: { year, yearValid, yearError }
    },
    adult,
    gender,
    aboutUs
  }
}) => ({
  email,
  password,
  confirm,
  emailError,
  passwordError,
  confirmError,
  validEmail,
  validPassword,
  adult,
  day,
  month,
  year,
  dayValid,
  dayError,
  monthValid,
  monthError,
  yearValid,
  yearError,
  aboutUs,
  gender
});

const mapDispatchToProps = {
  changeEmailAC,
  changePasswordAC,
  changeConfirmPasswordAC,
  validEmailAC,
  validPasswordAC,
  validConfirmAC,
  changeDayAC,
  changeMonthAC,
  changeYearAC,
  validDayAC,
  validMonthAC,
  validYearAC,
  changeGenderAC,
  changeAboutUsAC
};

export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContainerWithData));

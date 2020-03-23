import React from "react";
import { connect } from "react-redux";
import { SecondStepWithProps } from "../Components/SecondStep/SecondStep";
import {
  changeInputsAC,
  validDayAC,
  validMonthAC,
  validYearAC
} from "../Redux/ActionsCreater";

const SecondStepContainer = ({
  adult,
  day,
  month,
  year,
  dayError,
  monthError,
  yearError,
  aboutUs,
  gender,
  changeInputsAC,
  validDayAC,
  validMonthAC,
  validYearAC
}) => {
  const dateInputs = [
    {
      id: 1,
      name: "day",
      min: 1,
      max: 31,
      placeholder: "DD",
      value: day,
      onChange: changeInputsAC,
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
      onChange: changeInputsAC,
      onBlur: validMonthAC,
      error: monthError
    },
    {
      id: 3,
      name: "year",
      min: 0,
      placeholder: "YYYY",
      value: year,
      onChange: changeInputsAC,
      onBlur: validYearAC,
      error: yearError
    }
  ];

  const genderInputs = [
    { id: 1, value: "male", onChange: changeInputsAC, gender: gender },
    { id: 2, value: "female", onChange: changeInputsAC, gender: gender },
    { id: 3, value: "unspecified", onChange: changeInputsAC, gender: gender }
  ];

  return (
    <SecondStepWithProps
      dateInputs={dateInputs}
      genderInputs={genderInputs}
      changeAboutUsAC={changeInputsAC}
      aboutUs={aboutUs}
      adult={adult}
    />
  );
};

const mapStateToProps = ({
  SecondValiditionReducer: {
    day,
    month,
    year,
    adult,
    gender,
    aboutUs,
    dateValid: {
      day: { dayError },
      month: { monthError },
      year: { yearError }
    }
  }
}) => ({
  adult,
  day,
  month,
  year,
  dayError,
  monthError,
  yearError,
  aboutUs,
  gender
});

const mapDispatchToProps = {
  changeInputsAC,
  validDayAC,
  validMonthAC,
  validYearAC
};

export const SecondStep = connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondStepContainer);

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
      onBlur: validMonthAC,
      error: monthError
    },
    {
      id: 3,
      name: "year",
      min: 0,
      placeholder: "YYYY",
      value: year,
      onBlur: validYearAC,
      error: yearError
    }
  ];

  const genderInputs = [
    { id: 1, value: "male", gender: gender },
    { id: 2, value: "female", gender: gender },
    { id: 3, value: "unspecified", gender: gender }
  ];

  return (
    <SecondStepWithProps
      dateInputs={dateInputs}
      genderInputs={genderInputs}
      onChange={changeInputsAC}
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

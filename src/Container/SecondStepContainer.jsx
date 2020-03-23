import React from "react";
import { connect } from "react-redux";
import { SecondStepWithProps } from "../Components/SecondStep/SecondStep";
import {
  changeDayAC,
  changeMonthAC,
  changeYearAC,
  validDayAC,
  validMonthAC,
  validYearAC,
  changeGenderAC,
  changeAboutUsAC
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
  changeDayAC,
  changeMonthAC,
  changeYearAC,
  validDayAC,
  validMonthAC,
  validYearAC,
  changeGenderAC,
  changeAboutUsAC
}) => {
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

  return (
    <SecondStepWithProps
      dateInputs={dateInputs}
      genderInputs={genderInputs}
      changeAboutUsAC={changeAboutUsAC}
      aboutUs={aboutUs}
      adult={adult}
    />
  );
};

const mapStateToProps = ({
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
  changeDayAC,
  changeMonthAC,
  changeYearAC,
  validDayAC,
  validMonthAC,
  validYearAC,
  changeGenderAC,
  changeAboutUsAC
};

export const SecondStep = connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondStepContainer);

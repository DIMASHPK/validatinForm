import React from "react";
import { connect } from "react-redux";
import { FinallyWithProps } from "../Components/Finally/Finally";

const FinallyContainer = ({
  email,
  password,
  day,
  month,
  year,
  gender,
  aboutUs
}) => {
  const getDate = () =>
    new Date(`${year}-${month}-${day}`).toLocaleDateString();

  const getUserData = () =>
    console.log({
      userData: {
        email,
        password,
        dateOfBirhday: new Date(`${year}-${month}-${day}`).toLocaleDateString(),
        gender,
        aboutUs
      }
    });

  return (
    <FinallyWithProps
      email={email}
      password={password}
      day={day}
      month={month}
      year={year}
      gender={gender}
      aboutUs={aboutUs}
      getUserData={getUserData}
    />
  );
};

const mapStateToProps = ({
  FirstValiditionReducer: {
    email: { email },
    password: { password }
  },
  SecondValiditionReducer: {
    date: {
      day: { day },
      month: { month },
      year: { year }
    },
    gender,
    aboutUs
  }
}) => ({
  email,
  password,
  day,
  month,
  year,
  gender,
  aboutUs
});

export const Finally = connect(mapStateToProps)(FinallyContainer);

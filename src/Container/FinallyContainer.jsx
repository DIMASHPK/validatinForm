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
        dateOfBirhday: getDate(),
        gender,
        aboutUs
      }
    });

  return <FinallyWithProps getUserData={getUserData} />;
};

const mapStateToProps = ({
  FirstValiditionReducer: { email, password },
  SecondValiditionReducer: { day, month, year, gender, aboutUs }
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

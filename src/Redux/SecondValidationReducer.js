import {
  DAY,
  MONTH,
  YEAR,
  GENDER,
  ABOUT_US,
  VALID_DAY,
  VALID_YEAR,
  VALID_MONTH
} from "./Constats";
import * as validFunc from "../ValidationFunc/ValidationFunc";

/* state */
const initialState = {
  date: {
    day: { day: "", dayValid: false, dayError: "" },
    month: { month: "", monthValid: false, monthError: "" },
    year: { year: "", yearValid: false, yearError: "" }
  },
  adult: true,
  gender: "male",
  aboutUs: ""
};

export const SecondValiditionReducer = (
  state = initialState,
  { type, day, month, year, gender, aboutUs }
) => {
  let adult = validFunc.adult(
    state.date.year.year,

    state.date.month.month,
    state.date.day.day
  );
  switch (type) {
    case DAY:
      return {
        ...state,
        date: {
          ...state.date,
          day: {
            ...state.date.day,
            day
          }
        }
      };
    case MONTH:
      return {
        ...state,
        date: {
          ...state.date,
          month: {
            ...state.date.month,
            month: month
          }
        }
      };
    case YEAR:
      return {
        ...state,
        date: {
          ...state.date,
          year: {
            ...state.date.year,
            year
          }
        }
      };
    case GENDER:
      return {
        ...state,
        gender
      };
    case ABOUT_US:
      return {
        ...state,
        aboutUs
      };
    case VALID_DAY:
      return {
        ...state,
        date: {
          ...state.date,
          day: {
            ...state.date.day,
            dayError: validFunc.dayValid(day),
            dayValid: validFunc.dayValid(day) === ""
          }
        },
        adult
      };
    case VALID_MONTH:
      return {
        ...state,
        date: {
          ...state.date,
          month: {
            ...state.date.month,
            monthError: validFunc.monthValid(month),
            monthValid: validFunc.monthValid(month) === ""
          }
        },
        adult
      };
    case VALID_YEAR:
      return {
        ...state,
        date: {
          ...state.date,
          year: {
            ...state.date.year,
            yearError: validFunc.yearValid(year),
            yearValid: validFunc.yearValid(year) === ""
          }
        },
        adult
      };
    default:
      return { ...state };
  }
};

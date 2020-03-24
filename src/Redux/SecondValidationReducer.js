import { CHANGE, VALID_DAY, VALID_YEAR, VALID_MONTH } from "./Constats";
import * as validFunc from "../ValidationFunc/ValidationFunc";

/* state */
const initialState = {
  day: "",
  month: "",
  year: "",
  adult: true,
  gender: "male",
  aboutUs: "",
  dateValid: {
    day: { dayValid: false, dayError: "" },
    month: { monthValid: false, monthError: "" },
    year: { yearValid: false, yearError: "" }
  }
};

export const SecondValiditionReducer = (
  state = initialState,
  { type, name, value, day, month, year }
) => {
  let adult = validFunc.adult(state.year, state.month, state.day);
  switch (type) {
    case CHANGE:
      return {
        ...state,
        [name]: value
      };
    case VALID_DAY:
      return {
        ...state,
        dateValid: {
          ...state.dateValid,
          day: {
            ...state.dateValid.day,
            dayError: validFunc.dayValid(day),
            dayValid: validFunc.dayValid(day) === ""
          }
        },
        adult
      };
    case VALID_MONTH:
      return {
        ...state,
        dateValid: {
          ...state.dateValid,
          month: {
            ...state.dateValid.month,
            monthError: validFunc.monthValid(month),
            monthValid: validFunc.monthValid(month) === ""
          }
        },
        adult
      };
    case VALID_YEAR:
      return {
        ...state,
        dateValid: {
          ...state.dateValid,
          year: {
            ...state.dateValid.year,
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

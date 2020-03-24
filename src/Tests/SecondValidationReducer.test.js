import { SecondValiditionReducer } from "../Redux/SecondValidationReducer";
import {
  changeInputsAC,
  validDayAC,
  validMonthAC,
  validYearAC
} from "../Redux/ActionsCreater";

const eventDay = { target: { name: "day", value: "5" } };
const eventMonth = { target: { value: "11" } };
const eventYear = { target: { value: "1999" } };

const state = {
  day: "",
  month: "",
  year: "",
  dateValid: {
    day: { dayValid: false, dayError: "" },
    month: { monthValid: false, monthError: "" },
    year: { yearValid: false, yearError: "" }
  }
};

it("it sholud be change value", () => {
  const action = changeInputsAC(eventDay);

  let newState = SecondValiditionReducer(state, action);
  expect(newState.day).toBe("5");
  expect(newState.day.length).toBe(1);
});

it("it sholud be validate day", () => {
  const action = validDayAC(eventDay);
  const newState = SecondValiditionReducer(state, action);
  expect(newState.dateValid.day.dayValid).toBe(true);
  expect(newState.dateValid.day.dayError).toBe("");
});

it("it sholud be validate month", () => {
  const action = validMonthAC(eventMonth);
  const newState = SecondValiditionReducer(state, action);
  expect(newState.dateValid.month.monthValid).toBe(true);
  expect(newState.dateValid.month.monthError).toBe("");
});

it("it sholud be validate year", () => {
  const action = validYearAC(eventYear);
  const newState = SecondValiditionReducer(state, action);
  expect(newState.dateValid.year.yearValid).toBe(true);
  expect(newState.dateValid.year.yearError).toBe("");
});

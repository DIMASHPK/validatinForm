import {
  CHANGE,
  VALID_EMAIL,
  VALID_PASSWORD,
  VALID_CONFIRM,
  VALID_DAY,
  VALID_YEAR,
  VALID_MONTH
} from "./Constats";

/* action creaters */
export const changeInputsAC = ({ target: { value, name } }) => ({
  type: CHANGE,
  value,
  name
});
export const validEmailAC = ({ target: { value } }) => ({
  type: VALID_EMAIL,
  email: value
});
export const validPasswordAC = ({ target: { value } }) => ({
  type: VALID_PASSWORD,
  password: value
});
export const validConfirmAC = ({ target: { value } }) => ({
  type: VALID_CONFIRM,
  confirm: value
});
export const validDayAC = ({ target: { value } }) => ({
  type: VALID_DAY,
  day: value
});
export const validMonthAC = ({ target: { value } }) => ({
  type: VALID_MONTH,
  month: value
});
export const validYearAC = ({ target: { value } }) => ({
  type: VALID_YEAR,
  year: value
});

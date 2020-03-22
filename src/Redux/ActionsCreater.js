import {
  EMAIL,
  PASSWORD,
  CONFIRM,
  DAY,
  MONTH,
  YEAR,
  GENDER,
  ABOUT_US,
  VALID_EMAIL,
  VALID_PASSWORD,
  VALID_CONFIRM,
  VALID_DAY,
  VALID_YEAR,
  VALID_MONTH
} from "./Constats";

/* action creaters */
export const changeEmailAC = ({ target: { value } }) => ({
  type: EMAIL,
  email: value
});
export const changePasswordAC = ({ target: { value } }) => ({
  type: PASSWORD,
  password: value
});
export const changeConfirmPasswordAC = ({ target: { value } }) => ({
  type: CONFIRM,
  confirm: value
});

export const changeDayAC = ({ target: { value } }) => ({
  type: DAY,
  day: value
});
export const changeMonthAC = ({ target: { value } }) => ({
  type: MONTH,
  month: value
});
export const changeYearAC = ({ target: { value } }) => ({
  type: YEAR,
  year: value
});
export const changeGenderAC = ({ target: { value } }) => ({
  type: GENDER,
  gender: value
});
export const changeAboutUsAC = ({ target: { value } }) => ({
  type: ABOUT_US,
  aboutUs: value
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

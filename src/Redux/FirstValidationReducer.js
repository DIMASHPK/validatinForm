import {
  EMAIL,
  PASSWORD,
  CONFIRM,
  VALID_EMAIL,
  VALID_PASSWORD,
  VALID_CONFIRM
} from "./Constats";
import * as validFunc from "../ValidationFunc/ValidationFunc";

/* state */
const initialState = {
  email: {
    validEmail: false,
    emailError: "",
    email: ""
  },
  password: {
    validPassword: false,
    password: "",
    passwordError: "",
    confirm: "",
    confirmError: ""
  }
};

/* reducer */
export const FirstValiditionReducer = (
  state = initialState,
  { type, email, password, confirm }
) => {
  switch (type) {
    case EMAIL:
      return {
        ...state,
        email: {
          ...state.email,
          email
        }
      };
    case PASSWORD:
      return {
        ...state,
        password: {
          ...state.password,
          password
        }
      };
    case CONFIRM:
      return {
        ...state,
        password: {
          ...state.password,
          confirm
        }
      };
    case VALID_EMAIL:
      return {
        ...state,
        email: {
          ...state.email,
          emailError: validFunc.emailValid(email),
          validEmail: validFunc.emailValid(email) === ""
        }
      };
    case VALID_PASSWORD:
      return {
        ...state,
        password: {
          ...state.password,
          passwordError: validFunc.passwordValid(password)
        }
      };
    case VALID_CONFIRM:
      return {
        ...state,
        password: {
          ...state.password,
          validPassword:
            state.password.passwordError === "" &&
            state.password.password === confirm,
          confirmError:
            state.password.password === confirm
              ? ""
              : "Password confirmation should match the password"
        }
      };

    default:
      return { ...state };
  }
};

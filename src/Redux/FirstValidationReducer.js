import { CHANGE, VALID_EMAIL, VALID_PASSWORD, VALID_CONFIRM } from "./Constats";
import * as validFunc from "../ValidationFunc/ValidationFunc";

/* state */
const initialState = {
  email: "",
  password: "",
  confirm: "",
  emailValid: {
    validEmail: false,
    emailError: ""
  },
  passwordValid: {
    validPassword: false,
    passwordError: "",
    confirmError: ""
  }
};

/* reducer */
export const FirstValiditionReducer = (
  state = initialState,
  { type, name, value, email, password, confirm }
) => {
  switch (type) {
    case CHANGE:
      return {
        ...state,
        [name]: value
      };
    case VALID_EMAIL:
      return {
        ...state,
        emailValid: {
          ...state.emailValid,
          emailError: validFunc.emailValid(email),
          validEmail: validFunc.emailValid(email) === ""
        }
      };
    case VALID_PASSWORD:
      return {
        ...state,
        passwordValid: {
          ...state.passwordValid,
          passwordError: validFunc.passwordValid(password)
        }
      };
    case VALID_CONFIRM:
      return {
        ...state,
        passwordValid: {
          ...state.passwordValid,
          validPassword:
            state.passwordValid.passwordError === "" &&
            state.password === confirm,
          confirmError:
            state.password === confirm
              ? ""
              : "Password confirmation should match the password"
        }
      };

    default:
      return { ...state };
  }
};

import { FirstValiditionReducer } from "../Redux/FirstValidationReducer";
import {
  changeInputsAC,
  validEmailAC,
  validPasswordAC,
  validConfirmAC
} from "../Redux/ActionsCreater";

const eventEmail = { target: { name: "email", value: "5" } };
const eventPassword = { target: { name: "password", value: "5555555" } };
const eventConfirm = { target: { name: "confirm", value: "5555555" } };

const state = {
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

it("it sholud be change value", () => {
  const action = changeInputsAC(eventEmail);

  let newState = FirstValiditionReducer(state, action);
  expect(newState.email).toBe("5");
  expect(newState.email.length).toBe(1);
});

it("it sholud be validate email", () => {
  const action = validEmailAC(eventEmail);
  const newState = FirstValiditionReducer(state, action);
  expect(newState.emailValid.validEmail).toBe(false);
  expect(newState.emailValid.emailError).toBe("invalid email");
});

it("it sholud be validate password", () => {
  const action = validPasswordAC(eventPassword);
  const newState = FirstValiditionReducer(state, action);
  state.password = "5555555";
  expect(newState.passwordValid.passwordError).toBe("");
  expect(newState.passwordValid.validPassword).toBe(true);
});

it("it sholud be confirmation password", () => {
  const action = validConfirmAC(eventConfirm);
  state.password = "5555555";
  const newState = FirstValiditionReducer(state, action);
  expect(newState.passwordValid.confirmError).toBe("");
  expect(newState.passwordValid.validPassword).toBe(true);
});

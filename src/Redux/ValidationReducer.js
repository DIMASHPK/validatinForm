const EMAIL = "EMAIL";
const PASSWORD = "PASSWORD";
const CONFIRM = "CONFIRM";
const VALID_EMAIL = "VALID_EMAIL";
const VALID_PASSWORD = "VALID_PASSWORD";
const VALID_CONFIRM = "VALID_COMFIRM";

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

const emailValid = email => {
  const regexp = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

  if (email.length < 1) {
    return "email is required";
  } else if (email.length > 100) {
    return "too large";
  } else if (email.match(regexp)) {
    return "";
  } else {
    return "invalid email";
  }
};

const passwordValid = password => {
  if (password.length < 1) {
    return "password is required";
  }
  return password.length < 6
    ? "Password should be minimum 6 characters long"
    : "";
};

export const ValiditionReducer = (
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
          emailError: emailValid(email),
          validEmail: state.email.emailError === ""
        }
      };
    case VALID_PASSWORD:
      return {
        ...state,
        password: {
          ...state.password,
          passwordError: passwordValid(password)
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

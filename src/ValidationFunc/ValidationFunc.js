/* validation functions */
export const requiredField = (field) => (value) =>
  value ? undefined : `${field} is required`;

export const minLength = (length) => (value) =>
  value && value.length < length ? `min length ${length}` : undefined;

export const emailValid = (value) => {
  let regexp = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

  return value && value.match(regexp) ? undefined : "Invalid Email";
};

export const confirmationPasswordValid = (input, { password }) =>
  input === password ? undefined : "Пароль не совпадает";

export const dayValid = (day) => {
  if (day && day > 31) {
    return "day should be less than 32";
  } else if (day && day < 1) {
    return "day should be bigger than 0";
  } else {
    return undefined;
  }
};

export const monthValid = (month) => {
  if (month && month > 13) {
    return "month should be less than 13";
  } else if (month && month < 1) {
    return "month should be bigger than 0";
  } else {
    return undefined;
  }
};

export const yearValid = (year) => {
  return year && year < 1 ? "year should be bigger than 0" : undefined;
};

export const adult = ({ day, month, year }) => {
  const dateString = `${year}-${month}-${day}`;

  const adult = new Date().getFullYear() - new Date(dateString).getFullYear();

  return {
    _error: adult > 18 || isNaN(adult) ? undefined : "You must be adult",
  };
};

export const passwordValid = (password) => {
  if (password.length < 1) {
    return "password is required";
  }
  return password.length < 6
    ? "Password should be minimum 6 characters long"
    : "";
};

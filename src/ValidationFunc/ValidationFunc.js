/* validation functions */
export const emailValid = email => {
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

export const passwordValid = password => {
  if (password.length < 1) {
    return "password is required";
  }
  return password.length < 6
    ? "Password should be minimum 6 characters long"
    : "";
};

export const dayValid = day => {
  if (day > 31) {
    return "day should be less than 32";
  } else if (day < 1) {
    return "day should be bigger than 0";
  } else {
    return "";
  }
};

export const monthValid = month => {
  if (month > 13) {
    return "month should be less than 13";
  } else if (month < 1) {
    return "month should be bigger than 0";
  } else {
    return "";
  }
};

export const yearValid = year => {
  return year < 1 ? "year should be bigger than 0" : "";
};

export const adult = (...params) => {
  let count = 0;
  let string = false;
  params.forEach(item => (parseInt(item) > 0 ? count++ : count--));
  if (count === 3) {
    string = params.reduce(
      (str, item, i) => (i < 2 ? str + item + "-" : str + item),
      ""
    );
  }
  const adult = new Date().getFullYear() - new Date(string).getFullYear();

  return adult > 18;
};

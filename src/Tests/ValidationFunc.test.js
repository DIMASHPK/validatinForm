import * as validFunc from "../ValidationFunc/ValidationFunc";

it("it sholud be get emailValidation", () => {
  const value = validFunc.emailValid("rfrfrfrf");
  expect(value).toBe("invalid email");
});

it("it sholud be get passwordValidation", () => {
  const value = validFunc.passwordValid("rr");
  expect(value).toBe("Password should be minimum 6 characters long");
});

it("it sholud be get dayValidation", () => {
  const value = validFunc.dayValid(0);
  expect(value).toBe("day should be bigger than 0");
});

it("it sholud be get monthValidation", () => {
  const value = validFunc.monthValid(2);
  expect(value).toBe("");
});

it("it sholud be get yearValidation", () => {
  const value = validFunc.yearValid(1);
  expect(value).toBe("");
});

it("it sholud be get adultValidation", () => {
  const value = validFunc.adult(1998, 12, 5);
  expect(value).toBe(true);
});

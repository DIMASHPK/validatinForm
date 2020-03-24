let dayValid, monthValid, yearValid, adult, validEmail, validPassword;
let path = "/nextStep";
dayValid = monthValid = yearValid = adult = true;

const disabledLink = () => {
  if (
    path.includes("/nextStep") &&
    dayValid &&
    monthValid &&
    yearValid &&
    adult
  ) {
    return false;
  } else if (
    (path.includes("/nextStep") && !dayValid) ||
    (path.includes("/nextStep") && !monthValid) ||
    (path.includes("/nextStep") && !yearValid)
  ) {
    return true;
  } else if (path.includes("/nextStep") && validEmail && validPassword) {
    return true;
  } else if (path.includes("/") && validEmail && validPassword) {
    return false;
  }
  return true;
};

it("disabled false", () => {
  expect(disabledLink()).toBe(false);
});

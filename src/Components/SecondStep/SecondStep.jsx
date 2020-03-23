import React from "react";
import "./SecondStep.css";

export class SecondStepWithProps extends React.Component {
  state = {
    day: "",
    month: "",
    year: "",
    gender: "male",
    aboutUs: ""
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  render() {
    const {
      dateInputs,
      genderInputs,
      changeAboutUsAC,
      aboutUs,
      adult
    } = this.props;

    return (
      <section className="secondStep">
        <div className="secondStep__date">
          <h2 className={`secondStep__title ${!adult ? "error" : ""}`}>
            {adult === false ? "Sorry you should be adult" : "Date of birth"}
          </h2>
          <div className="secondStep__dateWrap">
            {dateInputs.map(
              ({
                id,
                name,
                min,
                max,
                placeholder,
                value,
                onChange,
                onBlur,
                error
              }) => (
                <div key={id} className={"secondStep__dateElementWrap"}>
                  <input
                    type="number"
                    value={value}
                    error={error}
                    key={id}
                    min={min && min}
                    max={max && max}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={`secondStep__dateElement ${
                      error || !adult ? "error" : ""
                    }`}
                  />
                  <span className={"secondStep__dateError"}>{error}</span>
                </div>
              )
            )}
          </div>
        </div>
        <div className="secondStep__gender">
          <h2 className="secondStep__title">Gender</h2>
          <div className="secondStep__genderWrap">
            {genderInputs.map(({ id, value, gender, onChange }) => (
              <div
                className={`secondStep__generElementWrap ${
                  gender === value ? "active" : ""
                }`}
                key={id}
              >
                <label
                  className="secondStep__genderElementLabel"
                  htmlFor={value}
                >
                  {value}
                </label>
                <input
                  id={value}
                  type="radio"
                  name={"gender"}
                  value={value}
                  checked={gender === value}
                  onChange={onChange}
                  className={`secondStep__genderElement `}
                  hidden
                />
              </div>
            ))}
          </div>
        </div>
        <div className="secondStep__aboutUs">
          <h2 className="secondStep__title"> WHERE DID YOU HEAR ABOUT IS?</h2>
          <div className="secondStep__aboutUsSelectWrap">
            <select
              name="aboutUs"
              className={"secondStep__aboutUsSelect"}
              value={aboutUs}
              onChange={changeAboutUsAC}
            >
              <option
                value=""
                disabled
                selected
                hidden
                className={"secondStep__aboutUsInput"}
              ></option>
              <option
                className={"secondStep__aboutUsOption"}
                value="from friends"
              >
                from friends
              </option>
              <option
                className={"secondStep__aboutUsOption"}
                value="From Instagramm"
              >
                From Instagramm
              </option>
              <option
                className={"secondStep__aboutUsOption"}
                value="From Facebook"
              >
                From Facebook
              </option>
            </select>
          </div>
        </div>
      </section>
    );
  }
}

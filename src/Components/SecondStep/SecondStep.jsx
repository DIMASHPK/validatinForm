import React from "react";
import "./SecondStep.css";

const dateInputs = [
  { id: 1, name: "day", min: 1, max: 31, placeholder: "DD" },
  { id: 2, name: "month", min: 1, max: 12, placeholder: "MM" },
  { id: 3, name: "year", placeholder: "YYYY" }
];

const genderInputs = [
  { id: 1, value: "male" },
  { id: 2, value: "female" },
  { id: 3, value: "unspecified" }
];

export class SecondStep extends React.Component {
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
    return (
      <section className="secondStep">
        <div className="secondStep__date">
          <h2 className="secondStep__title">Date of birth</h2>
          <div className="secondStep__dateWrap">
            {dateInputs.map(({ id, name, min, max, placeholder }) => (
              <input
                type="number"
                onChange={this.handleChange}
                value={this.state[name]}
                key={id}
                min={min && min}
                max={max && max}
                name={name}
                placeholder={placeholder}
                className="secondStep__dateElement"
              />
            ))}
          </div>
        </div>
        <div className="secondStep__gender">
          <h2 className="secondStep__title">Date of birth</h2>
          <div className="secondStep__genderWrap">
            {genderInputs.map(({ id, value }) => (
              <div
                className={`secondStep__generElementWrap ${
                  this.state.gender === value ? "active" : ""
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
                  checked={this.state.gender === value}
                  onChange={this.handleChange}
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
              value={this.state.aboutUs}
              onChange={this.handleChange}
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

import React from "react";
import image from "../../Assets/Img/check.svg";
import "./Finally.css";

export const Finally = ({
  email,
  password,
  day,
  month,
  year,
  gender,
  aboutUs
}) => (
  <section className="finally">
    <img className={"finally__mark"} src={image} alt="mark" />
    <button
      className="finally__button"
      onClick={() => {
        console.log({
          userData: {
            email,
            password,
            dateOfBirhday: new Date(
              `${year}-${month}-${day}`
            ).toLocaleDateString(),
            gender,
            aboutUs
          }
        });
      }}
    >
      Go to Dashboard
    </button>
  </section>
);

import React from "react";
import { Select } from "./Select";
import { Field } from "redux-form";

export const AboutUs = () => {
  return (
    <div className="secondStep__aboutUs">
      <h2 className="secondStep__title"> WHERE DID YOU HEAR ABOUT US?</h2>
      <div className="secondStep__aboutUsSelectWrap">
        <Field component={Select} name={"aboutUs"} />
      </div>
    </div>
  );
};

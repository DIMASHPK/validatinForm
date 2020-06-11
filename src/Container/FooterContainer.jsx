import React from "react";
import { connect } from "react-redux";
import { FooterWithProps } from "../Components/Footer/Footer";

const FooterContainer = ({ path, form }) => {
  const disabledLink = () => {
    if (
      form["first page"].syncErrors === undefined &&
      form["first page"].error === undefined
    ) {
      return false;
    }
    return true;
  };

  return <FooterWithProps path={path} disabled={disabledLink()} />;
};

const mapStateToProps = ({ form }) => ({
  form,
});

export const Footer = connect(mapStateToProps)(FooterContainer);

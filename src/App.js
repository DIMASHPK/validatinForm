import React from "react";
import { withRouter } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Container/FooterContainer";
import Wrapper from "./Wrapper/Wrapper";
import "./Assets/Fonts/Fonts.css";
import "./App.css";

const App = ({ location: { pathname } }) => (
  <>
    <Header />
    <div className="transitionWrap">
      <Wrapper
        onSubmit={({ day, year, month, ...values }) =>
          console.log({ date: `${year}-${month}-${day}`, ...values })
        }
      />
    </div>
    {!pathname.includes("finally") && <Footer path={pathname} />}
  </>
);

export default withRouter(App);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Store } from "../Redux/Store";
import { Provider } from "react-redux";
import App from "../App";
import { Header } from "../Components/Header/Header";
import { FirstStep } from "../Container/FirstStepContainer";
import { SecondStep } from "../Container/SecondStepContainer";
import { Finally } from "../Container/FinallyContainer";
import { Footer } from "../Container/FooterContainer";
import { Preloader } from "../Components/Preloader/Preloader";

test("App mounted", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>,
    div
  );
});

test("Header mounted", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </BrowserRouter>,
    div
  );
});

test("FirstStep mounted", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={Store}>
        <FirstStep />
      </Provider>
    </BrowserRouter>,
    div
  );
});

test("SecondStep mounted", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={Store}>
        <SecondStep />
      </Provider>
    </BrowserRouter>,
    div
  );
});

test("Finally mounted", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={Store}>
        <Finally />
      </Provider>
    </BrowserRouter>,
    div
  );
});

test("Footer mounted", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={Store}>
        <Footer path={"finally"} />
      </Provider>
    </BrowserRouter>,
    div
  );
});

test("Preloader mounted", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={Store}>
        <Preloader />
      </Provider>
    </BrowserRouter>,
    div
  );
});

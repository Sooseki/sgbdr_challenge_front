import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App/App";
import LoginForm from "./LoginForm/LoginForm";
import VerifyEmail from "./Challenge/VerifyEmail/VerifyEmail";
import SignUpForm from "./Challenge/LoginForm/LoginForm";

const root = ReactDOM.createRoot(document.getElementById("root"));

window.onload = function () {
  const test = document.getElementsByClassName("Register");
  if (test.length > 0) {
    if (localStorage.token === "") {
      localStorage.setItem("token", "temp");
    } else if (localStorage.token === "temp") {
      window.location.href = "/";
    } else {
      console.log("all acess");
    }
  }
};

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/auth" element={<LoginForm />}></Route>
      <Route path="/verify" element={<VerifyEmail />}></Route>
      <Route path="/register" element={<SignUpForm />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import bg from "../../assets/img/bg.png";
import Header from "./Header";
import FooterBottom from "./Footer";
import Main from "./Main";

export default function index() {
  return (
    <div
      style={{
        background: `url(${bg}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <Main />
      <FooterBottom />
    </div>
  );
}

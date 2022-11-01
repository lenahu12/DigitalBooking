import React from "react";
import Footer from "../Global/Footer";
import Header from "../Global/Header";
import "../../styles/Header&Footer/header&FooterLayout.css";

const HeaderFooterLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default HeaderFooterLayout;

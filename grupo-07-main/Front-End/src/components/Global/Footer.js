import React from "react";
import SocialMedia from "../layouts/SocialMedia";

const Footer = () => {
  return (
    <footer className="footer--container">
      <div className="footer--nav-container white">
        <p>©2021 DigitalBooking</p>
        <div className="footer--nav-container-media">
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

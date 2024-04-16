/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Container = ({ className, image = "/img/image-66.svg" }) => {
  return (
    <div className={`container ${className}`}>
      <div className="group">
        <div className="text-wrapper">Sitemap</div>
        <div className="div">•</div>
        <div className="text-wrapper-2">© 2024 Brand, Inc.</div>
        <div className="text-wrapper-3">Privacy</div>
        <div className="text-wrapper-4">Terms</div>
        <div className="text-wrapper-5">•</div>
        <div className="text-wrapper-6">•</div>
      </div>
      <img className="image" alt="Image" src={image} />
      <div className="text-wrapper-7">HRMagnet</div>
      <div className="text-wrapper-8">Product</div>
      <div className="text-wrapper-9">Resources</div>
      <div className="text-wrapper-10">Platform</div>
      <div className="partners">Partners &amp; integrations</div>
      <div className="text-wrapper-11">Become a partner</div>
      <div className="text-wrapper-12">Pricing</div>
      <div className="text-wrapper-13">Features</div>
      <div className="text-wrapper-14">Blog</div>
      <div className="text-wrapper-15">User guides</div>
      <div className="text-wrapper-16">Webinars</div>
      <div className="text-wrapper-17">Company</div>
      <div className="text-wrapper-18">About</div>
      <div className="text-wrapper-19">Developer API</div>
    </div>
  );
};

Container.propTypes = {
  image: PropTypes.string,
};

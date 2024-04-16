/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ContainerWrapper } from "../ContainerWrapper";
import "./style.css";

export const DivWrapper = ({
  className,
  containerWrapperImage = "/img/image-55.svg",
  avatar = "/img/avatar-22.svg",
  to,
  to1,
}) => {
  return (
    <div className={`div-wrapper ${className}`}>
      <div className="overlap-group">
        <ContainerWrapper
          className="container-72"
          hasButton={false}
          hasDiv={false}
          image={containerWrapperImage}
          to="/homepage"
          to1={to}
          to2={to1}
        />
        <img className="avatar" alt="Avatar" src={avatar} />
        <div className="text-wrapper-24">안녕하세요 David Smith 님</div>
      </div>
    </div>
  );
};

DivWrapper.propTypes = {
  containerWrapperImage: PropTypes.string,
  avatar: PropTypes.string,
  to: PropTypes.string,
  to1: PropTypes.string,
};

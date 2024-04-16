/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Container254 = ({
  className,
  divClassName,
  text = "50,000원",
  divClassNameOverride,
  text1 = "60,000원",
}) => {
  return (
    <Link className={`container-254 ${className}`} to="/lecturedetailspageu95default">
      <img className="image-2" alt="Image" src="/img/image-57.png" />
      <p className="p">마약범죄 재범방지교육 및 인지행동 개선훈련</p>
      <div className="tag">
        <div className="frame-14">
          <div className="text-wrapper-35">New</div>
        </div>
        <div className="frame-15">
          <div className="text-wrapper-36">Sale</div>
        </div>
      </div>
      <div className={`element-2 ${divClassName}`}>{text}</div>
      <div className={`element-3 ${divClassNameOverride}`}>{text1}</div>
    </Link>
  );
};

Container254.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ContainerWrapper = ({
  className,
  hasButton = true,
  hasDiv = true,
  image = "/img/image-55-1.svg",
  to,
  to1,
  to2,
}) => {
  return (
    <div className={`container-wrapper ${className}`}>
      {hasButton && (
        <Link to="/signin">
          <button className="button">
            <div className="text-wrapper-20">회원가입</div>
          </button>
        </Link>
      )}

      {hasDiv && (
        <Link to="/login">
          <button className="button-2">
            <div className="text-wrapper-21">로그인</div>
          </button>
        </Link>
      )}

      <div className="header-menu">
        <Link className="frame" to={to}>
          <div className="text-wrapper-22">센터소개</div>
        </Link>
        <Link className="frame-2" to="/lecturepage">
          <div className="text-wrapper-23">수강신청하기</div>
        </Link>
        <div className="frame-3">
          <div className="text-wrapper-22">문의게시판</div>
        </div>
      </div>
      <Link to={to1}>
        <img className="img" alt="Image" src={image} />
      </Link>
      <Link className="big-brother-sheep" to={to2}>
        희망과학심리상담센터
      </Link>
    </div>
  );
};

ContainerWrapper.propTypes = {
  hasButton: PropTypes.bool,
  hasDiv: PropTypes.bool,
  image: PropTypes.string,
  to: PropTypes.string,
  to1: PropTypes.string,
  to2: PropTypes.string,
};

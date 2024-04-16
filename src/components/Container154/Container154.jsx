/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Container154 = ({
  className,
  frameClassName,
  divClassName,
  fileArticle = "/img/file-article.svg",
  frameClassNameOverride,
  divClassNameOverride,
  handout = "/img/handout.svg",
}) => {
  return (
    <div className={`container-154 ${className}`}>
      <div className="sidebar-menu">
        <div className={`frame-16 ${frameClassName}`}>
          <div className={`text-wrapper-37 ${divClassName}`}>수강목록</div>
          <img className="img-2" alt="File article" src={fileArticle} />
        </div>
        <div className="frame-17">
          <div className="text-wrapper-37">환경설정</div>
          <img className="img-2" alt="Settings gear" src="/img/settings-gear.svg" />
        </div>
        <div className={`frame-18 ${frameClassNameOverride}`}>
          <div className={`text-wrapper-38 ${divClassNameOverride}`}>결제내역</div>
          <img className="img-2" alt="Handout" src={handout} />
        </div>
      </div>
    </div>
  );
};

Container154.propTypes = {
  fileArticle: PropTypes.string,
  handout: PropTypes.string,
};

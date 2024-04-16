/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ConcreteComponentNode = ({
  className,
  frameClassName,
  divClassName,
  user = "/img/user.svg",
  frameClassNameOverride,
  divClassNameOverride,
  handout = "/img/handout-3.svg",
  image = "/img/image-66-11.svg",
}) => {
  return (
    <div className={`concrete-component-node ${className}`}>
      <div className="sidebar-menu-2">
        <div className={`frame-19 ${frameClassName}`}>
          <div className={`text-wrapper-39 ${divClassName}`}>회원관리</div>
          <img className="img-3" alt="User" src={user} />
        </div>
        <div className="frame-20">
          <div className="text-wrapper-40">서비스관리</div>
          <img className="img-3" alt="File article" src="/img/file-article-3.svg" />
        </div>
        <div className="frame-21">
          <div className="text-wrapper-40">게시글관리</div>
          <img className="img-3" alt="Bullet list" src="/img/bullet-list-67.svg" />
        </div>
        <div className={`frame-22 ${frameClassNameOverride}`}>
          <div className={`text-wrapper-40 ${divClassNameOverride}`}>결제관리</div>
          <img className="img-3" alt="Handout" src={handout} />
        </div>
        <div className="frame-23">
          <div className="text-wrapper-40">로그아웃</div>
          <img className="img-3" alt="Leave" src="/img/leave.svg" />
        </div>
      </div>
      <img className="image-3" alt="Image" src={image} />
      <div className="text-wrapper-41">BigBrotherSheep</div>
    </div>
  );
};

ConcreteComponentNode.propTypes = {
  user: PropTypes.string,
  handout: PropTypes.string,
  image: PropTypes.string,
};

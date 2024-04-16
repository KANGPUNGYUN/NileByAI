import React from "react";
import { Container } from "../../components/Container";
import { Container254 } from "../../components/Container254";
import { ContainerWrapper } from "../../components/ContainerWrapper";
import "./style.css";

export const LecturePage = () => {
  return (
    <div className="lecture-page">
      <div className="div-7">
        <div className="container-29">
          <div className="text-wrapper-118">듣고 싶은 과목을 클릭하세요</div>
          <img className="icon-button" alt="Icon button" src="/img/icon-button-19.svg" />
          <img className="icon-button-2" alt="Icon button" src="/img/icon-button-20.svg" />
          <div className="text-wrapper-119">Online Classes</div>
          <Container254
            className="container-254-instance"
            divClassName="container-30"
            divClassNameOverride="container-31"
            text="60,000원"
            text1="50,000원"
          />
          <Container254
            className="container-32"
            divClassName="container-30"
            divClassNameOverride="container-31"
            text="60,000원"
            text1="50,000원"
          />
          <Container254
            className="container-33"
            divClassName="container-30"
            divClassNameOverride="container-31"
            text="60,000원"
            text1="50,000원"
          />
          <Container254
            className="container-34"
            divClassName="container-30"
            divClassNameOverride="container-31"
            text="60,000원"
            text1="50,000원"
          />
          <Container254
            className="container-35"
            divClassName="container-30"
            divClassNameOverride="container-31"
            text="60,000원"
            text1="50,000원"
          />
          <Container254
            className="container-36"
            divClassName="container-30"
            divClassNameOverride="container-31"
            text="60,000원"
            text1="50,000원"
          />
        </div>
        <Container className="container-37" image="/img/image-66-5.svg" />
        <ContainerWrapper
          className="container-38"
          image="/img/image-55-7.svg"
          to="/homepage"
          to1="/homepage"
          to2="/homepage"
        />
      </div>
    </div>
  );
};

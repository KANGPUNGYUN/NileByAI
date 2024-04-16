import React from "react";
import { Container } from "../../components/Container";
import { Container154 } from "../../components/Container154";
import { DivWrapper } from "../../components/DivWrapper";
import "./style.css";

export const CertificatePage = () => {
  return (
    <div className="certificate-page">
      <div className="div-10">
        <div className="container-45">
          <a
            className="button-54"
            href="https://docs.google.com/uc?export=download&amp;id=1XLHgsxKGWrZOOprI5vmSRl5riApG0ovk&amp;confirm=t"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="text-wrapper-151">저장하기</div>
            <img className="move-layer-down" alt="Move layer down" src="/img/move-layer-down.svg" />
          </a>
          <img className="image-12" alt="Image" src="/img/image-147-1.png" />
          <img className="image-13" alt="Image" src="/img/image-148-1.png" />
          <div className="header-menu-3">
            <div className="frame-33">
              <div className="text-wrapper-152">직장내 성희롱 예방교육</div>
            </div>
            <div className="frame-34">
              <div className="rectangle-4" />
              <div className="text-wrapper-153">이수증서</div>
              <img className="chevron-right-large" alt="Chevron right large" src="/img/chevron-right-large-2.svg" />
            </div>
            <div className="frame-35">
              <div className="text-10">{""}</div>
            </div>
          </div>
          <Container154
            className="container-154-instance"
            divClassName="container-47"
            divClassNameOverride="container-49"
            fileArticle="/img/file-article-1.svg"
            frameClassName="container-46"
            frameClassNameOverride="container-48"
            handout="/img/handout-1.svg"
          />
        </div>
        <DivWrapper
          avatar="/img/avatar-22.svg"
          className="container-50"
          containerWrapperImage="/img/image-55-9.svg"
          to="/homepage"
          to1="/homepage"
        />
        <Container className="container-51" image="/img/image-66-7.svg" />
      </div>
    </div>
  );
};

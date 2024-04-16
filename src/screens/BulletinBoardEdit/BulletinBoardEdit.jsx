import React from "react";
import { Container } from "../../components/Container";
import { ContainerWrapper } from "../../components/ContainerWrapper";
import "./style.css";

export const BulletinBoardEdit = () => {
  return (
    <div className="bulletin-board-edit">
      <div className="div-4">
        <div className="container-4">
          <div className="text-wrapper-58">문의하기</div>
          <div className="textbox-3">
            <div className="textfield-2">
              <div className="text-wrapper-59">직장내 성희롱 예방교육</div>
            </div>
            <div className="text-wrapper-60">제목</div>
          </div>
          <div className="textbox-4">
            <div className="textfield-2">
              <div className="text-wrapper-59">양형교육</div>
              <img className="chevron-down-large" alt="Chevron down large" src="/img/chevron-down-large.svg" />
            </div>
            <div className="text-wrapper-60">카테고리</div>
          </div>
          <div className="container-5">
            <div className="dropdown-button">
              <div className="text-4">{""}</div>
              <img className="sort-tool" alt="Sort tool" src="/img/sort-tool.svg" />
              <img className="chevron-down-large-2" alt="Chevron down large" src="/img/chevron-down-large-1.svg" />
            </div>
            <img className="line-4" alt="Line" src="/img/line-51.svg" />
            <button className="button-19">
              <div className="text-5">{""}</div>
              <img className="img-7" alt="Text bolder" src="/img/text-bolder.svg" />
            </button>
            <button className="button-20">
              <div className="text-5">{""}</div>
              <img className="img-7" alt="Text italic" src="/img/text-italic.svg" />
            </button>
            <button className="button-21">
              <div className="text-5">{""}</div>
              <img className="img-7" alt="Text underline" src="/img/text-underline.svg" />
            </button>
            <img className="line-5" alt="Line" src="/img/line-51.svg" />
            <button className="button-22">
              <div className="text-5">{""}</div>
              <img className="img-7" alt="List bullets" src="/img/list-bullets.svg" />
            </button>
            <button className="button-23">
              <div className="text-5">{""}</div>
              <img className="img-7" alt="List numbers" src="/img/list-numbers.svg" />
            </button>
            <img className="line-6" alt="Line" src="/img/line-51.svg" />
            <img className="oval" alt="Oval" src="/img/oval-6.svg" />
            <div className="dropdown-button-2">
              <div className="text-wrapper-61">Inter</div>
              <img className="chevron-down-large-3" alt="Chevron down large" src="/img/chevron-down-large-1.svg" />
            </div>
            <div className="dropdown-button-3">
              <div className="text-wrapper-61">13</div>
              <img className="chevron-down-large-4" alt="Chevron down large" src="/img/chevron-down-large-1.svg" />
            </div>
            <img className="line-7" alt="Line" src="/img/line-51.svg" />
            <button className="button-24">
              <div className="text-5">{""}</div>
              <img className="img-7" alt="Arrow counter" src="/img/arrow-counter-clockwise.svg" />
            </button>
            <button className="button-25">
              <div className="text-5">{""}</div>
              <img className="img-7" alt="Refresh" src="/img/refresh.svg" />
            </button>
            <button className="button-26">
              <div className="text-5">{""}</div>
              <img className="img-7" alt="Menu" src="/img/menu-5-1.svg" />
            </button>
            <img className="line-8" alt="Line" src="/img/line-51.svg" />
          </div>
          <div className="overlap-group-4">
            <div className="text-wrapper-62">설명</div>
            <div className="textarea">
              <div className="text-wrapper-63">내용을 적어주세요.</div>
              <img className="resizing-handle" alt="Resizing handle" src="/img/resizing-handle.svg" />
            </div>
          </div>
          <button className="button-27">
            <div className="text-wrapper-64">저장하기</div>
          </button>
        </div>
        <Container className="design-component-instance-node" image="/img/image-66-3.svg" />
        <ContainerWrapper
          className="container-6"
          image="/img/image-55-4.svg"
          to="/homepage"
          to1="/homepage"
          to2="/homepage"
        />
      </div>
    </div>
  );
};

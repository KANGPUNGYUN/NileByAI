import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Container";
import { ContainerWrapper } from "../../components/ContainerWrapper";
import "./style.css";

export const BulletinBoard = () => {
  return (
    <div className="bulletin-board">
      <div className="div-8">
        <div className="container-39">
          <div className="text-wrapper-120">직장내 성희롱 예방교육</div>
          <button className="button-38">
            <div className="text-wrapper-121">삭제하기</div>
          </button>
          <Link to="/bulletinboardeditpage">
            <button className="button-39">
              <div className="text-wrapper-121">수정하기</div>
            </button>
          </Link>
          <button className="button-40">
            <div className="text-wrapper-121">목록으로</div>
          </button>
          <button className="button-41">
            <div className="text-wrapper-122">댓글달기</div>
          </button>
          <div className="david-smith">David Smith</div>
          <div className="header-menu-2">
            <div className="frame-28">
              <div className="text-wrapper-123">2024.04.08</div>
            </div>
            <div className="frame-29">
              <div className="text-wrapper-124">0</div>
              <img className="img-10" alt="F chat" src="/img/f-chat.svg" />
            </div>
            <div className="frame-30">
              <div className="text-wrapper-124">10</div>
              <img className="img-10" alt="View" src="/img/view.svg" />
            </div>
          </div>
          <p className="officia-magna-et">
            Officia magna et esse adipisicing adipisicing nulla qui ad nisi irure pariatur consectetur anim velit in
            nostrud. Commodo ut et nisi duis do irure mollit.Duis velit eu commodo magna in anim incididunt laboris eu
            ex. <br />
            <br />
            Et commodo pariatur dolor laboris et non esse cillum sunt reprehenderit incididunt pariatur irure officia
            aliqua consequat adipisicing officia magna. Fugiat id aliquip aute commodo ex aute mollit veniam non duis
            dolore aliquip adipisicing nostrud eu amet pariatur.Sint aliquip aliqua ad sint culpa et ips
          </p>
          <img className="line-17" alt="Line" src="/img/line-46.svg" />
          <p className="officia-magna-et-2">
            Officia magna et esse adipisicing adipisicing nulla qui ad nisi irure pariatur consectetur anim velit in
            nostrud.
          </p>
          <div className="overlap-group-6">
            <div className="david-smith-2">David Smith</div>
            <div className="text-wrapper-125">2022-05-25</div>
          </div>
          <div className="text-wrapper-126">양형교육</div>
          <img className="avatar-4" alt="Avatar" src="/img/avatar-22-2.svg" />
          <div className="text-wrapper-127">댓글</div>
          <img className="avatar-5" alt="Avatar" src="/img/avatar-22-2.svg" />
          <div className="textarea-3">
            <div className="text-wrapper-128">댓글을 입력하세요</div>
            <img className="resizing-handle-3" alt="Resizing handle" src="/img/resizing-handle-2.svg" />
          </div>
        </div>
        <Container className="container-40" image="/img/image-66-6.svg" />
        <ContainerWrapper
          className="container-41"
          image="/img/image-55-8.svg"
          to="/homepage"
          to1="/homepage"
          to2="/homepage"
        />
      </div>
    </div>
  );
};

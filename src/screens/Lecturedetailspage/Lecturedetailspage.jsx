import React from "react";
import { Container } from "../../components/Container";
import { DivWrapper } from "../../components/DivWrapper";
import { Table } from "../../components/Table";
import "./style.css";

export const Lecturedetailspage = () => {
  return (
    <div className="lecturedetailspage">
      <div className="div-2">
        <div className="overlap-2">
          <div className="q-a">Q&amp;A</div>
          <div className="q-a-2">Q&amp;A</div>
        </div>
        <img className="line" alt="Line" src="/img/line-36.svg" />
        <div className="container-2">
          <div className="overlap-3">
            <button className="button-3">
              <div className="text">{""}</div>
              <img className="button-play" alt="Button play" src="/img/button-play.svg" />
            </button>
            <div className="text-wrapper-42">1:11 / 2:58</div>
            <div className="slider">
              <div className="overlap-group-3">
                <div className="rectangle-wrapper">
                  <div className="rectangle" />
                </div>
                <div className="ellipse" />
              </div>
            </div>
            <img className="volume-down" alt="Volume down" src="/img/volume-down-2.svg" />
            <img className="skip-next" alt="Skip next" src="/img/skip-next-2.svg" />
            <img className="button-play-2" alt="Button play" src="/img/button-play-2.svg" />
            <img className="settings-gear" alt="Settings gear" src="/img/settings-gear-2.svg" />
            <img className="fullscreen" alt="Fullscreen" src="/img/fullscreen-2.svg" />
            <img className="device-connection" alt="Device connection" src="/img/device-connection-2.svg" />
            <div className="rectangle-2" />
          </div>
        </div>
        <div className="text-wrapper-43">1.1 재범방지교육의 의미 (04:08)</div>
        <button className="button-4">
          <div className="text-wrapper-44">이전영상</div>
          <img className="arrow-left" alt="Arrow left" src="/img/arrow-left.svg" />
        </button>
        <button className="button-5">
          <div className="text-wrapper-45">다음영상</div>
          <img className="arrow-right" alt="Arrow right" src="/img/arrow-right.svg" />
        </button>
        <button className="button-6">
          <div className="text-wrapper-45">목록으로</div>
        </button>
        <Container className="container-82" image="/img/image-66-1.svg" />
        <DivWrapper
          avatar="/img/avatar-22-1.svg"
          className="container-instance"
          containerWrapperImage="/img/image-55-2.svg"
          to="/homepage"
          to1="/homepage"
        />
        <img className="button-play-3" alt="Button play" src="/img/button-play-1.svg" />
        <button className="button-7">
          <div className="text-2">{""}</div>
          <img className="img-4" alt="Chevron left large" src="/img/chevron-left-large.svg" />
        </button>
        <button className="button-8">
          <div className="text-wrapper-46">2</div>
        </button>
        <button className="button-9">
          <div className="text-wrapper-46">3</div>
        </button>
        <button className="button-10">
          <div className="text-wrapper-46">4</div>
        </button>
        <button className="button-11">
          <div className="text-wrapper-47">1</div>
        </button>
        <button className="button-12">
          <div className="text-2">{""}</div>
          <img className="img-4" alt="Menu" src="/img/menu-5.svg" />
        </button>
        <button className="button-13">
          <div className="text-wrapper-46">10</div>
        </button>
        <button className="button-14">
          <div className="text-wrapper-48">11</div>
        </button>
        <button className="button-15">
          <div className="text-2">{""}</div>
          <img className="img-4" alt="Chevron right large" src="/img/chevron-right-large.svg" />
        </button>
        <button className="button-16">
          <div className="text-wrapper-49">글쓰기</div>
        </button>
        <Table className="table-2" headerClassName="table-instance" />
      </div>
    </div>
  );
};

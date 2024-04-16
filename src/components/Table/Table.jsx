/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Table = ({ className, headerClassName }) => {
  return (
    <div className={`table ${className}`}>
      <div className={`header ${headerClassName}`}>
        <div className="overlap-group-2">
          <div className="frame-4">
            <div className="text-wrapper-25">제목</div>
          </div>
          <div className="frame-5">
            <div className="text-wrapper-26">No</div>
          </div>
          <div className="frame-6">
            <div className="text-wrapper-27">조회수</div>
          </div>
          <div className="frame-7">
            <div className="text-wrapper-28">작성시간</div>
          </div>
          <div className="frame-8">
            <div className="text-wrapper-29">글쓴이</div>
          </div>
        </div>
      </div>
      <Link className="row" to="/bulletinboarddetailpage">
        <div className="overlap">
          <div className="frame-9">
            <div className="text-wrapper-30">환불정책 문의</div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-31">3</div>
          </div>
          <div className="frame-11">
            <div className="text-wrapper-32">1</div>
          </div>
          <div className="frame-12">
            <div className="text-wrapper-33">관리자</div>
          </div>
          <div className="frame-13">
            <div className="text-wrapper-34">Jul 22, 2022</div>
          </div>
        </div>
      </Link>
      <Link className="overlap-wrapper" to="/bulletinboarddetailpage">
        <div className="overlap">
          <div className="frame-13">
            <div className="text-wrapper-34">Jul 22, 2022</div>
          </div>
          <div className="frame-12">
            <div className="text-wrapper-33">관리자</div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-31">4</div>
          </div>
          <div className="frame-9">
            <div className="text-wrapper-30">문의</div>
          </div>
          <div className="frame-11">
            <div className="text-wrapper-32">2</div>
          </div>
        </div>
      </Link>
      <Link className="overlap-group-wrapper" to="/bulletinboarddetailpage">
        <div className="overlap">
          <div className="frame-10">
            <div className="text-wrapper-31">1</div>
          </div>
          <div className="frame-11">
            <div className="text-wrapper-32">3</div>
          </div>
          <div className="frame-12">
            <div className="text-wrapper-33">홍길동</div>
          </div>
          <div className="frame-9">
            <div className="text-wrapper-30">작업 내용</div>
          </div>
          <div className="frame-13">
            <div className="text-wrapper-34">Jul 22, 2022</div>
          </div>
        </div>
      </Link>
      <Link className="row-2" to="/bulletinboarddetailpage">
        <div className="overlap">
          <div className="frame-12">
            <div className="text-wrapper-33">관리자</div>
          </div>
          <div className="frame-11">
            <div className="text-wrapper-32">4</div>
          </div>
          <div className="frame-9">
            <div className="text-wrapper-30">질문있습니다</div>
          </div>
          <div className="frame-13">
            <div className="text-wrapper-34">Jul 22, 2022</div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-31">12</div>
          </div>
        </div>
      </Link>
      <Link className="row-3" to="/bulletinboarddetailpage">
        <div className="overlap">
          <div className="frame-9">
            <div className="text-wrapper-30">강의 내용중 질문 있습니다.</div>
          </div>
          <div className="frame-12">
            <div className="text-wrapper-33">홍길동</div>
          </div>
          <div className="frame-11">
            <div className="text-wrapper-32">5</div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-31">15</div>
          </div>
          <div className="frame-13">
            <div className="text-wrapper-34">Jul 21, 2022</div>
          </div>
        </div>
      </Link>
      <Link className="row-4" to="/bulletinboarddetailpage">
        <div className="overlap">
          <div className="frame-11">
            <div className="text-wrapper-32">6</div>
          </div>
          <div className="frame-9">
            <div className="text-wrapper-30">환불은 어떻게 하나요?</div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-31">16</div>
          </div>
          <div className="frame-12">
            <div className="text-wrapper-33">김영희</div>
          </div>
          <div className="frame-13">
            <div className="text-wrapper-34">Jul 21, 2022</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

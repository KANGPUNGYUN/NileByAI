import React from "react";
import { Container } from "../../components/Container";
import { ContainerWrapper } from "../../components/ContainerWrapper";
import "./style.css";

export const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="div-5">
        <div className="container-7">
          <div className="text-wrapper-65">회원가입</div>
          <button className="button-28">
            <div className="text-6">{""}</div>
            <img className="google-2" alt="Google" src="/img/google.svg" />
          </button>
          <div className="textbox-5">
            <div className="text-wrapper-66">연락처</div>
            <div className="textfield-3">
              <div className="text-wrapper-67">연락처를 입력하세요</div>
            </div>
          </div>
          <div className="textbox-6">
            <div className="text-wrapper-66">이름</div>
            <div className="textfield-3">
              <div className="text-wrapper-67">이름을 입력하세요</div>
            </div>
          </div>
          <div className="textbox-7">
            <div className="text-wrapper-66">Email</div>
            <div className="textfield-4">
              <div className="text-wrapper-67">이메일 주소를 입력하세요</div>
            </div>
          </div>
          <div className="textbox-8">
            <div className="text-wrapper-66">비밀번호</div>
            <div className="textfield-4">
              <div className="text-wrapper-67">비밀번호를 입력하세</div>
              <img className="hide-2" alt="Hide" src="/img/hide.svg" />
            </div>
          </div>
          <button className="button-29">
            <div className="text-wrapper-68">회원가입</div>
          </button>
          <p className="log-in">
            <span className="text-wrapper-69">이미 회원가입을 하셨나요? </span>
            <span className="text-wrapper-70">Log in</span>
          </p>
          <div className="checkbox-2">
            <div className="frame-26">
              <div className="img-wrapper">
                <img className="frame-27" alt="Frame" src="/img/frame-1.svg" />
              </div>
              <div className="text-wrapper-71">이용약관 및 정보보호정책 동의</div>
            </div>
          </div>
          <div className="text-wrapper-72">OR</div>
          <img className="line-9" alt="Line" src="/img/line-15.svg" />
          <img className="line-10" alt="Line" src="/img/line-15.svg" />
          <img className="img-8" alt="Img" src="/img/img-1.png" />
        </div>
        <Container className="container-8" image="/img/image-66-4.svg" />
        <ContainerWrapper
          className="container-9"
          image="/img/image-55-5.svg"
          to="/homepage"
          to1="/homepage"
          to2="/homepage"
        />
      </div>
    </div>
  );
};

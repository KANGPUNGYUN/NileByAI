import React from "react";
import { Container } from "../../components/Container";
import { ContainerWrapper } from "../../components/ContainerWrapper";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="div-3">
        <div className="container-3">
          <div className="textbox">
            <div className="textfield">
              <div className="text-wrapper-50">Enter your email</div>
              <img className="img-5" alt="Mail" src="/img/mail.svg" />
            </div>
            <div className="text-wrapper-51">Email</div>
          </div>
          <div className="textbox-2">
            <div className="textfield">
              <div className="text-wrapper-50">Enter your password</div>
              <img className="hide" alt="Hide" src="/img/hide.svg" />
              <img className="img-5" alt="Lock" src="/img/lock.svg" />
            </div>
            <div className="text-wrapper-51">비밀번호</div>
          </div>
          <button className="button-17">
            <div className="text-wrapper-52">로그인</div>
          </button>
          <div className="text-wrapper-53">로그인</div>
          <p className="don-t-have-an">
            <span className="span">Don&#39;t have an account? </span>
            <span className="text-wrapper-54">Sign up</span>
          </p>
          <div className="checkbox">
            <div className="frame-24">
              <div className="frame-wrapper">
                <img className="frame-25" alt="Frame" src="/img/frame.svg" />
              </div>
              <div className="text-wrapper-55">아이디 기억하기</div>
            </div>
          </div>
          <div className="text-wrapper-56">Forgot password?</div>
          <img className="line-2" alt="Line" src="/img/line-15.svg" />
          <div className="text-wrapper-57">OR</div>
          <img className="line-3" alt="Line" src="/img/line-16.svg" />
          <button className="button-18">
            <div className="text-3">{""}</div>
            <img className="google" alt="Google" src="/img/google.svg" />
          </button>
          <img className="img-6" alt="Img" src="/img/img-1.png" />
        </div>
        <Container className="container-82-instance" image="/img/image-66-2.svg" />
        <ContainerWrapper
          className="container-72-instance"
          image="/img/image-55-3.svg"
          to="/homepage"
          to1="/homepage"
          to2="/homepage"
        />
      </div>
    </div>
  );
};

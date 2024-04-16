import React from "react";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import "./style.css";

export const BackofficePayments = () => {
  return (
    <div className="backoffice-payments">
      <div className="div-11">
        <div className="text-wrapper-154">44,000</div>
        <img className="line-22" alt="Line" src="/img/line-73.svg" />
        <div className="tag-2">
          <div className="frame-36">
            <div className="text-wrapper-155">결제완료</div>
          </div>
        </div>
        <div className="container-52">
          <div className="text-wrapper-156">결제번호</div>
          <div className="text-wrapper-157">#996</div>
          <div className="text-wrapper-158">고객</div>
          <div className="text-wrapper-159">Elizabeth Allen</div>
          <div className="text-wrapper-160">2020-01-19</div>
          <div className="text-wrapper-161">결제일</div>
          <div className="text-wrapper-162">결제금액</div>
          <div className="text-wrapper-163">부가세</div>
          <div className="text-wrapper-164">40,000</div>
          <div className="text-wrapper-165">4,000</div>
          <div className="text-wrapper-166">-0</div>
          <div className="text-wrapper-167">할인액</div>
          <div className="text-wrapper-168">Total</div>
          <div className="text-wrapper-169">할부</div>
          <div className="text-wrapper-170">44,000</div>
          <div className="text-wrapper-171">10개월</div>
          <img className="avatar-6" alt="Avatar" src="/img/avatar-20.svg" />
          <div className="text-wrapper-172">결제 방법</div>
          <img className="container-53" alt="Container" src="/img/container-157.svg" />
          <button className="button-55">
            <div className="text-wrapper-173">영수증 보내기</div>
          </button>
          <div className="text-wrapper-174">05:35 PM</div>
          <div className="text-wrapper-175">결제 정보</div>
          <img className="container-54" alt="Container" src="/img/container-156.svg" />
          <button className="button-56">
            <div className="text-wrapper-176">환불 하기</div>
          </button>
          <div className="text-wrapper-177">삼성카드</div>
          <div className="text-wrapper-178">0000-****-****-1234</div>
          <div className="text-wrapper-179">계좌이체</div>
          <div className="text-wrapper-180">토스페이</div>
        </div>
        <div className="text-wrapper-181">결제번호 #996</div>
        <div className="text-wrapper-182">결제정보</div>
        <ConcreteComponentNode
          className="container-55"
          divClassName="container-57"
          divClassNameOverride="container-59"
          frameClassName="container-56"
          frameClassNameOverride="container-58"
          handout="/img/handout-6.svg"
          image="/img/image-66-14.svg"
          user="/img/user-3.svg"
        />
      </div>
    </div>
  );
};

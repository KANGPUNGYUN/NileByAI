import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Container";
import { ContainerWrapper } from "../../components/ContainerWrapper";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="div-6">
        <div className="overlap-group-5">
          <img className="pexels-pavel" alt="Pexels pavel" src="/img/pexels-pavel-danilyuk-8112201-1.png" />
          <ContainerWrapper className="container-10" image="/img/image-55-1.svg" />
          <div className="group-2">
            <p className="text-wrapper-73">
              교육수료까지 단 3일.
              <br />
              여러분의 권리를 <br />
              되찾으세요
            </p>
            <Link to="/lecturepage">
              <button className="button-30">
                <div className="text-wrapper-74">수강신청 바로가기</div>
              </button>
            </Link>
            <p className="text-wrapper-75">
              새로운 양형자료 준비 서비스,
              <br />
              당신은 더 나은 삶을 살 자격이 있습니다.
            </p>
          </div>
        </div>
        <div className="text-wrapper-76">수강절차</div>
        <div className="container-11">
          <div className="text-wrapper-77">신청</div>
          <img className="music" alt="Music" src="/img/music-1.svg" />
          <p className="text-wrapper-78">회원가입 후 온라인 교육과정 신청</p>
        </div>
        <div className="container-12">
          <p className="text-wrapper-79">
            불편하고 비합리적인
            <br />
            양형자료 준비 서비스를 혁신하고자 합니다.
          </p>
          <p className="text-wrapper-80">
            불편하고 복잡한 준비과정 그동안 힘드셨죠?
            <br />
            저희는 여러분이 더 나은 삶을 영위하실 수 있도록&nbsp;&nbsp;노력하고 있습니다.
          </p>
          <img className="image-4" alt="Image" src="/img/image-112.png" />
          <Link to="/lecturepage">
            <button className="button-31">
              <div className="text-wrapper-81">더 알아보기</div>
            </button>
          </Link>
          <div className="text-wrapper-82">About</div>
        </div>
        <div className="container-13">
          <div className="text-wrapper-77">납부</div>
          <img className="music" alt="Music" src="/img/music-1-1.svg" />
          <div className="text-wrapper-83">교육 수수료 납부</div>
        </div>
        <div className="container-14">
          <div className="text-wrapper-77">교육</div>
          <img className="music" alt="Music" src="/img/music-1-2.svg" />
          <p className="text-wrapper-84">온라인 교육 시청 및 학습</p>
        </div>
        <div className="container-15">
          <div className="text-wrapper-77">설문</div>
          <img className="music" alt="Music" src="/img/music-1-3.svg" />
          <div className="text-wrapper-83">학습에 대한 설문조사</div>
        </div>
        <div className="container-16">
          <div className="text-wrapper-77">수료</div>
          <img className="music" alt="Music" src="/img/music-1-4.svg" />
          <div className="text-wrapper-83">교육 수료</div>
        </div>
        <div className="container-17">
          <div className="text-wrapper-85">Certificate</div>
          <div className="text-wrapper-86">
            양형교육센터에서 수료증 받고
            <br />
            재범방지 약속하세요.
          </div>
          <div className="text-wrapper-87">성범죄 예방 심리교육</div>
          <div className="text-wrapper-88">음주폐혜 예방 심리교육(준비중)</div>
          <div className="text-wrapper-89">중독범죄 예방 심리교육(준비중)</div>
          <img className="image-5" alt="Image" src="/img/image-147.png" />
          <img className="image-6" alt="Image" src="/img/image-148.png" />
        </div>
        <div className="overlap-4">
          <div className="container-18">
            <img className="oval-2" alt="Oval" src="/img/oval-21.svg" />
            <img className="oval-3" alt="Oval" src="/img/oval-21.svg" />
            <img className="oval-4" alt="Oval" src="/img/oval-21.svg" />
            <img className="oval-5" alt="Oval" src="/img/oval-21.svg" />
            <img className="oval-6" alt="Oval" src="/img/oval-25.svg" />
            <div className="container-19">
              <div className="text-wrapper-90">Ashley Robinson</div>
              <img className="rating" alt="Rating" src="/img/rating-14.svg" />
              <div className="text-wrapper-91">3d ago</div>
              <p className="text-wrapper-92">
                I recently hired a business coach and was highly impressed with their support and expertise.
              </p>
              <div className="avatar-2">
                <img className="rectangle-3" alt="Rectangle" src="/img/rectangle.png" />
              </div>
            </div>
            <div className="container-20">
              <div className="text-wrapper-90">Jay Rutherford</div>
              <img className="rating" alt="Rating" src="/img/rating-15.svg" />
              <div className="text-wrapper-91">3d ago</div>
              <p className="text-wrapper-92">
                I highly recommend a business coach for anyone starting or growing their business. They offered
                invaluable guidance and support to me.
              </p>
              <div className="avatar-3">
                <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-1.png" />
              </div>
            </div>
            <div className="container-21">
              <div className="text-wrapper-90">Sarah Jackson</div>
              <img className="rating" alt="Rating" src="/img/rating-16.svg" />
              <div className="text-wrapper-91">3d ago</div>
              <p className="text-wrapper-92">
                I hesitated to invest in consulting services initially, but working with a business coach turned out to
                be one of my best decisions ever.
              </p>
              <div className="avatar-2">
                <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-2.png" />
              </div>
            </div>
          </div>
          <p className="text-wrapper-93">그 다음 주인공은 바로 여러분 입니다.</p>
        </div>
        <p className="element-businesses">
          저희 센터와 함께 많은 분들이
          <br />
          자신의 권리를 되찾으셨습니다.
        </p>
        <div className="overlap-5">
          <div className="container-22">
            <div className="text-wrapper-94">자주 묻는 질문</div>
            <img className="line-11" alt="Line" src="/img/line-31.svg" />
            <div className="text-wrapper-95">재범방지교육 꼭 필요한가요?</div>
            <p className="text-wrapper-96">
              형사사건 피고인으로써 재판을 받게외면 형량을 줄이기 위해 다양한 양형자료를 준비해야합니다. 이때 반성문,
              탄원서, 봉사활동확인서, 기부금 영수증, 헌혈증서, 표창장 등의 서류들이 필요합니다.
              <br />
              재범방지교육은 이러한 양형자료의 하나로써 교육이수증이 필요합니다.
            </p>
            <button className="button-32">
              <div className="text-7">{""}</div>
              <img className="img-9" alt="Chevron up large" src="/img/chevron-up-large.svg" />
            </button>
            <img className="line-12" alt="Line" src="/img/line-31.svg" />
            <div className="enim-dolore-veniam">재범방지교육 꼭 필요한가요?</div>
            <button className="button-33">
              <div className="text-8">{""}</div>
              <img className="img-9" alt="Chevron down large" src="/img/chevron-down-large-4.svg" />
            </button>
            <img className="line-13" alt="Line" src="/img/line-31.svg" />
            <img className="line-14" alt="Line" src="/img/line-31.svg" />
            <button className="button-34">
              <div className="text-8">{""}</div>
              <img className="img-9" alt="Chevron down large" src="/img/chevron-down-large-4.svg" />
            </button>
            <div className="eu-ex-officia">재범방지교육 꼭 필요한가요?</div>
            <button className="button-35">
              <div className="text-8">{""}</div>
              <img className="img-9" alt="Chevron down large" src="/img/chevron-down-large-4.svg" />
            </button>
            <div className="sint-occaecat-dolor">재범방지교육 꼭 필요한가요?</div>
            <img className="line-15" alt="Line" src="/img/line-31.svg" />
            <div className="text-wrapper-97">FAQ</div>
            <button className="button-36">
              <div className="text-8">{""}</div>
              <img className="img-9" alt="Chevron down large" src="/img/chevron-down-large-4.svg" />
            </button>
            <div className="velit-nulla-ex">재범방지교육 꼭 필요한가요?</div>
          </div>
          <div className="container-23">
            <div className="text-wrapper-98">상담문의</div>
            <div className="group-3">
              <div className="text-wrapper-99">name@email.com</div>
              <div className="text-wrapper-100">(+1) 123 456 7893</div>
              <img className="phone" alt="Phone" src="/img/phone-2.svg" />
              <img className="mail" alt="Mail" src="/img/mail-1.svg" />
              <p className="text-wrapper-101">1777 West Street, Portland, OR 97205</p>
              <img className="location-pin" alt="Location pin" src="/img/location-pin-1.svg" />
            </div>
            <button className="button-37">
              <div className="text-wrapper-102">문의하기</div>
            </button>
            <div className="textbox-9">
              <img className="vector" alt="Vector" src="/img/vector.svg" />
              <div className="text-wrapper-103">이름</div>
            </div>
            <div className="textbox-10">
              <img className="vector" alt="Vector" src="/img/vector.svg" />
              <div className="text-wrapper-103">이메일</div>
            </div>
            <div className="textarea-2">
              <div className="text-wrapper-104">문의 내용</div>
              <img className="resizing-handle-2" alt="Resizing handle" src="/img/resizing-handle-1.svg" />
            </div>
            <div className="textbox-11">
              <img className="vector" alt="Vector" src="/img/vector.svg" />
              <div className="text-wrapper-103">연락처</div>
            </div>
            <img className="line-16" alt="Line" src="/img/line-42.svg" />
            <img className="image-7" alt="Image" src="/img/image-69.png" />
          </div>
        </div>
        <div className="container-24">
          <div className="text-wrapper-77">발급</div>
          <img className="music" alt="Music" src="/img/music-1-5.svg" />
          <div className="text-wrapper-83">
            이수증서 및<br />
            소견서 발급
          </div>
        </div>
        <p className="text-wrapper-105">
          온라인 교육을 수강하고 설문을 완료하시면,
          <br />
          이수증서 및 소견서 발급이 가능한 원스톱 교육서비스 입니다.
        </p>
        <Container className="container-25" image="/img/image-66.svg" />
        <div className="container-26">
          <img className="image-8" alt="Image" src="/img/image-54.png" />
          <div className="text-wrapper-106">
            한번의 결제로
            <br />
            수강완료 할때까지,
            <br />
            무제한으로 수강하세요
          </div>
          <p className="text-wrapper-107">
            테스트를 통과하지 못하더라도 괜찮습니다.
            <br />
            저희는 패스할때까지 무제한 수강이 가능합니다.
            <br />
            맘편하게 학습하세요.
            <br />
            패스할 때까지 저희가 함께해드립니다.
          </p>
          <div className="text-wrapper-108">#1 무제한 수강</div>
          <div className="big-brother-sheep-2">희망과학심리상담센터만의 혜택</div>
          <p className="text-wrapper-109">
            여러분들만 아셨으면 좋겠습니다.
            <br />
            저희와 함께 하시면 이 모든 혜택들을 누리실 수 있습니다.
          </p>
          <div className="text-wrapper-110">Feature</div>
        </div>
        <div className="container-27">
          <p className="text-wrapper-111">
            수강생들의 편의를 위한
            <br />
            양형교육센터 수료증 보관서비스 제공
          </p>
          <p className="text-wrapper-112">
            수료증을 어디다 저장했는지 모르시겠다구요?
            <br />
            이제 수료증 잃어버릴 걱정 끝.
            <br />
            저희들이 수료증을 안전하게 보관해드리겠습니다. <br />
            언제 어디서나 다시 출력하세요.
          </p>
          <div className="text-wrapper-113">#2 수료증 보관서비스</div>
          <img className="image-9" alt="Image" src="/img/image-55-6.png" />
        </div>
        <div className="container-28">
          <p className="text-wrapper-114">
            강의수강 부터, 반성문 초안 작성까지
            <br />
            양형자료준비 한번에.
          </p>
          <p className="text-wrapper-115">
            양형자료준비 어려우셨죠? 직접 모든걸 하실 필요없이
            <br />
            다년간 쌓아온 노하우를 통해 <br />
            전문 변호사가 직접 양형자료를 작성해드립니다.
          </p>
          <div className="text-wrapper-116">#3 토탈 양형 솔루션</div>
          <img className="image-10" alt="Image" src="/img/image-56.png" />
        </div>
        <div className="text-wrapper-117">User Reviews</div>
      </div>
    </div>
  );
};

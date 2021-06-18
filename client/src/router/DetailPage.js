//import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/reset.css";
import "../css/detail.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useParams } from "react-router";
import styled, { ThemeConsumer } from "styled-components";
import Calendar from "../router/Calendar";
import "react-datepicker/dist/react-datepicker.css";
import campaign from "../img/campaign.jpg";
function DetailPage() {
  const params = useParams();

  // 지도에서 선택한 구 이름과 날짜
  const districtParam = params.district;
  const dateParam = params.date;

  const [district, setDistrict] = useState(districtParam);
  const [date, setDate] = useState(dateParam);
  const [natural, setNatural] = useState("block");
  const [social, setSocial] = useState("none");
  const [naturalColor, setNaturalColor] = useState("#99cf96ec");
  const [socialColor, setSocialColor] = useState("rgb(212, 231, 205)");
  // const[startDate,setStartDate]=useState(new Date());
  // const[endDate,setEndDate]=useState(new Date());

  const dataChange = (e) => {
    setDate(e.target.value);
  };
  const StyledBox = styled.div`
    width: 100%;
    border: 2px solid green;
    border-radius: 15px;
    // margin-top:-110px;
    margin-bottom: 15px;
    padding: 20px;
    padding-left: 30px;
    text-align: left;
    fontsize: 10px;
    font-weight: bold;
    //background-color: #d3d3d3;
  `;

  const clickSo = (t) => {
    setNatural("none");
    setSocial("block");
    setSocialColor("#99cf96ec");
    setNaturalColor("rgb(212, 231, 205)");
  };

  const clickNa = () => {
    setNatural("block");
    setSocial("none");
    setNaturalColor("#99cf96ec");
    setSocialColor("rgb(212, 231, 205)");
  };
  return (
    <div>
      <Header />
      <div id="main">
        <div id="disaster">'{district}' 재난문자</div>
        <div id="guide">재난을 선택해주세요.</div>
        <div
          id="buttons"
          style={{
            width: 700,
            textAlign: "center",
            fontSize: "15px",
            fontWeight: "bold",
            fontfamily: "dohyeon",
          }}
        >
          <button
            onClick={clickNa}
            style={{
              backgroundColor: naturalColor,
              width: "50%",
              marginLeft: "-2px",
            }}
          >
            자연재난
          </button>
          <button
            onClick={clickSo}
            style={{
              backgroundColor: socialColor,
              width: "50%",
              marginLeft: "-2px",
            }}
          >
            사회재난
          </button>
          <div id="disasters">
            <div style={{ display: natural }}>
              <button value="finedust" style={{ marginLeft: "-1px" }}>
                미세먼지
              </button>
              <button value="earthquake">지진</button>
              <button value="typhoon">태풍</button>
              <button value="heavysnow">폭설</button>
              <button value="heatwave">폭염</button>
              <button value="heavyrain">폭우</button>
              <button value="coldwave">한파</button>
              <button value="gale">강풍</button>
              <button value="etc">기타</button>
            </div>
            <div style={{ display: social }}>
              <button value="covid19" style={{ width: "50%" }}>
                <a href="../중구/2020-07-22/detail_covid">코로나19</a>
              </button>
              <button value="fire" style={{ width: "50%" }}>
                <a href="../마포구/2020-10-06/detail_fire">화재</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="img">
        <img src={campaign}></img>
      </div>
      <div class="select">
        <h2>구와 날짜를 선택해주세요.</h2>
        <div id="guselect" style={{ display: "inline" }}>
          구선택
          <select
            name="guselect"
            style={{ marginLeft: "10px" }}
            // value={district}
            // onChange={(e) => {
            //   setDistrict(e.target.value);
            //}}
          >
            <option value="강서구">강서구</option>
            <option value="종로구">종로구</option>
            <option value="중구">중구</option>
            <option value="용산구">용산구</option>
            <option value="성동구">성동구</option>
            <option value="광진구">광진구</option>
            <option value="동대문구">동대문구</option>
            <option value="중랑구">중랑구</option>
            <option value="성북구">성북구</option>
            <option value="강북구">강북구</option>
            <option value="서대문구">서대문구</option>
            <option value="도봉구">도봉구</option>
            <option value="노원구">노원구</option>
            <option value="은평구">은평구</option>
            <option value="마포구">마포구</option>
            <option value="양천구">양천구</option>
            <option value="구로구">구로구</option>
            <option value="금천구">금천구</option>
            <option value="영등포구">영등포구</option>
            <option value="동작구">동작구</option>
            <option value="관악구">관악구</option>
            <option value="서초구">서초구</option>
            <option value="강남구">강남구</option>
            <option value="송파구">송파구</option>
            <option value="강동구">강동구</option>
          </select>
        </div>

        <div id="calendar">
          <input
            type="date"
            value={date}
            onChange={dataChange}
            max="2020-12-31"
            min="2020-07-01"
          />
          <h4>~</h4>
          <input
            type="date"
            value={date}
            onChange={dataChange}
            max="2020-12-31"
            min="2020-07-01"
          />
          <h6>
            *구와 날짜와 재난 모두를 선택해야 원하는 페이지로 넘어갑니다.*
          </h6>
        </div>
      </div>
      {/* <Calendar></Calendar> */}

      <div id="menu">
        <h1>추가 정보</h1>

        <a href="https://ncv.kdca.go.kr/"> 백신정보 확인하러가기!</a>
        <a href="https://www.weather.go.kr/w/index.do/">
          오늘의 날씨정보 확인하러가기!
        </a>
      </div>

      <div id="info">
        <StyledBox>
          *재난문자*
          <p>
            2020/9/21 11:7 [마포구청]162~164번 확진자발생. 역학조사 진행 중이며
            이동동선은 추후 홈페이지 및 블로그 참고바랍니다.
            blog.naver.com/prmapo77
          </p>
        </StyledBox>
        <StyledBox>
          *행동 요령*
          <p>
            1. 비누로 30초 이상 꼼꼼하게 손 씻기 <br />
            2. 기침할 때 옷소매로 입과 코로 가리기 <br />
            3. 기침 등 호흡기 증상 시 마스크 착용하기
          </p>
        </StyledBox>
        <StyledBox>
          {" "}
          *비상 연락망*
          <p>1339, 보건소,지역번호+120</p>
        </StyledBox>
        <StyledBox>
          *자치구 사이트 주소*
          <p>
            구 번호 : 02-3153-8100 <br />구 사이트 : blog.naver.com/prmapo77
          </p>
        </StyledBox>
      </div>

      <div id="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default DetailPage;

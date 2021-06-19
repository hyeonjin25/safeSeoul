//import { render } from "@testing-library/react";
import React, { useState } from "react";
import { useParams } from "react-router";
import Inform from "./Inform";
import "../css/reset.css";
import "../css/detail.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import covidimg from "../img/campaign.jpg";
import fireimg from "../img/fire.png";

function DetailPage() {
  const params = useParams();

  // 지도에서 선택한 구 이름과 날짜
  const districtParam = params.district;
  const dateParam = params.date;

  const [district, setDistrict] = useState(districtParam);
  const [startdate, setStartdate] = useState(dateParam);
  const [enddate, setEnddate] = useState(dateParam);
  const [natural, setNatural] = useState("block");
  const [social, setSocial] = useState("none");
  const [poster, setPoster] = useState(covidimg);
  const [disaster, setDisaster] = useState("init");
  const [naturalColor, setNaturalColor] = useState("#99cf96ec");
  const [socialColor, setSocialColor] = useState("rgb(212, 231, 205)");

  const startdateChange = (e) => {
    setStartdate(e.target.value);
  };

  const enddateChange = (e) => {
    setEnddate(e.target.value);
  };

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

  const onfire = () => {
    setPoster(fireimg);
    setDisaster("fire");
    setDistrict("마포구");
    setStartdate("2020-10-06");
    setEnddate("2020-10-06");
  };

  const oncovid = () => {
    setPoster(covidimg);
    setDisaster("covid");
    setDistrict("중구");
    setStartdate("2020-07-22");
    setEnddate("2020-08-06");
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
              <button
                value="covid19"
                onClick={oncovid}
                style={{ width: "50%" }}
              >
                코로나19
              </button>
              <button value="fire" onClick={onfire} style={{ width: "50%" }}>
                화재
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="img">
        <img src={poster}></img>
      </div>
      <div className="select">
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
            value={startdate}
            onChange={startdateChange}
            max="2020-12-31"
            min="2020-07-01"
          />
          <h4>~</h4>
          <input
            type="date"
            value={enddate}
            onChange={enddateChange}
            max="2020-12-31"
            min="2020-07-01"
          />
          <h6>
            *구와 날짜와 재난 모두를 선택해야 원하는 페이지로 넘어갑니다.*
          </h6>
        </div>
      </div>

      <div id="menu">
        <h1>추가 정보</h1>
        <a href="https://ncv.kdca.go.kr/"> 백신정보 확인하러가기!</a>
        <a href="https://www.weather.go.kr/w/index.do/">
          오늘의 날씨정보 확인하러가기!
        </a>
      </div>

      <Inform disaster={disaster} />

      <div id="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default DetailPage;

//import { render } from "@testing-library/react";
import React, { useState } from "react";
import "../css/reset.css";
import "../css/detail.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useParams } from "react-router";
import styled from "styled-components";
import Calendar from '../router/Calendar'


import "react-datepicker/dist/react-datepicker.css";

function DetailPage() {
  const params = useParams();

  // 지도에서 선택한 구 이름
  const districtParam = params.district;

  const [district, setDistrict] = useState(districtParam);
  const [natural, setNatural] = useState("block");
  const [social, setSocial] = useState("none");
  const [naturalColor, setNaturalColor] = useState("lightgreen");
  const [socialColor, setSocialColor] = useState("rgb(239, 239, 239)");
  // const[startDate,setStartDate]=useState(new Date());
  // const[endDate,setEndDate]=useState(new Date());
const [color,setColor]=useState('grey')
  const StyledBox = styled.div`
    width: 750px;
    border: 1px solid black;
    border-radius: 15px;
    // margin-top:-110px;
    margin-bottom: 15px;
    padding: 30px;
    padding-left: 10px;
    text-align: left;
    fontsize: 10px;
    font-weight: bold;
    //background-color: #d3d3d3;
  `;

  const clickSo = (t) => {
    setNatural("none");
    setSocial("block");
    setSocialColor("lightgreen");
    setNaturalColor("rgb(239, 239, 239)");
  };

  const clickNa = () => {
    setNatural("block");
    setSocial("none");
    setNaturalColor("lightgreen");
    setSocialColor("rgb(239, 239, 239)");
  };
  
  return (
    <div>
      <Header />
      <div id="main"
      >
        <div id="disaster"  >
          '{district}' 재난문자
        </div>

        <div style={{
         textAlign:"center",
         fontSize:"15px",
         fontWeight:"bold",
        }}>
          <button 
            onClick={clickNa}
            style={{ backgroundColor: naturalColor, marginRight: "-2px" }}
          >
            자연재난
          </button>
          <button 
          onClick={clickSo} style={{ backgroundColor: socialColor }}>
            사회재난
          </button>
          <div>
            <div style={{ display: natural }}>
              <button value="finedust"  >미세먼지</button>
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
              <button value="covid19">코로나19</button>
              <button value="fire">화재</button>
            </div>
          </div>
        </div>
        <div id="guselect" >
          <select
            name="guselect"
            value={district}
            onChange={(e) => {
              setDistrict(e.target.value);
            }}
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

        <div id="calendar"> <Calendar></Calendar></div>
      
        
        <StyledBox style={{ height: "100px" }}>*코로나19 현황*</StyledBox>
        <StyledBox style={{ height: "80px" }}>*행동 요령*</StyledBox>
        <StyledBox style={{ height: "50px" }}>*비상 연락망*</StyledBox>
        <StyledBox style={{ height: "50px" }}>*자치구 사이트 주소*</StyledBox>
      </div>
     
      <Footer />
    </div>
  );
}

export default DetailPage;

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
import { eachHourOfInterval } from "date-fns";

function DetailPage() {
  const params = useParams();

  // 지도에서 선택한 구 이름
  const districtParam = params.district;
  const dateParam = params.date;
  
  const [date, setDate] = useState(dateParam);
  const [district, setDistrict] = useState(districtParam);
  const [natural, setNatural] = useState("block");
  const [social, setSocial] = useState("none");
  const [naturalColor, setNaturalColor] = useState("#99cf96ec");
  const [socialColor, setSocialColor] = useState("rgb(239, 239, 239)");
  const dataChange = (e) => {
    setDate(e.target.value);
  }; 
  const StyledBox = styled.div`
    width: 100%;
    border: 2px solid green;
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
    setSocialColor("#99cf96ec");
    setNaturalColor("rgb(239, 239, 239)");
  };

  const clickNa = () => {
    setNatural("block");
    setSocial("none");
    setNaturalColor("#99cf96ec");
    setSocialColor("rgb(239, 239, 239)");
  };
  

  return (
    <div>
      <Header />
      <div id="main" >
        <div id="disaster"  >
          '{district}' 재난문자     
              </div>
              <div id="guide">
                재난을 선택해주세요.
              </div>

        <div style={{
         textAlign:"center",
         fontSize:"15px",
         fontWeight:"bold",
         fontFamily:"dohyeon"
        }}>
    
          <button 
            onClick={clickNa}
            style={{ backgroundColor: naturalColor, marginRight: "-2px",  }}
          >
            자연재난
          </button>
          <button 
          onClick={clickSo} style={{ backgroundColor: socialColor }}>
            사회재난
          </button>
          <div >
            <div style={{ display: natural ,margin:"3px"}}>
              <button value="finedust" >미세먼지</button>
              <button value="earthquake">지진</button>
              <button value="typhoon">태풍</button>
              <button value="heavysnow">폭설</button>
              <button value="heatwave">폭염</button>
              <button value="heavyrain">폭우</button>
              <button value="coldwave">한파</button>
              <button value="gale">강풍</button>
              <button value="etc">기타</button>
            </div>
            <div style={{ display: social,margin:"3px" }}>
            <button value="covid19">코로나19</button>
              
              <button value="fire" ><a href="../../마포구/2020-10-06/detail_fire">화재</a></button>
            </div>
          </div>
        </div>
        </div>
        <div class="select">
         <h2>구와 날짜를 선택해주세요.</h2> 
        <div id="guselect">
          구선택
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

        <div id="calendar"> 
        <h4>시작일:</h4>
        <input
          type="date"
          value={date}
          onChange={dataChange}
          max="2020-12-31"
          min="2020-07-01"
        />
        <h4>~ 종료일:</h4> 
        <input
          type="date"
          value={date}
          onChange={dataChange}
          max="2020-12-31"
          min="2020-07-01"
        />
      <h6> *구와 날짜와 재난 모두를 선택해야 원하는 페이지로 넘어갑니다.*</h6> 
      </div> </div>
       
      <div id="menu">
        <h1>추가 정보</h1>
      
        <a href="https://ncv.kdca.go.kr/"> 백신정보 확인하러가기!</a>
        <a href="https://www.weather.go.kr/w/index.do/"> 오늘의 날씨정보 확인하러가기!</a>

        </div>
    
        <div id="info">
        <StyledBox style={{ height: "120px" }}>
            *재난문자 내용*
            <p>
            2020/7/22 18:11
[중구청]18번째확진자 관련,7.12(일) 13:15~18:30 커몬피씨플렉스PC방(약수점) 이용객중 유증상자는 보건소문의(www.junggu.seoul.kr)</p>
            <p>
            2020/8/9 19:53
[중구청]8.9(일)23번째 확진자 발생. 동선 추후공개. 7.30~8.8 남대문시장 케네디상가 방문자는 유증상 시 검사 바랍니다.(junggu.seoul.kr)
 </p>
        </StyledBox>
        <StyledBox style={{ height: "100px" }}>
            *행동 요령*
            <p>
            1. 비누로 30초 이상 꼼꼼하게 손 씻기
2. 기침할 때 옷소매로 입과 코로 가리기
3. 기침 등 호흡기 증상 시 마스크 착용하기
            </p>
        </StyledBox>
        <StyledBox style={{ height: "50px" }}>
            *비상 연락망*
            <p>
            1339, 보건소,지역번호+120
            </p>
            </StyledBox>
        <StyledBox style={{ height: "50px" }}>
            *자치구 사이트 주소*
            <p>
           구 번호: 02-3396-4000 

           구 사이트:http://www.junggu.seoul.kr 
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

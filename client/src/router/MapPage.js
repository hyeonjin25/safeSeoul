import React, { useRef, useState } from "react";
import { serverUrl } from "../config/config";
import axios from "axios";
import "../css/reset.css";
import "../css/map.css";
import map from "../img/map.png";
import Header from "../component/Header";
import Footer from "../component/Footer";

function MapPage() {
  const bub = useRef();
  const [date, setDate] = useState("2020-07-01");
  const [offX, screenX] = useState(0);
  const [offY, screenY] = useState(0);
  const [disaster, setDisaster] = useState("코로나19");
  const [disp, setDisp] = useState("hidden");

  // 날짜 선택 이벤트
  const dataChange = (e) => {
    setDate(e.target.value);
  };

  // 구역위에 마우스 올릴때 이벤트
  const mouseOver = (e) => {
    // console.log(bub.current.innerText);
    // 말풍선 위치 변경
    screenX(e.nativeEvent.screenX);
    screenY(e.nativeEvent.screenY);

    //말풍선 보이게 하기
    setDisp("visible");

    //백에 날짜와 구 정보 주고 2주간 가장 많이 발생한 재난종류 받기
    axios
      .post(`${serverUrl}/map/disaster`, {
        startDate: date,
        region_name: e.target.alt,
      })
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          setDisaster(res.data.result);
        } else {
          console.log("실패");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 구역위에서 마우스 나갔을 때 이벤트
  const mouseOut = (e) => {
    setDisp("hidden");
  };

  return (
    <div>
      <Header />
      <div style={{ marginRight: "80px", marginTop: "20px", float: "right" }}>
        date :{" "}
        <input
          type="date"
          value={date}
          onChange={dataChange}
          max="2020-12-31"
          min="2020-07-01"
        />
      </div>
      <div
        style={{
          textAlign: "center",
          width: 600,
          height: "72vh",
          minHeight: 420,
          margin: "0 auto",
        }}
      >
        {/* 말풍선 */}
        <div
          className="bubble"
          ref={bub}
          style={{
            position: "absolute",
            top: offY - 140,
            left: offX - 30,
            visibility: disp,
            cursor: "default",
          }}
        >
          {disaster}
        </div>
        {/* 서울시 지도 이미지 */}
        <img
          src={map}
          alt="서울시 지도"
          useMap="#seoulmap"
          style={{ margin: "15px 0" }}
        />
        <map id="seoulmap" name="seoulmap">
          <area
            shape="rect"
            alt="도봉구"
            coords="350,35,394,54"
            onClick={() => {
              window.location.href = `/detail/도봉구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="노원구"
            coords="414,69,459,87"
            onClick={() => {
              window.location.href = `/detail/노원구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="강북구"
            coords="324,79,367,97"
            onClick={() => {
              window.location.href = `/detail/강북구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="성북구"
            coords="326,135,372,151"
            onClick={() => {
              window.location.href = `/detail/성북구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="동대문구"
            coords="374,163,430,179"
            onClick={() => {
              window.location.href = `/detail/동대문구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="중랑구"
            coords="446,135,489,153"
            onClick={() => {
              window.location.href = `/detail/중랑구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="은평구"
            coords="206,105,251,123"
            onClick={() => {
              window.location.href = `/detail/은평구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="종로구"
            coords="279,158,321,173"
            onClick={() => {
              window.location.href = `/detail/종로구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="서대문구"
            coords="202,162,260,179"
            onClick={() => {
              window.location.href = `/detail/서대문구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="마포구"
            coords="172,188,219,205"
            onClick={() => {
              window.location.href = `/detail/마포구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="중구"
            coords="289,190,323,208"
            onClick={() => {
              window.location.href = `/detail/중구/${date};`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="용산구"
            coords="274,225,319,243"
            onClick={() => {
              window.location.href = `/detail/용산구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="성동구"
            coords="358,205,404,221"
            onClick={() => {
              window.location.href = `/detail/성동구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="광진구"
            coords="430,205,474,222"
            onClick={() => {
              window.location.href = `/detail/광진구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="강서구"
            coords="46,183,89,201"
            onClick={() => {
              window.location.href = `/detail/강서구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="양천구"
            coords="94,241,135,259"
            onClick={() => {
              window.location.href = `/detail/양천구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="구로구"
            coords="84,281,126,297"
            onClick={() => {
              window.location.href = `/detail/구로구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="영등포구"
            coords="161,247,215,266"
            onClick={() => {
              window.location.href = `/detail/영등포구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="동작구"
            coords="227,270,272,289"
            onClick={() => {
              window.location.href = `/detail/동작구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="금천구"
            coords="151,314,196,333"
            onClick={() => {
              window.location.href = `/detail/금천구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="관악구"
            coords="222,319,269,337"
            onClick={() => {
              window.location.href = `/detail/관악구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="서초구"
            coords="315,305,359,321"
            onClick={() => {
              window.location.href = `/detail/서초구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="강남구"
            coords="380,283,425,303"
            onClick={() => {
              window.location.href = `/detail/강남구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="송파구"
            coords="458,264,501,284"
            onClick={() => {
              window.location.href = `/detail/송파구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="강동구"
            coords="510,209,554,227"
            onClick={() => {
              window.location.href = `/detail/강동구/${date}`;
            }}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
        </map>
      </div>
      <Footer />
    </div>
  );
}

export default MapPage;

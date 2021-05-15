import React, { useEffect, useRef, useState } from "react";
import "../css/reset.css";
import "../css/map.css";
import map from "../img/map.png";
import Header from "../component/Header";
import Footer from "../component/Footer";

function Map() {
  const bub = useRef();
  const [offX, screenX] = useState(0);
  const [offY, screenY] = useState(0);
  const [disp, setDisp] = useState("hidden");

  // 구역위에 마우스 올릴때 이벤트
  const mouseOver = (e) => {
    // console.log(bub.current.innerText);
    screenX(e.nativeEvent.screenX);
    screenY(e.nativeEvent.screenY);
    setDisp("visible");
  };

  // 구역위에서 마우스 나갔을 때 이벤트
  const mouseOut = (e) => {
    setDisp("hidden");
  };

  return (
    <div>
      <Header />
      <div
        style={{
          textAlign: "center",
          width: 600,
          height: "72vh",
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
          코로나19
        </div>
        {/* 서울시 지도 이미지 */}
        <img
          src={map}
          alt="서울시 지도"
          useMap="#seoulmap"
          style={{ margin: "15px 0" }}
        />
        {/* 이미지맵 */}
        <map id="seoulmap" name="seoulmap">
          <area
            shape="rect"
            alt="도봉구"
            coords="350,35,394,54"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="노원구"
            coords="414,69,459,87"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="강북구"
            coords="324,79,367,97"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="성북구"
            coords="326,135,372,151"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="동대문구"
            coords="374,163,430,179"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="중랑구"
            coords="446,135,489,153"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="은평구"
            coords="206,105,251,123"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="종로구"
            coords="279,158,321,173"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="서대문구"
            coords="202,162,260,179"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="마포구"
            coords="172,188,219,205"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="중구"
            coords="289,190,323,208"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="용산구"
            coords="274,225,319,243"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="성동구"
            coords="358,205,404,221"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="광진구"
            coords="430,205,474,222"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="강서구"
            coords="46,183,89,201"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="양천구"
            coords="94,241,135,259"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="구로구"
            coords="84,281,126,297"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="영등포구"
            coords="161,247,215,266"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="동작구"
            coords="227,270,272,289"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="금천구"
            coords="151,314,196,333"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="관악구"
            coords="222,319,269,337"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="서초구"
            coords="315,305,359,321"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="강남구"
            coords="380,283,425,303"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="송파구"
            coords="458,264,501,284"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
          <area
            shape="rect"
            alt="강동구"
            coords="510,209,554,227"
            href=""
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          />
        </map>
      </div>
      <Footer />
    </div>
  );
}

export default Map;

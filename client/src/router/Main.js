import React from "react";
import { Link } from "react-router-dom";
import "../css/reset.css";
import "../css/main.css";
import arrow from "../img/right-arrow.png";

function Main() {
  return (
    <div id="main_body">
      {/* 헤더 */}
      <div id="main_header">SafeSeoul</div>
      <div id="main_welcome">SafeSeoul에 오신것을 환영합니다</div>
      <Link to={"./map"}>
        <button id="main_butt">
          map
          <img src={arrow} width="16" height="13" style={{ marginLeft: 10 }} alt="profile"/>
        </button>{" "}
      </Link>
    </div>
  );
}

export default Main;

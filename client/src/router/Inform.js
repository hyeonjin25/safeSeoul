import React from "react";
import styled from "styled-components";

function Inform({ disaster }) {
  console.log(disaster);

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

  if (disaster == "init") {
    console.log("이닛임");
    return (
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
    );
  } else if (disaster == "fire") {
    return (
      <div id="info">
        <StyledBox>
          *재난문자 내용*
          <p>
            2020/10/6 17:36 (마포구) [마포구청] 오늘 16:55경 마포역(5호선) 인근
            건물 화재 발생. 마포역 양방향 무정차 통과중. 주변 이동시 주의하시기
            바랍니다.
          </p>
          <p>
            2020/10/6 18:32 [마포구청] 마포역(5호선) 인근 건물 화재 발생 관련
            지하철 무정차 운행이 금일 18시 22분부로 정상화되었습니다. 열차
            이용에 참고하시기 바랍니다.{" "}
          </p>
        </StyledBox>
        <StyledBox>
          *행동 요령*
          <p>
            1. 최초 목격자는 ‘불이야＇를 외치고, 화재경보 비상벨을 눌러 화재
            발생 알리기. 2. 화재를 알린 후 곧바로 119에 신고하기. 3. 젖은
            수건이나 옷깃 등으로 코와 입을 막고 자세를 낮춰 지정된 장소로 대피
            하기
          </p>
        </StyledBox>
        <StyledBox>
          *비상 연락망*
          <p>119</p>
        </StyledBox>
        <StyledBox>
          *자치구 사이트 주소*
          <p>구 번호: 02-3153-8100 구 사이트:blog.naver.com/prmapo77</p>
        </StyledBox>
      </div>
    );
  } else if (disaster == "covid") {
    return (
      <div id="info">
        <StyledBox>
          *재난문자 내용*
          <p>
            2020/7/22 18:11 [중구청]18번째확진자 관련,7.12(일) 13:15~18:30
            커몬피씨플렉스PC방(약수점) 이용객중 유증상자는
            보건소문의(www.junggu.seoul.kr)
          </p>
          <p>
            2020/8/9 19:53 [중구청]8.9(일)23번째 확진자 발생. 동선 추후공개.
            7.30~8.8 남대문시장 케네디상가 방문자는 유증상 시 검사
            바랍니다.(junggu.seoul.kr)
          </p>
        </StyledBox>
        <StyledBox>
          *행동 요령*
          <p>
            1. 비누로 30초 이상 꼼꼼하게 손 씻기 2. 기침할 때 옷소매로 입과 코로
            가리기 3. 기침 등 호흡기 증상 시 마스크 착용하기
          </p>
        </StyledBox>
        <StyledBox>
          *비상 연락망*
          <p>1339, 보건소,지역번호+120</p>
        </StyledBox>
        <StyledBox>
          *자치구 사이트 주소*
          <p>구 번호: 02-3396-4000 구 사이트:http://www.junggu.seoul.kr</p>
        </StyledBox>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Inform;

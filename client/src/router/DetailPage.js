//import { render } from "@testing-library/react";
import React, {  useState } from "react";
import "../css/reset.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useParams } from "react-router";
//import Select from 'react-select';
import { Link } from "react-router-dom";


function DetailPage() {
  const params = useParams();

  // 지도에서 선택한 구 이름
  const district = params.district;

  const [natural, setNatural] = useState("block");
  const [social, setSocial] = useState("none");
  const [naturalColor, setNaturalColor] = useState("lightgreen");
  const [socialColor, setSocialColor] = useState("rgb(239, 239, 239)");
  //const [city, setState] = useState({value:city.target.value});
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
 

   const handleChange=(city)=> {
     this.setState({value: city.target.value});
   };

  const handleSubmit=()=> {
   
  };



  return (
    <div>
      <Header></Header>
      <div>
        {/* <div
          style={{
            border: "0.5px solid black",
            marginTop: "3.0%",
            //  marginBottom:"15px",
            marginRight: "85%",
            marginLeft: "5%",
            padding: "15px",
            paddingLeft: "10px",
            textAlign: "center",
            fontSize: "10px",
            fontWeight: "bold",
            backgroundColor: "#D3D3D3",
          }}
        >
          메뉴
        </div> */}
        {/* <div
          style={{
            // border:"0.5px solid black",
            //marginTop:"5px",
            marginRight: "85%",
            marginLeft: "5%",
            padding: "15px",
            paddingLeft: "10px",
            textAlign: "center",
            fontSize: "13px",
            fontWeight: "bold",
            // backgroundColor:"#D3D3D3",
          }}
        >
          구 선택
        </div> */}
        <div
          style={{
            // border:"0.5px solid black",
            marginTop: "100px",
            marginRight: "75%",
            marginLeft: "5%",
            padding: "15px",
            paddingLeft: "10px",
            textAlign: "center",
            fontSize: "13px",
            fontWeight: "bold",
            // backgroundColor:"#D3D3D3",
          }}
        >
          <form onSubmit = {handleSubmit}>
          <select name="city" onChange={handleChange}>
             <option> 구 선택</option>
            <option value="강서구"> 강서구</option>
            <option value="종로구">종로구 </option>
            <option value="중구">중구</option>
            <option value="yongsangu">용산구</option>
            <option value="songdonggu">성동구</option>
            <option value="gwangjingu">광진구</option>
            <option value="ddmgu">동대문구</option>
            <option value="jungnanggu">중랑구</option>
            <option value="sbgu">성북구</option>
            <option value="gangbukgu">강북구</option>
            <option value="sdmgu">서대문구</option>
            <option value="dobonggu">도봉구</option>
            <option value="nowongu">노원구</option>
            <option value="epgu">은평구</option>
            <option value="mapogu">마포구</option>
            <option value="yangcheongu">양천구</option>
            <option value="gurogu">구로구</option>
            <option value="geumcheongu">금천구</option>
            <option value="ydpgu">영등포구</option>
            <option value="dongjakgu">동작구</option>
            <option value="gwanakgu">관악구</option>
            <option value="seochogu">서초구</option>
            <option value="gangnamgu">강남구</option>
            <option value="songpagu">송파구</option>
            <option value="gangdonggu">강동구</option>
          </select>
           <input type="submit" value="GO"/> 
           </form>
        </div> 
        {/* <div
          style={{
            //border:"0.5px solid black",
            // borderLeft:"0.5px solid black",
            //borderRight:"0.5px solid black",
            //borderBottom:"0.5px solid black",
            marginTop: "-22px",
            // marginBottom:"15px",
            marginRight: "85%",
            marginLeft: "5%",
            padding: "15px",
            paddingLeft: "10px",
            textAlign: "center",
            fontSize: "11px",
            fontWeight: "bold",
            //backgroundColor:"#D3D3D3",
          }}
        >
          재난 선택
        </div>
        <div
          style={{
            //border:"0.5px solid black",
            // borderLeft:"0.5px solid black",
            //borderRight:"0.5px solid black",
            //borderBottom:"0.5px solid black",
            marginTop: "-22px",
            // marginBottom:"15px",
            marginRight: "85%",
            marginLeft: "5%",
            padding: "15px",
            paddingLeft: "10px",
            textAlign: "center",
            fontSize: "11px",
            fontWeight: "bold",
            //backgroundColor:"#D3D3D3",
          }}
        >
          <select name="disselect" size="5">
            <option value="total">전체</option>
            <option value="covid19">코로나19</option>
            <option value="finedust">미세먼지</option>
            <option value="fire">화재</option>z
            <option value="earthquake">지진</option>
            <option value="typhoon">태풍</option>
            <option value="heavysnow">폭설</option>
            <option value="heatwave">폭염</option>
            <option value="heavyrain">폭우</option>
            <option value="coldwave">한파</option>
            <option value="gale">강풍</option>
            <option value="etc">기타</option>
          </select>
        </div> */}
          <div
          style={{
            marginTop: "-111.5px",
            marginBottom: "1.0%",
            marginRight: "40%",
            marginLeft: "40%",
            padding: "15px",
            paddingLeft: "10px",
            textAlign: "center",
            fontSize: "15px",
            fontWeight: "bold",
            backgroundColor: "#D3D3D3",
          }}
        >
          '{district}' 재난문자
        </div>

        <div
          style={{
            textAlign: "center",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          <button onClick={clickNa} style={{ backgroundColor: naturalColor }}>
            자연재난
          </button>
          <button onClick={clickSo} style={{ backgroundColor: socialColor }}>
            사회재난
          </button>
          <div>
            <div style={{ 
              display: natural,
              marginBottom: "3px",
              marginLeft:"15px",
             }}>
                
              <button value="finedust">미세먼지</button>
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

        <div
          style={{
            border: "1px solid black",
            borderRadius: "15px",
            marginTop: "0%",
            marginBottom: "1.5%",
            marginRight: "18%",
            marginLeft: "22%",
            padding: "70px",
            paddingLeft: "10px",
            textAlign: "left",
            fontSize: "10px",
            fontWeight: "bold",
            backgroundColor: "#D3D3D3",
          }}
        >
          *코로나19 현황*
        </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "15px",
            // marginTop:"-110px",
            marginBottom: "15px",
            marginRight: "18%",
            marginLeft: "22%",
            padding: "50px",
            paddingLeft: "10px",
            textAlign: "left",
            fontSize: "10px",
            fontWeight: "bold",
            backgroundColor: "#D3D3D3",
          }}
        >
          *행동 요령*
        </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "15px",
            // marginTop:"-110px",
            marginBottom: "15px",
            marginRight: "18%",
            marginLeft: "22%",
            padding: "30px",
            paddingLeft: "10px",
            textAlign: "left",
            fontSize: "10px",
            fontWeight: "bold",
            backgroundColor: "#D3D3D3",
          }}
        >
          *비상 연락망*
        </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "15px",
            // marginTop:"-110px",
            marginBottom: "15px",
            marginRight: "18%",
            marginLeft: "22%",
            padding: "30px",
            paddingLeft: "10px",
            textAlign: "left",
            // textAlign:""
            fontSize: "10px",
            fontWeight: "bold",
            backgroundColor: "#D3D3D3",
          }}
        >
          *자치구 사이트 주소*
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailPage;

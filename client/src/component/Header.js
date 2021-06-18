import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={{ backgroundColor: "#4e9b4aec" }}>
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bold",
          fontFamily: "paci",
        }}
      >
        <Link to={"/"}> SafeSeoul</Link>
      </div>
    </div>
  );
}

export default Header;

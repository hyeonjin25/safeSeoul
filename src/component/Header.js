import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={{ backgroundColor: "#45973fec" }}>
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

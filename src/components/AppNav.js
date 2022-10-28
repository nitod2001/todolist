import React from "react";
import { Link } from "react-router-dom";
function AppNav() {
  return (
    <div
      className="Container-Nav"
      style={{
        height: "50px",

        padding: "0 20px",
      }}
    >
      <ul
        style={{
          lineHeight: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <li
          style={{
            marginRight: "5px",
            fontSize: "25px",
            listStyle: "none",
            textDecoration: "none",
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
        </li>
        <li style={{ marginRight: "5px", fontSize: "25px", listStyle: "none" }}>
          <Link style={{ textDecoration: "none" }} to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AppNav;

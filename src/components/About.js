import React from "react";
import App from "../App.css";
import DoTin from "../img/302327297_379963057589715_210951293956037068_n.jpg";
function About() {
  return (
    <div style={{ marginTop: "10px" }}>
      <div className="container-about">
        <div>
          <div className="title-heading">Sinh Viên Thực Hiện</div>
          <img className="image-about" src={DoTin} alt="Đỗ Tín avatar" />
        </div>

        <div className="container-desc__wrapper">
          <div className="container-desc">
            <p className="context">Họ và tên: Đỗ Tín</p>
            <p className="context">MSSV: 45.01.104.239</p>
            <p className="context">Trường: Đại học Sư phạm TP.HCM</p>
            <p className="context">Lớp Học phần: 2211COMP1031-Công nghệ Web</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

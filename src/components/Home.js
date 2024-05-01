import React, { useState } from "react";
import hcmueLogo1 from "../images/hcmue1.png";
import bgthi from "../images/thi1.png";

function Home() {
  const handleButtonClick = () => {
    // Điều hướng đến trang examform
    window.location.href = '/ExamForm';
  };
  return (
    <div>
      <div className="header-border"></div>
      <div className="header">
        <img src={hcmueLogo1} alt="HCMUE Logo1" class="logo" />
        <h1>Kỳ thi đánh giá năng lực chuyên biệt 2024</h1>
      </div>
      <div className="header-border"></div>
      <div className="home">
      <div className="row">
      <div className="leftcolumn">
          <div className="card">
            <h3>
              <i className="fas fa-layer-group"></i> Toán học
            </h3>
            {/* <div className="fakeimg" style={{ height: "200px" }}>
            </div> */}
            <div class="info-table"> <div class="info-row">
              <div class="info-cell"><h4>Ngày thi:</h4></div>
              <div class="info-cell"><h4>17 - 04 - 2024</h4></div>
            </div>
            <div class="info-row">
              <div class="info-cell"><h4>Giờ thi:</h4></div>
              <div class="info-cell"><h4>9:00 am</h4></div>
            </div>
            <div class="info-row">
              <div class="info-cell"><h4>Thời gian làm:</h4></div>
              <div class="info-cell"><h4>90 phút</h4></div>
            </div>
          </div>
          <img src={bgthi} alt="thi" class="bg" />
            <button onClick={handleButtonClick} class="start">Bắt đầu</button>
          </div>
        </div>
      <div className="rightcolumn ">
          <div className="card">
            <h3>
              <i className="fas fa-user-graduate"></i> Thông tin thí sinh{" "}
            </h3>
            <div className="fakeimg"><h4>Số báo danh:  T124D001</h4></div>
            <div className="fakeimg"><h4>Họ tên:  Dư Thị Như Quỳnh</h4></div>
            {/* <div class="info-table"> <div class="info-row">
              <div class="info-cell"><h4>Số báo danh:</h4></div>
              <div class="info-cell"><h4>T124D001</h4></div>
            </div>
            <div class="info-row">
              <div class="info-cell"><h4>Họ tên:</h4></div>
              <div class="info-cell"><h4>Dư Thị Như Quỳnh</h4></div>
            </div>
          </div> */}
          
          </div>
        </div>
      </div>
      </div>
      <div className="footer">
        <div>Bản quyền thuộc <a href="https://hcmue.edu.vn/vi/">Trường Đại học Sư phạm Thành phố Hồ Chí Minh &#169;</a></div>
      </div>
    </div>
  );
}

export default Home;

// import Examcss from "../css/ExamForm.css";
import exam1 from "../images/exam1.png";
import hcmueLogo1 from "../images/hcmue1.png";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassStart, faHourglassHalf, faHourglassEnd } from '@fortawesome/free-solid-svg-icons';

function TimeIcon() {
  const [icon, setIcon] = useState(faHourglassStart);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIcon((prevIcon) => {
        if (prevIcon === faHourglassStart) {
          return faHourglassHalf;
        } else if (prevIcon === faHourglassHalf) {
          return faHourglassEnd;
        } else {
          return faHourglassStart;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <FontAwesomeIcon icon={icon} className="spin" />;
}

function ExamForm() {

  // Khởi tạo trạng thái để lưu trữ đáp án được chọn
  const [selectedAnswer, setSelectedAnswer] = useState('');

  // Hàm xử lý khi một đáp án được chọn
  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const buttonsPerPage = 25;
  const totalButtons = 50;

  const [currentPage, setCurrentPage] = useState(1);

  const renderButtons = () => {
    const startIndex = (currentPage - 1) * buttonsPerPage;
    const endIndex = Math.min(startIndex + buttonsPerPage, totalButtons);

    const buttons = [];
    for (let i = startIndex + 1; i <= endIndex; i++) {
      buttons.push(<button key={i} className="page-button">{i}</button>);
    }
    return buttons;
  };

  const nextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(totalButtons / buttonsPerPage)));
  };

  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <div className="header-border"></div>
      <div className="header">
        <img src={hcmueLogo1} alt="HCMUE Logo1" class="logo" />
        <h1>Kỳ thi đánh giá năng lực chuyên biệt 2024</h1>
      </div>
      <div className="header-border"></div>
      <div className="ExamForm">
      <div className="row">
        <div className="left-column">
          {/* <div className="card-left">   
            <div className="form-infor-exam">
              <h2>d</h2>
            </div>
            <div className="form-infor-user">
              <h2>dd</h2>
            </div>
          </div> */}
          <div className="card-left"> 
            <div className="card-h4">Câu 1:</div> 
            <img src={exam1} alt="exam1" class="" />       
          </div>
          <div className="card-left-answer">
          <div className="card-h4">Câu trả lời:</div> 
          <form>
        <label>
          <input
            type="radio"
            value="A"
            checked={selectedAnswer === 'A'}
            onChange={handleAnswerChange}
          />
          A
        </label>
        <label>
          <input
            type="radio"
            value="B"
            checked={selectedAnswer === 'B'}
            onChange={handleAnswerChange}
          />
          B
        </label>
        <label>
          <input
            type="radio"
            value="C"
            checked={selectedAnswer === 'C'}
            onChange={handleAnswerChange}
          />
          C
        </label>
        <label>
          <input
            type="radio"
            value="D"
            checked={selectedAnswer === 'D'}
            onChange={handleAnswerChange}
          />
          D
        </label>
      </form>
          </div>
        </div>
        <div className="right-column">
          {/* <div className="card-right">
            <div className="card-h3">Thông tin thí sinh</div>
            <p>Họ tên: Dư Thị Như Quỳnh</p>
            <p>CMND/CCCD: 13435465767</p>
            <p>Số báo danh: 13135346</p>
          </div> */}
          <div className="card-right">
          <div className="card-h3">Số câu hỏi</div>
          <div className="time"><TimeIcon /> 01:30:00</div>
            <div className="table-quesitons">
              Đã làm:  0/50
            </div>
            <div className="type" style={{ backgroundColor: "#007bff" }}>
              <div class="text">Chưa xem</div>
            </div>
            <div className="type" style={{ backgroundColor: "#3d3d3d" }}>
              <div class="text">Đã trả lời</div>
            </div>
            <div className="type" style={{ backgroundColor: "#c33a3a" }}>
              <div class="text">Chưa trả lời</div>
            </div>
            <div className="button-list">
              {renderButtons()}
            </div>
          <div className="pagination">
            <button class="next-previous" onClick={prevPage} disabled={currentPage === 1}> &lt; </button>
            <button class="next-previous" onClick={nextPage} disabled={currentPage === Math.ceil(totalButtons / buttonsPerPage)}> &gt; </button>
          </div>
          </div>
        </div>
      </div>
      </div>
      <div className="footer">
      </div>
    </div>
  );
}

export default ExamForm;

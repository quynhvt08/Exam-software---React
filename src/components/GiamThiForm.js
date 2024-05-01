import React from 'react'
import pc from "../images/pc.png";


const statusColors = {
  'Chưa đăng nhập': '#e6e6e6', // Màu trắng
  'Đang chờ': '#F3F781',        // Màu đỏ
  'Đang thi': '#81F79F',         // Màu cam
  'Đã nộp bài': '#E2A9F3'       // Màu xanh lá cây
};

function Card({ title, status, sbd, name, account, imgUrl }) {

  const cardColor = statusColors[status]; // Lấy màu tương ứng với trạng thái

  return (
    <div className="pc-card" style={{ backgroundColor: cardColor }}>
      <div className="pc-info">
        <div className="pc-title">
          {title} <button className="btn-recover">Phục hồi</button>
        </div>
        <p className="pc-description">Trạng thái: <span className="pc-status">{status}</span></p>
        <img src={pc} alt="pc" className="pc" />
        <div className="pc-user-infor">
          <p className="pc-description">SBD: <span className="pc-status">{sbd}</span></p>
          <p className="pc-description">Họ tên: <span className="pc-name">{name}</span></p>
          <p className="pc-description">Tài khoản: <span className="pc-status">{account}</span></p>
        </div>
      </div>
    </div>
  );
}

function CardContainer({ data }) {
  return (
    <div className="pc-container">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}

const pcData = Array.from({ length: 40 }, (_, index) => ({
  title: `Máy ${index + 1}`,
  status: getStatus(index), // Lấy trạng thái dựa vào index của card
  sbd: "4601104151",
  name: "VƯƠNG NGỌC ANH",
  account: "SP032049",
  imgUrl: "path/to/your/image.jpg" // Đường dẫn đến hình ảnh của máy tính
}));

// Hàm để lấy trạng thái dựa vào index
function getStatus(index) {
  // Định nghĩa các trạng thái khác nhau
  const statusList = ['Chưa đăng nhập', 'Đang chờ', 'Đang thi', 'Đã nộp bài'];

  // Lấy trạng thái tương ứng với index, vòng lặp lại nếu index vượt quá số lượng trạng thái
  return statusList[index % statusList.length];
}

// Lọc ra các card có trạng thái 'Chưa đăng nhập'
const cardsNotLoggedIn = pcData.filter(card => card.status === 'Chưa đăng nhập');
// Lọc ra các card có trạng thái 'Đang chờ'
const cardsWaiting = pcData.filter(card => card.status === 'Đang chờ');
// Lọc ra các card có trạng thái 'Đang thi'
const cardsInExam = pcData.filter(card => card.status === 'Đang thi');
// Lọc ra các card có trạng thái 'Đã nộp bài'
const cardsSubmitted = pcData.filter(card => card.status === 'Đã nộp bài');

// Tính tổng số lượng card có trạng thái là "Chưa đăng nhập"
const totalNotLoggedIn = cardsNotLoggedIn.length;
const totalWaiting = cardsWaiting.length;
const totalInExam = cardsInExam.length;
const totalSubmitted = cardsSubmitted.length;

// Đếm tổng số máy
const totalMachines = pcData.length;

function GiamThiForm() {
  return (
    <div>
    <div className="khung-header">
      <div className="room">
        <div className="tille">Phòng thi </div>
        <h2>C.301</h2>
      </div>
      <div className="infor-room">
        <div className="left">
          <div className="tille"> Ngày thi: 24/01/2024</div>
          <div className="tille">Giờ Thi: 9h00</div>
          <div className="tille">Ca Thi: 1</div>
        </div>
          <div className="right">
            
            <button className="btn-out"><i class='fas fa-user'></i> Giám thị: 114</button>
          </div>
      </div>
      
      <div className="status">
        <CardContainer data={pcData} />

      </div>
    </div>
    <div class="status-bar">
    <div class="button-container">
        <button style={{ color: ' #006aff'}}>Số thí sinh
          <p> {totalMachines} </p>
        </button>
        <button style={{ color: 'white'}}>Chưa đăng nhập
          <p style={{ color: 'white'}}> {totalNotLoggedIn} </p>
        </button>
        <button style={{ color: 'yellow'}}>Chờ 
          <p style={{ color: 'yellow'}}> {totalWaiting} </p>
        </button>
        <button style={{ color: '#00ff0d'}} >Đang thi
          <p style={{ color: '#00ff0d'}}> {totalInExam} </p>
        </button>
        <button style={{ color: 'palevioletred'}}>Nộp bài
          <p style={{ color: 'palevioletred'}}> {totalSubmitted} </p>
        </button>
      </div>
    </div>
  </div>
  )
}
export default GiamThiForm

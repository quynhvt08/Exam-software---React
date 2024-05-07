import React, { useState } from 'react'; // Import useState hook
import '../css/HoiDong.css'; // Import CSS file
import hcmueLogo1 from '../images/hcmue1.png'; // Import image file

function HoiDongForm() {

  const [isSubmenuOpenTK, setIsSubmenuOpenTK] = useState(false);
  const [isSubmenuOpenDT, setIsSubmenuOpenDT] = useState(false);
  const [isSubmenuOpenPCCT, setIsSubmenuOpenPCCT] = useState(false);
  const [isSubmenuOpenDLT, setIsSubmenuOpenDLT] = useState(false);
  const [isSubmenuOpenKQT, setIsSubmenuOpenKQT] = useState(false);

    return (
        <div>
        <div container>        
            <div class="sidebar">
               <img src={hcmueLogo1} alt="HCMUE Logo1" />
               <a class="active" href="/HoiDongForm"> <i class="fas fa-fw fa-tachometer-alt"></i> <h4>Bảng điều kiển</h4> </a>
               <a  class="active" href="/FormXemThi" > <i class="fas fa-eye"></i> <h4>Giám sát phòng thi</h4> </a>
               <a href="#contact" onClick={() => setIsSubmenuOpenTK(!isSubmenuOpenTK)}><i class="fas fa-users"></i>Tài khoản </a>
               {isSubmenuOpenTK && (
               <div>
                 <a  class="link" href="/FormXemThi" >Danh sách tài khoản </a>
              </div>
              )}
               <a href="#about" onClick={() => setIsSubmenuOpenDT(!isSubmenuOpenDT)}><i class="fas fa-fw fa-chalkboard-teacher"></i>Đề thi</a>
               {isSubmenuOpenDT && (
               <div>
                 <a  class="link" href="/FormXemThi" >Danh sách đề thi </a>
                 <a  class="link" href="/FormXemThi" >Import</a>
              </div>
              )}
               <a href="#contact" onClick={() => setIsSubmenuOpenPCCT(!isSubmenuOpenPCCT)}><i class="far fa-edit"></i>Phân công chấm thi</a>
               {isSubmenuOpenPCCT && (
               <div>
                 <a  class="link" href="/FormXemThi" >Tạo cặp chấm Ngữ văn </a>
                 <a  class="link" href="/FormXemThi" >Tạo cặp chấm TLHS</a>
                 <a  class="link" href="/FormXemThi" >Tạo cặp chấm phúc khảo</a>
              </div>
              )}
               <a href="#about" onClick={() => setIsSubmenuOpenDLT(!isSubmenuOpenDLT)}><i class="fa fa-clipboard"></i>Dữ liệu chấm thi</a>
               {isSubmenuOpenDLT && (
               <div>
                 <a  class="link" href="/FormXemThi" >Dữ liệu thi cũ</a>
              </div>
              )}
               <a href="#contact" onClick={() => setIsSubmenuOpenKQT(!isSubmenuOpenKQT)}><i class="fa fa-check-square"></i>Kết quả thi</a>
               {isSubmenuOpenKQT && (
               <div>
                 <a  class="link" href="/FormXemThi" >Tạo cặp chấm Ngữ văn </a>
                 <a  class="link" href="/FormXemThi" >Tạo cặp chấm TLHS</a>
                 <a  class="link" href="/FormXemThi" >Tạo cặp chấm phúc khảo</a>
                 <a  class="link" href="/FormXemThi" >Tạo cặp chấm phúc khảo</a>
              </div>
              )}
               <a href="#about"><i class="fas fa-fw fa-file-export"></i>Export </a>
               {/* <button href="#about" >Logout <i class="fas fa-fw fa-file-export right"></i></button> */}
            </div>  
            <div className="header-sidebar">              
               <button className="user"> Admin 01</button>
               {/* <h2>Kỳ thi đánh giá năng lực chuyên biệt 2024</h2> */}
            </div>   
            <div className="content">

              <div class="stats-container-cathi">
                <div class="stats">
                <div class="label">CA THI</div>
                <div class="value">0</div>
              </div>
              </div>  

              <div className="thongke">     
              <div class="stats-container ">
                <div class="icon">
                  <i class="fa fa-users"></i> 
                </div>
                <div class="stats">
                <div class="value">100</div>
                <div class="label">CHƯA ĐĂNG NHẬP</div>
              </div>
              </div>
              <div class="stats-container blue">
                <div class="icon">
                  <i class="fa fa-users"></i> 
                </div>
                <div class="stats">
                <div class="value">10</div>
                <div class="label">ĐÃ ĐĂNG NHẬP</div>
              </div>
              </div>
              <div class="stats-container yellow">
                <div class="icon">
                  <i class="fa fa-users"></i> 
                </div>
                <div class="stats">
                <div class="value">0</div>
                <div class="label">ĐANG THI</div>
              </div>
              </div>
              <div class="stats-container green">
                <div class="icon">
                  <i class="fa fa-users"></i> 
                </div>
                <div class="stats">
                <div class="value">0</div>
                <div class="label">ĐÃ NỘP BÀI</div>
              </div>
              </div>
              </div> 
               
              <div class="copyright">
                <div>Bản quyền thuộc <a href="https://hcmue.edu.vn/vi/">Trường Đại học Sư phạm Thành phố Hồ Chí Minh &#169;</a></div>
              </div>
              
            </div>          

        </div>
        </div>
    );
}

export default HoiDongForm;

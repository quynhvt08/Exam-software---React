import React, { useState } from 'react';
import hcmueLogo from '../images/hcmue.png';


function LoginForm({Login, error}) {
  const [passwordShown, setPasswordShown] = useState(false);

 const togglePasswordVisibility = () => {
   setPasswordShown(!passwordShown);
 };

  const [details, setDetails] = useState({taikhoan:"", password:""})

  const submitHandler = e =>{
    e.preventDefault();
    Login(details);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
       <div class="logo1">
        <img src={hcmueLogo} alt="HCMUE Logo" />
       </div>
        <div class="text-center">
            <h2>Kỳ thi đánh giá năng lực chuyên biệt 2024</h2>
        </div>
        <div className="form-group">
          {error !== "" && <div className="error">{error}</div>}
        </div>
        <div className="form-group ">
          <input type="text" name="email" class="form-control form-control-user" id="exampleInputEmail" placeholder="Tài khoản"
          onChange={e => setDetails({...details, taikhoan: e.target.value})} value = {details.taikhoan}></input>
        </div>
        <div className="form-group">
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              className="form-control form-control-user"
              id="exampleInputPassword"
              placeholder="Mật khẩu"
              onChange={e => setDetails({...details, password: e.target.value})}
              value={details.password}/>
            <span className="btn" id="togglePassword" onClick={togglePasswordVisibility}>
              <i className={passwordShown ? "fas fa-eye-slash" : "fas fa-eye"}></i>
            </span>
        </div>
        <div className="form-group ">
          <button type="submit" class=" btn btn-primary btn-user">Đăng nhập</button>
        </div>
        <div className="form-group underlined"></div>
        <div className="form-group linkhcmue">
          <a href="https://hcmue.edu.vn" class="linkhcmue">Bản quyền thuộc Trường Đại học Sư phạm Thành phố Hồ Chí Minh &#169;</a>
        </div>
        </div>
    </form>
  )
}

export default LoginForm;

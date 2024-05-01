import React, {useState} from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate from react-router-dom
import ExamForm from './components/./ExamForm';
import LoginForm from './components/LoginForm';
import GiamThiForm from './components/GiamThiForm';

function App() {
  const User = {
    taikhoan: "thisinh",
    password: "12345"
  }
  const GiamThi = {
    taikhoan: "giamthi",
    password: "12345"
  }

  const [user, setUser] = useState({taikhoan: ""});
  const [error, setError] = useState("");

  const LoginUser = details =>{
    console.log(details);

  if(details.taikhoan === User.taikhoan && details.password === User.password){
    console.log("Đăng nhập thành công.(User).");
    setUser({
      taikhoan: details.taikhoan
    })
  }else if (details.taikhoan === GiamThi.taikhoan && details.password === GiamThi.password) {
    console.log("Đăng nhập thành công (GiamThi).");
    setUser({
      taikhoan: details.taikhoan
    })
    // Redirect or do something else for admin login success
  }
  else{
    console.log("Tài khoản hoặc mật khẩu chưa chính xác!");
    setError("Tài khoản hoặc mật khẩu chưa chính xác!");
  }
}

  // const Logout = () =>{
  //   setUser({taikhoan:""});
  // }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              user.taikhoan !== "" ? (
                user.taikhoan === GiamThi.taikhoan ? (
                  <GiamThiForm/>
                ) : (
                  <Home/>
                )
              ) : (
                <div className="formlogin">
                  <LoginForm Login={LoginUser} error={error} />
                </div>
              )
            }
          />
          <Route path="/examform" element={<ExamForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

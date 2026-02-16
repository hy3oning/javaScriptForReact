import "./../css/Login.css";
import { useState, useRef } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const nav = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const loginCheck = () => {
    if (id === "" || pw === "") {
      alert("아이디와 비밀번호를 입력하세요");
      return;
    }
    nav("/home");
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      loginCheck();
    }
  };
  return (
    <>
      <div className="login-wrapper">
        <div className="login-box">
          <h1 className="login-title">COMMUNITY LOGIN</h1>

          <div className="login-input-area">
            <input
              type="text"
              placeholder="아이디"
              value={id}
              onChange={onChangeId}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={pw}
              onChange={onChangePw}
              onKeyDown={onKeyDown}
            />
          </div>
          <Button text={"로그인"} onClick={loginCheck} />
          <p className="login-desc">
            아무 값이나 입력하고 로그인 버튼을 눌러보세요!
          </p>
        </div>
      </div>
    </>
  );
};
export default Login;

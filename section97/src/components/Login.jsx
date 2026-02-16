import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./../css/Login.css";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    id: "",
    pw: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (!input.id.trim() || !input.pw.trim()) {
      alert("아이디와 비밀번호를 입력하세요.");
      return;
    }
    navigate("/home");
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>LOGIN</h2>

        <input
          type="text"
          name="id"
          placeholder="아이디"
          value={input.id}
          onChange={onChange}
        />

        <input
          type="password"
          name="pw"
          placeholder="비밀번호"
          value={input.pw}
          onChange={onChange}
        />
        <Button text="로그인" type="submit" />
        <p>아무값이나 입력해서 로그인하세요!</p>
      </form>
    </div>
  );
};

export default Login;

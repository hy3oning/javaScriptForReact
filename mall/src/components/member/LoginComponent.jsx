import { useState } from "react";
import useCustomLogin from "../../hooks/useCustomLogin";
import "./LoginComponent.css";

const initState = {
  email: "",
  pw: "",
};

export default function LoginComponent() {
  const [loginParam, setLoginParam] = useState({ ...initState });
  const [errorMsg, setErrorMsg] = useState("");

  const { doLogin, moveToPath } = useCustomLogin();

  const handleChange = (e) => {
    setLoginParam({ ...loginParam, [e.target.name]: e.target.value });
    setErrorMsg("");
  };

  const handleClickLogin = async () => {
    if (!loginParam.email.trim()) {
      setErrorMsg("이메일을 입력하세요.");
      return;
    }

    if (!loginParam.pw.trim()) {
      setErrorMsg("비밀번호를 입력하세요.");
      return;
    }

    try {
      const result = await doLogin(loginParam);
      console.log("login success", result);
      moveToPath("/");
    } catch (err) {
      console.error("login failed", err);
      setErrorMsg("이메일 또는 비밀번호가 올바르지 않습니다.");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClickLogin();
  };
  return (
    <div className="login-form-container">
      <h2 className="login-title">Login</h2>

      <form className="login-fields" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="input-label">Email Address</label>
          <input
            className="input-field"
            name="email"
            type="email"
            placeholder="name@example.com"
            value={loginParam.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label className="input-label">Password</label>
          <input
            className="input-field"
            name="pw"
            type="password"
            placeholder="Enter your password"
            value={loginParam.pw}
            onChange={handleChange}
          />
        </div>

        {errorMsg && <p className="login-error-text">{errorMsg}</p>}

        <div className="login-button-wrapper">
          <button className="btn-login-submit" type="submit">
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}

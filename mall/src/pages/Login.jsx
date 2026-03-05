import Header from "../include/Header"; // Header 경로 확인 필요
import "./Login.css";
import "./AboutPage.css";
const Login = () => {
  return (
    <div className="main-container">
      <Header />
      <main className="content-area">
        {/* 로그인 폼 */}
        <div className="login-container">
          <h2>Login</h2>

          <form className="login-form">
            <div className="form-group">
              <label>아이디</label>
              <input type="text" placeholder="아이디 입력" />
            </div>

            <div className="form-group">
              <label>비밀번호</label>
              <input type="password" placeholder="비밀번호 입력" />
            </div>

            <button type="submit" className="login-btn">
              로그인
            </button>
          </form>
        </div>
        <div className="button-wrapper">
          <button className="custom-btn-outline" type="button">
            Login Page
          </button>
        </div>
      </main>
    </div>
  );
};
export default Login;

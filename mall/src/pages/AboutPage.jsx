import Header from "../include/Header"; // Header 경로 확인 필요
import "./AboutPage.css";
const AboutPage = () => {
  return (
    <div className="main-container">
      <Header />
      <main className="content-area">
        <div className="button-wrapper">
          <button className="custom-btn-outline" type="button">
            About Page
          </button>
        </div>
      </main>
    </div>
  );
};
export default AboutPage;

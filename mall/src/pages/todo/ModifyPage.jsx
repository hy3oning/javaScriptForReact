import { useParams, useSearchParams } from "react-router-dom";
import Header from "../../include/Header"; // Header 경로 확인 필요
import "./ModifyPage.css";
const ModifyPage = () => {
  const { tno } = useParams();
  const [queryParams] = useSearchParams();
  const page = parseInt(queryParams.get("page") || "1", 10);
  const size = parseInt(queryParams.get("size") || "10", 10);
  return (
    <div className="main-container">
      <Header />

      <p> Modify tno = {tno}</p>
      <p>
        Modify page = {page} size = {size}
      </p>
      <main className="content-area">
        <div className="button-wrapper">
          <button className="custom-btn-outline" type="button">
            Modify Page
          </button>
        </div>
      </main>
    </div>
  );
};
export default ModifyPage;

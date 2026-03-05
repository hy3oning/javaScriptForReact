import Header from "../../include/Header"; // Header 경로 확인 필요
import { useSearchParams } from "react-router-dom";
import "./ListPage.css";
const ListPage = () => {
  const [queryParams] = useSearchParams();
  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;
  return (
    <div className="main-container">
      <Header />
      <p>
        Todo List Page Components {page}---{size}
      </p>
      <main className="content-area">
        <div className="button-wrapper">
          <button className="custom-btn-outline" type="button">
            List Page
          </button>
        </div>
      </main>
    </div>
  );
};
export default ListPage;

import Header from "../../include/Header"; // Header 경로 확인 필요
import "./ReadPage.css";
import {
  useParams,
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import { useCallback } from "react";
const ReadPage = () => {
  const { tno } = useParams();
  const nav = useNavigate();
  const [queryParams] = useSearchParams();
  const page = parseInt(queryParams.get("page") || "1", 10);
  const size = parseInt(queryParams.get("size") || "10", 10);
  //?page=1&size=10
  const queryStr = createSearchParams({ page, size }).toString();

  // 수정 페이지로 이동하는 함수
  const moveModify = useCallback(() => {
    nav({
      pathname: `/todo/modify/${tno}`,
      search: queryStr,
    });
  }, [tno, nav, queryStr]);
  return (
    <div className="main-container">
      <Header />
      <p>To do ReadPage = {tno}</p>
      <main className="content-area">
        <div className="button-wrapper">
          <button className="custom-btn-outline" type="button">
            READ Page
          </button>
          <button className="custom-btn-outline" onClick={() => moveModify()}>
            Modify로 이동
          </button>
        </div>
      </main>
    </div>
  );
};
export default ReadPage;

import Header from "../../include/Header"; // Header 경로 확인 필요
import ListComponent from "../../components/todo/ListComponent";
import "./ListPage.css";
const ListPage = () => {
  return (
    <div className="main-container">
      <Header />
      <main className="list-content-area">
        <div className="list-wrapper">
          {/* 실제 데이터 목록이 표시되는 컴포넌트 */}
          <ListComponent />
        </div>
      </main>
    </div>
  );
};
export default ListPage;

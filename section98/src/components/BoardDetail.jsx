import "./../css/Board.css";
import Button from "./Button";
import Header from "./Header";

const BoardDetail = () => {
  return (
    <>
      <Header />
      <div className="board-detail-wrapper">
        <div className="board-detail-box">
          <h2 className="board-detail-title">
            게시글 제목이 들어가는 영역입니다
          </h2>

          <div className="board-detail-meta">
            <span>작성자: user01</span>
            <span>작성일: 2026-02-15</span>
          </div>

          <div className="board-detail-content">
            <p>
              여기는 게시글 상세 내용 영역입니다.
              <br />
              여러 줄 텍스트가 들어가도 자연스럽게 보이도록 UI만 구성해 둡니다.
            </p>
          </div>

          <div className="board-detail-btn">
            <Button text="목록으로" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardDetail;

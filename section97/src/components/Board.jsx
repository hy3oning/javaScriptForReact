import Header from "./Header";
import Button from "./Button";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BoardDispatchContext, BoardStateContext } from "../App";
import "./../css/Board.css";

const BoardDetail = () => {
  const { id } = useParams();
  const targetId = Number(id);
  const nav = useNavigate();

  const boardList = useContext(BoardStateContext);
  const { onDelete } = useContext(BoardDispatchContext);

  const target = boardList.find((b) => b.id === targetId);

  const onClickDelete = () => {
    const ok = window.confirm("정말 삭제할까요?");
    if (!ok) return;
    onDelete(targetId);
    nav("/home", { replace: true });
  };

  if (!target) {
    return (
      <div style={{ padding: 20 }}>
        <p>존재하지 않는 게시글입니다.</p>
        <Button text="홈으로" onClick={() => nav("/home", { replace: true })} />
      </div>
    );
  }

  return (
    <div className="detail-wrapper">
      <Header
        title={"상세보기"}
        leftChild={<Button text={"뒤로"} onClick={() => nav(-1)} />}
        rightChild={
          <div className="header-actions">
            <Button text={"삭제"} onClick={onClickDelete} />
            <Button text={"수정"} onClick={() => nav(`/edit/${targetId}`)} />
          </div>
        }
      />

      <main className="detail-container">
        <section className="detail-card">
          <h2 className="detail-title">{target.title}</h2>
          <div className="detail-meta">
            <span>작성자: {target.author}</span>
            <span>·</span>
            <span>
              {new Date(
                target.updatedAt ?? target.createdAt,
              ).toLocaleDateString()}
            </span>
          </div>

          <div className="detail-content">{target.content}</div>
        </section>
      </main>
    </div>
  );
};

export default BoardDetail;

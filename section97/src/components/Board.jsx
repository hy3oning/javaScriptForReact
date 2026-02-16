import Header from "./Header";
import Button from "./Button";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  BoardDispatchContext,
  BoardStateContext,
} from "../context/BoardContext";
import "./../css/Board.css";

const Board = () => {
  const { id } = useParams();
  const targetId = Number(id);
  const nav = useNavigate();

  const boardList = useContext(BoardStateContext);
  const { onDelete, onCreateComment, onDeleteComment } =
    useContext(BoardDispatchContext);

  const [commentInput, setCommentInput] = useState({
    author: "",
    content: "",
  });

  const target = boardList.find((b) => b.id === targetId);

  const onClickDelete = () => {
    const ok = window.confirm("정말 삭제할까요?");
    if (!ok) return;
    onDelete(targetId);
    nav("/home", { replace: true });
  };

  const onChangeComment = (e) => {
    const { name, value } = e.target;
    setCommentInput((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitComment = () => {
    if (!commentInput.author.trim() || !commentInput.content.trim()) {
      alert("댓글 작성자/내용을 입력하세요.");
      return;
    }

    onCreateComment(targetId, commentInput.author, commentInput.content);
    setCommentInput({ author: "", content: "" });
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
        {/* 게시글 상세 */}
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

        {/* 댓글 섹션 */}
        <section className="comment-card">
          <h3 className="comment-title">댓글</h3>

          <div className="comment-list">
            {(target.comments ?? []).map((c) => (
              <div className="comment-item" key={c.id}>
                <div className="comment-meta">
                  <span className="comment-author">{c.author}</span>
                  <span className="comment-dot">·</span>
                  <span className="comment-date">
                    {new Date(c.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="comment-content">{c.content}</div>

                <div className="comment-actions">
                  <button
                    className="comment-delete"
                    onClick={() => onDeleteComment(targetId, c.id)}
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="comment-form">
            <input
              className="comment-input"
              name="author"
              placeholder="작성자"
              value={commentInput.author}
              onChange={onChangeComment}
            />
            <textarea
              className="comment-textarea"
              name="content"
              placeholder="댓글을 입력하세요"
              value={commentInput.content}
              onChange={onChangeComment}
            />
            <Button text="댓글 등록" onClick={onSubmitComment} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Board;

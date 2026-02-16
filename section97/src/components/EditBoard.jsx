import "./../css/NewBoard.css";
import Header from "./Header";
import Button from "./Button";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  BoardDispatchContext,
  BoardStateContext,
} from "../context/BoardContext";

const EditBoard = () => {
  const { id } = useParams();
  const targetId = Number(id);
  const nav = useNavigate();

  const boardList = useContext(BoardStateContext);
  const { onUpdate } = useContext(BoardDispatchContext);

  const target = boardList.find((b) => b.id === targetId);

  const [input, setInput] = useState({
    author: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    if (!target) return;
    setInput({
      author: target.author ?? "",
      title: target.title ?? "",
      content: target.content ?? "",
    });
  }, [target]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = () => {
    if (!input.author.trim() || !input.title.trim() || !input.content.trim()) {
      alert("작성자/제목/내용을 모두 입력하세요.");
      return;
    }

    onUpdate(targetId, input.author, input.title, input.content);
    nav(`/board/${targetId}`, { replace: true });
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
    <div className="newboard-wrapper">
      <Header
        title={"수정하기"}
        leftChild={<Button text={"뒤로"} onClick={() => nav(-1)} />}
        rightChild={<Button text={"수정완료"} onClick={onSubmit} />}
      />

      <main className="newboard-container">
        <section className="newboard-card">
          <h2 className="newboard-title">게시글 수정</h2>
          <p className="newboard-subtitle">내용을 수정하고 저장하세요.</p>

          <div className="newboard-form">
            <label className="newboard-label">작성자</label>
            <input
              className="newboard-input"
              name="author"
              value={input.author}
              onChange={onChange}
            />

            <label className="newboard-label">제목</label>
            <input
              className="newboard-input"
              name="title"
              value={input.title}
              onChange={onChange}
            />

            <label className="newboard-label">내용</label>
            <textarea
              className="newboard-textarea"
              name="content"
              value={input.content}
              onChange={onChange}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default EditBoard;

import "./../css/NewBoard.css";
import Header from "../components/Header";
import Button from "../components/Button";
import { useContext, useState } from "react";
import { BoardDispatchContext } from "../context/BoardContext.jsx";
import { useNavigate } from "react-router-dom";

const NewBoard = () => {
  const { onCreate } = useContext(BoardDispatchContext);
  const nav = useNavigate();

  const [input, setInput] = useState({
    author: "",
    title: "",
    content: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = () => {
    if (!input.author.trim() || !input.title.trim() || !input.content.trim()) {
      alert("작성자/제목/내용을 모두 입력하세요.");
      return;
    }

    onCreate(input.author, input.title, input.content);
    nav("/home", { replace: true });
  };

  return (
    <div className="newboard-wrapper">
      <Header
        title={"글쓰기"}
        leftChild={<Button text={"뒤로"} onClick={() => nav(-1)} />}
        rightChild={<Button text={"작성완료"} onClick={onSubmit} />}
      />

      <main className="newboard-container">
        <section className="newboard-card">
          <h2 className="newboard-title">새 게시글 작성</h2>
          <p className="newboard-subtitle">작성자, 제목, 내용을 입력하세요.</p>

          <div className="newboard-form">
            <label className="newboard-label">작성자</label>
            <input
              className="newboard-input"
              name="author"
              type="text"
              placeholder="작성자 이름"
              value={input.author}
              onChange={onChange}
            />

            <label className="newboard-label">제목</label>
            <input
              className="newboard-input"
              name="title"
              type="text"
              placeholder="제목을 입력하세요"
              value={input.title}
              onChange={onChange}
            />

            <label className="newboard-label">내용</label>
            <textarea
              className="newboard-textarea"
              name="content"
              placeholder="내용을 입력하세요"
              value={input.content}
              onChange={onChange}
            />

            <div className="newboard-footer">
              <span className="newboard-hint">
                ※ 작성완료 버튼을 누르면 등록됩니다.
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewBoard;

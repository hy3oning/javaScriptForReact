import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./../css/PostEdit.css";

const PostEdit = ({ posts, onUpdate }) => {
  const nav = useNavigate();
  const { id } = useParams();
  const postId = Number(id);

  const target = posts.find((p) => p.id === postId);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (!target) {
      nav("/", { replace: true });
      return;
    }
    setTitle(target.title);
    setContent(target.content);
    setAuthor(target.author);
  }, [target, nav]);

  const onSubmit = () => {
    const ok = onUpdate(postId, { title, content, author });
    if (!ok) return;
    nav(`/posts/${postId}`, { replace: true });
  };

  if (!target) return null;

  return (
    <div className="page">
      <div className="container">
        <header className="edit-topbar">
          <button className="btn btn-ghost" onClick={() => nav(-1)}>
            ← 취소
          </button>
          <h2 className="edit-title">게시글 수정</h2>
          <button className="btn btn-primary" onClick={onSubmit}>
            저장
          </button>
        </header>

        <section className="card">
          <div className="form">
            <div className="form-row">
              <div className="field">
                <label className="label">작성자</label>
                <input
                  className="input"
                  placeholder="작성자(선택)"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>

              <div className="field">
                <label className="label">제목</label>
                <input
                  className="input"
                  placeholder="제목"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">내용</label>
              <textarea
                className="textarea"
                placeholder="내용"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostEdit;

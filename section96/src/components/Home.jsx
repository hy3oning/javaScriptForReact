import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../css/Home.css";

const Home = ({ posts, onCreate }) => {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [sort, setSort] = useState("latest");

  const onSubmit = () => {
    const ok = onCreate({ title, content, author });
    if (!ok) return;
    setTitle("");
    setContent("");
    setAuthor("");
  };

  const sortedPosts = useMemo(() => {
    const copy = [...posts];
    if (sort === "latest") copy.sort((a, b) => b.createdAt - a.createdAt);
    if (sort === "oldest") copy.sort((a, b) => a.createdAt - b.createdAt);
    if (sort === "title") copy.sort((a, b) => a.title.localeCompare(b.title));
    return copy;
  }, [posts, sort]);

  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <div className="page-title-wrap">
            <h2 className="page-title">Q&A 게시판</h2>
            <p className="page-subtitle">
              질문을 올리고 답변으로 지식을 공유해요.
            </p>
          </div>

          <div className="toolbar">
            <div className="select-wrap">
              <label className="select-label">정렬</label>
              <select
                className="select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="latest">최신순</option>
                <option value="oldest">오래된순</option>
                <option value="title">제목순</option>
              </select>
            </div>
          </div>
        </header>

        <section className="card">
          <div className="card-header">
            <h3 className="card-title">새 게시글</h3>
            <span className="card-hint">제목/내용은 필수</span>
          </div>

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

            <div className="actions">
              <button className="btn btn-primary" onClick={onSubmit}>
                등록
              </button>
            </div>
          </div>
        </section>

        <section className="list-section">
          <div className="section-head">
            <h3 className="section-title">게시글</h3>
            <span className="section-count">{sortedPosts.length}건</span>
          </div>

          <div className="list">
            {sortedPosts.length === 0 ? (
              <div className="empty">
                아직 게시글이 없습니다. 첫 글을 작성해보세요!
              </div>
            ) : (
              sortedPosts.map((post) => (
                <article
                  key={post.id}
                  className="post-item"
                  onClick={() => nav(`/posts/${post.id}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") nav(`/posts/${post.id}`);
                  }}
                >
                  <div className="post-main">
                    <div className="post-title">{post.title}</div>
                    <div className="post-meta">
                      <span className="badge">Q</span>
                      <span className="post-author">{post.author}</span>
                    </div>
                    <div className="post-preview">{post.content}</div>
                  </div>
                  <div className="post-arrow">›</div>
                </article>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

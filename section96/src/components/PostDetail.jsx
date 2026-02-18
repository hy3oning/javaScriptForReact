import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./../css/PostDetail.css";

const PostDetail = ({
  posts,
  onDelete,
  answers,
  onCreateAnswer,
  onDeleteAnswer,
  onUpdateAnswer,
}) => {
  const nav = useNavigate();
  const { id } = useParams();
  const postId = Number(id);

  const [answerContent, setAnswerContent] = useState("");
  const [answerAuthor, setAnswerAuthor] = useState("");

  const [editingAnswerId, setEditingAnswerId] = useState(null);
  const [editingContent, setEditingContent] = useState("");
  const [editingAuthor, setEditingAuthor] = useState("");
  const [answerSort, setAnswerSort] = useState("latest");

  const post = useMemo(
    () => posts.find((p) => p.id === postId),
    [posts, postId],
  );

  if (!post) {
    return (
      <div className="page">
        <div className="container">
          <div className="card">
            <div className="empty-title">존재하지 않는 게시글입니다.</div>
            <button className="btn btn-primary" onClick={() => nav("/")}>
              목록으로
            </button>
          </div>
        </div>
      </div>
    );
  }

  const onClickDelete = () => {
    onDelete(post.id);
    nav("/", { replace: true });
  };

  const postAnswers = useMemo(() => {
    const filtered = answers.filter((a) => a.postId === postId);
    const copy = [...filtered];
    if (answerSort === "latest") copy.sort((a, b) => b.createdAt - a.createdAt);
    if (answerSort === "oldest") copy.sort((a, b) => a.createdAt - b.createdAt);
    return copy;
  }, [answers, postId, answerSort]);

  const onSubmitAnswer = () => {
    const ok = onCreateAnswer({
      postId,
      content: answerContent,
      author: answerAuthor,
    });
    if (!ok) return;
    setAnswerContent("");
    setAnswerAuthor("");
  };

  const onStartEditAnswer = (answer) => {
    setEditingAnswerId(answer.id);
    setEditingContent(answer.content);
    setEditingAuthor(answer.author);
  };

  const onCancelEditAnswer = () => {
    setEditingAnswerId(null);
    setEditingContent("");
    setEditingAuthor("");
  };

  const onSaveEditAnswer = () => {
    const ok = onUpdateAnswer(editingAnswerId, {
      content: editingContent,
      author: editingAuthor,
    });
    if (!ok) return;
    onCancelEditAnswer();
  };

  return (
    <div className="page">
      <div className="container">
        <header className="detail-topbar">
          <button className="btn btn-ghost" onClick={() => nav(-1)}>
            ← 뒤로
          </button>

          <div className="detail-actions">
            <button
              className="btn btn-secondary"
              onClick={() => nav(`/posts/${post.id}/edit`)}
            >
              수정
            </button>
            <button className="btn btn-danger" onClick={onClickDelete}>
              삭제
            </button>
          </div>
        </header>

        <section className="card post-card">
          <div className="post-header">
            <div className="post-tag">Q</div>
            <div className="post-headings">
              <h2 className="post-title">{post.title}</h2>
              <div className="post-sub">
                <span className="muted">작성자</span>
                <span className="dot">·</span>
                <span className="post-author">{post.author}</span>
              </div>
            </div>
          </div>

          <div className="post-body">{post.content}</div>
        </section>

        <section className="answers">
          <div className="answers-head">
            <h3 className="section-title">답변</h3>

            <div className="answers-toolbar">
              <div className="select-wrap">
                <label className="select-label">정렬</label>
                <select
                  className="select"
                  value={answerSort}
                  onChange={(e) => setAnswerSort(e.target.value)}
                  disabled={editingAnswerId !== null}
                >
                  <option value="latest">최신순</option>
                  <option value="oldest">오래된순</option>
                </select>
              </div>

              <span className="section-count">{postAnswers.length}건</span>
            </div>
          </div>

          <div className="card answer-editor">
            <div className="form">
              <div className="form-row">
                <div className="field">
                  <label className="label">작성자</label>
                  <input
                    className="input"
                    placeholder="답변 작성자(선택)"
                    value={answerAuthor}
                    onChange={(e) => setAnswerAuthor(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">답변</label>
                <textarea
                  className="textarea"
                  placeholder="답변 내용"
                  value={answerContent}
                  onChange={(e) => setAnswerContent(e.target.value)}
                />
              </div>

              <div className="actions">
                <button className="btn btn-primary" onClick={onSubmitAnswer}>
                  답변 등록
                </button>
              </div>
            </div>
          </div>

          <div className="answer-list">
            {postAnswers.length === 0 ? (
              <div className="empty">아직 답변이 없습니다.</div>
            ) : (
              postAnswers.map((a) => {
                const isEditing = editingAnswerId === a.id;

                return (
                  <div key={a.id} className="card answer-item">
                    {isEditing ? (
                      <>
                        <div className="answer-item-head">
                          <div className="answer-tag">A</div>
                          <div className="answer-edit-fields">
                            <input
                              className="input"
                              placeholder="작성자(선택)"
                              value={editingAuthor}
                              onChange={(e) => setEditingAuthor(e.target.value)}
                            />
                          </div>
                        </div>

                        <textarea
                          className="textarea"
                          value={editingContent}
                          onChange={(e) => setEditingContent(e.target.value)}
                        />

                        <div className="answer-actions">
                          <button
                            className="btn btn-primary"
                            onClick={onSaveEditAnswer}
                          >
                            저장
                          </button>
                          <button
                            className="btn btn-ghost"
                            onClick={onCancelEditAnswer}
                          >
                            취소
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="answer-item-head">
                          <div className="answer-tag">A</div>
                          <div className="answer-meta">
                            <div className="answer-author">{a.author}</div>
                          </div>
                        </div>

                        <div className="answer-content">{a.content}</div>

                        <div className="answer-actions">
                          <button
                            className="btn btn-secondary"
                            onClick={() => onStartEditAnswer(a)}
                          >
                            수정
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => onDeleteAnswer(a.id)}
                          >
                            삭제
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostDetail;

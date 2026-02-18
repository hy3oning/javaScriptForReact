import "./App.css";
import { useState, useRef } from "react";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail.jsx";
import PostEdit from "./components/PostEdit.jsx";
import { initialPosts, initialAnswers } from "./mock/mockData.js";
import { Route, Routes } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [answers, setAnswers] = useState(initialAnswers);
  const idRef = useRef(Math.max(0, ...initialPosts.map((p) => p.id)) + 1);
  const answerIdRef = useRef(
    Math.max(0, ...initialAnswers.map((a) => a.id)) + 1,
  );
  const createPost = ({ title, content, author }) => {
    const t = title.trim();
    const c = content.trim();
    const a = author.trim();

    if (t === "" || c === "") return false;
    const newPost = {
      id: idRef.current++,
      title: t,
      content: c,
      author: a === "" ? "anonymous" : a,
      createdAt: Date.now(),
    };
    setPosts((prev) => [newPost, ...prev]);
    return true;
  };
  const deletePost = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
    setAnswers((prev) => prev.filter((a) => a.postId !== id));
  };
  const updatePost = (id, { title = "", content = "", author = "" } = {}) => {
    const t = title.trim();
    const c = content.trim();
    const a = author.trim();

    if (t === "" || c === "") return false;

    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, title: t, content: c, author: a === "" ? "anonymous" : a }
          : p,
      ),
    );
    return true;
  };
  const createAnswer = ({ postId, content, author }) => {
    const c = content.trim();
    const a = author.trim();
    if (c === "") return false;
    const newAnswer = {
      id: answerIdRef.current++,
      postId,
      content: c,
      author: a === "" ? "anonymous" : a,
      createdAt: Date.now(),
    };
    setAnswers((prev) => [newAnswer, ...prev]);
    return true;
  };
  const deleteAnswer = (answerId) => {
    setAnswers((prev) => prev.filter((a) => a.id !== answerId));
  };

  const updateAnswer = (answerId, { content = "", author = "" } = {}) => {
    const c = content.trim();
    const a = author.trim();
    if (c === "") return false;
    setAnswers((prev) =>
      prev.map((ans) =>
        ans.id === answerId
          ? { ...ans, content: c, author: a === "" ? "anonymous" : a }
          : ans,
      ),
    );
    return true;
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home posts={posts} onCreate={createPost} />}
        />
        <Route
          path="/posts/:id"
          element={
            <PostDetail
              posts={posts}
              onDelete={deletePost}
              answers={answers}
              onCreateAnswer={createAnswer}
              onDeleteAnswer={deleteAnswer}
              onUpdateAnswer={updateAnswer}
            />
          }
        />
        <Route
          path="/posts/:id/edit"
          element={<PostEdit posts={posts} onUpdate={updatePost} />}
        />
      </Routes>
    </>
  );
}

export default App;

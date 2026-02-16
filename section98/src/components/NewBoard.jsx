// NewBoard.jsx
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Header from "./Header";
import "./../css/NewBoard.css";
import { BoardStateContext, BoardDispatchContext } from "../App";

const NewBoard = () => {
  const state = useContext(BoardStateContext);
  const { dispatch, idRef, onCreate } = useContext(BoardDispatchContext);
  const nav = useNavigate();

  const onChange = (e) => {
    dispatch({
      type: "SET_INPUT",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <>
      <Header
        leftButton={<Button text={"작성하기"} onClick={onCreate} />}
        rightButton={<Button text={"뒤로가기"} onClick={() => nav(-1)} />}
      />
      <div className="newboard-wrapper">
        <div className="newboard-main">
          <input
            type="text"
            name="author"
            placeholder="작성자"
            className="newboard-author"
            value={state.author}
            onChange={onChange}
          />
          <input
            type="text"
            name="title"
            placeholder="제목을 입력하세요"
            className="newboard-title"
            value={state.title}
            onChange={onChange}
          />
          <textarea
            name="content"
            placeholder="내용을 입력하세요"
            className="newboard-content"
            value={state.content}
            onChange={onChange}
          />
          <div className="newboard-btn-wrapper">
            <Button text="작성 완료" onClick={onCreate} />
          </div>
        </div>
      </div>

      <div className="posts-wrapper">
        {state.posts.map((post) => (
          <div key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <span>
              {post.author} | {post.createDate}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewBoard;

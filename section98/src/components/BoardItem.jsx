import { useNavigate } from "react-router-dom";

const BoardItem = ({ board }) => {
  const nav = useNavigate();

  return (
    <>
      <li
        className="home-board-item"
        onClick={() => nav(`/boardDetail/${board.id}`)}
      >
        <h3 className="home-board-title">{board.title}</h3>
        <p className="home-board-content">{board.content}</p>
        <span className="home-board-meta">
          작성자: {board.author} · {board.time}
        </span>
      </li>
    </>
  );
};

export default BoardItem;

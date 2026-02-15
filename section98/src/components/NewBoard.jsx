// NewBoard.jsx
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Header from "./Header";
import "./../css/NewBoard.css";

const NewBoard = () => {
  const nav = useNavigate();

  return (
    <>
      <Header
        leftButton={<Button text={"작성하기"} />}
        rightButton={<Button text={"뒤로가기"} onClick={() => nav(-1)} />}
      />
      <div className="newboard-wrapper">
        <div className="newboard-main">
          <input type="text" placeholder="작성자" className="newboard-author" />
          <input
            type="text"
            placeholder="제목을 입력하세요"
            className="newboard-title"
          />
          <textarea
            placeholder="내용을 입력하세요"
            className="newboard-content"
          />
          <div className="newboard-btn-wrapper">
            <Button text="작성 완료" onClick={() => alert("작성 완료!")} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewBoard;

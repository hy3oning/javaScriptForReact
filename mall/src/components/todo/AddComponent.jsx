import { useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import InfoModal from "../common/InfoModal";
import { postAdd } from "../../api/todoApi";
import "./AddComponent.css";

const initState = {
  title: "",
  writer: "",
  complete: false,
  dueDate: "",
};

export default function AddComponent() {
  const [todo, setTodo] = useState({ ...initState });
  // api 서버에 저장된 번호
  const [result, setResult] = useState(null);
  const { moveToList } = useCustomMove();
  // 모달창 isShow
  const [infoModalOn, setInfoModalOn] = useState(false);

  const handleChangeTodo = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickAdd = () => {
    postAdd(todo)
      .then((data) => {
        setResult(data.TNO);
        setInfoModalOn(true);
        setTodo({ ...initState });
      })
      .catch((e) => console.error(e));
  };

  const closeModal = () => {
    setInfoModalOn(false);
    moveToList();
  };

  return (
    <div className="add-container">
      <InfoModal
        show={infoModalOn}
        title="todo 추가"
        content={`todo ${result} 완료`}
        callbackFn={closeModal}
      />

      <div className="add-form-wrapper">
        <div className="add-form-group">
          <label className="add-form-label">TITLE</label>
          <input
            className="add-form-control"
            name="title"
            type="text"
            value={todo.title}
            onChange={handleChangeTodo}
            placeholder="Enter Title"
          />
        </div>

        <div className="add-form-group">
          <label className="add-form-label">WRITER</label>
          <input
            className="add-form-control"
            name="writer"
            type="text"
            value={todo.writer}
            onChange={handleChangeTodo}
            placeholder="Enter Writer"
          />
        </div>

        <div className="add-form-group">
          <label className="add-form-label">DUEDATE</label>
          <input
            className="add-form-control"
            name="dueDate"
            type="date"
            value={todo.dueDate}
            onChange={handleChangeTodo}
          />
        </div>
      </div>

      <div className="add-button-group">
        <button
          className="add-btn add-btn-save"
          type="button"
          onClick={handleClickAdd}
        >
          저장
        </button>
        <button
          className="add-btn add-btn-list"
          type="button"
          onClick={() => moveToList({ page: 1, size: 10 })}
        >
          목록
        </button>
      </div>
    </div>
  );
}

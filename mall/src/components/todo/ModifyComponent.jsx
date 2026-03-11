import { useEffect, useState } from "react";
import { getOne, putOne, deleteOne } from "../../api/todoApi";
import "./ModifyComponent.css";
import InfoModal from "../common/InfoModal";

const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: "",
  complete: false,
};

const ModifyComponent = ({ tno, moveToList, moveToRead }) => {
  const [todo, setTodo] = useState({ ...initState });
  const [infoModalOn, setInfoModalOn] = useState(false);
  const [result, setResult] = useState(null);
  const [actionType, setActionType] = useState("");

  useEffect(() => {
    getOne(tno).then((data) => setTodo(data));
  }, [tno]);

  const handleChangeTodo = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeTodoComplete = (e) => {
    const value = e.target.value;
    setTodo({
      ...todo,
      complete: value === "Y",
    });
  };

  const handleClickModify = () => {
    putOne(todo).then((data) => {
      setResult(data.RESULT);
      setActionType("MODIFY");
      setInfoModalOn(true);
    });
  };

  const handleClickDelete = () => {
    deleteOne(tno).then((data) => {
      setResult(data.RESULT);
      setActionType("DELETE");
      setInfoModalOn(true);
    });
  };

  const closeModal = () => {
    setInfoModalOn(false);

    if (actionType === "MODIFY") {
      moveToRead(tno);
      return;
    }

    moveToList();
  };

  return (
    <div className="modify-container">
      <InfoModal
        show={infoModalOn}
        title="처리 결과"
        content={`${result} 완료`}
        callbackFn={closeModal}
      />

      <div className="form-group">
        <label className="form-label">TNO</label>
        <input className="form-control" value={tno} type="text" disabled />
      </div>

      <div className="form-group">
        <label className="form-label">WRITER</label>
        <input className="form-control" value={todo.writer} type="text" disabled />
      </div>

      <div className="form-group">
        <label className="form-label">TITLE</label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={todo.title}
          onChange={handleChangeTodo}
        />
      </div>

      <div className="form-group">
        <label className="form-label">DATE</label>
        <input
          className="form-control"
          name="dueDate"
          value={todo.dueDate}
          type="date"
          onChange={handleChangeTodo}
        />
      </div>

      <div className="form-group">
        <label className="form-label">COMPLETE</label>
        <select
          className="form-select"
          name="status"
          value={todo.complete ? "Y" : "N"}
          onChange={handleChangeTodoComplete}
        >
          <option value="Y">Completed</option>
          <option value="N">Not Yet</option>
        </select>
      </div>

      <div className="button-group">
        <button className="btn btn-modify" type="button" onClick={handleClickModify}>
          수정하기
        </button>
        <button className="btn btn-delete" type="button" onClick={handleClickDelete}>
          삭제하기
        </button>
        <button className="btn btn-list" type="button" onClick={() => moveToList()}>
          목록가기
        </button>
      </div>
    </div>
  );
};

export default ModifyComponent;

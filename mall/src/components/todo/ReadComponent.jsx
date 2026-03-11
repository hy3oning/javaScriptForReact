import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import "./ReadComponent.css";
const initState = {
  tno: 0,
  title: "",
  writer: "",
  complete: false,
  dueDate: null,
};

const ReadComponent = ({ tno, moveToList, moveToModify }) => {
  const [todo, setTodo] = useState(initState);
  useEffect(() => {
    getOne(tno).then((data) => {
      console.log(data);
      setTodo(data);
    });
  }, [tno]);
  return (
    <div>
      <div className="read-container">
        <MakeDiv title="Tno" value={todo.tno} />
        <MakeDiv title="Writer" value={todo.writer} />
        <MakeDiv title="Title" value={todo.title} />
        <MakeDiv title="Due Date" value={todo.dueDate} />
        <MakeDiv
          title="Complete"
          value={todo.complete ? "Completed" : "Not Yet"}
        />
      </div>
      <div className="button-group">
        <button
          className="custom-btn btn-modify"
          type="button"
          onClick={() => moveToModify(tno)}
        >
          수정하기
        </button>
        <button
          className="custom-btn btn-list"
          type="button"
          onClick={() => moveToList()}
        >
          목록가기
        </button>
      </div>
    </div>
  );
};
const MakeDiv = ({ title, value }) => (
  <div className="read-row">
    <div className="read-wrapper">
      <div className="read-label">{title}</div>
      <div className="read-value">{value}</div>
    </div>
  </div>
);

export default ReadComponent;

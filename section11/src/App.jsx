import "./css/App.css";

import { useState, useRef, useReducer } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import Exam from "./components/Exam";
// 전역변수
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "SpringBoot 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "JAVA 공부하기",
    date: new Date().getTime(),
  },
];
function reducer(todos, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...todos];
    case "UPDATE":
      return todos.map((item) => {
        return item.id === action.targetId
          ? { ...item, isDone: !item.isDone }
          : item;
      });
    case "DELETE":
      return todos.filter((item) => item.id !== action.targetId);
    default:
      return todos;
  }
}
function App() {
  const [count, setCount] = useState(10);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);
  // 이벤트함수 setTodos생성 핸들러함수
  const onCreate = (content) => {
    if (!content || content.trim() === "") {
      return;
    }
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };
  // 이벤트함수 setTodos수정
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };
  // 이벤트함수 setTodos 삭제
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };
  return (
    <>
      <div className="App">
        <h1>오늘의 TODO!LIST</h1>
        <Header count={count} />
        <Exam />
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </>
  );
}

export default App;

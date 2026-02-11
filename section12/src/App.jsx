import "./css/App.css";

import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo,
} from "react";
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
//공용으로 사용할 수 있는 데이터 보관소
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
function App() {
  const [count, setCount] = useState(10);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);
  // 이벤트함수 setTodos생성 핸들러함수
  const onCreate = useCallback((content) => {
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
  }, []);
  // 이벤트함수 setTodos수정
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);
  // 이벤트함수 setTodos 삭제
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);
  // 이벤트핸들러기능을 딱 한번만 실행한다.
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, [onCreate, onUpdate, onDelete]);
  return (
    <>
      <div className="App">
        <h1>오늘의 TODO!LIST</h1>
        <Header count={count} />
        <Exam />
        <TodoStateContext.Provider value={{ todos }}>
          <TodoDispatchContext.Provider value={memoizedDispatch}>
            <Editor />
            <List />
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      </div>
    </>
  );
}

export default App;

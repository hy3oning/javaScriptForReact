import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import NewBoard from "./components/NewBoard";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { mockBoardData } from "./mock/mockBoardData";
import { createContext, useReducer, useRef } from "react";
import EditBoard from "./components/EditBoard";
import Board from "./components/Board";

export const BoardStateContext = createContext();
export const BoardDispatchContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, ...action.data } : item,
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);

    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, mockBoardData);
  const idRef = useRef(4);
  const onCreate = (author, title, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        author,
        title,
        content,
        createdAt: Date.now(),
      },
    });
  };
  const onUpdate = (targetId, author, title, content) => {
    dispatch({
      type: "UPDATE",
      targetId,
      data: {
        author,
        title,
        content,
        updateAt: Date.now(),
      },
    });
  };
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };
  return (
    <>
      <BoardStateContext.Provider value={state}>
        <BoardDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/new" element={<NewBoard />} />
            <Route path="/edit/:id" element={<EditBoard />} />
            <Route path="/board/:id" element={<Board />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BoardDispatchContext.Provider>
      </BoardStateContext.Provider>
    </>
  );
}

export default App;

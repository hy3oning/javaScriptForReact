import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NewBoard from "./components/NewBoard";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import BoardDetail from "./components/BoardDetail";
import { createContext, useReducer, useRef } from "react";
import Reducer from "./context/Reducer";

export const BoardStateContext = createContext();
export const BoardDispatchContext = createContext();

function App() {
  const idRef = useRef(1);
  const initialState = { author: "", title: "", content: "", posts: [] };
  const [state, dispatch] = useReducer(Reducer, initialState);

  // onCreate 정의
  const onCreate = () => {
    if (!state.author || !state.title || !state.content) {
      alert("모든 항목을 입력해주세요!");
      return;
    }
    dispatch({ type: "CREATE", id: idRef.current++ });
  };

  return (
    <BoardStateContext.Provider value={state}>
      <BoardDispatchContext.Provider value={{ dispatch, onCreate, idRef }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/newBoard" element={<NewBoard />} />
          <Route path="/boardDetail/:id" element={<BoardDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BoardDispatchContext.Provider>
    </BoardStateContext.Provider>
  );
}

export default App;

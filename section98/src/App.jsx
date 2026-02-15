import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NewBoard from "./components/NewBoard";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import BoardDetail from "./components/BoardDetail";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/newBoard" element={<NewBoard />}></Route>
          <Route path="/boardDetail/:id" element={<BoardDetail />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import NewBoard from "./components/NewBoard";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import EditBoard from "./components/EditBoard";
import Board from "./components/Board";
import { BoardProvider } from "./context/BoardContext";

function App() {
  return (
    <BoardProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new" element={<NewBoard />} />
        <Route path="/edit/:id" element={<EditBoard />} />
        <Route path="/board/:id" element={<Board />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BoardProvider>
  );
}

export default App;

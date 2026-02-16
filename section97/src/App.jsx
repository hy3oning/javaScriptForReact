import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import NewBoard from "./components/NewBoard";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newBoard" element={<NewBoard />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

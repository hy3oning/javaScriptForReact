import { Route, Routes, Link, useNavigate } from "react-router-dom";
import "./css/App.css";
import Home from "./components/Home";
import New from "./components/New";
import Diary from "./components/Diary";
import Edit from "./components/Edit";
import NotFound from "./components/NotFound";
function App() {
  const nav = useNavigate();
  const onClickGoPage = (e) => {
    nav(`/${e.target.value}`);
  };
  return (
    <>
      {/* 여기에 적은내용은 모든 페이지가 공통으로 사용한다. */}
      <h5>
        <Link to={"/"}>Home</Link>
      </h5>
      <h5>
        <Link to={"/new"}>new</Link>
      </h5>
      <h5>
        <Link to={"/diary"}>diary</Link>
      </h5>
      <h5>
        <Link to={"/edit"}>edit</Link>
      </h5>
      <button onClick={onClickGoPage} value="">
        Home
      </button>
      <button onClick={onClickGoPage} value="new">
        new
      </button>
      <button onClick={onClickGoPage} value="diary">
        diary
      </button>
      <button onClick={onClickGoPage} value="edit">
        edit
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new/:id" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

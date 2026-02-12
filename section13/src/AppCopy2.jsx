import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import Home from "./components/Home";
import New from "./components/New";
import Diary from "./components/Diary";
import Edit from "./components/Edit";
import NotFound from "./components/NotFound";
import { getEmotionImage } from "./util/GetEmotionImage";
function App() {
  return (
    <>
      {/* 공통부분 */}
      <h2>public img</h2>
      <img src="/emotion11.png" />
      <img src="/emotion12.png" />
      <img src="/emotion13.png" />
      <img src="/emotion14.png" />
      <img src="/emotion15.png" />
      <h2>assets img</h2>
      <img src={getEmotionImage(1)} />
      <img src={getEmotionImage(2)} />
      <img src={getEmotionImage(3)} />
      <img src={getEmotionImage(4)} />
      <img src={getEmotionImage(5)} />

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

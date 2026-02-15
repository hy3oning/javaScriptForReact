import "./../css/Home.css";
import Header from "./Header";
import BoardList from "./BoardList";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="home-wrapper">
        <Header
          leftButton={
            <Button text={"글쓰기"} onClick={() => nav("/newBoard")} />
          }
          rightButton={<Button text={"로그아웃"} onClick={() => nav("/")} />}
        />
        <BoardList />
      </div>
    </>
  );
};

export default Home;

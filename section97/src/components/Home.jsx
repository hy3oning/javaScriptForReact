import "./../css/Home.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { BoardStateContext } from "../App";
import { useContext } from "react";
const Home = () => {
  const nav = useNavigate();
  const boardList = useContext(BoardStateContext);
  return (
    <div className="home-wrapper">
      <Header
        title={"HOME"}
        rightChild={<Button text={"글쓰기"} onClick={() => nav("/new")} />}
        leftChild={
          <Button
            text={"로그아웃"}
            onClick={() => nav("/", { replace: true })}
          />
        }
      />

      <main className="home-container">
        <section className="home-intro">
          <h1>Dev Community</h1>
          <p>개발자들이 자유롭게 소통하는 공간</p>
        </section>

        <section className="board-list">
          {boardList.map((item) => (
            <div
              className="board-card"
              key={item.id}
              onClick={() => nav(`/board/${item.id}`)}
            >
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <span>
                작성자: {item.author} ·{" "}
                {new Date(item.updateAt ?? item.createdAt).toLocaleDateString()}
              </span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;

import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { BoardStateContext } from "../context/BoardContext";
import { useContext, useMemo, useState } from "react"; // ✅ useState, useMemo 추가
import "../css/Home.css";

const Home = () => {
  const nav = useNavigate();
  const boardList = useContext(BoardStateContext);

  // ✅ 1) 검색/정렬 상태
  const [keyword, setKeyword] = useState("");
  const [sort, setSort] = useState("latest"); // latest | oldest

  // ✅ 2) 보여줄 리스트 계산 (map/filter 연습)
  const visibleList = useMemo(() => {
    const k = keyword.trim().toLowerCase();

    // 2-1) 검색 필터
    const filtered = boardList.filter((b) => {
      if (!k) return true;
      const author = (b.author ?? "").toLowerCase();
      const title = (b.title ?? "").toLowerCase();
      const content = (b.content ?? "").toLowerCase();
      return author.includes(k) || title.includes(k) || content.includes(k);
    });

    // 2-2) 정렬 (불변성 위해 복사 후 sort)
    const sorted = [...filtered].sort((a, b) => {
      const ta = a.updatedAt ?? a.createdAt ?? 0;
      const tb = b.updatedAt ?? b.createdAt ?? 0;
      return sort === "latest" ? tb - ta : ta - tb;
    });

    return sorted;
  }, [boardList, keyword, sort]);

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

        {/* ✅ 검색 + 정렬 UI */}
        <section className="board-toolbar">
          <input
            className="board-search"
            placeholder="검색: 작성자/제목/내용"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <select
            className="board-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="latest">최신순</option>
            <option value="oldest">오래된순</option>
          </select>
        </section>

        {/* ✅ 리스트는 visibleList로 렌더 */}
        <section className="board-list">
          {visibleList.map((item) => (
            <div
              className="board-card"
              key={item.id}
              onClick={() => nav(`/board/${item.id}`)}
            >
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <span>
                작성자: {item.author} ·{" "}
                {new Date(
                  item.updatedAt ?? item.createdAt,
                ).toLocaleDateString()}
              </span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;

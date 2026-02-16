import BoardItem from "./BoardItem";

const BoardList = () => {
  const boards = [
    {
      id: 1,
      title: "첫 번째 게시글입니다",
      content: "커뮤니티 홈 화면 UI 연습용 더미 게시글입니다.",
      author: "user01",
      time: "5분 전",
    },
    {
      id: 2,
      title: "React 재밌네요",
      content: "컴포넌트 나누는 게 이제 좀 감이 옵니다.",
      author: "user02",
      time: "20분 전",
    },
    {
      id: 3,
      title: "질문 있습니다!",
      content: "useNavigate랑 Link 차이가 뭔가요?",
      author: "user03",
      time: "1시간 전",
    },
  ];

  return (
    <>
      <main className="home-main">
        <ul className="home-board-list">
          {boards.map((board) => (
            <BoardItem key={board.id} board={board} />
          ))}
        </ul>
      </main>
    </>
  );
};

export default BoardList;

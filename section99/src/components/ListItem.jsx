import "./../css/ListItem.css";
const ListItem = () => {
  return (
    <>
      <div className="ListItem">
        <table>
          <tr>
            <th>학번</th>
            <th>이름</th>
            <th>국어</th>
            <th>영어</th>
            <th>수학</th>
            <th>총점</th>
            <th>평균</th>
            <th>수정</th>
            <th>삭제</th>
            <th>등록일</th>
          </tr>
        </table>
      </div>
    </>
  );
};
export default ListItem;

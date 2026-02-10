import ListItem from "./ListItem";
import "./../css/List.css";
import { useState } from "react";

const List = ({ students, onDelete, onEdit }) => {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="List">
      <h1>학생리스트</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="이름을 입력하세요"
      />
      <table>
        <thead>
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
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <ListItem
              key={student.id}
              student={student}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </table>
      {filteredStudents.length === 0 && <p>검색 결과가 없습니다.</p>}
    </div>
  );
};

export default List;

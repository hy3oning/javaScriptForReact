import "./css/App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef } from "react";

// 초기 더미 데이터
const mockData = [
  {
    id: 1,
    name: "김철수",
    kor: 90,
    eng: 85,
    mat: 88,
    date: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    name: "이영희",
    kor: 78,
    eng: 92,
    mat: 80,
    date: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    name: "박민수",
    kor: 65,
    eng: 70,
    mat: 75,
    date: new Date().toLocaleDateString(),
  },
];

function App() {
  // 학생 목록
  const [students, setStudents] = useState(mockData);

  // 입력 상태
  const [input, setInput] = useState({ name: "", kor: 0, eng: 0, mat: 0 });

  // 수정 모드용 id
  const [editId, setEditId] = useState(null);

  // id 증가용 ref, null 제어
  const idRef = useRef(4);
  const nameRef = useRef(null);
  const korRef = useRef(null);
  const engRef = useRef(null);
  const matRef = useRef(null);

  // 입력 변경
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: name === "name" ? value : Number(value),
    });
  };

  // 제출 (등록/수정)
  const onSubmit = () => {
    if (!input.name.trim()) {
      nameRef.current.focus();
      return;
    }
    if (input.kor < 0) {
      korRef.current.focus();
      return;
    }
    if (input.eng < 0) {
      engRef.current.focus();
      return;
    }
    if (input.mat < 0) {
      matRef.current.focus();
      return;
    }

    if (editId === null) {
      // 등록
      const newStudent = {
        id: idRef.current++,
        ...input,
        date: new Date().toLocaleDateString(),
      };
      setStudents([...students, newStudent]);
    } else {
      // 수정
      setStudents(
        students.map((student) =>
          student.id === editId ? { ...student, ...input } : student,
        ),
      );
      setEditId(null);
    }

    // 입력 초기화
    setInput({ name: "", kor: 0, eng: 0, mat: 0 });
    nameRef.current.focus();
  };

  // 삭제
  const onDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
    alert("정말 삭제하시겠습니까?");
  };

  // 수정 시작
  const onEdit = (student) => {
    setInput({
      name: student.name,
      kor: student.kor,
      eng: student.eng,
      mat: student.mat,
    });
    setEditId(student.id);
    nameRef.current.focus();
  };

  return (
    <div className="App">
      <Header />
      <Editor
        input={input}
        onChangeInput={onChangeInput}
        onSubmit={onSubmit}
        nameRef={nameRef}
        korRef={korRef}
        engRef={engRef}
        matRef={matRef}
        editId={editId}
      />
      <List students={students} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;

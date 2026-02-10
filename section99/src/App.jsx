import "./css/App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { useState, useRef } from "react";
const mockData = [
  {
    id: 0,
    name: "김동진",
    kor: 100,
    eng: 100,
    mat: 100,
    sum: 300,
    avg: 100,
    date: new Date().getTime(),
  },
];
function App() {
  const [input, setInput] = useState(mockData);
  const idRef = useRef(1);
  const onCreate = (stu) => {
    const newStudent = {
      id: idRef.current++,
    };
  };

  return (
    <>
      <div className="App">
        <Header />
        <Editor />
        <List />
      </div>
    </>
  );
}

export default App;

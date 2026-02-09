import "./App.css";
import { useState, useRef, useEffect } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
function App() {
  const [count, setCount] = useState(0);
  const isMount = useRef(false);

  const onClickButton = (e) => {
    setCount(count + Number(e.target.value));
  };
  useEffect(() => {
    if (isMount.current === false) {
      isMount.current = true;
      return;
    }
    console.log(`App Update `);
  });
  return (
    <>
      <div className="app">
        {/* {제목} */}
        <h1>카운터앱</h1>
        {/* {카운터뷰} */}
        <Viewer count={count} />
        <Controller onClickButton={onClickButton} />
        {count % 2 === 0 ? <Even /> : null}
      </div>
    </>
  );
}

export default App;
